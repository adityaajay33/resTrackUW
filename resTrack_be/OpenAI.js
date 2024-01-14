const axios = require('axios');
const api_key = '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';
const apiUrl = 'https://api.openai.com/v1/chat/completions';

async function getText(name, goal) {
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

  try {
    const result = await axios.post(apiUrl, params, { headers });
    const message = result.data.choices[0].message.content;
    return message;
  } catch (error) {
    console.error(error.response ? error.response.data : error.message);
    throw error;
  }
}
  /*axios.post(apiUrl, params, { headers })
    .then(result => {
      const message = result.data.choices[0].message.content;
      return message;
    })
    .catch(error => {
      console.error(error.response ? error.response.data : error.message);
    });*/



/*
(async () => {
  try {
    const message = await getText("daniel", "gym");
    console.log(message);
  } catch (error) {
    console.error('Failed to get text:', error);
  }
})();
*/