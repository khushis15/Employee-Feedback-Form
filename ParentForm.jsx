import React, { useState } from 'react'
import ActualForm from './ActualForm';
import FormData from './FormData';

function ParentForm(){

    const[nameIp,setName] = useState('');
    const[ratIp,setRat] = useState('');
    const[deptIp,setDept] = useState('');
    const[myObj,setMyObJ] = useState({});
    const[users,setUsers] = useState([]);
    const[isSubmitted,setisSubmitted] = useState(false);


    let myForm1 = {
        color:'rgb(0,48,143)',
        fontSize:'25px',
        fontStyle:'bolder',
        textAlign:'left',
    }
    let myForm2={
        border:'4px solid rgb(0,48,143)', backgroundColor:'rgb(201,255,229)', display:'inline-block', 
        padding:'25px', borderRadius:'15%', innerHeight:'500px'
    }
    
    const handleChangeName=(e)=>{
        console.log('typing...');
       setName(e.target.value);
    }
    const handleChangeRat=(e)=>{
        console.log('typing...');
        setDept(e.target.value)
    }
    const handleChangeDept=(e)=>{
        console.log('typing...');
        setRat(e.target.value)
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        let tempObj = myObj;
        tempObj={
            name:nameIp,
            dept:deptIp,
            rat:ratIp
        }
        console.log(tempObj);

        let tempArr = users;
        tempArr.push(tempObj);

        setUsers(()=>([
            ...tempArr
        ]))
        console.log(users);
        setisSubmitted(!isSubmitted);
    }
    const handleBack=()=>{
        setisSubmitted(!isSubmitted)
    }

    return (
      <div>
        {
        !isSubmitted?
        <ActualForm handleChangeName={handleChangeName} handleChangeRat={handleChangeRat} handleChangeDept={handleChangeDept} handleSubmit={handleSubmit} styles={{...myForm1, ...myForm2}} />
        :
        <FormData users={users} handleBack={handleBack} />
        }

      </div>
      
    )

}

export default ParentForm