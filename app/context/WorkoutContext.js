import React, { createContext, useState, useMemo } from "react"

export const WorkoutContext = createContext()

export const WorkoutProvider = ({ children }) => {
	const [workouts, setWorkouts] = useState({})

	const addWorkoutDay = (dayType, workoutDay) => {
		setWorkouts((prevWorkouts) => ({
			...prevWorkouts,
			[dayType]: [...(prevWorkouts[dayType] || []), workoutDay],
		}))
	}

	const addLiftToWorkout = (dayType, dayName, lift) => {
		setWorkouts((prevWorkouts) => ({
			...prevWorkouts,
			[dayType]: prevWorkouts[dayType].map((day) =>
				day.name === dayName
					? { ...day, lifts: [...day.lifts, lift] }
					: day
			),
		}))
	}

	const contextValue = useMemo(
		() => ({
			workouts,
			addWorkoutDay,
			addLiftToWorkout,
		}),
		[workouts]
	)

	return (
		<WorkoutContext.Provider value={contextValue}>
			{children}
		</WorkoutContext.Provider>
	)
}
