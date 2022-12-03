import React from 'react';
import SignupFrom from './SignupFrom';
import img from "../img/istockphoto-1321277096-612x6121.png"
import "./Style.css"
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
const Signup = () => {
    const[mess,setMess]=useState("");
    const { register,formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data =>
    {
        fetch("https://test.nexisltd.com/signup",{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(res=>{
         toast.success(res.sucess)
        })
    }
    return (
        <div>
            <div className="flex justify-around flex-col lg:flex-row items-center p-10 h-screen">
                <div className="w-full p-5 lg:p-40">
                   <img src={img} alt="" className="w-full hidden lg:block"></img>
                </div>
                <div className=" w-full lg:w-8/12 h-[90vh] shadow-lg">
                    <SignupFrom
                    register={register}
                    handleSubmit={handleSubmit}
                    errors={errors}
                    onSubmit={onSubmit}
                    ></SignupFrom>
                </div>
            </div>
            <Toaster
            className="z-50"
        position="bottom-right"
        reverseOrder={false}
        />
        </div>
    );
};

export default Signup;