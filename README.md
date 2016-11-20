[![npm](https://img.shields.io/npm/v/react-native-banner-lite.svg?style=flat)]()
[![Gemnasium](https://img.shields.io/gemnasium/mathiasbynens/he.svg)]()
[![npm](https://img.shields.io/npm/l/express.svg)]()

# react-native-banner-lite

A banner component with adsorption. Compatible with iOS and Android.

## Roadmap

> see: [ROADMAP.md](ROADMAP.md)

## Preview

![](/Preview/p01.gif)

**[Play in the React Native Playground](https://rnplay.org/apps/-Ks6Lg)**

## Getting Started

### Installation

```bash
$ npm i react-native-banner-lite --save
```

### Usage

- Install `react-native` first

```bash
$ npm i react-native -g
```

- Initialization of a react-native project

```bash
$ react-native init myproject
```

- Import `react-native-banner-lite` in the `index.ios.js` or `index.android.js`

```javascript
import BannerLite from 'react-native-banner-lite';
```

- Add the `BannerLite` component in your code

```javascript
<BannerLite
  items={[
    {
      title: "Hello",
      subtitle: "World",
      imageURL: "http://h.hiphotos.baidu.com/image/h%3D200/sign=3a225a4129a4462361caa262a8227246/30adcbef76094b36fbaf3bd6aacc7cd98d109dcf.jpg",
      onPress:(index)=>{console.log("tap"+index)}
    },
    {
      title: "How",
      subtitle: "R U",
      imageURL: "http://a4.att.hudong.com/35/64/01300000276819133197645554930.jpg",
      onPress:(index)=>{console.log("tap"+index)}
    },
    {
      title: "🐶🐶🐶",
      subtitle: "呵呵呵呵呵",
      imageURL: "http://pic69.nipic.com/file/20150610/21067407_235515103000_2.jpg",
      onPress:(index)=>{console.log("tap"+index)}
    },
  ]}
/>
```

- Run the project

```bash
$ react-native run-ios
```

or

```bash
$ react-native run-android
```

See the example code in the Example folder.

### Parameters

| Name  |  Type   | Description        |
| :---- | :-----: | :----------------- |
| items | `array` | banner items array |

The items is an array of objects. The object contains 4 props.

| Name     |   Type   | Description                           |
| :------- | :------: | :------------------------------------ |
| title    | `string` | title of the banner item              |
| subtitle | `string` | subtitle of the banner item           |
| imageURL | `string` | background image of the banner item   |
| onPress  |  `func`  | callback of the banner item tap event |

## Contribution

- [@talisk](mailto:talisk@talisk.cn)

## Questions

Welcome to send Email to me, or open issue on the repository.

The project follow to the MIT license. Welcome contributions.
