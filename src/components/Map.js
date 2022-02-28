import { Dimensions, PermissionsAndroid, Platform, View } from "react-native";
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";
import { useEffect, useState } from "react";

const Map = () => {
	const [ region, setRegion ] = useState(null);
	const [ markers, setMarks ] = useState([]);

	const getLocationAsync = async() => {
		let { status } = await Location.getForegroundPermissionsAsync();

		if(status === 'granted') {
			const location = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.High });
			const { latitude, longitude } = location.coords;

			setRegion({
				latitude: latitude,
				longitude: longitude,
				latitudeDelta: 0.0922,
				longitudeDelta: 0.0421,
			});

		} else {
			return {
				status: 503,
				errorMessage: 'Permission to access location was denied'
			};
		}
	};

	useEffect(() => {
		getLocationAsync();
	}, []);

	const newMarker = e => {
		let dados = {
			key: markers.length,
			coords: {
				latitude: e.nativeEvent.coordinate.latitude,
				longitude: e.nativeEvent.coordinate.longitude
			},
			pinColor: "#C21111"
		};

		setRegion({
			latitude: e.nativeEvent.coordinate.latitude,
			longitude: e.nativeEvent.coordinate.longitude,
			latitudeDelta: 0.0922,
			longitudeDelta: 0.0421,
		});

		setMarks(oldArray => [ ...oldArray, dados ]);
	};

	return (
		<View>
			<MapView
				onMapReady={ () => {
					Platform.OS === 'android' &&
					PermissionsAndroid.request(
						PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
					).then(() => console.log("USUÁRIO ACITOU"));
				} }
				style={ { width: '100%', height: '100%' } }
				region={ region }
				zoomEnabled={ true }
				minZoomLevel={ 17 }
				showsUserLocation={ true }
				loadingEnabled={ true }
				onPress={ (e) => newMarker(e) }
			>
				{ markers.map(mark =>
					( <Marker
						key={ mark.key }
						coordinate={ mark.coords }
						pinColor={ mark.pinColor }
					/> )
				) }
			</MapView>
		</View>
	);
};

export default Map;