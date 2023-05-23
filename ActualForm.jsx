import React from 'react'
function ActualForm(props){
    //destructuring of props object
    let {handleChangeName, handleChangeRat,handleChangeDept, handleSubmit, styles} = props;
    
    return (
      <div style={{textAlign:'center'}}>
      <h1 style={{fontFamily:'cursive' ,color:'rgb(0,48,143)'}}>EMPLOYEE FEEDBACK FORM</h1>
        <form style={styles}>
                    <label>Name: </label>
                    <input type='text' placeholder='Enter name here' id='nameIp' onChange={handleChangeName} style={{borderRadius:'8%', fontSize:'18px'}}/>
                    <br/><br/>
                    <label>Department: </label>
                    <input type='text' placeholder='Enter Department here' id='deptIp' onChange={handleChangeDept} style={{borderRadius:'8%', fontSize:'18px'}}/>
                    <br/><br/>
                    <label>Rating: </label>
                    <input type='text' placeholder='Enter ratings here' id='ratIp' onChange={handleChangeRat} style={{borderRadius:'8%', fontSize:'18px'}}/>
                    <br/><br/>

                    <button onClick={handleSubmit} style={{backgroundColor:'red', color:'white', fontSize:'18px', padding:'8px', fontWeight:'bolder'}}>Submit</button>
                </form>
      </div>
    )
}
export default ActualForm