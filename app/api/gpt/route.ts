// app/api/gpt/route.ts
import { openai } from '@/lib/openai'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { message } = await req.json()

  const chat = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: message }],
  })

  const reply = chat.choices[0].message.content
  return NextResponse.json({ reply })
}
