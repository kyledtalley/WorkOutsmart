import React from "react"
import Ionicons from "@expo/vector-icons/Ionicons"

export default function TabBarIcon({ route, focused, color, size }) {
	let iconName

	if (route.name === "Home") {
		iconName = focused ? "home" : "home-outline"
	} else if (route.name === "Workouts") {
		iconName = focused ? "fitness" : "fitness-outline"
	} else if (route.name === "Charts") {
		iconName = focused ? "stats-chart" : "stats-chart-outline"
	}

	return <Ionicons name={iconName} size={size} color={color} />
}
