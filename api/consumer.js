const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  clientId: "twitter",
  brokers: ["localhost:9092"],
});

async function run() {
  const consumer = kafka.consumer({ groupId: "test-group" });

  await consumer.connect();
  await consumer.subscribe({
    topic: "test-twitter-topic",
    fromBeginning: true,
  });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      const { name, text, created_at } = JSON.parse(message.value);
      console.log({
        name,
        text,
        created_at,
      });
    },
  });
}
run();
