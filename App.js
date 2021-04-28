import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

const Logo = () => <Text>Lalala</Text>;

const HomeScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Text>Open up App.js to start working on your app!</Text>
			<Button
				title="Ir a detalle"
				onPress={() => navigation.navigate('Details', { title: 'Usuario 1', lala: 'lala', year: 20921 })}
			/>
			{/* <Button title="Ir a detalle" onPress={() => navigation.openDrawer()} /> */}
			<StatusBar style="auto" />
		</View>
	);
};

HomeScreen.navigationOptions = {
	drawerIcon: ({ tintColor }) => {
		return <Ionicons name="ios-information-circle" size={25} color={tintColor} />;
	},
	headerTitle: () => <Logo />,
	headerRight: () => <Button title="Soy lala" onPress={() => alert('lalalala')} color="#222" />,
};

const SingleHome = ({ navigation }) => {
	const [count, setCount] = useState(0);

	const increment = () => setCount(count + 1);

	useEffect(() => {
		navigation.setParams({ increment });
	}, [count]);

	const lala = navigation.getParam('lala', '');
	return (
		<View style={styles.container}>
			<Text>SingleHome {count}</Text>
			{/* <Button title="Ir a inicio" onPress={() => navigation.goBack()} /> */}
			{/* <Button title="Actualizar parametros" onPress={() => navigation.setParams({ title: 'Usuario 2' })} /> */}
			<Button title="Volver" onPress={() => navigation.navigate('MyModal')} />
			<StatusBar style="auto" />
		</View>
	);
};

SingleHome.navigationOptions = ({ navigation }) => {
	return {
		title: navigation.getParam('title', 'Cargando...'),
		headerRight: () => <Button title="more 1" onPress={navigation.getParam('increment')} />,
	};
};

// const AppNavigator = createDrawerNavigator(
const AppNavigator = createSwitchNavigator(
	{
		Home: {
			screen: HomeScreen,
		},
		Details: {
			screen: SingleHome,
		},
	},
	{
		initialRouteName: 'Home',
	}
);

/*
////////////////////////////////
Configuration for router with tabs
////////////////////////////////
*/
// const AppNavigator = createBottomTabNavigator(
// 	{
// 		Home: {
// 			screen: HomeScreen,
// 		},
// 		Details: {
// 			screen: SingleHome,
// 		},
// 	},
// 	{
// 		initialRouteName: 'Home',
// 		defaultNavigationOptions: ({ navigation }) => ({
// 			tabBarIcon: ({ focused, horizontal, tintColor }) => {
// 				const { routeName } = navigation.state;
// 				let iconName;
// 				switch (routeName) {
// 					case 'Home':
// 						iconName = `ios-information-circle${focused ? '' : '-outline'}`;
// 						break;
// 					default:
// 						iconName = `ios-options`;
// 						break;
// 				}
// 				return <Ionicons name={iconName} size={20} tintColor={tintColor} />;
// 			},
// 			tabBarOptions: {
// 				activeTintColor: navigation.state.routeName == 'Home' ? '#e91e63' : 'orange',
// 				inactiveTintColor: '#dddd',
// 				labelStyle: {
// 					fontSize: 16,
// 				},
// 				style: {
// 					backgroundColor: '#fec',
// 				},
// 			},
// 		}),
// 	}
// );

/*
////////////////////////////////
Configuration for router with stack
////////////////////////////////
*/
// const AppNavigator = createStackNavigator(
// 	{
// 		Home: {
// 			screen: HomeScreen,
// 		},
// 		Details: {
// 			screen: SingleHome,
// 		},
// 	},
// 	{
// 		initialRouteName: 'Home',
// 		defaultNavigationOptions: {
// 			headerStyle: {
// 				backgroundColor: '#fec',
// 			},
// 			headerTintColor: '#555',
// 			headerTitleStyle: {
// 				fontWeight: '900',
// 			},
// 		},
// 	}
// );

// const RookStack = createStackNavigator(
// const RookStack = createBottomTabNavigator(
const RookStack = createSwitchNavigator(
	{
		Main: AppNavigator,
		MyModal: () => <Text>Lalalalal</Text>,
	},
	{
		mode: 'modal',
		headerMode: 'none',
	}
);

export default createAppContainer(RookStack);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
