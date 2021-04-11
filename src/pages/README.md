# pages
- Next.jsのルーティング用レイヤー
- exportPathMapを利用してルーティング対象ではないファイルは除外する
- https://nextjs.org/docs/api-reference/next.config.js/exportPathMap

# 制約
- pagesは原則componentsのみに依存する
- 例外的にpagesでデータ取得が必要な場合はusecaseへの依存を許容する
  - 認証制御やログ設定などはpagesで発生する場合が想定される
