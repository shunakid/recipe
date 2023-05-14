// components/Recipe.js
import React from 'react'
import { Card, CardContent, Typography } from '@mui/material'

const Recipe = ({ recipe }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">材料: {recipe.ingredients}</Typography>
        <Typography variant="body1">レシピ: {recipe.recipe}</Typography>
      </CardContent>
    </Card>
  )
}

export default Recipe
