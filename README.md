# AI献立提案アプリ開発構想

## 目的・背景

- 冷蔵庫の食材を登録しておくと、AIがメニュー（献立）を提案してくれるWebアプリを開発したい。
- 入力は「追加：たまご」のような自然文形式で、チャット風UIを想定。
- 既存サービスは多いが、自作してポートフォリオに活かすことが目的。
- 開発スピードはゆっくりめ。まずはMVP（最小構成）で始めたい。

---

## 使用技術スタック（MVP前提）

| 分類             | 技術 / ツール              | 用途                       |
| ---------------- | -------------------------- | -------------------------- |
| フロント         | Next.js（App Router）      | ページ構成、ルーティング   |
| スタイリング     | Tailwind CSS               | UIスタイル設計             |
| UIコンポーネント | shadcn/ui                  | 入力欄・ボタン・カードなど |
| 状態管理         | useState / useEffect       | 食材リストなどの状態保持   |
| AI連携           | OpenAI Chat Completion API | 献立の自動提案             |
| データ保存       | localStorage（MVP想定）    | 食材の保存（簡易実装）     |
| 自動デプロイ     | GitHub + Vercel            | コミットで自動デプロイ     |

---

## 開発ステップとロードマップ

### フェーズ0：準備

- OpenAI APIキーを取得（https://platform.openai.com/account/api-keys）
- GitHubに新規リポジトリを作成（例：`fridge-menu-ai`）
- `npx create-next-app@latest` でプロジェクト作成
- GitHubと連携して初期コミット＆Push
- Vercelにインポートして自動デプロイ設定
  - 環境変数 `OPENAI_API_KEY` を設定

### フェーズ1：最小構成の機能実装

1. チャット形式での食材登録UI
2. 食材一覧表示（状態保持）
3. GPTを使った献立提案
4. 提案結果のチャット形式での表示
5. localStorageを使ったデータ保存

---

## 拡張アイデア

- 食材に消費期限や購入日などを追加
- 栄養バランス・カロリー制限などの条件指定
- お気に入りレシピ保存機能
- Firebase Authなどによるユーザー認証
- DALL·Eによるレシピ画像生成
- モバイル対応やPWA化

---

## ファイル構成

- app/
  - page.tsx （メイン画面）
  - api/
    - gpt/
      - route.ts （GPT API呼び出し）
- components/
  - ChatInput.tsx （入力欄コンポーネント）
  - IngredientList.tsx （食材リスト表示）
  - MenuResult.tsx （GPTの返答表示）
- lib/
  - openai.ts （OpenAIクライアント処理）
- utils/
  - promptBuilder.ts （プロンプト生成関数）

---

## UI設計（Figma）

[Figma UI設計リンク](https://www.figma.com/design/m19PjQG1RqZNrEM2cmHKFS/UI?node-id=0-1&t=15hFKB5F5AMIVsMC-1)

---

## 現在の進捗状況

- プロジェクト初期化済（create-next-app）
- README作成済／GitHub公開済
- MVP機能の実装に着手予定
