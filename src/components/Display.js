import React, { Component } from 'react';
import ProverbComponent from './Proverb'
import InfiniteScroll from "react-infinite-scroll-component";
import {LOADING} from './MenuTranslations'

class Display extends Component {
    constructor(props) {
        super(props);
        this.state = {
            start:0,
            end:7,
        }

        this.fetchMore = () => {
            setTimeout(() => {
              this.setState({
                end: (this.state.end + 7)
              });
            }, 1000);
          };

};
render(){
    return(
        <InfiniteScroll
          dataLength={this.props.proverbs.slice(0, this.state.end).length}
          next={this.fetchMore}
          hasMore={this.state.end >= this.props.proverbs.length ? false : true}
          loader={this.props.language==='Hausa'?<h5>{LOADING.hausa}</h5>:<h5>{LOADING.english}</h5>}
        >

        {this.props.proverbs.slice(0, this.state.end).map((proverb, index) => (
                    <ProverbComponent key = {index} setMode = {this.props.setMode} proverb ={proverb} setLiteralTag={this.props.setLiteralTag} setMetaphoricalTag={this.props.setMetaphoricalTag} /> 
                    )
                )
            }
        </InfiniteScroll>)
}
    
}

export default Display