import React from 'react';
import img from "../img/ultimatehrmlogo-05-023.png"
const Header = () => {
    return (
        <div className="absolute p-10">
            <img src={img} alt="" className="w-36"></img>
        </div>
    );
};

export default Header;