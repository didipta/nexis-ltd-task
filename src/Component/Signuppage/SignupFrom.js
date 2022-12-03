import { getNextKeyDef } from '@testing-library/user-event/dist/keyboard/getNextKeyDef';
import React from 'react';
import { useState } from 'react';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const SignupFrom = ({errors, handleSubmit,register,onSubmit}) => {
    const[next,setNext]=useState(0);
    return (
       <>
       <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 justify-center items-center h-[70vh]">
            <h1 className="text-lg font-bold mb-10">SignUp Form</h1>
                {
                    next===0&&<>
                    <input type="text" {...register("first_name")} placeholder="Write First Name" className="w-full max-w-xs" required/>
                    <input type="text" {...register("last_Name")} placeholder="Write Last Name" className="w-full max-w-xs"  required/>
                    <button className="btn bg-[#1678CB] border-none mt-10 rounded-2xl hover:bg-white hover:text-black" onClick={()=>setNext(1)}>Next Step <span> <FontAwesomeIcon icon={faArrowRight} className="text-lg ml-2"></FontAwesomeIcon></span></button>
                    </>
                }
                {
                    next===1&&<>
                    <div className="flex gap-2 w-full max-w-xs">
                    <input type="text" placeholder="+880" className="w-16" readOnly />
                    <input type="text" {...register("phone_number")} placeholder="1xxxxxxxxxx" className="w-full max-w-xs" />
                    </div>
                    
                    <input type="email" {...register("email")} placeholder="Write Email Address" className="w-full max-w-xs"  />
                    <div className="flex justify-evenly gap-10 items-center">
                     <p className="mt-10 font-semibold text-[#1678CB] cursor-pointer" onClick={()=>setNext(0)}>Back</p>
                    <button className="btn bg-[#1678CB] border-none mt-10 rounded-2xl hover:bg-white hover:text-black" onClick={()=>setNext(2)}>Next Step <span> <FontAwesomeIcon icon={faArrowRight} className="text-lg ml-2"></FontAwesomeIcon></span></button>
                    </div>
                    
                    </>
                }
                {
                    next===2&&<>
                    <div className="w-full max-w-xs">
                    <input type="password" {...register("password",{ 
                    minLength: { value: 8, message: "Your password must be 8 character" }})} placeholder="Write Password" className="w-full max-w-xs" required/>
                    {errors.password && <p role="alert" className="text-sm ml-3">{errors.password?.message}</p>}
                    </div>
                    
                    <div className="flex justify-evenly gap-10 items-center">
                     <p className="mt-10 font-semibold text-[#1678CB] cursor-pointer" onClick={()=>setNext(1)}>Back</p>
                    <button className="btn bg-[#1678CB] border-none mt-10 rounded-2xl hover:bg-white hover:text-black" >Sign Up</button>
                    </div>
                    
                    </>
                }
                
        
        </form>
       {
        next===0&&<div className="text-right p-5 font-semibold pr-10">
            <p>Already have an account? <span className='text-[#1678CB] '>LOGIN HERE!</span></p>
        </div>
       }
       </> 
    );
};

export default SignupFrom;