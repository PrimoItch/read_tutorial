import React, { Component } from 'react'
import Children from './ChildrenComponent'

class ParentComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            parentName: 'Parent'             
        }

        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childName){
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }   

    render() {
        return (
            <div>
                <Children greetHandler={this.greetParent}></Children>
            </div>
        )
    }
}

export default ParentComponent
