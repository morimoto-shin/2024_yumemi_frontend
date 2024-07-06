# 2024 ゆめみフロントエンドコーディング試験

## 概要
このプロジェクトは、都道府県別の総人口推移グラフを表示するSPA(Single Page Application)を構築するためのものです。
主に[RESAS API](https://opendata.resas-portal.go.jp/)を利用してデータを取得し、[Highcharts](https://www.highcharts.com/)を使用してグラフを描画します。
### ページURL

[都道府県人口ダッシュボード](https://morimoto-shin.github.io/2024_yumemi_frontend/)

## 技術スタック

| 項目            | 技術                  |
|-----------------|-----------------------|
| フレームワーク  | Nuxt                  |
| 言語            | TypeScript            |
| スタイル        | Scss                  |
| リンター        | ESLint                |
| フォーマッター  | Prettier              |
| チャートライブラリ | HighChart          |
| ホスティング    | GitHub Pages          |
| API             | RESAS                 |

## デザイン
このプロジェクトでは、Atomic Designを採用しています。

## セットアップ

### インストール手順
1. リポジトリをクローンします。
    ```bash
    git clone https://github.com/morimoto-shin/2024_yumemi_frontend.git
    ```
2. 依存関係をインストールします。
    ```bash
    cd your-repo-name
    npm install
    ```
    または
    ```bash
    cd your-repo-name
    yarn install
    ```
3. 開発サーバーを起動します。
    ```bash
    npm run dev
    ```
    または
    ```bash
    yarn dev
    ```
4. ブラウザで [http://localhost:3000/2024_yumemi_frontend/](http://localhost:3000/2024_yumemi_frontend/) にアクセスして、アプリケーションを確認します。

## ビルド
プロダクション用にプロジェクトをビルドするには、以下のコマンドを使用します。
```bash
npm run build
npm run start
