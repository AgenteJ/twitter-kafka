import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { TextInput, StyleSheet, Image, View, Text } from 'react-native';
import { Header } from 'react-native-elements';
import { Container, UserContainer, UserName, TextLight, CardView, RowFlex, Description } from './style';

export default function Card() {
  return (
    <Container>
      <CardView>
        <RowFlex>
          <UserContainer>
            <UserName>Gabriel Topzera</UserName>
            <TextLight>@gabrielpepes</TextLight>
          </UserContainer>
          <TextLight>16/05/2021</TextLight>
        </RowFlex>
        <Description>
          Fala galera, clique no link na bio caso você queira aprender a programar, arrasta pra cima!
        </Description>
      </CardView>
    </Container>
  );
}