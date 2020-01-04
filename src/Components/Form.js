import React, { Component } from 'react'

export class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             username: 'Insira o usuário',
             option: ''
        }

    }  

    // handlerUserNameChanged = (event)=>{
    //     this.setState({
    //         username: event.target.value
    //     })
    // }

    onChange(e) {
        this.setState({
            username: e.target.value
        })        
    }

    handlerSelection = (e)=>{
        this.setState({
            option: e.target.value
        })
        console.log(`selecionada a opção ${e.target.value}`)
    }

    handlerSubmission = (e) =>{
        alert(`${this.state.username} ${this.state.option}`)
    }

    // handlerUserNameChanged(event){
    //     console.log(event.target.value)
    //      this.setState({
    //        username: event.target.value
    //      })
    // }

    render() {
        return (
            <div>
                <form onSubmit={this.handlerSubmission}>
                    <label>Username</label>
                    <input type='text' value={this.state.username} onChange={this.onChange.bind(this)}></input>
                    <select value={this.state.option} onChange={this.handlerSelection}>
                        <option>Opção 00</option>
                        <option>Opção 01</option>
                        <option>Opção 10</option>
                        <option>Opção 11</option>
                    </select>
                    <button>Submeter</button>
                    
                </form>
            </div>
        )
    }
}

export default Form
