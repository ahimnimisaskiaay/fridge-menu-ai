'use client'

type Menu = {
  title: string
  steps: string[]
  note: string
}

type Props = {
  menus: Menu[]
}

export function MenuResult({ menus }: Props) {
  if (!menus?.length) return null

  return (
    <div className="space-y-4">
      {menus.map((menu, idx) => (
        <div key={idx} className="bg-gray-100 rounded-lg p-4 shadow-sm">
          <h2 className="font-semibold text-base mb-2">🍽 {menu.title}</h2>

          <ul className="list-disc list-inside text-sm space-y-1 mb-2">
            {menu.steps.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ul>

          <p className="text-xs text-gray-600">💡 補足：{menu.note}</p>
        </div>
      ))}
    </div>
  )
}
