const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'YOUR_FIREBASE_DATABASE_URL',
});

// Get the current time
const currentTime = new Date().toLocaleTimeString();

// Reference to your Firebase database
const db = admin.database();
const usersRef = db.ref('users'); // Replace 'users' with the actual path to your users data

// Function to analyze the Firebase data
function analyzeFirebase() {
  usersRef.once('value', (snapshot) => {
    snapshot.forEach((userSnapshot) => {
      const user = userSnapshot.val();
      
      // Check if the user has a "time" attribute and it matches the current time
      if (user.time && user.time === currentTime) {
        console.log('User found:', user);
      }
    });
  });
}

// Call the function
analyzeFirebase();
