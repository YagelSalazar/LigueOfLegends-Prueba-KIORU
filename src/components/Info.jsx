import React, { Component } from 'react'
import axios from 'axios'

class Info extends Component {

    constructor() {
        super()
        this.state = {
            name: '',
            title: '',
            image: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        const url = 'http://ddragon.leagueoflegends.com/cdn/9.24.2/data/es_MX/champion/Alistar.json';
        axios.get(url).then(response => response.data)
          .then((data) => {
            this.setState({ champions: data.data })
            //console.log(data)
          })
      }

    handleChange(e) {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    render() {
        const { champions } = this.state;
        return (
            <div>
                <div className="container">
        <h1>{this.champions}</h1>
                    <img src={`http://ddragon.leagueoflegends.com/cdn/9.24.2/img/champion/Alistar.png`} alt=""/>
                </div>
            </div>
        );
    }
}

export default Info;
