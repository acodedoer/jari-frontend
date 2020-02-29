import React from 'react';
import Navigation from './Navigation';
import { useQuery } from '@apollo/react-hooks';
import DisplayProverbs from './DisplayProverbs';
import QueryAll from '../queries/QueryAll';
import Loading from './Loading';
import Error from './Error'
import About from './About'
import AboutStuff from './AboutStuff'

const Jari = (props) => {
    const AllProverbs = useQuery(QueryAll);
    
    if (AllProverbs.loading ) return (<Loading/>);
    if (AllProverbs.error) return (<Error language={props.language}/>);
    const LTARRAY=[]
    const MTARRAY=[]
    const LTSET = new Set()
    const MTSET = new Set()

    AllProverbs.data.allProverbs.map((proverb) => (
        proverb.literalTags.forEach(tag=>{LTARRAY.push(tag.name)})
    ))
    LTARRAY.sort().forEach(LTSET.add,LTSET);

    AllProverbs.data.allProverbs.map((proverb) => (
        proverb.metaphoricalTags.forEach(tag=>{MTARRAY.push(tag.name)})
    ))
    MTARRAY.sort().forEach(MTSET.add,MTSET);

    const LTARRAYFINAL = [...LTSET]
    const MTARRAYFINAL = [...MTSET]

    return(
        <React.Fragment>
            <Navigation literal_tags={LTARRAYFINAL} metaphorical_tags={MTARRAYFINAL}/>
            {props.about? <div id={'about'}><About/><AboutStuff/></div>: <div id="content"><DisplayProverbs proverbs={AllProverbs.data.allProverbs}/></div>  }
        </React.Fragment>
    )
}

export default Jari