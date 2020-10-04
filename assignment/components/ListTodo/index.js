/** @format */

import React, { useCallback, useState } from "react";
import {
	View,
	ImageBackground,
	Text,
	FlatList,
	TextInput,
	TouchableOpacity,
} from "react-native";

import styles from "./styles";

const Item = ({ item, index }) => {
	const { content, isActive, triggerChangeType } = item;
	return (
		<View
			style={[
				styles.itemStyle,
				isActive ? styles.itemActive : styles.itemComplete,
			]}
		>
			<TouchableOpacity onPress={() => triggerChangeType(index)}>
				<Text style={[styles.itemText]}>
					{" "}
					{index}. {" " + content}
				</Text>
			</TouchableOpacity>
		</View>
	);
};

const ListToDoComp = (props) => {
	const { todoList, setTodoList, navigation } = props;

	const [newToDo, setNewToDo] = useState("");
	console.log("todoList", todoList);
	const triggerChangeType = (idx) => () => {
		const elm = todoList[idx];
		navigation.navigate("Detail", {
			idx,
			title: elm.isActive,
			content: elm.content,
		});
		if (elm) {
			const newTodoList = [
				...todoList.slice(0, idx),
				{ ...elm, isActive: !elm.isActive },
				...todoList.slice(idx + 1),
			];
			setTodoList(newTodoList);
		}
	};
	const handlePressAddButton = useCallback(() => {
		setTodoList([
			...todoList,
			{
				content: newToDo,
				isActive: true,
			},
		]);
		setNewToDo("");
	}, [newToDo, todoList, setTodoList]);

	return (
		<ImageBackground
			source={require("../../assets/background.jpg")}
			style={styles.backgroundImage}
		>
			<View style={styles.container}>
				<View style={styles.listContainer}>
					<Text style={styles.listTitle}>
						{" "}
						To-do list ({todoList && todoList.length}){" "}
					</Text>
					{/* <Text> {JSON.stringify(todoList)} </Text> */}
					<FlatList
						data={todoList.map((e, idx) => ({
							...e,
							triggerChangeType: triggerChangeType(idx)
						}))}
						renderItem={Item}
					/>
				</View>
				<View style={styles.inputContainer}>
					{/* <View >
					</View> */}
					<TextInput
						style={styles.inputStyle}
						onChangeText={setNewToDo}
						value={newToDo}
					/>
					<View>
						<TouchableOpacity
							onPress={handlePressAddButton}
							style={styles.buttonSubmit}
						>
							<Text style={styles.buttonText}> Add </Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</ImageBackground>
	);
};

export default ListToDoComp;
