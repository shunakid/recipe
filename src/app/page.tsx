'use client'
import './global.css'
import React, { useState, useEffect } from 'react'
import { collection, query, onSnapshot } from 'firebase/firestore'
import db from '../../firebase'
import IngredientInput from '../components/IngredientInput'
import Recipe from '../components/Recipe'

const Home = () => {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, 'recipes')),
      (snapshot) => {
        const data = []
        snapshot.forEach((doc) => {
          data.push({ ...doc.data(), id: doc.id })
        })
        setRecipes(data)
      },
    )

    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <div>
      <IngredientInput />
      {recipes.map((recipe) => (
        <Recipe key={recipe.id} recipe={recipe} />
      ))}
    </div>
  )
}

export default Home
