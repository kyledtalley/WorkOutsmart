import "react-native-gesture-handler"
import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { WorkoutProvider } from "./app/context/WorkoutContext"
import BottomTabNavigator from "./app/navigation/BottomTabNavigator"

export default function App() {
	return (
		<WorkoutProvider>
			<NavigationContainer>
				<BottomTabNavigator />
			</NavigationContainer>
		</WorkoutProvider>
	)
}
