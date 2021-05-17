require("dotenv").config();
const Twitter = require("node-tweet-stream");
const KafkaSdk = require("./kafkasdk");

var CURRENT_TOPIC_STREAM = "javascript";

const twitterClient = new Twitter({
  consumer_key: process.env.API_KEY,
  consumer_secret: process.env.API_SECRET_KEY,
  token: process.env.ACCESS_TOKEN,
  token_secret: process.env.ACCESS_TOKEN_SECRET,
});

twitterClient.on("tweet", function (tweet) {
  const { user, text, created_at } = tweet;
  // console.log("tweet received: ", { name: user.name, text, created_at });
  KafkaSdk.newMessage([
    { value: JSON.stringify({ name: user.name, text, created_at }) },
  ]);
});

twitterClient.on("error", function (err) {
  console.log("Oh no");
});

class TwitterController {
  constructor() {
    if (CURRENT_TOPIC_STREAM) {
      this.setTopic(CURRENT_TOPIC_STREAM);
    }
  }

  setTopic(topic) {
    if (CURRENT_TOPIC_STREAM) {
      twitterClient.untrack(CURRENT_TOPIC_STREAM);
    }
    CURRENT_TOPIC_STREAM = topic;
    twitterClient.track(topic);
  }
}

module.exports = new TwitterController();
