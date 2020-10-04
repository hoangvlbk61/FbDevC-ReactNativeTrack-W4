/** @format */

import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import { StatusBar } from "expo-status-bar";

import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

import CompleteScreen from "./pages/Complete";
import ActiveScreen from "./pages/Active";
import AllTodoList from "./pages/AllToDoList";

const Tab = createBottomTabNavigator();

const routeIcons = {
	Complete: "check",
	All: "plussquare",
	Active: "staro",
};

export default function App() {
	const [todoList, setTodoList] = useState([]);
	return (
		<View style={{ flex: 1 }}>
			<StatusBar style={"dark"} />
			<View style={{ height: 25 }} />
			<NavigationContainer>
				<Tab.Navigator
					screenOptions={({ route }) => ({
						tabBarIcon: ({ focused }) => (
							<AntDesign
								name={routeIcons[route.name]}
								size={24}
								color={focused ? "blue" : "grey"}
							/>
						),
					})}
					tabBarOptions={{
						activeTintColor: "blue",
						inactiveTintColor: "grey",
					}}
				>
					<Tab.Screen name="Complete" component={CompleteScreen} />
					<Tab.Screen
						name="All"
						children={() => (
							<AllTodoList
								todoList={todoList}
								setTodoList={setTodoList}
							/>
						)}
					/>
					<Tab.Screen name="Active" component={ActiveScreen} />
				</Tab.Navigator>
			</NavigationContainer>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		// alignItems: "center",
	},
	authorText: {
		fontSize: 20,
		fontWeight: "bold",
	},
	messageContainer: {
		borderWidth: 1,
		borderColor: "grey",
		marginTop: 10,
		padding: 5,
	},
});
