import React, {Component} from 'react'

class Bread extends Component { 
    render(){
        const {name} = this.props
        // const {state1, state2} = this.state
        return <h1>Bread {name}</h1>
    }
}

export default Bread;