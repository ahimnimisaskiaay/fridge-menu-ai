'use client'

import { useState } from 'react'
import { MenuResult, IngredientList, ChatInput } from '@/app/components'

export default function Page() {
  const [input, setInput] = useState('')
  const [reply, setReply] = useState<string | null>(null)

  const handleSend = async () => {
    if (!input.trim()) return

    const res = await fetch('/api/gpt', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input }),
    })

    const data = await res.json()
    setReply(data.reply)
    setInput('')
  }

  return (
    <main className="max-w-md mx-auto p-4 space-y-4">
      <IngredientList items={input ? [input] : []} />
      {reply && <MenuResult text={reply} />}
      <ChatInput value={input} onChange={setInput} onSend={handleSend} />
    </main>
  )
}
