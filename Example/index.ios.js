/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import BannerLite from 'react-native-banner-lite';
// import BannerLite from './test';

export default class Example extends Component {
  render() {
    return (
      <View style={styles.container}>
        <BannerLite
          items={[
            {
              title: "守望先锋的火爆是否意味着MOBA类游戏的衰退期已到",
              subtitle: "呵呵呵呵呵",
              imageURL: "http://imagscdn.3234.com/pictures/0/01/r4UhVf.jpg",
              onPress:(index)=>{console.log("tap"+index)}
            },
            {
              title: "🐶🐶🐶",
              subtitle: "呵呵呵呵呵",
              imageURL: "http://pic69.nipic.com/file/20150610/21067407_235515103000_2.jpg",
              onPress:(index)=>{console.log("tap"+index)}
            },
            {
              title: "独立游戏在中国的发展前景怎么样",
              subtitle: "呵呵呵呵呵",
              imageURL: "http://a4.att.hudong.com/35/64/01300000276819133197645554930.jpg",
              onPress:(index)=>{console.log("tap"+index)}
            },
            {
              title: "魔兽世界",
              subtitle: "呵呵呵呵呵",
              imageURL: "http://pic.58pic.com/58pic/12/56/90/04A58PICsKy.jpg",
              onPress:(index)=>{console.log("tap"+index)}
            },
            {
              title: "哈哈哈哈😜😜😜😜😜😜😜😜😜😜😜😜😜😜😜😜😜",
              subtitle: "呵呵呵呵呵",
              imageURL: "http://h.hiphotos.baidu.com/image/h%3D200/sign=3a225a4129a4462361caa262a8227246/30adcbef76094b36fbaf3bd6aacc7cd98d109dcf.jpg",
              onPress:(index)=>{console.log("tap"+index)}
            },
          ]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Example', () => Example);
