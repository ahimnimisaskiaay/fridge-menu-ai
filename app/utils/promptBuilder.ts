export function buildPrompt(ingredients: string): string {
  return `
  あなたはプロの料理研究家です。
  以下の食材を使って、家庭で簡単に作れる夕食の献立を1つ提案してください。
  
  【食材一覧】
  ${ingredients}
  
  提案フォーマット：
  - メニュー名：
  - 簡単な作り方（手順3ステップ以内）：
  - 補足（足りない材料があれば）：
    `.trim()
}
