const express = require('express');
const app = express();
const port = 3004;

/** 

const mainApp = require('./app.js');
const requests = require("requests");

*/
const router = express.Router();
const twilio = require('twilio');

const axios = require('axios');
const api_key = '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';
const apiUrl = 'https://api.openai.com/v1/chat/completions';

/** 

function getText(name, goal) {
  const template = "Provide me with a message to remind" + name + " about his goal: " + goal;

  const params = {
    messages: [
      {
        role: "user",
        content: template,
      },
    ],
    model: "gpt-3.5-turbo-1106",
    max_tokens: 10,
  };

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${api_key}`,
  };

  axios.post(apiUrl, params, { headers })
    .then(result => {
      const message = result.data.choices[0].message.content;
      return message;
    })
    .catch(error => {
      console.error(error.response ? error.response.data : error.message);
    });
}
*/

function getText(name, goal) {
    const template = "Provide me with a message to remind " + name + " about his goal: " + goal;
  
    const params = {
      messages: [
        {
          role: "user",
          content: template,
        },
      ],
      model: "gpt-3.5-turbo-1106",
      max_tokens: 40,
      temperature: 0.4,
    };
  
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${api_key}`,
    };
  
    // Return a new Promise
    return new Promise((resolve, reject) => {
      axios.post(apiUrl, params, { headers })
        .then(result => {
          const message = result.data.choices[0].message.content;
          resolve(message);  // Resolve the Promise with the message
        })
        .catch(error => {
          console.error(error.response ? error.response.data : error.message);
          reject(error);  // Reject the Promise in case of an error
        });
    });
  }
   

function getCurrentTime() {
  let now = new Date();
  let hours = now.getHours().toString().padStart(2, '0'); // Ensures the hour is 2 digits
  let minutes = now.getMinutes().toString().padStart(2, '0'); // Ensures the minute is 2 digits

  return `${hours}:${minutes}`;
}

require('dotenv').config();

const client = new twilio('AC46611c888d6b4e1996df88a656a91817', 'e2e7d0019e848d8d9d9857b1d8ee7d87');

app.use(express.json());

/** 
console.log(mainApp);
*/
require('dotenv').config();

//const message 

app.use('/app', (req, res) => { client.messages.create({
  body: "Hello",
  from: "+17577859215",
  to: "+14372238244",
})
.then(message => {
  console.log(message.sid);
  res.send(message.sid);
})
.catch(error => {
  console.error(`Error sending message: ${error.message}`);
  res.status(500).send(`Error sending message: ${error.message}`);
})
});

app.get('/', (req, res) => {
  res.send('Hello, this is your Express server!');
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


const api_url = 'https://restrack-2c920-default-rtdb.firebaseio.com/users.json';
console.log("hello");
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

setInterval(() => {
  collectData(api_url)
      .then(data => {
          console.log("Received data:", data);

          for (let key in data) {
            if (data.hasOwnProperty(key)) {
                let sendTime = data[key].send_time;
                let goal = data[key].goal;
                let firstName = data[key].first_name;
                console.log(`Send time for ${key}: ${sendTime}`);

                const currentTime = getCurrentTime();
                
                if(currentTime==sendTime){
                 
                  (async () => {
                    try {
                      const message = await getText(firstName, goal);
                      console.log(message);
                    } catch (error) {
                      console.error('Failed to get text:', error);
                    }
                  })();
                  

                  getText(firstName, goal).then((message)=>{
                    console.log(message);
                    client.messages.create({
                        body: message, 
                        from: "+17577859215",
                        to: "+14372238244",
                      })
                      .then(message => {
                        console.log(message.sid);
                      })
                      .catch(error => {
                        console.error(`Error sending message: ${error.message}`);
                      })
                  }).catch((err) =>{
                    console.log(err);
                  })
                  /**
                  client.messages.create({
                    body: 'Hello', 
                    from: "+17577859215",
                    to: "+14372238244",
                  })
                  .then(message => {
                    console.log(message.sid);
                  })
                  .catch(error => {
                    console.error(`Error sending message: ${error.message}`);
                  })
                   */
                }
                
            }
          }


      })
      .catch(error => {
          console.error("Error:", error);
      });
}, 10000);


