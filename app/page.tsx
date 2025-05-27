'use client'
import { useState } from 'react'
import ChatHeader from './components/ChatHeader'
import ChatMessages from './components/ChatMessages'
import ChatInput from './components/ChatInput'

export type Menu = {
  title: string
  steps: string[]
  note: string
}

export type Message =
  | { role: 'user'; text: string }
  | { role: 'assistant'; menu: Menu }

export default function HomePage() {
  const [messages, setMessages] = useState<Message[]>([])

  const handleSend = async (input: string) => {
    const newMessages: Message[] = [...messages, { role: 'user', text: input }]
    setMessages(newMessages)

    try {
      const res = await fetch('/api/gpt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      })
      const raw = await res.json()
      const data: Menu[] = raw.reply

      const newAssistantMessages: Message[] = data.map(
        (menu): Message => ({
          role: 'assistant',
          menu,
        })
      )
      setMessages([...newMessages, ...newAssistantMessages])
    } catch (error) {
      console.error('API Error:', error)
    }
  }

  return (
    <div className="flex flex-col h-screen max-w-sm w-full mx-auto bg-base-100 shadow-md border border-gray-200 rounded-md overflow-hidden">
      <ChatHeader />
      <ChatMessages messages={messages} />
      <ChatInput onSend={handleSend} />
    </div>
  )
}
