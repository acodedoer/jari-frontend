import React, {Component} from 'react';
import './App.css';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import Jari from './components/Jari';

const client = new ApolloClient({
  uri: 'https://jari-backend.herokuapp.com/admin/api',
});

export const AppContext = React.createContext();

class App extends Component{
  constructor(props) {
    super(props);

    this.setNavTitle = (title) => {
      if(title !== "")
        {this.setState({navTitle: ": "+title})}
      else
        {this.setState({navTitle: ""})}
    }

    this.setMode = (new_mode) => {
      this.setState({mode: new_mode})
      console.log(this.state.mode)
    }

    this.setLiteralTag = (new_tag) => {
      this.setState({literal_tag: new_tag})
      console.log(this.state.literal_tag)
    }

    this.setMetaphoricalTag = (new_tag) => {
      this.setState({metaphorical_tag: new_tag})
      console.log(this.state.metaphorical_tag)
    }

    this.state = {
      mode: "all",
      literal_tag: "",
      metaphorical_tag: "",
      setMode: this.setMode,
      setLiteralTag: this.setLiteralTag,
      setMetaphoricalTag: this.setMetaphoricalTag,
      setNavTitle: this.setNavTitle,
      navTitle: ""
    };
  }

  render(){
    return (
      <AppContext.Provider value = {this.state}>
        <ApolloProvider client={client}>
          <Jari/>
        </ApolloProvider>
      </AppContext.Provider>
    );
  }
}

export default App;
