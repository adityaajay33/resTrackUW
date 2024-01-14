"use client";
import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './src/Components/Navbar/Navbar'
import UserForm from './src/Components/User Form/UserForm'
const firebase = require('firebase/app');
import 'firebase/database';
import 'firebase/analytics';
//const requests = require('requests');
require('dotenv').config();



export default function Home() {
  

  console.log("Hello");
  return (
    <div>
      <Navbar />
      <UserForm />
    </div>
  )
}
