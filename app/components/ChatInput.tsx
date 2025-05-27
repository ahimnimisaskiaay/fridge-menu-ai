'use client'
import { useState } from 'react'

// TODO:ワイヤーフレームに寄せる
export default function ChatInput({
  onSend,
}: {
  onSend: (input: string) => void
}) {
  const [input, setInput] = useState('')

  const handleSend = () => {
    if (!input.trim()) return
    onSend(input)
    setInput('')
  }

  const handleClear = () => setInput('')

  return (
    <div className="sticky bottom-0 z-10 bg-base-100 px-4 pt-3 pb-6 border-t flex flex-col gap-2">
      <textarea
        placeholder="冷蔵庫の中の食材を入力"
        className="textarea textarea-bordered w-full text-sm leading-snug resize-none rounded-md"
        style={{ fontFamily: 'Noto Sans Devanagari' }}
        rows={2}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div className="flex justify-end gap-2">
        <button className="btn btn-sm px-4" onClick={handleClear}>
          クリア
        </button>
        <button className="btn btn-sm px-4" onClick={handleSend}>
          送信
        </button>
      </div>
    </div>
  )
}
