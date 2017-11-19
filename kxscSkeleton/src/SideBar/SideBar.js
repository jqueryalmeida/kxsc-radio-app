import React from "react";
import { AppRegistry, Image, StatusBar, StyleSheet } from "react-native";
import { Container, Content, Text, List, ListItem } from "native-base";
const routes = ["Home", "Chat", "Profile"];
export default class SideBar extends React.Component {
  render() {
    return (
      <Container style={styles.background}>
        <Content style={styles.contentStyle}>
         <Image style={styles.iconRadio} source={require('./radio.png')}></Image>
         {/* <Image
            source={{
              uri: "https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/react-navigation/img/drawer-cover.png"
            }}
            style={{
              height: 120,
              alignSelf: "stretch",
              justifyContent: "center",
              alignItems: "center"
            }}>
            <Image
              square
              style={{ height: 80, width: 70 }}
              source={{
                uri: "https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/react-navigation/img/logo.png"
              }}
            />
          </Image>*/}
          <List
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                  style={styles.listStyle}
                  button
                  onPress={() => this.props.navigation.navigate(data)}>
                  <Text style={styles.textStyle}>{data}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#000000',
  },
  iconRadio:
  {
    height: 120,
    width: 130,
    alignSelf: 'center',
  },
  contentStyle:
  {
    marginTop: 20,
  },
  textStyle: {
    color: '#FFFFFF',
  },
  listStyle: {
    backgroundColor: '#000000',
  },
});

