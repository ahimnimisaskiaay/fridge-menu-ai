type Props = {
  value: string
  onChange: (value: string) => void
  onSend: () => void
}

export const ChatInput = ({ value, onChange, onSend }: Props) => {
  return (
    <div className="flex gap-2">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="食材を入力してください"
        className="flex-1 border rounded px-2 py-1 text-sm"
      />
      <button
        onClick={onSend}
        className="bg-blue-500 text-white rounded px-4 py-1 text-sm"
      >
        送信
      </button>
    </div>
  )
}
