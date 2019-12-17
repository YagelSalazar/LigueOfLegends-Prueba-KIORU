import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const API_URL = 'http://ddragon.leagueoflegends.com/cdn/9.24.2/data/es_MX/champion.json';

class Elements extends Component {


    state = {
      champions: []
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
      const { champions } = this.state;
      return (
        <div className="container">
          <div className="col-xs-8">
            <h1>LOL Stats</h1>
            <div className="row">
              {console.log(Object.keys(champions))}
              {Object.keys(champions).map((champion) => (
                <div className="col-md-4">
                  <div className="card mt-4">
                    <div className="card-body">
                    <img src={`http://ddragon.leagueoflegends.com/cdn/9.24.2/img/champion/${champion}.png`} alt=""/>
                    </div>
                    <div className="card-footer">
                      <h1><Link to="/info">{champion}</Link></h1>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
  
  
    }
  }
  export default Elements;