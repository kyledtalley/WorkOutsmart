import React, { useState, useContext } from "react"
import {
	View,
	Text,
	TextInput,
	Button,
	ScrollView,
	StyleSheet,
} from "react-native"
import { Picker } from "@react-native-picker/picker"
import { WorkoutContext } from "../context/WorkoutContext"

const WorkoutScreen = () => {
	const { workouts, addWorkoutDay, addLiftToWorkout } =
		useContext(WorkoutContext)
	const [dayType, setDayType] = useState("")
	const [dayName, setDayName] = useState("")
	const [liftName, setLiftName] = useState("")
	const [setsReps, setSetsReps] = useState("")
	const [maxWeight, setMaxWeight] = useState("")

	const handleAddWorkoutDay = () => {
		if (dayType.trim() === "" || dayName.trim() === "") return
		addWorkoutDay(dayType, { name: dayName, lifts: [] })
		setDayName("")
	}

	const handleAddLift = () => {
		if (
			dayType.trim() === "" ||
			dayName.trim() === "" ||
			liftName.trim() === "" ||
			setsReps.trim() === "" ||
			maxWeight.trim() === ""
		)
			return
		const newLift = {
			name: liftName,
			setsReps,
			maxWeight: parseInt(maxWeight),
		}
		addLiftToWorkout(dayType, dayName, newLift)
		setLiftName("")
		setSetsReps("")
		setMaxWeight("")
	}

	return (
		<ScrollView style={styles.container}>
			<Text style={styles.title}>Create a new workout day</Text>
			<TextInput
				style={styles.input}
				placeholder="Workout Day Type (e.g., Push, Pull)"
				value={dayType}
				onChangeText={setDayType}
			/>
			<TextInput
				style={styles.input}
				placeholder="Workout Day Name"
				value={dayName}
				onChangeText={setDayName}
			/>
			<Button title="Add Workout Day" onPress={handleAddWorkoutDay} />

			{dayType && workouts[dayType] && workouts[dayType].length > 0 ? (
				<>
					<Text style={styles.title}>
						Add a new lift to an existing workout day
					</Text>
					<Picker
						selectedValue={dayName}
						onValueChange={(itemValue) => setDayName(itemValue)}
						style={styles.picker}
					>
						{workouts[dayType].map((day) => (
							<Picker.Item
								key={day.name}
								label={day.name}
								value={day.name}
							/>
						))}
					</Picker>
					<TextInput
						style={styles.input}
						placeholder="Lift Name"
						value={liftName}
						onChangeText={setLiftName}
					/>
					<TextInput
						style={styles.input}
						placeholder="Sets/Reps"
						value={setsReps}
						onChangeText={setSetsReps}
					/>
					<TextInput
						style={styles.input}
						placeholder="Max Weight"
						value={maxWeight}
						onChangeText={setMaxWeight}
					/>
					<Button title="Add Lift" onPress={handleAddLift} />
				</>
			) : (
				<Text>
					No workout days available for this type. Please create a new
					workout day.
				</Text>
			)}
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: 20,
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
	},
	input: {
		borderWidth: 1,
		borderColor: "#ccc",
		padding: 10,
		marginVertical: 10,
	},
	picker: {
		height: 50,
		width: "100%",
		marginVertical: 10,
	},
})

export default WorkoutScreen
