import React, {
  Component,
} from 'react';

import {
  PropTypes,
  StyleSheet,
  ScrollView,
  View,
  Dimensions,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

const lineHeight = 18;

export default class DiscussBannerScrollView extends Component {

	static propTypes = {
		items: React.PropTypes.arrayOf(React.PropTypes.shape({
      title: React.PropTypes.string,
			subtitle: React.PropTypes.string,
			imageURL: React.PropTypes.string,
			onPress: React.PropTypes.func,
		})),
	};

	constructor(props) {
	  super(props);

	  this.state = {
	  	items: this.props.items,
	  };
	}

	onScrollEndDrag = e => {
    const { contentOffset } = e.nativeEvent;

    if (contentOffset.x < (this.state.items.length-1.8) * (220+12) && (this.state.items.length !== 1 && this.state.items.length !== 0)) {
	    if (contentOffset.x%(220+12) < 116) {
	    	this.refs.scrollView.scrollTo({x: contentOffset.x-contentOffset.x%(220+12), y: 0, animated: true});
	    } else {
	    	this.refs.scrollView.scrollTo({x: (contentOffset.x-contentOffset.x%(220+12))+(220+12), y: 0, animated: true});
	    }
	  } else {
	  	if (contentOffset.x >= (this.state.items.length-1.8) * (220+12) && (this.state.items.length !== 1 && this.state.items.length !== 0)) {
	  		this.refs.scrollView.scrollTo({x: (this.state.items.length*(220+12) - Dimensions.get('window').width)+12, y: 0, animated: true});
	  	} else if (this.state.items.length === 1 || this.state.items.length === 0) {
	  		this.refs.scrollView.scrollTo({x: 0, y: 0, animated: true});
	  	}
	  }
  }

	render() {

		var bannerItems = [];

		for (var i = 0; i < this.state.items.length; i++) {
			bannerItems.push(
				<BannerItem
					key={"bannerItem"+i}
					index={i}
					imageURL={this.state.items[i].imageURL}
          title={this.state.items[i].title}
					subtitle={this.state.items[i].subtitle}
					onPress={this.state.items[i].onPress}
				/>
			);
		}

		if (bannerItems.length === 0) {
			bannerItems.push(
				<View key='empty' style={[itemStyles.containerFirst, itemStyles.itemSize, itemStyles.emptyHolder]}>
					<Text>
						这里什么也没有
					</Text>
				</View>
			);
		}

		if (bannerItems.length === 1) {
			bannerItems.push(
				<View key='holder' style={[itemStyles.container, itemStyles.itemSize, itemStyles.emptyItem]}/>
			);
		}

		return(
			<ScrollView
				ref='scrollView'
				centerContent={false}
				onScrollEndDrag={this.onScrollEndDrag}
				contentContainerStyle={scrollViewStyles.scrollView}
				horizontal={true}
				showsHorizontalScrollIndicator={false}
			>
				{bannerItems}
			</ScrollView>
		);
	}

}

class BannerItem extends Component {

	constructor(props) {
	  super(props);

	  this.state = {
	  	singleLine: false,
	  };
	}

	onTextLayout(event){
		// 计算行高
		let lh = event.nativeEvent.layout.height;
		if (Math.abs(lh - lineHeight) < 2) {
			// 单行
			this.setState({singleLine: true});
		} else {
			// 两行
			this.setState({singleLine: false});
		}
  }

	render() {
		return (
			<TouchableOpacity style={(this.props.index===0)?itemStyles.containerFirst:itemStyles.container} onPress={() => this.props.onPress(this.props.index)}>
				<Image
	        style={[itemStyles.bgImage,itemStyles.itemSize]}
	        source={{uri: this.props.imageURL}}
          borderRadius={8}
	      >
		      <View style={[itemStyles.maskView,itemStyles.itemSize]}>
		      	<Text style={(this.state.singleLine)?[itemStyles.titleText, {marginTop: 26+lineHeight/2}]:itemStyles.titleText} numberOfLines={2} onLayout={this.onTextLayout.bind(this)}>
		      		{this.props.title}
		      	</Text>
		      	<Text style={itemStyles.subtitleText} numberOfLines={1}>
		      		{this.props.subtitle}
		      	</Text>
		      </View>
        </Image>
			</TouchableOpacity>
		);
	}
}

const itemStyles = StyleSheet.create({
	emptyItem: {
		backgroundColor: 'transparent',
	},
	emptyHolder: {
		backgroundColor: 'red',
	},
	container: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		marginRight: 12,
	},
	containerFirst: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		marginRight: 12,
		marginLeft: 12,
	},
	maskView: {
		borderRadius: 8,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: 'rgba(0,0,0,0.6)',
	},
	bgImage: {
		borderRadius: 8,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},
	itemSize: {
		height: 121,
		width: 220,
	},
	titleText: {
		lineHeight: lineHeight,
		marginTop: 26,
		marginLeft: 24,
		marginRight: 24,
		color: 'white',
		backgroundColor: 'transparent',
		fontSize: 14,
		textShadowOffset: {width: 0.1, height: 0.1},
		textShadowColor: "black",
		textShadowRadius: 2.2,
	},
	subtitleText: {
		marginBottom: 26,
		color: 'white',
		backgroundColor: 'transparent',
		fontSize: 12,
		textShadowOffset: {width: 0.1, height: 0.1},
		textShadowColor: "black",
		textShadowRadius: 2.3,
	},
});

const scrollViewStyles = StyleSheet.create({
	scrollView: {
		flexDirection: 'row',
		alignItems: 'center',
	},
});
