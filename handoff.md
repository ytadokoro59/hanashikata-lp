# 話し方教室アナグラム LP制作 引き継ぎメモ

## 目的

このプロジェクトは「話し方教室アナグラム」のLP制作です。

目的は、国分寺・八王子・立川エリア周辺で、対面マンツーマンの話し方レッスンを検討している人に向けて、45分無料体験の申し込みを獲得することです。

講師は現役司会者です。

主な訴求は以下です。

- 人前で話すのが苦手な方へ
- 現役司会者が教える話し方教室
- 対面マンツーマン
- 国分寺・八王子・立川エリア対応
- 45分無料体験
- 発声だけでなく、声・表情・目線・話の組み立て・本番想定練習まで対応

## 公開URL

GitHub Pagesで関係者確認用URLを発行済みです。

公開URL：
https://ytadokoro59.github.io/hanashikata-lp/

GitHubリポジトリ：
ytadokoro59/hanashikata-lp

ブランチ：
main

## 現在のファイル構成

GitHub Pages用に以下の構成で公開中です。

- index.html
- style.css
- script.js
- images/
- .gitignore

images内の主なファイル：

- images/instructor-hero.jpg
  - PC版KV用の横長画像
- images/instructor-hero-sp.jpg
  - スマホ版KV用の縦長トリミング画像
- images/logo-anagram.png
  - ヘッダーロゴ
- images/lesson-scene.jpg
- images/trial-lesson.jpg
- images/speech-structure-board.jpg
- images/instructor-profile.jpg
- images/local-event-mc.jpg
- images/classroom-kokubunji.jpg
- images/classroom-hachioji.jpg

不要・除外推奨：

- .claude/
- nezumi-lp/
- 不使用画像
- 日本語ファイル名の画像類
- 別プロジェクトのファイル

## GitHub Pages設定

GitHub Pagesは有効化済みです。

設定：

- Source: Deploy from a branch
- Branch: main
- Folder: / root

公開URL：
https://ytadokoro59.github.io/hanashikata-lp/

パスは相対パスで確認済みです。

CSS：
href="style.css"

JS：
src="script.js"

画像：
src="images/logo-anagram.png"
url("images/instructor-hero.jpg")

## KVの現状と重要ルール

PC版KVとスマホ版KVは別画像で管理します。

PC版：
images/instructor-hero.jpg

スマホ版：
images/instructor-hero-sp.jpg

KVコピーは変更しません。

人前で話すのが苦手な方へ  
現役司会者が教える話し方教室

CTAも基本変更しません。

- 45分無料体験を予約する
- LINEで相談する

## 最新の修正状況

スマホ版KV調整後にPC版KVで講師の顔が見切れてしまう問題が発生したため、PC版KVの背景画像表示を修正済みです。

修正内容：

- スマホ版KVは `instructor-hero-sp.jpg`
- PC版KVは `instructor-hero.jpg`
- PC版は `@media (min-width: 680px)` で明示的にPC用画像を指定
- PC版の `background-position` は `58% center`
- スマホ版は `center center`
- `background-repeat: no-repeat`
- マージコンフリクトを解消済み
- `.gitignore` を作成済み
- GitHubへpush済み

現在の画像使い分け：

スマホ 〜679px：
instructor-hero-sp.jpg / center center

PC 680px〜：
instructor-hero.jpg / 58% center

## 直近のGit作業

リモートに既存コミットがあったため、マージしてpushしました。

途中で `style.css` にマージコンフリクトが発生しましたが、解消済みです。

対応内容：

- コンフリクトマーカー除去
- CSSコメントの `======` はコンフリクトマーカーではなく区切り線として確認済み
- ベースの重複宣言を整理
- PC側に `background-image: url("images/instructor-hero.jpg")` を明示追加
- スマホ側は `background-image: url("images/instructor-hero-sp.jpg")` に一本化
- push完了済み

コミットメッセージ：
Fix PC hero image position

## 次回再開時にまず確認すること

Claude Code再起動後、まず以下を確認してください。

1. Gitの状態確認

```bash
git status
```

2. リモート確認

```bash
git remote -v
```

3. 最新のmainを取得

```bash
git pull origin main
```

4. GitHub Pagesの表示確認
https://ytadokoro59.github.io/hanashikata-lp/

5. PC版KV確認

- 講師の顔が見切れていないか
- 講師が右側に自然に配置されているか
- 左側コピーが読みやすいか
- マイクを持って話している雰囲気が伝わるか

6. スマホ版KV確認

- スマホ用画像 `instructor-hero-sp.jpg` が表示されているか
- 顔・マイク・手元・上半身が見えるか
- 文字とCTAが読みやすいか
- 画像が繰り返されていないか

### 表示確認時の注意

GitHub Pagesは反映まで数十秒〜数分かかる場合があります。
ブラウザキャッシュが残ることがあるため、確認時はスーパーリロードしてください。

- Windows： Ctrl + F5
- Mac： Command + Shift + R

## 今後の未確定・差し替え予定

今後差し替え・確認予定の要素：

- 講師写真
- 司会中写真
- 教室写真
- 講師プロフィール詳細
- 教室住所・アクセス
- 受付時間
- キャンセル規定
- LINEリンク
- フォーム送信先
- 料金・コース内容の最終確定
- 無料体験の詳細導線

## 関係者共有用メッセージ

関係者にURLを共有するときは、以下の文面を使います。

---

話し方教室LPの確認用URLです。
まだ仮画像・仮文言・未確定情報もありますが、全体の構成や訴求の方向性を確認いただきたいです。

特に見ていただきたい点は以下です。

- 最初に見たときの印象
- 現役司会者が教える安心感が伝わるか
- レッスン内容が分かりやすいか
- 料金やコース内容に違和感がないか
- 無料体験に申し込みたくなる流れになっているか
- 追加した方がよい写真や説明があるか

確認URL： https://ytadokoro59.github.io/hanashikata-lp/

---

## 次回Claude Codeに依頼する場合の最初の指示

以下のように依頼するとよいです。

---

このプロジェクトは「話し方教室アナグラム」のLPです。
GitHub Pagesで以下に公開しています。

https://ytadokoro59.github.io/hanashikata-lp/

まずこの引き継ぎメモを読み、現在のファイル構成・Git状態・公開ページの表示を確認してください。

特に、PC版KVとスマホ版KVは別画像で管理しています。

- PC版： images/instructor-hero.jpg
- スマホ版： images/instructor-hero-sp.jpg

スマホ版KVは現在の見え方を維持してください。
PC版KVは講師の顔が見切れないようにしてください。

作業前に必ず `git status` と `git pull origin main` を確認してください。

---
