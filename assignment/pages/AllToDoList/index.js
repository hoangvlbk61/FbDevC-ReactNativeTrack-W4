/** @format */

import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import List from "./list";
import Detail from "./detail";

const StackNavigation = createStackNavigator();
const AllTodoList = (props) => {
	const { todoList, setTodoList } = props;
	const navigate = () => {

	}
	return (
		<StackNavigation.Navigator initialRouteName="List">
			<StackNavigation.Screen
				name="List"
				children={({navigation}) => (
					<List todoList={todoList} setTodoList={setTodoList} navigation={navigation}/>
				)}
			/>
			<StackNavigation.Screen name="Detail" component={Detail} />
		</StackNavigation.Navigator>
	);
};

export default AllTodoList;
