import { MealDTO } from '@dtos/MealDTO'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { MEAL_STORAGE } from './storageConfig'

export async function storageMealGetAll() {
  const storage = await AsyncStorage.getItem(MEAL_STORAGE)

  const meals: MealDTO[] = storage ? JSON.parse(storage) : []

  return meals
}

export async function storageMealGet() {
  const storage = await AsyncStorage.getItem(MEAL_STORAGE)

  const meal: MealDTO = storage ? JSON.parse(storage) : {}

  return meal
}

export async function storageMealSave(newMeal: MealDTO) {
  const storedMeals = await storageMealGetAll()

  const storage = JSON.stringify([...storedMeals, newMeal])

  await AsyncStorage.setItem(MEAL_STORAGE, storage)
}

export async function storageMealRemove() {
  await AsyncStorage.removeItem(MEAL_STORAGE)
}
