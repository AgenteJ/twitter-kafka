import React from 'react';
import {Kafka} from 'kafkajs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { TextInput, StyleSheet, Image, Text, View } from 'react-native';
import { Header, SocialIcon } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Card from './components/card';


export default async function App() {
  const kafka = new Kafka({
    clientId: "twitter",
    brokers: ["192.168.100.10:9092"],
  });

  const consumer = kafka.consumer({ groupId: "test-group" });

  await consumer.connect();
  await consumer.subscribe({
    topic: "test-twitter-topic",
    fromBeginning: true,
  });

  consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      const { name, text, created_at } = JSON.parse(message.value);
      console.log({
        name,
        text,
        created_at,
      });
    },
  });
  const [text, onChangeText] = React.useState(null);

  return (
    <View style={{ flex: 1, backgroundColor: "#FFFF" }}>
      <SafeAreaProvider>
        <Header
          backgroundColor="#8DD0ED"
          justifyContent="center"
          alignItems="center"
          leftComponent={
            <Icon name="twitter" size={35} color="#FFFF" style={{left: 5, marginTop: 1}} />
          }
          centerComponent={
            <>
              <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                placeholder="Pesquise por um tópico"
                width={250}
                placeholderTextColor={"#B5B5B5"}
                value={text}
              />
            </>
          }
          rightComponent={
            <Icon name="search" size={28} color="#FFFF" style={{right: 10, marginTop: 2}} />
          }
        />
        <Card />
      </SafeAreaProvider>
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    borderRadius: 30,
    margin: 2,
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: "#FFF",
    backgroundColor: "#FFF",
    color: "#000"
  },
});
