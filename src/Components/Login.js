import React from 'react'
import { useState,useEffect } from 'react';

const Login = () => {
    const initialValues= {username:"",emai:"", password:""};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit]=useState(false)


    const handleChange =(e)=>{
     console.log(e.target)
     const  {name , value} =e.target;
     setFormValues({...formValues, [name]:value});
     console.log(formValues)
    }
    const handleSubmit =(e)=>{
     e.preventDefault();
     setFormErrors(validate(formValues));
     setIsSubmit(true)
    }
 useEffect(() => {
    console.log(formErrors);
    if(Object.keys(formErrors).length === 0 && isSubmit ){
        console.log(formValues);
    }
    
 }, [formErrors]);

     const validate =(values)=>{
         const errors ={};
         const regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
         if(!values.username){
             errors.username="UserName is Required!";
         }
         if(!values.email){
            errors.email="Email is Required!";
        }else if(!regx.test(values.email)){
            errors.email="This is not a valid email"
        }
        if(!values.password){
            errors.password="Password is Required!";
        }else if(values.password.length< 4){
            errors.password="Password should be more than four characters";
        }else if(values.password.length> 10){
            errors.password="Password should be less than ten characters";
        }
        return errors;
     }
  return (
    <>
       <div className='container'>
       {Object.keys(formErrors).length === 0 && isSubmit ? 
       (<div className='ui-message-sucess'>Sighned in sucessfully</div>):(
           <div className='ui-message-failed'></div>
       )
       }
     
           <form onSubmit={handleSubmit}>
           <h2>Login Form</h2>
               <div className='ui-divider'></div>
               <div className='ui-form'>
                   <div className='field'>
                       <label>username</label>
                       <input type="text" name="username" 
                       placeholder="username" 
                       value={formValues.username}
                           onChange={handleChange}
                       />
                       <p className='errors'>{formErrors.username}</p>
                   </div>
                   <div className='field'>
                       <label>email</label>
                       <input type="text" name="email"
                        placeholder="email"
                         value={formValues.email}
                         onChange={handleChange}
                         />
                         <p className='errors'>{formErrors.email}</p>
                   </div>
                   <div className='field'>
                       <label>password</label>
                       <input type="password" name="password" 
                       placeholder="password"
                        value={formValues.password}
                        onChange={handleChange}
                        />
                        <p className='errors'>{formErrors.password}</p>
                   </div>
                   <button className='button' onSubmit={handleSubmit}>submit</button>
               </div>
           </form>
       </div> 
    </>
  )
}

export default Login