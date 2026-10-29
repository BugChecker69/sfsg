---
title: "【実験】Google Earth Studio × PythonでRelive風バイク走行ムービーを作ってみた"
pubDate: 2026-10-28
heroImage: /sfsg/blog-placeholder-1.png
description: "Google Earth StudioとPythonを活用して、GPSログからRelive風の3Dバイク走行ムービーを自作する実験の記録。"
---

I-BO（アイボー）です。

Google Earth StudioとPythonを用いて、GPSログデータを基にしたRelive風の3Dバイク走行ムービーを自作する実験を行ってみた。

## 制作の背景と概要
バイクツーリングの記録動画等で見られる、3Dマップ上でルートがアニメーション描画される「Relive風」の映像演出。専用の外部サービスに頼らず、自身の環境で再現・自動化できないかと考え、Pythonによるデータ処理とGoogle Earth Studioを組み合わせたワークフローを検証してみた。

* **使用ツール**: Python (GPSログ・軌道計算), Google Earth Studio (3Dマップ映像生成), 動画編集ツール (合成・BGM付与)
* **動画仕様**: フルHD / 約31秒

## 実験動画
<div style="position: relative; width: 100%; height: 0; padding-bottom: 56.25%; margin-bottom: 1.5rem;">
  <iframe src="https://www.youtube.com/embed/IBa1UQjyTZc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 12px;"></iframe>
</div>

[YouTubeで視聴する（【実験】Google Earth Studio × Pythonで自作するRelive風バイク走行ムービー）](https://youtu.be/IBa1UQjyTZc)

## ワークフローのポイント
1. **ルートデータの解析**: GPXやGeoJSONなどのGPSログデータをPythonで読み込み、カメラワークや座標の補間データを算出してみた。
2. **3Dマップのレンダリング**: Google Earth Studioを活用し、リアルな3D衛星地図上を飛行・追従するカメラアニメーションを出力してみた。
3. **合成と演出**: 抽出した走行軌跡のプログレッシブ描画やアイコン配置、BGMのタイミング調整を行い、ファイナルデータをエンコードしてみた。

自作パイプラインを構築することで、自由度の高い演出や好みのBGMアプローチを取り入れた走行ムービーの作成が可能になった。
