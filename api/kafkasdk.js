const { Kafka } = require("kafkajs");
const kafka = new Kafka({
  clientId: "twitter",
  brokers: ["localhost:9092"],
});

class KafkaSdk {
  async newMessage(messages) {
    const producer = kafka.producer();

    await producer.connect();
    await producer
      .send({
        topic: "test-twitter-topic",
        messages,
      })
      .catch((err) => {
        throw err;
      });

    await producer.disconnect();
  }
}

module.exports = new KafkaSdk();
