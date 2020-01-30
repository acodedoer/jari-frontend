import React from 'react';
import Navigation from './Navigation';
import { useQuery } from '@apollo/react-hooks';
import DisplayProverbs from './DisplayProverbs';
import QueryAll from '../queries/QueryAll';
import QueryLiteralTags from '../queries/QueryLiteralTags';
import QueryMetaphoricalTags from '../queries/QueryMetaphoricalTags';
import Loading from './Loading';


const Jari = (props) => {
    const AllProverbs = useQuery(QueryAll);
    const AllLiteralTags = useQuery(QueryLiteralTags);
    const AllMetaphoricalTags  = useQuery(QueryMetaphoricalTags);
    
    if (AllProverbs.loading || AllLiteralTags.loading || AllMetaphoricalTags.loading) return (<Loading/>);
    if (AllProverbs.error || AllLiteralTags.error || AllMetaphoricalTags.error) return <p>Error :(</p>;

    return(
        <React.Fragment>
            <Navigation literal_tags={AllLiteralTags.data} metaphorical_tags={AllMetaphoricalTags.data}/>
            <div id="content"><DisplayProverbs proverbs={AllProverbs.data.allProverbs}/></div>
        </React.Fragment>
    )
}

export default Jari