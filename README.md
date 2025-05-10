# リースシェア - 建設資材リースプラットフォーム

建設会社間での資材のリース・シェアリングを可能にするプラットフォームです。

## 機能

- ユーザー認証（会社アカウント管理）
- 建設資材の在庫管理
- 利用可能な資材の検索
- リース申請・管理
- 企業間チャット

## 技術スタック

- Next.js
- TypeScript
- Tailwind CSS
- Prisma
- PostgreSQL
- NextAuth.js

## 開発環境のセットアップ

1. リポジトリをクローン
```bash
git clone https://github.com/your-username/lease_application.git
cd lease_application
```

2. 依存関係をインストール
```bash
npm install
```

3. `.env`ファイルを作成し、必要な環境変数を設定
```
DATABASE_URL="postgresql://postgres:password@localhost:5432/lease_db"
NEXTAUTH_SECRET="your-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"
```

4. データベースマイグレーションを実行
```bash
npx prisma migrate dev
```

5. サンプルデータの投入
```bash
npm run seed
```

6. 開発サーバーを起動
```bash
npm run dev
```

## Vercelへのデプロイ方法

1. [Vercel](https://vercel.com)にアクセスし、アカウントを作成またはログインします

2. 「New Project」をクリックし、GitHubリポジトリをインポートします

3. 環境変数を設定します:
   - `DATABASE_URL`: PostgreSQLデータベースの接続URL（Vercel Postgresまたは外部サービス）
   - `NEXTAUTH_SECRET`: 認証用のシークレットキー（ランダムな文字列）
   - `DATABASE_URL`が外部サービスの場合は、そのサービスのIPアドレス制限等を確認してください

4. デプロイ設定を確認し、「Deploy」ボタンをクリックします

5. デプロイ完了後、以下のコマンドを実行してデータベースをセットアップします:
   ```bash
   # Vercel CLIを使用する場合
   vercel env pull .env.production.local
   npx prisma migrate deploy
   npx prisma db seed
   ```

## Supabaseでの本番用データベース設定

1. **Supabaseアカウントの作成**:
   - [Supabase](https://supabase.com/) にアクセスし、GitHubアカウントでサインインします

2. **新しいプロジェクトを作成**:
   - ダッシュボードから「New project」をクリック
   - 組織を選択（必要に応じて新しい組織を作成）
   - プロジェクト名を設定（例: `lease-db`）
   - 安全なデータベースパスワードを設定
   - 近いリージョンを選択（例: 東京）
   - 「Create new project」をクリック

3. **Vercelとの連携**:
   - Vercelダッシュボードでプロジェクトを選択
   - 「Settings」→「Integrations」→「Browse Marketplace」
   - 「Supabase」を検索して選択
   - 「Add Integration」をクリック
   - VercelアカウントとSupabaseプロジェクトを選択して連携

4. **環境変数の取得とセットアップ**:
   ```bash
   npx vercel link
   npx vercel env pull
   ```
   
5. **マイグレーションとシードデータの適用**:
   ```bash
   npx prisma migrate deploy
   npm run seed
   ```

## 開発環境と本番環境の切り替え

### 環境変数の管理

1. **開発環境用の環境変数**:
   - ローカル開発では`.env.local`または`.env.development`ファイルを使用
   - 例:
     ```
     DATABASE_URL="postgresql://postgres:password@localhost:5432/lease_db"
     NEXTAUTH_URL="http://localhost:3000"
     NEXTAUTH_SECRET="dev-secret-key"
     ```

2. **本番環境用の環境変数**:
   - Vercelの環境変数設定で管理
   - 本番環境の環境変数を取得するには:
     ```bash
     npx vercel env pull --environment=production
     ```
   - これにより`.env.production.local`ファイルが作成されます

### データベース操作の環境切り替え

1. **開発環境のデータベース操作**:
   
   - **スキーマ変更の適用と開発**:
     ```bash
     # スキーマの変更を開発環境に適用
     npx prisma migrate dev --name 変更の名前
     
     # Prismaクライアントの更新
     npx prisma generate
     
     # データベースのリセットと再構築（開発時のみ）
     npx prisma migrate reset
     ```
   
   - **データの操作（開発環境）**:
     ```bash
     # Prisma Studioでデータを視覚的に操作
     npx prisma studio
     
     # シードデータの投入
     npm run seed
     ```

2. **本番環境のデータベース操作**:
   
   - **本番環境用のマイグレーション**:
     ```bash
     # 本番環境の環境変数を取得
     npx vercel env pull --environment=production
     
     # 本番環境にマイグレーションを適用（破壊的変更には注意）
     DATABASE_URL=本番環境のURL npx prisma migrate deploy
     
     # または.env.production.localから読み込む場合
     dotenv -e .env.production.local -- npx prisma migrate deploy
     ```
   
   - **本番データの安全な操作**:
     ```bash
     # 本番環境のデータをダンプ（バックアップ）
     pg_dump -h ホスト名 -U ユーザー名 -d データベース名 > backup.sql
     
     # 本番環境でのシードデータ投入（必要な場合のみ）
     DATABASE_URL=本番環境のURL npm run seed
     ```

3. **Supabaseの管理と操作**:
   
   - **Supabaseダッシュボードでの操作**:
     - テーブルデータの閲覧・編集: Table Editor機能
     - SQLの直接実行: SQL Editor機能
     - バックアップの取得: Database設定からBackup機能
   
   - **Supabase CLIを使った操作**:
     ```bash
     # Supabase CLIのインストール
     npm install -g supabase
     
     # ログイン
     supabase login
     
     # データベースへの接続情報取得
     supabase db remote commit
     ```

### デプロイフローの管理

1. **開発からステージング、本番へのフロー**:
   ```bash
   # 開発ブランチでの作業
   git checkout -b feature/新機能

   # 変更をコミット
   git add .
   git commit -m "新機能の追加"

   # ステージング環境へのプッシュ（プルリクエストを作成）
   git push origin feature/新機能

   # Vercelでプレビューデプロイが自動的に行われます

   # 本番環境へのデプロイ（mainブランチへのマージ後）
   git checkout main
   git merge feature/新機能
   git push origin main
   ```

2. **環境ごとのビルドと実行**:
   ```bash
   # 開発環境
   npm run dev

   # ステージング環境用ビルド
   NODE_ENV=staging npm run build
   npm start

   # 本番環境用ビルド
   NODE_ENV=production npm run build
   npm start
   ```

## テストアカウント

- 管理者ユーザー:
  - Email: admin@example.com
  - パスワード: password123

- 一般ユーザー:
  - Email: user@example.com
  - パスワード: password123

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
