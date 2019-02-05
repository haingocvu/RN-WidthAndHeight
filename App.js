import React, { Component } from 'react'
import { View, StyleSheet, Text, SafeAreaView } from 'react-native'

const style = StyleSheet.create({
	container: {
		flex: 1
	},
	flex1: {
		flex: 1,
		backgroundColor: 'powderblue'
	},
	flex2: {
		flex: 2,
		backgroundColor: 'skyblue'
	},
	flex3: {
		flex: 3,
		backgroundColor: 'steelblue'
	}
})

export default class App extends Component {
	render() {
		return (
			<SafeAreaView style={style.container}>
				<View style={style.flex1}></View>
				<View style={style.flex2}></View>
				<View style={style.flex3}></View>
				<Text>AAA</Text>
			</SafeAreaView>
		)
	}
}
