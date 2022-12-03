import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Signup from '../Signuppage/Signup';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Signup></Signup>
        </div>
    );
};

export default Main;