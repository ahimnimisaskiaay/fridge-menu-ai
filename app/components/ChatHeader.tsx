import { Menu } from 'lucide-react'

// TODO:ワイヤーフレームに寄せる、メニューの実装
export default function ChatHeader() {
  return (
    <div className="sticky top-0 z-10 bg-base-300 h-[53px] flex items-center justify-between px-4">
      <h1
        className="text-[20px] font-normal flex-1 text-center -ml-5 font-[Noto Sans Devanagari]"
        style={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}
      >
        今日はなに食べよ？
      </h1>
      <Menu className="w-5 h-5 m-5 text-primary-content" />
    </div>
  )
}
