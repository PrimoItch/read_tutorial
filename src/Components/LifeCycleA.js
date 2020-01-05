import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

export class LifeCycleA extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Alan'
        }

        console.log('1A - Constructor')
    }
    
    static getDerivedStateFromProps(props, state){
        console.log('2A - getDerivedStateFromProps')
        return null
    }

    render() {

        console.log('3A - Render')

        return (
            <div>
                {this.state.name} 
                <LifeCycleB></LifeCycleB>
            </div>
        )
    }

    componentDidMount(){
        console.log('4A - componentDisMount')
    }
}

export default LifeCycleA
