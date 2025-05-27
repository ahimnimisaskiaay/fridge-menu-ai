'use client'

import { useState } from 'react'
import { MenuResult, IngredientList, ChatInput } from '@/app/components'

export default function Page() {
  const [input, setInput] = useState('')
  const [ingredients, setIngredients] = useState<string[]>([])
  const [reply, setReply] = useState<string | null>(null)

  const handleSend = async () => {
    if (!input.trim()) return

    const updatedIngredients = [...ingredients, input.trim()]
    setIngredients(updatedIngredients)
    setInput('')

    const res = await fetch('/api/gpt', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: updatedIngredients.join('、'),
      }),
    })

    const data = await res.json()
    setReply(data.reply)
  }

  return (
    <main className="max-w-md mx-auto p-4 space-y-4">
      <IngredientList items={ingredients} />
      {reply && <MenuResult text={reply} />}
      <ChatInput value={input} onChange={setInput} onSend={handleSend} />
    </main>
  )
}
