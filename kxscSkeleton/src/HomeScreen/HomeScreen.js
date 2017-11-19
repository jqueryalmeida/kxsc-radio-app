import React from "react";
import { View, StatusBar, StyleSheet, Image } from "react-native";
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem } from "native-base";
export default class HomeScreen extends React.Component {
  render() {
    return (
      <Container style={styles.background}>
        <Header iosBarStyle="light-content" style={styles.headerDesign}>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Image style={styles.iconRec} source={require('./sidebar_icon.png')}></Image>
            </Button>
          </Left>
          <Body>
            <Title style={styles.test}></Title>
          </Body>
          <Right>
            <Image style={styles.iconTT} source={require('./LP.png')}></Image>
          </Right>
        </Header>
        <Content style={styles.contentContainer}>
          <Image style={styles.iconRadio} source={require('./radio.png')}></Image>
          <Body>
            <Text style={styles.textStyle}>Now Playing: Show with DJ -- Song by Artist</Text>
          </Body>
          <View style={styles.viewStyle}>
            <Button full rounded dark
              style={{marginTop: 60}}
              onPress={() => this.props.navigation.navigate("Chat")}>
               <Image style={styles.iconHits} source={require('./prog.jpg')}></Image>
            </Button>
          </View>
          <View style={styles.viewStyle}>
            <Button full rounded dark
              style={{marginTop: 60}}
              onPress={() => this.props.navigation.navigate("Chat")}>
               <Image style={styles.iconHits} source={require('./hits.jpg')}></Image>
            </Button>
          </View>
          <View style={styles.viewStyle}>
            <Button full rounded dark
              style={{marginTop: 60}}
              onPress={() => this.props.navigation.navigate("Profile")}>
               <Image style={styles.iconHits} source={require('./new.png')}></Image>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

//style sheet works!! just make sure adding the
//correct style components and whatnot
const styles = StyleSheet.create({
  background: {
    backgroundColor: '#000000',
  },
  headerDesign: {
    backgroundColor: '#000000',
    height: 65,
    borderBottomWidth: 0,
  },
  iconTT: {
    height: 45,
    width: 45,
  },
  iconRec:
  {
    height: 40,
    width: 35,
  },
  iconRadio:
  {
    height: 120,
    width: 130,
    alignSelf: 'center',
  },
  iconHits:
  {
    height: 150,
    resizeMode: 'contain',
  },
  contentContainer:
  {
    flex: 1,
    flexDirection: 'column',
  },
  textStyle: {
    color: '#FFFFFF'
  },
  viewStyle:
  {
    height: 150,
  },
});

