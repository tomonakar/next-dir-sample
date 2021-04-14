# repositoryレイヤー-
- クリーンアーキテクチャにおけるゲートウェイの役割
- rest api, graphql, authentication api など外部との通信処理を定義する
- graphql code genで生成されたカスタムHookは、repositoryレイヤーの責務の範囲とする

# 制約
- ビジネスロジックは持たない
