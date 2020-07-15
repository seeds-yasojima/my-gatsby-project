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

デモサイト：[https://gracious-allen-4a366c.netlify.app/](https://gracious-allen-4a366c.netlify.app/)<br>

## ■ 構築
1. `yarn install` : パッケージインストール
2. `yarn develop` : local環境 起動

## ■ ディレクトリ構成
### ルート配下について
フォルダ      | 内容 
------------- | -----
public/ | 編集中
src/ | 編集中
static/ | 編集中
gatsby-config.js | メタデータやプラグインの設定
gatsby-node.js | 編集中

### src配下について
フォルダ      | 内容 
------------- | -----
src/ | 編集中
src/components | 編集中
src/pages | 編集中
src/templates | 編集中
src/utils | 編集中

## ■ パッケージ説明
パッケージ名   | 内容 
------------- | -----
gatsby-image | 画像最適化
gatsby-plugin-sharp | 画像圧縮(gatsby-imageに付随)
gatsby-transformer-sharp | 画像読み込み表示(gatsby-imageに付随)
gatsby-source-filesystem | ローカルファイルの読み込み
gatsby-plugin-manifest | 編集中
gatsby-plugin-offline | 編集中
gatsby-plugin-react-helmet | 編集中
gatsby-source-contentful | 編集中
react | デフォルト
react-dom | デフォルト
react-helmet | 編集中
@fortawesome/react-fontawesome | 編集中
@contentful/rich-text-plain-text-renderer | 編集中
@contentful/rich-text-react-renderer | 編集中
@contentful/rich-text-types | 編集中


## ■ 使用CMSについて
contentful

## ■ デプロイ
Netlify

## ■ 展望
CSS設計もうちょっと理解したい。CSS in JS/emotion<br>
microCMSを使いたい。<br>
アニメーションほしい
