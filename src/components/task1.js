import React from 'react'
import './task1.scss'
import { Data1 } from './data2'

const Task1 = () => {
    return (
        <div className='task1'>
            {Data1.map((props) => {
                return(
                    <div className="item" key={props.id}>
                        <div className="icon">{props.icon}</div>
                        <div className="text">
                            <h6>{props.title}</h6>
                            <p>{props.text}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Task1