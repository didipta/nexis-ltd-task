import React from 'react';
import SignupFrom from './SignupFrom';
import img from "../img/istockphoto-1321277096-612x6121.png"
import "./Style.css"
import { useForm } from 'react-hook-form';
const Signup = () => {
    const { register,formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data =>
    {
    }
    return (
        <div>
            <div className="flex justify-around items-center p-10 h-screen">
                <div className="w-full p-40">
                   <img src={img} alt="" className="w-full"></img>
                </div>
                <div className="w-8/12 h-[90vh] shadow-lg">
                    <SignupFrom
                    register={register}
                    handleSubmit={handleSubmit}
                    errors={errors}
                    onSubmit={onSubmit}
                    ></SignupFrom>
                </div>
            </div>
        </div>
    );
};

export default Signup;