import React, { Component } from 'react'

function FormData(props) {

    let {handleBack, users} = props
    return (
    <div>
        <div>
                {users.map((item,index)=>{
                    return(
                        <div key={index}>
                            <h3>Name = {item.name}</h3>
                            <h3>Department = {item.dept}</h3>
                            <h3>Rating = {item.rat}</h3>
                            <hr/>
                        </div>
                    )
                })
                }
                <button onClick={handleBack} style={{backgroundColor:'red', color:'white', fontSize:'18px', padding:'8px', fontWeight:'bolder'}}>Go Back</button>
                </div>
    </div>
    )
}
export default FormData