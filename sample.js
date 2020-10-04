  // "main": "node_modules/expo/AppEntry.js",


/** @format */

import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Text>Home Screen</Text>
			<Button
				title="Detail screen"
				onPress={() => {
					navigation.navigate("detail");
				}}
			></Button>
			<StatusBar style="auto" />
		</View>
	);
};

const DetailScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Text>Back to Home</Text>
			<Button
				title="Back to home"
				onPress={() => {
					navigation.popToTop();
				}}
			></Button>
			<Button
				title="Go Back"
				onPress={() => {
					navigation.goBack();
				}}
			></Button>
			<StatusBar style="auto" />
		</View>
	);
};

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					options={{ title: "Home" }}
					name="home"
					component={HomeScreen}
				/>
				<Stack.Screen
					options={{ title: "Detail" }}
					name="detail"
					component={DetailScreen}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
