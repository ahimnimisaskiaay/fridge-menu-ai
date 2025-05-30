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
  const [activeTab, setActiveTab] = useState<'menu' | 'ingredients'>('menu')

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
    <main className="flex justify-center min-h-screen bg-gray-100 px-4 py-6">
      <div className="flex flex-col w-full max-w-[393px] h-screen shadow-md border-gray-100  border-10 rounded-md overflow-hidden">
        <ChatHeader />
        <ChatMessages messages={messages} />
        <div>
          <div role="tablist" className="tabs tabs-lift">
            <a
              role="tab"
              className={`tab ${activeTab === 'menu' ? 'tab-active' : ''}`}
              onClick={() => setActiveTab('menu')}
            >
              メニューの提案
            </a>
            <a
              role="tab"
              className={`tab ${activeTab === 'ingredients' ? 'tab-active' : ''}`}
              onClick={() => setActiveTab('ingredients')}
            >
              食材の登録
            </a>
          </div>

          <div className="mt-4">
            {activeTab === 'menu' && (
              <div role="tabpanel" className="p-4">
                <ChatInput onSend={handleSend} isMenu />
              </div>
            )}
            {activeTab === 'ingredients' && (
              <div role="tabpanel" className="p-4">
                <ChatInput onSend={handleSend} />
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
