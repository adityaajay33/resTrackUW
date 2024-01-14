"use client";
import React, { useState } from 'react'
import "./UserForm.css"
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from 'firebase/database';
import 'firebase/analytics';
require('dotenv').config();

const UserForm = () => {

    const firebaseConfig = {
        apiKey: "AIzaSyAWCUcO8KNtnnGtkhjy5LhcQVoGM_9Pntc",
        authDomain: "restrack-2c920.firebaseapp.com",
        databaseURL: "https://restrack-2c920-default-rtdb.firebaseio.com",
        projectId: "restrack-2c920",
        storageBucket: "restrack-2c920.appspot.com",
        messagingSenderId: "422305863692",
        appId: "1:422305863692:web:d437b6610e9e80fd31b629",
        measurementId: "G-S7LQZTH8TM"
    };

    const app = initializeApp(firebaseConfig);
    

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [goal, setGoal] = useState('');
    const [sendTime, setSendTime] = useState('');

    const handleRegister = (firstName, lastName, phoneNumber, goal, sendTime) => {
        const database = getDatabase(app);


        set(ref(database, 'users/' + firstName + ", " + lastName), {
            first_name: firstName,
            last_name: lastName,
            phone_number: phoneNumber,
            goal: goal,
            send_time: sendTime
        })
        .then(() => {
            // Data successfully written to the database
            alert('Registration successful!');
            setFirstName('');
            setLastName('');
            setPhoneNumber('');
            setGoal('');
            setSendTime('');
        })
        .catch((error) => {
            console.error('Error writing to the database: ', error);
            alert('Registration failed. Please try again.');
        });
    };


  return (
    <div className='primaryContainer'> 
        <div className='formUser'>
            <div className='title'>
                resTracker
            </div>
            <div className='inputInfo'>
                <div className='boxes'>
                    <input className='inputBox' type='text' placeholder='First Name' onChange={(e) => setFirstName(e.target.value)} required />
                </div>
                <div className='boxes'>
                    <input className='inputBox' type='text' placeholder='Last Name' onChange={(e) => setLastName(e.target.value)} required />
                </div>
                <div className='boxes'>
                    <input className='inputBox' type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Phone Number" onChange={(e) => setPhoneNumber(e.target.value)} required />
                </div>
                <div className='boxes'>
                    <input className='inputBox' type="text" name="goal" placeholder="New Year's Resolution" onChange={(e) => setGoal(e.target.value)} required />
                </div>
                <div className='boxes'>
                    <input className='inputBox' type="time" name="sendTime" onChange={(e) => setSendTime(e.target.value)} required />
                </div>
            </div>
            <button className="buttonReg" onClick={() => handleRegister(firstName, lastName, phoneNumber, goal, sendTime)}>Register</button>
        </div>
    </div>
  )
}

export default UserForm