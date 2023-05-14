import axios from 'axios'

const chatGPT = async (prompt) => {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/engines/text-davinci-002/completions',
      {
        prompt,
        max_tokens: 150,
        n: 1,
        stop: null,
        temperature: 0.8,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      },
    )

    return response.data.choices[0].text
  } catch (error) {
    console.error(error.response.data)
    return 'エラーが発生しました。'
  }
}

export default chatGPT
