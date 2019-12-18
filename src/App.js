import React, { Component } from 'react';
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Elements from './components/Elements'
import Info from './components/Info'
import axios from 'axios'
const API_URL = 'http://ddragon.leagueoflegends.com/cdn/9.24.2/data/es_MX/champion.json';

class App extends Component {


  constructor(props){
    super(props)
    this.state = {
      champions: []
    }
  }

  componentDidMount() {
    const url = API_URL;
    axios.get(url).then(response => response.data)
      .then((data) => {
        this.setState({ champions: data.data })
        //console.log(data)
      })
  }

  render() {

    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Elements}></Route>
            <Route path="/info" component={Info}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;