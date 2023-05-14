import React, { useState } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'

const IngredientInput = () => {
  const [ingredient, setIngredient] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    // APIルートにデータを送信
    const response = await fetch('/api/submitIngredients', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ingredients: ingredient }),
    })

    if (response.ok) {
      const data = await response.json()
      console.log(data)

      // フォームをリセット
      setIngredient('')
    } else {
      console.error('Error:', response.statusText)
    }
  }

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <TextField
        label="材料を入力"
        value={ingredient}
        onChange={(e) => setIngredient(e.target.value)}
      />
      <Button type="submit" variant="contained">
        送信
      </Button>
    </Box>
  )
}

export default IngredientInput
