import React, {Component} from 'react';
import Navigation from './Navigation';
import Content from './Content';

export const JariContext = React.createContext();

export class Jari extends Component{
    constructor(props) {
        super(props);

        this.setMode = (new_mode) => {
            this.setState({mode: new_mode})
        }

        this.setLiteralTag = (new_tag) => {
            this.setState({literal_tag: new_tag})
        }

        this.setMetaphoricalTag = (new_tag) => {
            this.setState({metaphorical_tag: new_tag})
        }

        this.state = {
            mode: "all",
            literal_tag: "",
            metaphorical_tag: "",
            setMode: this.setMode,
            setLiteralTag: this.setLiteralTag,
            setMetaphoricalTag: this.setMetaphoricalTag
        };
    }

    render(){
        return(
            <JariContext.Provider value = {this.state}>
                <Navigation/>
                <Content/>
            </JariContext.Provider>
        )
    }
}