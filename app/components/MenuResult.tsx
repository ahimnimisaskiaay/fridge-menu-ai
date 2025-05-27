type Props = {
  text: string
}

export const MenuResult = ({ text }: Props) => {
  return (
    <div className="bg-green-100 p-4 rounded space-y-2 text-sm whitespace-pre-wrap">
      <p>{text}</p>
    </div>
  )
}
