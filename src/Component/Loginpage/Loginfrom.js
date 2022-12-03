import { getNextKeyDef } from '@testing-library/user-event/dist/keyboard/getNextKeyDef';
import React from 'react';
import { useState } from 'react';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
const Loginfrom = ({errors, handleSubmit,register,onSubmit}) => {
   
    return (
       <>
       <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 justify-center items-center h-[70vh]">
            <h1 className="text-lg font-bold mb-10">Log in Form</h1>
                
                
                    
                    <input type="email" {...register("email")} placeholder="Write Email Address" className="w-full max-w-xs"  />
                   
                    <div className="w-full max-w-xs">
                    <input type="password" {...register("password",{ 
                    minLength: { value: 8, message: "Your password must be 8 character" }})} placeholder="Write Password" className="w-full max-w-xs" required/>
                    {errors.password && <p role="alert" className="text-sm ml-3">{errors.password?.message}</p>}
                    </div>
                    <button className="btn bg-[#1678CB] border-none mt-10 rounded-2xl hover:bg-white hover:text-black" >Login</button>
                    
                
        
        </form>
       
        <div className="text-right p-5 font-semibold pr-10">
        <p>Don’t have an account? <Link to="/signup" className='text-[#1678CB] '>SIGNUP HERE!</Link></p>
        </div>
       
       </> 
    );
};

export default Loginfrom;