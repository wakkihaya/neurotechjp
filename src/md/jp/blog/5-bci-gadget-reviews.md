---
title: "非侵襲型BCI ガジェットレビュー5選"
description: "今回の記事では、「ちょっとBCI触って脳活動データ分析してみたいんだけど何を使えば良いのか分からない」という脳活動データを使って何かしてみたい開発者の方に対して、一般消費者用のBCIの中でもNeurotechJPが取り上げた特に注目すべき5つのBCIを、実際に使用した感想と共に紹介していく。"
datePublished: "2022/5/8"
bannerPhoto: "/img/5-bci-gadget-reviews/cover.png"
category: "コラム"
writer1: "Hayato Waki"
writer2: ""
interviewer1: ""
interviewer2: ""
translator1: ""
translator2: ""
---

&nbsp;

世界中の BCI 企業が様々なユースケースに取り組んでいる。

BCI というとデバイスコントロールや医療目的に利用する事例が有名だが、教育・スポーツなど一般消費者に身近な領域でも BCI は使われている。

![BCI2022カオスマップ](https://neurotechjp.com/img/5-bci-gadget-reviews/bci-landscape-jp.jpg)
_画像：BCI カオスマップ 2022_

&nbsp;

特に非侵襲型 BCI を提供する企業は年々その数を増し、**大企業が非侵襲型 BCI のスタートアップを買収する事例**も出てきている。[**Snap 社が非侵襲型 BCI スタートアップの NextMind を買収**](https://www.moguravr.com/snap-nextmind-acquisition/)したという今年 3 月のニュースは、多くの方々を驚かせたことだろう。

&nbsp;

NeurotechJP では[以前非侵襲型 BCI スタートアップを 5 選に絞って紹介](https://neurotechjp.com/jp/blog/5-startups-non-invasive-bci/)したが、**研究者に限らず一般消費者でも気軽に使える BCI は増え、機能性と価格のコストパフォーマンスから一般消費者用の BCI は注目を浴びてきている**。

今回の記事では、
「**ちょっと BCI 触って脳活動データ分析してみたいんだけど何を使えば良いのか分からない**」という
脳活動データを使って何かしてみたい開発者の方に対して、一般消費者用の BCI の中でも NeurotechJP が取り上げた特に注目すべき 5 つの BCI を、実際に使用した感想と共に紹介していく。

&nbsp;

## Affordable BCI 主要プレイヤー全体像

![Affordable BCI 主要プレイヤー競争優位性マップ](https://neurotechjp.com/img/5-bci-gadget-reviews/affordable-bcis-jp.jpg)
_画像: Affordable BCI 主要プレイヤー競争優位性マップ_

本記事の始めに BCI カオスマップを紹介したが、上図はその中でも**デバイス購入可能な非侵襲型 BCI 主要プレイヤーをピックアップ**し、**価格帯と利用用途の軸でその競争優位性をまとめた**ものである。

\*企業によっては提供するデバイスで価格が違うことがあるが、デバイスの平均の価格を基準としてマッピングしている。

&nbsp;

本記事では、非侵襲型 BCI の中でも特に利用者数が多い下記 5 つのデバイスに対してレビューをしていく。

- Muse
- Emotiv
- OpenBCI
- Neurosky
- Neurosity

&nbsp;

## [Muse](https://choosemuse.com/)

![Muse2](https://choosemuse.com/app/uploads/2018/10/BlogCTA_Muse2_Harley-Oliver.jpg)
_画像：Muse2_

| 会社名       | Interaxon |
| ------------ | --------- |
| 創業年       | 2007      |
| 総資金調達額 | $30.4M    |
| 国           | カナダ    |

&nbsp;

Muse は、EEG(脳波)や心拍数を計測し、独自のモバイルアプリと併用することで、瞑想や睡眠の質をあげることができるデバイスだ。

提供されるプロダクトは 2 種類あり、下記のような違いがある。

&nbsp;

### プロダクト

[Muse 2](https://choosemuse.com/muse-2/)

| 価格           | $250                                    |
| -------------- | --------------------------------------- |
| チャンネル     | 4 チャンネル(TP9, TP10, AF7, AF8) [Dry] |
| 機能           | ・EEG 測定 ・瞑想セッション in app      |
| Raw データ取得 | 可能                                    |

&nbsp;

[Muse S](https://choosemuse.com/muse-s/)

| 価格           | $400                                                       |
| -------------- | ---------------------------------------------------------- |
| チャンネル     | 4 チャンネル(TP9, TP10, AF7, AF8) [Dry]                    |
| 機能           | ・EEG 測定 ・瞑想セッション in app ・睡眠セッション in app |
| Raw データ取得 | 可能                                                       |

&nbsp;

### 長所

- 前頭葉を計測できるのに十分なチャンネルを兼ね備えているのにもかかわらず安く、コスパが良い。
- データ取得や処理するにあたってのライブラリ・SDK が充実している。

&nbsp;

### 短所

- 計測の精度が悪く、ノイズがよく入る。

&nbsp;

### 開発リソース

- [公式 SDK doc](https://sites.google.com/a/interaxon.ca/muse-developer-site/sdk-setup)
- [LSL ライブラリ](https://github.com/alexandrebarachant/muse-lsl)
- チュートリアル：
  - [EEG-notebook](https://neurotechx.github.io/eeg-notebooks/)
  - [Neurotech-berkeley](https://github.com/neurotech-berkeley/muse-workshops)
- [Brainflow Muse](https://brainflow.readthedocs.io/en/stable/SupportedBoards.html#muse)

&nbsp;

## [Emotiv](https://www.emotiv.com/)

![画像：Emotiv EpocX](https://d2z0k1elb7rxgj.cloudfront.net/uploads/2020/02/FB-Epoc-X-share-link-1.png)
_画像：Emotiv EpocX_

| 会社名       | Emotiv               |
| ------------ | -------------------- |
| 創業年       | 2011                 |
| 総資金調達額 | $120K                |
| 国           | 米国サンフランシスコ |

&nbsp;

Emotiv は、研究や開発用に数多くの脳波デバイスやアプリケーションを提供するスタートアップだ。
提供されるデバイスは主に、3 種類ある。

&nbsp;

### プロダクト

[Emotiv Insight](https://www.emotiv.com/insight/)

| 価格           | $500                         |
| -------------- | ---------------------------- |
| チャンネル     | 5 チャンネル [Semi-dry]      |
| 機能           | ・EEG 測定                   |
| Raw データ取得 | 可能 (Emotiv Pro に課金必要) |

&nbsp;

[Emotiv Epoc-X](https://www.emotiv.com/epoc-x/)

| 価格           | $850                         |
| -------------- | ---------------------------- |
| チャンネル     | 14 チャンネル [Semi-dry]     |
| 機能           | ・EEG 測定                   |
| Raw データ取得 | 可能 (Emotiv Pro に課金必要) |

&nbsp;

[Emotiv Epoc-Flex](https://www.emotiv.com/epoc-flex/)

| 価格           | $1699+                       |
| -------------- | ---------------------------- |
| チャンネル     | Up to 32 チャンネル          |
| 機能           | ・EEG 測定                   |
| Raw データ取得 | 可能 (Emotiv Pro に課金必要) |

&nbsp;

### 長所

- [Emotiv Launcher](https://www.emotiv.com/emotiv-launcher/)という無料のソフトウェアサービスをインストールすれば、Emotiv が提供する BCI アプリケーションをすぐに試すことができる。

&nbsp;

### 短所

- Raw データを取得するのに Emotiv Pro への課金が必要で、高い(学生は安い)

&nbsp;

### 開発リソース

- [Emotiv Pro Doc](https://emotiv.gitbook.io/emotivpro-v3/)
- [lsl ライブラリ](https://github.com/Emotiv/labstreaminglayer)

&nbsp;

## OpenBCI

![OpenBCi “Mark IV”](https://neurotechjp.com/img/5-bci-gadget-reviews/open-bci.jpg)
_画像：OpenBCi “Mark IV”_

| 会社名       | OpenBCI          |
| ------------ | ---------------- |
| 創業年       | 2014             |
| 総資金調達額 | 不明             |
| 国           | 米国ニューヨーク |

&nbsp;

OpenBCI は、EEG 限らずあらゆる生体信号を取得できるデバイスを提供する。脳波をリアルタイムでモニタリングできる独自のソフトウェア [OpenBCI GUI](https://openbci.com/downloads)も提供する。

同社が提供する EEG デバイスには下記の種類があるが、脳波信号を取得し PC に伝達するための Board も購入する必要がある。([Cyton Board](https://shop.openbci.com/products/cyton-biosensing-board-8-channel?variant=38958638542))

&nbsp;

### プロダクト

[Ultracortex “Mark IV” EEG Headset](https://shop.openbci.com/collections/frontpage/products/ultracortex-mark-iv?variant=23280742211)

| 価格           | $1149(Max)                                              |
| -------------- | ------------------------------------------------------- |
| チャンネル     | Up to 16 チャンネル                                     |
| 機能           | ・EEG 測定 ・10-20 システムに沿った 35 個のロケーション |
| Raw データ取得 | 可能                                                    |

&nbsp;

[EEG Electrode Cap Kit](https://shop.openbci.com/products/openbci-eeg-electrocap?variant=16456881766472)

| 価格           | $799(Max)     |
| -------------- | ------------- |
| チャンネル     | 21 チャンネル |
| 機能           | ・EEG 測定    |
| Raw データ取得 | 可能          |

&nbsp;

### 長所

- “Mark IV” では、16 個の電極を 10-20 システムの好みのロケーションにカスタマイズできるため、後頭葉メインでとりたいなどのあらゆるニーズに対応できる

&nbsp;

### 短所

- EEG デバイス限らず、Cyton Board などの基盤も購入する必要があるため、結果的に 10 万円~20 万円はかかってしまう。その他のパーツも高いため、買い換えるのもハードルが高い。

&nbsp;

### 開発リソース

- [OpenBCI GUI](https://openbci.com/downloads)
- [OpenBCI Doc](https://docs.openbci.com/)
- [Brainflow OpenBCI](https://brainflow.readthedocs.io/en/stable/SupportedBoards.html#openbci)

&nbsp;

## [NeuroSky](http://neurosky.com/)

![画像：NeuroSky](https://img20.shop-pro.jp/PA01194/667/product/103760419_o1.jpg?cmsp_timestamp=20160623162322)
_画像：NeuroSky_

| 会社名       | NeuroSky     |
| ------------ | ------------ |
| 創業年       | 2004         |
| 総資金調達額 | 不明         |
| 国           | 米国サンノゼ |

&nbsp;

NeuroSky は、コンシューマー向けに$100 から購入できる[脳波デバイス](https://store.neurosky.com/)を提供するだけでなく、開発者向けの SDK キットも無料で提供する。また、NeuroSky のコアテクノロジーとなっているチップ基盤を販売する事業も行う。

NeuroSky は BCI 業界のパイオニアとして活躍してきたが、[NeurotechJP ではその軌跡を同社 CEO の Stanley にインタビューすることができた](https://neurotechjp.com/jp/blog/yang-neurosky/)ので併せてご覧いただきたい。

&nbsp;

### プロダクト

[MindWave Mobile2](https://www.neurosky.jp/mindwave-mobile2/)

| 価格           | $110                 |
| -------------- | -------------------- |
| チャンネル     | 1 チャンネル(前頭葉) |
| 機能           | ・EEG 測定           |
| Raw データ取得 | 可能                 |

&nbsp;

### 長所

- とにかく安い。NeuroSky をハックするための SDK や OSS が充実している。

&nbsp;

### 短所

- 電極が 1 チャンネルしかないので出来ることがかなり限られる。(α 波取得等)

&nbsp;

### 開発リソース

- [公式 SDK doc](https://developer.neurosky.com/docs/doku.php)
- [通信 Socket ライブラリ](https://github.com/afiedler/node-thinkgear-sockets)

&nbsp;

## [Neurosity](https://neurosity.co/)

![Neurosity “CROWN”](https://www.divergenceneuro.com/wp-content/uploads/2021/06/crown-back-1024x723.jpg)

_画像：Neurosity “CROWN”_

| 会社名       | Neurosity        |
| ------------ | ---------------- |
| 創業年       | 2018             |
| 総資金調達額 | 不明             |
| 国           | 米国ニューヨーク |

&nbsp;

Neurosity は、デザイン性・処理能力に優れた独自の BCI「Crown」と開発者用 SDK を提供しており、脳波コントロールを試してみたいという開発者に多く使われている。[NeurotechJP では同社の CTO であり共同創業者である Alex にインタビューし](https://neurotechjp.com/jp/blog/castillo-neurosity/)、BCI を開発するにあたっての道のり等をお聞きできたので、併せてご覧いただきたい。

&nbsp;

### プロダクト

[Crown](https://neurosity.co/tech-specs)

| 価格           | $1000                                            |
| -------------- | ------------------------------------------------ |
| チャンネル     | 8 チャンネル(CP3, C3, F5, PO3, PO4, F6, C4, CP4) |
| 機能           | ・EEG 測定 ・集中力向上セッション in app         |
| Raw データ取得 | 可能                                             |

&nbsp;

### 長所

- 開発者用 SDK がかなり充実していて、BCI アプリケーション開発のハードルが低い。

&nbsp;

### 短所

今のところなし。

&nbsp;

### 開発リソース

- [Brainflow Neurosity](https://brainflow.readthedocs.io/en/stable/SupportedBoards.html#neurosity)
- [公式 SDK doc](https://docs.neurosity.co/docs/reference/classes/notion)

&nbsp;

## 利用用途別

**安くちょっとだけ脳波分析したいのであれば Muse、NeuroSky。**

**ちゃんと計測して分析したいならば、Emotiv, OpenBCI。**

**BCI アプリをフルスタックで作ってみたいのであれば Neurosity。**

&nbsp;

## さいごに

今回は 5 つの非侵襲型 BCI を長所・短所と共に取り上げた。どれもお手頃な価格で充実した SDK があるため、脳波分析をちょっとしてみたい方には是非試してもらいたい。

一般的に、BCI 業界でのビジネスには BCI を使ったキラーユースケースを探すことが重要とされているが、同時に BCI という新しいタイプのデバイスをより多くの人々に提供する必要がある。今回紹介した BCI にもあったように、お手頃でかつ機能性がありカスタマイズしやすい BCI が、今後我々の実生活における BCI のメインストリームになるだろう。
