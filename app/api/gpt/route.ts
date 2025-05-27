import { openai } from '@/lib/openai'
import { NextRequest, NextResponse } from 'next/server'
import { buildPrompt } from '@/app/utils/promptBuilder'

export async function POST(req: NextRequest) {
  const { message } = await req.json()

  const prompt = buildPrompt(message)

  const chat = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: prompt }],
    temperature: 0.7,
  })

  // 返答の content を取得
  const content = chat.choices[0]?.message?.content

  // 安全に JSON.parse（失敗したらエラーレスポンス返す）
  try {
    const parsed = JSON.parse(content || '[]')
    return NextResponse.json({ reply: parsed })
  } catch (e) {
    console.error('GPTレスポンスのJSONパースに失敗:', content)
    return NextResponse.json(
      { error: 'Invalid JSON response from GPT' },
      { status: 500 }
    )
  }
}
