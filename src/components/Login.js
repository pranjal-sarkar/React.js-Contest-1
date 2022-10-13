import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <>
            <div className="container">
            <div className="actualContent">
                <h1> Registration Form </h1>
                <div className="nameBox item">
                    <div className="firstNameBox">
                        <div className='firstNameHeading'>First Name</div>
                        <div className='firstNameInputBox'>
                            <input type="text" name="" className='inputBox' />
                        </div>
                    </div>
                    <div className="lastNameBox">
                        <div className='lastNameHeading'>Last Name</div>
                        <div className='lastNameInputBox'>
                            <input type="text" name="" className='inputBox' />
                        </div>
                    </div>
                </div>

                <div className="emailAddress item">
                    <div className="emailAddressHeading"> Email Address </div>
                    <input type="text" className='inputBox' />
                </div>

                <div className="genderBox item">
                    <div className="genderHeading"> Gender </div>
                    <div className="inputFieldBox">
                        <div className="male">Male</div>
                        <div className="female">Female</div>
                    </div>
                </div>

                <div className="cityBox item">
                    <div className="cityHeading"> City </div>
                    <input type="text" className='inputBox' />
                </div>

                <div className="countryBox item">
                    <div className="countryHeading"> Country </div>
                    <input type="text" className='inputBox' />
                </div>

                <div className="registerButton item">
                    <button type="submit">REGISTER NOW</button>
                </div>

            </div>
            </div>
        </>
    )
}

export default Login;