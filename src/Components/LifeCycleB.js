import React, { Component } from 'react'

export class LifeCycleB extends Component {

    constructor(props) {
        super(props)

        console.log('1B - LifeCycleA')
    
        this.state = {
             name: 'Porto'
        }
    }

    static getDerivedStateFromProps(props, state){
        console.log('2B - getDerivedStateFromProps')
        return null
    }
        
    render() {
        console.log('3B - render')
        return (
            <div>
                {this.state.name}
            </div>
        )
    }

    componentDidMount(){
        console.log('4B - componentDidMount')
    }
}

export default LifeCycleB
