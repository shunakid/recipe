import { collection, addDoc } from 'firebase/firestore'
import db from '../../../firebase'
import chatGPT from '@/utils/chatGPT'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { ingredients } = req.body

    try {
      // ChatGPT APIにリクエストを送信してレシピを生成
      const prompt = `以下の材料を使って料理レシピを生成してください: ${ingredients}`
      const recipe = await chatGPT(prompt)

      // Firestoreにデータを保存
      const docRef = await addDoc(collection(db, 'recipes'), {
        ingredients,
        recipe,
      })

      res
        .status(200)
        .json({ message: '材料が送信されました', data: ingredients, recipe })
    } catch (error) {
      res.status(500).json({ message: 'データの保存に失敗しました', error })
    }
  } else {
    // POST以外のリクエストは許可しない
    res.status(405).json({ message: '許可されていないメソッドです' })
  }
}
