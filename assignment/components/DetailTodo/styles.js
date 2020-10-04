/** @format */

import { StyleSheet, Dimensions } from "react-native";

const windowHeight = Dimensions.get("window").height;


export default StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
        justifyContent: "center",
        height: windowHeight - 120
	},
	title: {
		fontSize: 16,
		fontWeight: "500",
	},
	content: {
		fontSize: 24,
		fontWeight: "500",
	},
});
