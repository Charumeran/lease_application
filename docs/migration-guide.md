# Supabaseデータベースマイグレーションガイド

このガイドでは、Vercelと連携しているSupabaseデータベースにPrismaマイグレーションを適用する手順を説明します。

## 前提条件

- Prismaのスキーマファイル(`prisma/schema.prisma`)が設定されていること
- マイグレーションファイルが`prisma/migrations`ディレクトリに存在すること
- 必要な環境変数が設定されていること

## マイグレーション手順

### 1. 環境変数の確認

Supabaseの接続情報を含む環境変数が必要です。本番環境の場合は`.env.production`ファイルに以下の形式で記述されています：

```
POSTGRES_URL="postgres://postgres.[PROJECT_ID]:[PASSWORD]@aws-0-ap-northeast-1.pooler.supabase.com:6543/postgres?sslmode=require&supa=base-pooler.x"
POSTGRES_PRISMA_URL="postgres://postgres.[PROJECT_ID]:[PASSWORD]@aws-0-ap-northeast-1.pooler.supabase.com:6543/postgres?sslmode=require&supa=base-pooler.x"
POSTGRES_URL_NON_POOLING="postgres://postgres.[PROJECT_ID]:[PASSWORD]@aws-0-ap-northeast-1.pooler.supabase.com:5432/postgres?sslmode=require"
DATABASE_URL="postgres://postgres.[PROJECT_ID]:[PASSWORD]@aws-0-ap-northeast-1.pooler.supabase.com:5432/postgres?sslmode=require"
```

### 2. マイグレーション用の環境変数設定

PgBouncer（コネクションプール）を使用している場合、マイグレーション実行時には直接接続用のURLを使用する必要があります。
そのため、特にマイグレーション用の環境変数ファイルを作成します：

```bash
echo 'DATABASE_URL="postgres://postgres.[PROJECT_ID]:[PASSWORD]@aws-0-ap-northeast-1.pooler.supabase.com:5432/postgres?sslmode=require"' > .env.migration
```

注意: 上記のURLはNON_POOLING接続用のURLです（ポート5432）。PgBouncer接続用のURL（ポート6543）ではマイグレーションが正常に動作しない場合があります。

### 3. マイグレーションの実行

dotenv-cliを使って、作成した環境変数ファイルを使用してマイグレーションを実行します：

```bash
# dotenv-cliのインストール（初回のみ）
npm install -D dotenv-cli

# マイグレーションの実行
npx dotenv-cli -e .env.migration -- prisma migrate deploy
```

### 4. マイグレーション結果の確認

マイグレーションが正常に実行されたことを確認するには以下のコマンドを実行します：

```bash
# マイグレーションステータスの確認
npx dotenv-cli -e .env.migration -- prisma migrate status

# データベースからスキーマを取得して確認
npx dotenv-cli -e .env.migration -- prisma db pull --print
```

## 簡易コマンド（NPMスクリプト）

マイグレーション作業を簡略化するために、package.jsonに以下のスクリプトが追加されています：

```bash
# 開発環境でのマイグレーション作成
npm run migrate:dev

# 本番環境（.env.production）設定を使用したマイグレーション
npm run migrate:prod

# マイグレーション用の一時ファイルを作成して実行（値を適宜変更してください）
npm run migrate:prepare
```

`migrate:prepare`コマンドを使用する前に、スクリプト内のプレースホルダー（`[PROJECT_ID]`や`[PASSWORD]`）を実際の値に置き換えてください。

## トラブルシューティング

### マイグレーションが動作しない場合

1. 環境変数の形式が正しいことを確認（特に引用符 `"` の閉じ忘れに注意）
2. プール接続ではなく直接接続用のURLを使用していることを確認（ポート5432）
3. sslmodeが必要な場合は `?sslmode=require` が指定されていることを確認

### 環境変数エラーが発生する場合

`env("DATABASE_URL")`のエラーが表示される場合、`.env.migration` ファイルが正しく読み込まれているか確認してください。 