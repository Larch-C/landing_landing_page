import { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const filePath = path.join(process.cwd(), 'public', 'data', 'checkpoint.json')
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const data = JSON.parse(fileContents)
    
    res.status(200).json(data)
  } catch (error) {
    console.error('Error reading checkpoint.json:', error)
    res.status(500).json({ error: 'Failed to load data' })
  }
}