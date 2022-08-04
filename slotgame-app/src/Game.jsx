import React from 'react'
import './App.css'
// const Game = (props) => {;
//         if (props.x === props.y && props.x === props.z) {
//             return (
//                 <div className='game_area'>
//                     <div className="display">
//                         <h1>{props.x} {props.y} {props.z}</h1>
//                         <h1>Match!! 👍</h1>
//                         <hr />
//                     </div>
//                 </div>
//             )
//         }
//         else {
//             return (
//                 <div className='game_area'>
//                     <div className="display">
//                         <h1>{props.x} {props.y} {props.z}</h1>
//                         <h1>Not Match!! 👎</h1>
//                         <hr />
//                     </div>
//                 </div>
//             )
//         }
// }
const Game = (props) => {
    if (props.x === props.y && props.x === props.z) {
        return (
            <div className='game_area'>
                    <h1>{props.x} {props.y} {props.z}</h1>
                    <h1>Match!! 👍</h1>
                    <hr />
            </div>
        )
    }
    else {
        return (
            <div className='game_area'>
                    <h1>{props.x} {props.y} {props.z}</h1>
                    <h1>Not Match!! 👎</h1>
                    <hr />
            </div>
        )
    }
}

export default Game