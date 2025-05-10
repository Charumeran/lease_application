# リースシェア - 建設資材リースプラットフォーム

リースシェアは、建設会社間で余剰資材をリースし合うことで、資材の有効活用とコスト削減を実現するプラットフォームです。

## 機能概要

- **ユーザー認証**: 会社とユーザーの登録、ログイン機能
- **資材管理**: 自社の建設資材の登録、編集、削除
- **資材検索**: カテゴリや条件による他社の資材検索
- **リース機能**: 資材のリースリクエスト、承認、返却管理
- **チャット機能**: 取引先とのメッセージ交換

## 技術スタック

- **フロントエンド**: Next.js、Tailwind CSS
- **バックエンド**: Next.js API Routes
- **データベース**: PostgreSQL
- **認証**: NextAuth.js
- **ORM**: Prisma

## ディレクトリ構造

```
/
├── prisma/               # Prismaスキーマと移行ファイル
├── public/               # 静的ファイル
├── src/
│   ├── app/              # Next.jsページとAPIルート
│   │   ├── api/          # バックエンドAPI
│   │   ├── auth/         # 認証関連ページ
│   │   ├── dashboard/    # ダッシュボード
│   │   ├── inventory/    # 在庫管理
│   │   ├── search/       # 資材検索
│   │   └── chat/         # チャット機能
│   ├── components/       # 再利用可能なコンポーネント
│   ├── lib/              # ユーティリティと共通ロジック
│   └── generated/        # Prisma生成ファイル
└── docker-compose.yml    # Docker設定
```

## セットアップ手順

### 環境変数の設定

`.env`ファイルを作成し、以下の内容を設定してください：

```
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/lease_db"
NEXTAUTH_SECRET="lease-app-secret-key-123"
NEXTAUTH_URL="http://localhost:3000"
```

### データベースの起動

PostgreSQLをDockerで起動します：

```bash
# データベース用ディレクトリの作成
mkdir -p .docker/postgres

# Dockerコンテナの起動
docker-compose up -d
```

### データベースの初期化

```bash
# Prismaマイグレーションの実行
npx prisma migrate dev

# データベースのスキーマ生成
npx prisma generate

# サンプルデータの投入
npm run seed
```

### アプリケーションの起動

```bash
# 開発サーバーの起動
npm run dev
```

ブラウザで http://localhost:3000 にアクセスしてください。

### テストアカウント

以下のアカウントでログインできます：

- **会社1**: 
  - メールアドレス: yamada@example.com
  - パスワード: password123
- **会社2**: 
  - メールアドレス: sato@example.com
  - パスワード: password123

## DBeaver でのデータベース確認方法

1. [DBeaver](https://dbeaver.io/)をインストールしてください。
2. DBeaverを起動し、「新しい接続」をクリックします。
3. PostgreSQLを選択し、以下の接続情報を入力します：
   - ホスト: localhost
   - ポート: 5432
   - データベース: lease_db
   - ユーザー名: postgres
   - パスワード: postgres
4. 「接続テスト」ボタンをクリックして接続を確認してください。
5. 接続が成功したら「完了」をクリックします。
6. データベース接続が確立され、テーブル一覧を見ることができます。

## 開発ガイドライン

### APIエンドポイント

主なAPIエンドポイントは以下の通りです：

- 認証: `/api/auth/[...nextauth]`
- ユーザー: `/api/users`
- カテゴリ: `/api/categories`
- 資材: `/api/equipments`
- リース: `/api/leases`
- チャット: `/api/chat`

### APIリクエスト例

#### 資材検索

```
GET /api/equipments?category=カテゴリID&search=検索キーワード
```

#### リースリクエスト

```
POST /api/leases
Content-Type: application/json

{
  "equipmentId": "資材ID",
  "quantity": 5,
  "startDate": "2023-06-01",
  "endDate": "2023-06-30",
  "notes": "メモ"
}
```

## ライセンス

このプロジェクトはMITライセンスの下で提供されています。

## Gitリポジトリのセットアップとデプロイ

### Gitリポジトリの初期化

```bash
# リポジトリの初期化
git init

# 最初のコミット
git add .
git commit -m "初期コミット：リースシェアプロジェクト"

# リモートリポジトリの設定（GitHubの場合）
git remote add origin https://github.com/ユーザー名/lease-share.git
git branch -M main
git push -u origin main
```

### Vercelへのデプロイ

1. [Vercel](https://vercel.com/)にアクセスしてアカウントを作成またはログインします。

2. 「New Project」をクリックしてプロジェクトを作成します。

3. GitHubのリポジトリをインポートします。
   - GitHubアカウントを連携していない場合は連携します。
   - リポジトリ一覧から「lease-share」を選択します。

4. プロジェクト設定を構成します：
   - **Project Name**: `lease-share`（任意）
   - **Framework Preset**: `Next.js`（自動検出されるはず）
   - **Root Directory**: `./`

5. 環境変数を設定します：
   ```
   DATABASE_URL=（本番環境のPostgreSQL接続文字列）
   NEXTAUTH_SECRET=（本番環境用のシークレットキー）
   NEXTAUTH_URL=（デプロイされるURLに合わせて設定、例：https://lease-share.vercel.app）
   ```

6. 「Deploy」ボタンをクリックしてデプロイを開始します。

### 本番環境でのデータベース設定

Vercelでの本番運用には以下の選択肢があります：

1. **Vercel Postgres**: Vercelダッシュボードから「Storage」>「Postgres」で設定可能です。
   - プロジェクトに接続し、環境変数が自動設定されます。

2. **外部PostgreSQLサービス**:
   - [Supabase](https://supabase.com/)
   - [Railway](https://railway.app/)
   - [Neon](https://neon.tech/)
   - [Amazon RDS](https://aws.amazon.com/rds/)

3. デプロイ後、以下のコマンドを実行してマイグレーションとシードデータを適用します：
   ```bash
   # 本番環境にマイグレーションを適用
   npx prisma migrate deploy
   
   # 必要に応じてシードデータを投入
   # 注意：本番環境のシードデータは開発環境と異なる可能性があります
   # NODE_ENV=production npm run seed
   ```

### 継続的デプロイ

Vercelは、GitHubリポジトリに変更がプッシュされると自動的にデプロイを行います。

- `main`ブランチへのプッシュ：本番環境にデプロイ
- Pull Requestの作成：プレビュー環境にデプロイ

詳細な設定はVercelのダッシュボードから「Settings」>「Git」で変更できます。
