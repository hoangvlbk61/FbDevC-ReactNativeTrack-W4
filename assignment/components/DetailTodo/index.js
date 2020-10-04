/** @format */

import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

export default (props) => {
	console.log("============= props", props);
	const { title, content, idx } = props.route.params;
	return (
		<View style={styles.container}>
			<View>
				<Text style={styles.title}>
					{idx + 1 + ". "}
					{title ? "ACTIVE" : "COMPLETED"}
				</Text>
			</View>
			<View>
				<Text style={styles.content}>{content}</Text>
			</View>
		</View>
	);
};
