import React from 'react';

// function Greet(){
//     return <h1>Hello Munib</h1>
// }

// const Greet = ({name, heroName}) => {
//     // console.log(props);
//     // props.name = "Hanan";
//     return (
//         <div>
//         <h1>Hello Boss {name} a.k.a {heroName}</h1>
        
//         </div>
//     )
// }

const Greet = props => {
    const {name, heroName} = props
        // console.log(props);
        // props.name = "Hanan";
        return (
            <div>
            <h1>Hello Boss {name} a.k.a {heroName}</h1>
            
            </div>
        )
}

export default Greet;
