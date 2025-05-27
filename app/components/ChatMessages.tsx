'use client'
import { useEffect, useRef } from 'react'
import type { Message } from '../page'

// TODO:プロンプトの修正が必要、メッセージのアイコン追加
export default function ChatMessages({ messages }: { messages: Message[] }) {
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  return (
    <div className="flex-1 overflow-y-auto px-4 py-2 bg-base-100">
      {messages.map((m, i) => (
        <div
          key={i}
          className={`${
            m.role === 'user' ? 'chat-end mr-[24px]' : 'chat-start ml-[24px]'
          } mb-[16px]`}
        >
          <div
            className={`max-w-[85%] p-[10px] text-sm shadow-sm ${
              m.role === 'user'
                ? 'bg-primary text-white self-end'
                : 'bg-base-200 self-start'
            } rounded-[10px]`}
            style={{ fontFamily: 'Noto Sans Devanagari' }}
          >
            {'menu' in m ? (
              <>
                <p className="font-bold mb-1">【{m.menu.title}】</p>
                <ol className="list-decimal list-inside text-sm">
                  {m.menu.steps.map((s, idx) => (
                    <li key={idx}>{s}</li>
                  ))}
                </ol>
                <p className="mt-1 text-xs text-gray-500">
                  【補足】{m.menu.note}
                </p>
              </>
            ) : (
              <span className="text-sm">{m.text}</span>
            )}
          </div>
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  )
}
