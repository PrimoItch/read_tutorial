import React from 'react'

// const Greet = ({name, client}) => {
//     return (        
//         <div>
//             <h1>My Beatifull {name} for {client}</h1>
//         </div>
//     )
// }

const Greet = (props) => {
    const {name, client} = props
    return (        
        <div>
            <h1>My Beatifull {props.name} for {props.client}</h1>
        </div>
    )
}

export default Greet