/** @format */

import { StyleSheet, Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default StyleSheet.create({
	backgroundImage: {
		flex: 1,
		resizeMode: "cover",
		justifyContent: "center",
		backgroundColor: "gray",
		// opacity: 0.4,
	},
	container: {
		margin: 30,
		padding: 30,
		backgroundColor: "gray",
		opacity: 0.8,
		borderRadius: 20,
		display: "flex",
		alignItems: "center",
	},
	listContainer: {
		color: "white",
		height: windowHeight - 250,
		opacity: 1,
	},
	listTitle: {
		fontSize: 30,
		color: "white",
		fontWeight: "600",
	},
	itemStyle: {
		display: "flex",
		borderRadius: 10,
		borderWidth: 2,
		padding: 5,
		margin: 5,
	},
	itemComplete: {
		backgroundColor: "blue",
	},
	itemActive: {
		backgroundColor: "green",
	},
	itemText: { fontSize: 16, color: "black" },

	inputContainer: {
		borderColor: "purple",
		borderWidth: 2,
		width: windowWidth - 100,
		borderRadius: 20,
		backgroundColor: "#c0dff0",
		padding: 10,
		display: "flex",
		alignItems: "center",
	},
	inputStyle: {
		fontSize: 20,
		backgroundColor: "white",
		borderRadius: 15,
		padding: 10,
		width: windowWidth - 120,
	},
	buttonSubmit: {
		width: windowWidth - 120,
		alignItems: "center",
		height: 40,
		borderRadius: 15,
		borderColor: "purple",
		borderWidth: 2,
		marginTop: 5,
	},
	buttonText: {
		fontSize: 24,
		fontWeight: "bold",
	},
});
