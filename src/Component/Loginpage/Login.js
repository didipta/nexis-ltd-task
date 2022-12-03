import React from 'react';
import img from "../img/istockphoto-1321277096-612x6121.png"
import "../Signuppage/Style.css"
import { useForm } from 'react-hook-form';

import toast, { Toaster } from 'react-hot-toast';
import Loginfrom from './Loginfrom';
import { useLocation, useNavigate } from 'react-router-dom';
const Login = () => {
    const { register,formState: { errors }, handleSubmit } = useForm();
    const location=useLocation();
    const from=location.state?.from?.pathname || '/home';
    const navigator=useNavigate();
    const onSubmit = data =>
    {
        fetch("https://test.nexisltd.com/login ",{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(res=>{
            console.log(res);
            localStorage.setItem("access_token_Ultimate", res.access_token);
            localStorage.setItem("refresh_token_Ultimate", res.refresh_token);
            toast.success(res.sucess)
            navigator(from, { replace: true });
        })
    }
    return (
        <div>
            <div className="flex justify-around flex-col lg:flex-row items-center p-10 h-screen">
                <div className="w-full p-5 lg:p-40">
                   <img src={img} alt="" className="w-full hidden lg:block"></img>
                </div>
                <div className="w-full lg:w-8/12 h-[90vh] shadow-lg">
                    <Loginfrom
                    register={register}
                    handleSubmit={handleSubmit}
                    errors={errors}
                    onSubmit={onSubmit}
                    ></Loginfrom>
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

export default Login;