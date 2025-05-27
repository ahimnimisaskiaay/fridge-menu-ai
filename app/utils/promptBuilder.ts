// TODO: あまり精度が良くないので、要改善(メニューや調理方法のバリエーションに偏りがある)
export function buildPrompt(ingredients: string): string {
  const prompt = `
以下のような構造でJSONを返してください。メニューを3つ返してください。

[
  {
    "title": "にら玉炒め",
    "steps": ["にらを切る", "卵を溶く", "一緒に炒める"],
    "note": "ごま油で炒めると香ばしくなります"
  }
]
`
  return `あなたは料理の専門家です。以下の材料を使って、簡単で美味しい料理を提案してください。材料: ${ingredients}\n${prompt}`
}
