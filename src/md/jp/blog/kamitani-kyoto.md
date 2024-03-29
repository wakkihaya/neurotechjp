---
title: "ブレインデコーディング開発者が考える脳科学の今とこれから | 神谷之康"
description: "ブレインデコーディングの開発の第一人者である京都大学の神谷之康先生にインタビューを行なった。"
datePublished: "2022/12/18"
bannerPhoto: "/img/kamitani-kyoto/cover.jpg"
category: "インタビュー"
writer1: "Ami"
writer2: ""
interviewer1: "Ami"
interviewer2: "Hayato Waki"
translator1: ""
translator2: ""
---

&nbsp;

ブレインデコーディングの開発の第一人者である京都大学 大学院情報研究科 知能情報学専攻の[神谷之康](https://www.kyoto-u.ac.jp/explore/professor/10_kamitani.html)先生にインタビューをさせて頂いた。

&nbsp;

神谷先生のご経歴

東京大学学部卒業後、カリフォルニア工科大学で博士号取得。2001 年ハーバードメディカルスクール、2003 年プリンストン大学、2004 年国際電気通信基礎技術研究所脳情報研究所(ATR)にて研究。2015 年より京都大学大学院情報学研究科の教授に着任。

&nbsp;

## そもそもブレインデコーディングとは

脳信号は私たちの心の状態を表すコードと見なすことができる。それらを解読(デコード)する手法のことを[ブレインデコーディング](https://kamitani-lab.ist.i.kyoto-u.ac.jp/post/152112822106/decoding-the-brain)という。

現在神谷研究室では、機械学習などの技術を用いて、脳の情報処理や情報表現をモデル化し、[視覚イメージ](https://shiropen.com/2018/01/14/31458/)や夢の内容を脳から解読する研究を行っている。

[![Brain decoding](https://neurotechjp.com/img/kamitani-kyoto/research.jpg)](https://youtu.be/jsp1KaM-avU)
_動画: Deep image reconstruction: Natural images_

&nbsp;

## ブレインデコーディング開発のきっかけ

神谷先生はブレインデコーディング技術開発の第一人者であるが、その開発に至ったのは当時の研究手法に失望したことが始まりであったという。

> ブレインデコーディングを開発したのは 2003 年から 4 年にかけてプリンストン大学に滞在してたときなんですけど、**当時 90 年ぐらいに fMRI ってのが出てきて急速に広がりましたが、そんなにすごいって思うような研究は正直なかったです。当時の標準的な手法の SPM(GLM)\*はもうめちゃくちゃつまらないモデルだったのですが、みんな信奉していました。その状況にものすごい失望してじゃあ自分でやろうと、もう 1 から方法論を作り直していこう感じで始めました。**

> 脳の信号ってのも画像のパターンとして出てくるわけで、そこに何がコードされてるかっていうのを読み解くっていうのが自然な解析の仕方だと思うんですよね。
> Caltech で機械学習とかベースを知ってたということに加え、実験装置を与えられたら、おもちゃとして使ってどう遊ぶかというふうに考えます。そう考えると GLM を使って「脳のマッピング」をするなんて発想は起こらない。
> 普通に考えてパターンだからパターン認識したらいいだろうという発想で始めました。パターンを見るっていうアイディア自体は、元々あったがそんなに広まっていませんでした。
> \*SPM:脳機能画像解析プログラム
> GLM:一般化線形モデル

&nbsp;

## 現在の課題

神谷先生がブレインでコーディング技術を開発してからおよそ 20 年経つが、第一人者の目線から見て現在顕著になっている課題はあるのだろうか。

> **現状は脳画像とか脳計測でとりあえず十分で、今現状の計測装置で解析法を頑張ることによってもっと色々できるようになるとは思っています。**

> ただ、もっと計測技術が進歩して例えば MRI だったら、解像度が上がるとか、頭に埋め込むのももっと好きな場所にたくさん電極を繋げられれば、もっとすごいことはできるようになるとは思うんですけれども、現状でもいろいろ解析方法とかモデルで頑張れるところはあります。
> 自然な状態で脳を計測できるようになればいいなとは思ってます。
> 脳に電極埋め込んで、ワイヤレスで信号を飛ばすような、そういうのができるといいなと思っています。

&nbsp;

現在神谷研究室では[心内イメージ](https://shiropen.com/2018/01/14/31458/)や夢の解読の研究を行っている。その上で、現段階では大きな課題はなく、計測技術の発展や精度の向上などの技術の発展に注目をしている。

&nbsp;

## 脳を直接介したコミュニケーションの実現

「[脳科学の達人 2017 "ブレイン・デコーディング 脳から心を読む技術](https://www.youtube.com/watch?v=1jmVr1nDvq4)”」では、ブレインデコーディングを用いた脳を直接介したコミュニケーションの実現についてお話されていた。

[![Brain decoding conf](https://neurotechjp.com/img/kamitani-kyoto/conference.jpg)](https://youtu.be/1jmVr1nDvq4)
_動画: 「脳科学の達人 2017 "ブレイン・デコーディング 脳から心を読む技術”_

&nbsp;

いわゆる脳と脳でのテレパシーのようなことは可能なのであろうか。そしてその技術は今現在どのような段階にあるのだろうか。

> 現状の BMI 技術でいうと、例えば障害を持ってる人の残存する運動機能を上回るものはほとんどない。身体の麻痺はありますが、麻痺があるなりに腕を動かして何かタブレットで何か書いた方が、脳で何か操作するよりも手軽だったりすることが多いです。そこはまだ超えられていません。

> 基本的な面白い技術は色々あり、計測とか解析技術もポテンシャルはあるんですが、本当にニーズに合ったアプリが出てきてないというところが一つ大きいのかなと。
> Neuralink のようなところが数年で、義手の単純な操作や、カーソルを動かしたり、文字を入力したり、といったことを実現していくとは思います。
> 実際僕も阪大と一緒にやってる研究ではこれまで、頭に埋め込んだ電極を使って義手を動かすと研究をしてきましたが、僕自身はそのような単純な運動コマンドの出力がブレインマシンインターフェースの本来のポテンシャルではないと考えています。

&nbsp;

一般的にサービスやプロダクトを提供するには第三者のニーズを満たす必要がある。
BMI/BCI でも例外ではなく、発展途上の技術だからこそ「誰のため」にその技術を使うのかは難しく重要になってくる。

神谷先生は、BMI/BCI のニーズとして「ニューロバース」に可能性を感じているという。

> **やっぱ僕の中のブレインマシーンインターフェースを素朴に考えたら、マトリックスとか、インセプションのような脳の中の世界を取り出して共有するみたいなそういうところだと思います。**

> いずれは脳の中にある世界、僕はニューロバースっていう風に呼んでますけど、メタバースと絡めて、そういうのを共有するっていうのが長い目で見たときの方向性。脳から取り出した世界でメタバースの世界を作るっていうそっちの方に興味があります。

&nbsp;

## 産業界との関わり

技術の発展や一般化には、産業応用も重要になってくる。今後の研究において産業界の関わりを増やしていく予定はあるのだろうか。

> 一時僕も起業とかを準備し始めたことありましたが、またまだ技術的に未熟だし、脳というキーワードだけでお金だけが動くという、そういう VC とかの業界に失望しました。
> もうちょっとその基礎的な研究に加え、今はアートの製作の方に力を入れています。
> [クラスター](https://cluster.mu/)というメタバースの企業のアドバイザーをやっていますが、現状応用研究は行っていません。
> クラスター社の社長の加藤さんとかは、ブレインマシーンインターフェースの本来の目指すべき未来っていうのは、やっぱりその脳から世界を取り出したりとかいうそういうとこに共鳴してくれて、何かそれに向けた取り組みができればいいなという感じの話はしています。
> **すぐに産業に繋がる話じゃないのでもう少し基礎研究をやっていきます。**

&nbsp;

## これからの脳科学

数十年にわたり脳科学の第一線で活躍される神谷先生であるが、これからの脳科学についてどのように考えているのだろうか。

> 私が学生の頃もてはやされた研究の多くが全然駄目だったっていうのも、今どんどん明らかになっています。心理学研究の再現性の低さは有名ですが、認知神経科学の研究も同程度かそれ以下だと思います。
> 脳イメージングの研究は華々しく自己宣伝をしてきましたが、再現性のある成果は多くないです。

> **ゆるいディシプリンでサイエンスをやっていたのを「若い分野だから」とか言って見て見ぬ振りをしてたんですけど、だんだん実態が暴かれつつあるというのが現状だと思いますね。なのでそこをどう立て直して成熟した科学にしていくかっていうのがこれからの課題です。**

&nbsp;

## おわりに

今回は京都大学の神谷先生にブレインデコーディング開発のきっかけと、これからの脳科学研究についてお聞きした。徐々に盛り上がりを見せているニューロテック業界だが、理想とごまかしに惑わされない、科学に真摯な姿勢が重要であると感じた。デコーディング技術の今後の成長にも注目していきたい。
