import React, {Component} from 'react';
import './App.css';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import Jari from './components/Jari';
const URI = "https://jari-backend.herokuapp.com/admin/api"

const client = new ApolloClient({
  uri: URI,
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
    }

    this.setLiteralTag = (new_tag) => {
      this.setState({literal_tag: new_tag})
    }

    this.setMetaphoricalTag = (new_tag) => {
      this.setState({metaphorical_tag: new_tag})
    }

    this.setAbout = (state)=>{
      this.setState({about: state})
    }

    this.setLanguage = (language) => {
      this.setState({language:language})
      localStorage.setItem('language', language);
    }

    this.initLanguage =()=>{
      if(localStorage.getItem('language')==="Hausa"){
        return "Hausa"
      }
      else if(localStorage.getItem('language')==="English"){
        return "English"
      }
      else{
        localStorage.setItem('language', "English");
        return "English"
      }
    }

    this.state = {
      mode: "all",
      literal_tag: "",
      metaphorical_tag: "",
      setMode: this.setMode,
      setLiteralTag: this.setLiteralTag,
      setMetaphoricalTag: this.setMetaphoricalTag,
      setNavTitle: this.setNavTitle,
      navTitle: "",
      about: false,
      setAbout: this.setAbout,
      language:this.initLanguage(),
      setLanguage:this.setLanguage
    };
  }

  render(){    
    return (
      <AppContext.Provider value = {this.state}>
        <ApolloProvider client={client}>
          <Jari about={this.state.about} setAbout={this.state.setAbout} language={this.state.language}/>
        </ApolloProvider>
      </AppContext.Provider>
    );
  }
}

export default App;
