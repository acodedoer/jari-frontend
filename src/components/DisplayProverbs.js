
import React from 'react'
import Display from './Display'
import {AppContext} from  '../App'
import DisplayProverbsByLiteralTag from './DisplayProverbsByLiteralTag'
import DisplayProverbsByMetaphoricalTag from './DisplayProverbsByMetaphoricalTag'

const DisplayProverbs = (props) => {
  return (
    <AppContext.Consumer>
      {(state)=>{
        if(state.mode === "all"){
          return(
            <Display proverbs = {props.proverbs} language={state.language}/>
            )
        }
        else if(state.mode === "literal"){
          return(
            <DisplayProverbsByLiteralTag tag={state.literal_tag}/>
          )
        }
        else if(state.mode === "metaphorical"){
          return(
            <DisplayProverbsByMetaphoricalTag tag={state.metaphorical_tag}/>
          )
        }
        else{
          return(
            <p>Error</p>
          )
        }
}}
    </AppContext.Consumer>
  )
}

export default DisplayProverbs