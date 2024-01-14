const express = require("express");
const router = express.Router();
const twilio = require('twilio');
require('dotenv').config();

const client = new twilio('AC46611c888d6b4e1996df88a656a91817', 'e2e7d0019e848d8d9d9857b1d8ee7d87');

router.post(


)
/** 
router.post("/app", (req, res) => {
  client.messages.create({
    body: "You will suffer!",
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
  });
});

module.exports = router;
*/