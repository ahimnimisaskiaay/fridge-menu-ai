import { Menu } from 'lucide-react'

// TODO:ワイヤーフレームに寄せる、メニューの実装
export default function ChatHeader() {
  return (
    <div className="navbar sticky top-0 z-10 bg-base-300 h-[53px] flex items-center justify-between px-4">
      <div className="flex-none w-[40px] y-[40px]" />

      {/* タイトル */}
      <div className="flex-1">
        <h1
          className="text-[20px] font-normal flex-1 text-center -ml-5 font-[Noto Sans Devanagari]"
          style={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}
        >
          今日はなに食べよ？
        </h1>
      </div>

      {/* ハンバーガーメニュー */}
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  )
}
