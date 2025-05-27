type Props = {
  items: string[]
}

export const IngredientList = ({ items }: Props) => {
  if (items.length === 0) return null

  return (
    <div className="bg-gray-50 border p-3 rounded text-sm space-y-1">
      <strong>登録された食材：</strong>
      <ul className="list-disc list-inside">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
