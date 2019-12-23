import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hellow'
        }

        // this.clickHandler = this.clickHandler.bind(this)
    }
    
    // clickHandler(){
    //     if(this.state.message === 'Goodbye' )
    //     {
    //         this.setState({
    //             message: 'Hellow'
    //         })

    //     }else{
    //         this.setState({
    //             message: 'Goodbye'
    //         })
    //     }      
    // }

    clickHandler = () =>  {
        if(this.state.message === 'Goodbye' )
        {
            this.setState({
                message: 'Hellow'
            })

        }else{
            this.setState({
                message: 'Goodbye'
            })
        }      
    }


    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
                {/* <button onClick={()=>this.clickHandler()}>Click</button> */}
                {/* <button onClick={this.clickHandler}>Click</button> */}
                <button onClick={this.clickHandler}>Click</button>

            </div>
        )
    }
}

export default EventBind
