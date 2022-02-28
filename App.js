import React from 'react';
import { StyleSheet, View } from 'react-native';
import Map from "./src/components/Map";
import { Container } from "./src/layout";

export default function App() {
	return (
		<Container>
			<Map />
		</Container>
	);
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		marginTop: '1rem',
	},
});
