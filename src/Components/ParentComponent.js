import React, { Component } from 'react'
import Children from './ChildrenComponent'

class ParentComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            parentName: 'Parent'             
        }

        // Isso faz o bind do greetHadler com o método greetParent
        this.greetParent = this.greetParent.bind(this)
    }

    // Handler
    greetParent(childName){
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }   

    render() {
        // O handler do child estã refenciando o greetParent, que já foi bindado no construtor
        return (
           <div>
                <Children greetHandler={this.greetParent}></Children>
            </div>
        )
    }
}

export default ParentComponent
