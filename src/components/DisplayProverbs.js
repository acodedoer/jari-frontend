import React, {useState} from 'react';
import DisplayProverbsByMetaphoricalTag from './DisplayProverbsByMetaphoricalTag'
import DisplayProverbsByLiteralTag from './DisplayProverbsByLiteralTag'
import DisplayAllProverbs from './DisplayAllProverbs'

const DisplayProverbs = () => {
    const[mode, setMode] = useState('all');
    const[literal_tag, setLiteralTag] = useState('');
    const[metaphorical_tag, setMetaphoricalTag] = useState('');
    
    if(mode==='all'){
      return (
        <DisplayAllProverbs setMode = {(mode)=>{setMode(mode)}} setLiteralTag={(tag)=>{setLiteralTag(tag); console.log(literal_tag)}} setMetaphoricalTag={(tag)=>{setMetaphoricalTag(tag)}} />
      )
    }
    else if (mode ==='literal'){
      return (
        <DisplayProverbsByLiteralTag  tag = {literal_tag} setMode = {(mode)=>{setMode(mode)}} setLiteralTag={(tag)=>{setLiteralTag(tag); console.log(literal_tag)}} setMetaphoricalTag={(tag)=>{setMetaphoricalTag(tag)}}/>
      )
    }
    else if (mode === 'metaphorical'){
      return (
        <DisplayProverbsByMetaphoricalTag tag = {metaphorical_tag} setMode = {(mode)=>{setMode(mode)}} setLiteralTag={(tag)=>{setLiteralTag(tag); console.log(literal_tag)}} setMetaphoricalTag={(tag)=>{setMetaphoricalTag(tag)}}/>
      )
    }
}

export default DisplayProverbs