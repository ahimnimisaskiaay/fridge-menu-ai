import { openai } from '@/lib/openai'
import { NextRequest, NextResponse } from 'next/server'
import { buildPrompt } from '@/app/utils/promptBuilder'

export async function POST(req: NextRequest) {
  const { message } = await req.json()

  const prompt = buildPrompt(message)

  const chat = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: prompt }],
  })

  const reply = chat.choices[0].message.content
  return NextResponse.json({ reply })
}
