import { MealDTO } from '@dtos/MealDTO'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { MEAL_STORAGE } from './storageConfig'

export async function storageMealGetAll() {
  const storage = await AsyncStorage.getItem(MEAL_STORAGE)

  const meals: MealDTO[] = storage ? JSON.parse(storage) : []

  return meals
}

export async function storageMealGet(mealId: string) {
  const storage = await AsyncStorage.getItem(MEAL_STORAGE)

  const meals: MealDTO[] = storage ? JSON.parse(storage) : {}

  const meal = meals.find(({ id }) => id === mealId)

  return meal
}

export async function storageMealSave(newMeal: MealDTO) {
  const storedMeals = await storageMealGetAll()

  const findMealIndex = storedMeals.findIndex((meal) => meal.id === newMeal.id)
  let storage: string

  if (findMealIndex >= 0) {
    storedMeals[findMealIndex] = newMeal
    storage = JSON.stringify(storedMeals)
  } else {
    newMeal.id = new Date().getTime().toString()
    storage = JSON.stringify([...storedMeals, newMeal])
  }

  await AsyncStorage.setItem(MEAL_STORAGE, storage)
}

export async function storageMealRemove(id: string) {
  const storedMeals = await storageMealGetAll()

  const updatedMeals = storedMeals.filter((meal) => meal.id !== id)

  const storage = JSON.stringify(updatedMeals)

  await AsyncStorage.setItem(MEAL_STORAGE, storage)
}
