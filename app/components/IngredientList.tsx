type Props = {
  items: string[]
}
// TODO:要整備　食材登録時に使用予定
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
