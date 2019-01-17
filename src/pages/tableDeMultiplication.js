import React, {Component} from 'react' 
import Layout from '../components/Layout'

class Table extends Component {
    state={
        num: 1
    }

    handleChange = (event) => {
        this.setState({num: event.target.value})
    }

    render(){
        return (
            <Layout>
                <h1>Table de Multiplication</h1>
                <h2>Choix : <input type="text" value={this.state.num} onChange={this.handleChange} /> </h2>
                
                <ul style={{margin: '0 10%'}}>
                    <li>1 * {this.state.num} = {this.state.num * 1}</li>
                    <li>2 * {this.state.num} = {this.state.num * 2}</li>
                    <li>3 * {this.state.num} = {this.state.num * 3}</li>
                    <li>4 * {this.state.num} = {this.state.num * 4}</li>
                    <li>5 * {this.state.num} = {this.state.num * 5}</li>
                    <li>6 * {this.state.num} = {this.state.num * 6}</li>
                    <li>7 * {this.state.num} = {this.state.num * 7}</li>
                    <li>8 * {this.state.num} = {this.state.num * 8}</li>
                    <li>9 * {this.state.num} = {this.state.num * 9}</li>
                    <li>10 * {this.state.num} = {this.state.num * 10}</li>
                </ul>
                <br />
               
            </Layout>
            
        )
    }
}

export default Table