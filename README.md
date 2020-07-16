## ■ 目次
- [概要](https://github.com/seeds-yasojima/my-gatsby-project#-%E6%A6%82%E8%A6%81)
- [構築](https://github.com/seeds-yasojima/my-gatsby-project#-%E6%A7%8B%E7%AF%89)
- [ディレクトリ構成](https://github.com/seeds-yasojima/my-gatsby-project#-%E3%83%87%E3%82%A3%E3%83%AC%E3%82%AF%E3%83%88%E3%83%AA%E6%A7%8B%E6%88%90)
- [パッケージ説明](https://github.com/seeds-yasojima/my-gatsby-project#-%E3%83%91%E3%83%83%E3%82%B1%E3%83%BC%E3%82%B8%E8%AA%AC%E6%98%8E)
- [使用CMS](https://github.com/seeds-yasojima/my-gatsby-project#-%E4%BD%BF%E7%94%A8cms%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6)
- [デプロイ](https://github.com/seeds-yasojima/my-gatsby-project#-%E3%83%87%E3%83%97%E3%83%AD%E3%82%A4)
- [展望](https://github.com/seeds-yasojima/my-gatsby-project#-%E5%B1%95%E6%9C%9B)

## ■ 概要
[Webサイト高速化のための 静的サイトジェネレーター活用入門](https://github.com/ebisucom/gatsbyjs-book) を実践した記録<br>
デプロイは、Netlifyとgithubを繋ぎmaster pushで反映<br>
CMSは、[Contentful](https://www.contentful.com/) を使用

### デモサイト
[https://gracious-allen-4a366c.netlify.app/](https://gracious-allen-4a366c.netlify.app/)<br>

### Gatsby.jsについて
Reactで作られた静的サイトジェネレーター<br>

これ↓に大体書いてる<br>
[Reactの最強フレームワークGatsby.jsの良さを伝えたい！！](https://qiita.com/hppRC/items/00739eaf9ae7fc95c1ca)

#### 公式
[https://www.gatsbyjs.org/](https://www.gatsbyjs.org/)

## ■ 構築
1. `yarn install` : パッケージインストール
2. `yarn develop` : local環境 起動 -> `.env.develop` ないとエラー出るかも…

## ■ ディレクトリ構成
### ルート配下について
フォルダ      | 内容 
------------- | -----
public/ | `gatsby build` で生成されたdistファイル。このファイルをデプロイ時にアップロードする
src/ | 主に `components` `pages` `templates` などで構成されているコンパイル前のソース
static/ | 加工しない静的な画像置く場所 ex)favicon.ico
gatsby-config.js | メタデータやプラグインの設定
gatsby-node.js | ページ生成の為の設定=> `src/templates` 配下と紐づいてる

### src配下について
フォルダ      | 内容 
------------- | -----
src/components | コンポーネントディレクトリ
src/components/header.js | ヘッダー
src/components/footer.js | フッター
src/components/layout.js | レイアウト
src/components/seo.js | SEO
src/components/layout.css | layout.jsに読ませるcss(globalcss)<br>->これやめたい
src/pages | 各ページディレクトリ
src/pages/index.js | トップページ
src/pages/about.js | aboutページ
src/pages/404.js | 404ページ
src/templates | ページ生成ディレクトリ<br>設定は `gatsby-node.js` で行う
src/templates/blog-template.js | ブログ一覧ページ
src/templates/blogpost-template.js | ブログ投稿ページ
src/templates/cat-template.js | カテゴリー絞り込みページ
src/utils | 汎用ディレクトリ<br>(汎用的に使う関数？モジュール？を格納するところ)
src/utils/useContentfulImage.js | ブログ投稿内容の画像読み込み設定

## ■ パッケージ説明
パッケージ名   | 内容 
------------- | -----
gatsby-image | 画像最適化
gatsby-plugin-sharp | 画像圧縮(gatsby-imageに付随)
gatsby-transformer-sharp | 画像読み込み表示(gatsby-imageに付随)
gatsby-source-filesystem | ローカルファイルの読み込みに必要
gatsby-plugin-manifest | PWA マニフェストを追加
gatsby-plugin-offline | PWA オフライン対応
gatsby-plugin-react-helmet | メタデータ対応 react-helmetも必須
@fortawesome/react-fontawesome | fontawesome対応
react | react 本体
react-dom | react-dom
react-helmet | react メタデータ対応

### Contentful(CMS)関連
パッケージ名   | 内容 
------------- | -----
gatsby-source-contentful | CMSデータを扱う為に必要
@contentful/rich-text-react-renderer | リッチテキストのJSONデータをReactコンポーネントで扱えるように変換
@contentful/rich-text-types | リッチテキスト内の要素をカスタマイズする為に必要
@contentful/rich-text-plain-text-renderer | リッチテキストをテキストに変換する為に必要


## ■ 使用CMSについて
[Contentful](https://www.contentful.com/)
- 今回のチュートリアルで使用した。
- ヘッドレスCMSでは人気
- 国産ヘッドレスCMSの [microCMS](https://microcms.io/) で実装してみたい。
- CMSの使いごごちとしてはやっぱり国産のCMSの方がいいと思う。

## ■ デプロイ
[Netlify](https://www.netlify.com/)
- 今回のチュートリアルで使用した。
- どうせならAmplify Console(AWS)でデプロイしたい。Basic認証簡単にできる為。
- 環境変数とかの設定がよくわからない。

## ■ 展望
- CSS設計もうちょっと理解したい。CSS in JS [emotion](https://github.com/emotion-js/emotion)
- microCMSを使いたい。
- アニメーションの使い方理解したい
- reactをもっと理解したら制作の幅が広がる。<= 最重要課題
