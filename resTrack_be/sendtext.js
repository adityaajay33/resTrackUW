
/** 
const indexPath = 'resTracker_backend/index.js'

import { getDatabase, ref, onValue } from "firebase/database";

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



export const user_data = (collectData(api_url));

const app = initializeApp(firebaseConfig);
const users = []
const dbRef = ref(getDatabase(app));
get(child(dbRef, `users/${userId}`)).then((snapshot) => {
  if (snapshot.exists()) {
    users.push(snapshot.val());
    console.log(snapshot.val)
    console.log(users)
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});


// Import necessary modules


// Your async function to be executed
const myAsyncFunction = async () => {
  for (let i = 0; i < users; i++) {
    console.log("ITS GOING WRONG AT HERE")
    currentTime = 
    if (user[i].send_time = currentTime) {
        const util = require('resTracker_backend/sendtext.js');
    };
  console.log('Times last checked at ', new Date());
  };
}

// Convert the async function to a promise-based function
const myAsyncFunctionPromise = util.promisify(myAsyncFunction);

// Function to run the async function every minute
const runAsyncFunctionEveryMinute = async () => {
  try {
    await myAsyncFunctionPromise();
  } catch (error) {
    console.error('Error in send function:', error);
  }
};

const interval = 60 * 1000; 
setInterval(runAsyncFunctionEveryMinute, interval);
*/
const requests = require("requests");

const api_url = 'https://restrack-2c920-default-rtdb.firebaseio.com/users.json';
async function collectData(apiURL){
    try { 
      let response = await fetch(apiURL);
      let data = await response.json();

      console.log("data: " + data);
        
      return data;

    }
    catch(err){
      console.log("This is an " + err);
    }
}
