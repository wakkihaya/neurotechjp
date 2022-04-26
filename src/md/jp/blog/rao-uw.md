---
title: "脳から脳への直接通信とBCIの未来｜Rajesh Rao"
description: "ワシントン大学のRao博士にニューロテックを始めたきっかけ、BrainNet、そしてニューロテックの未来についてインタビューした。"
datePublished: "2022/4/24"
bannerPhoto: "/img/rao-uw/cover.jpg"
category: "インタビュー"
writer1: "Toma Itagaki"
writer2: ""
interviewer1: "Toma Itagaki"
interviewer2: "Nao Yukawa"
translator1: "Nao Yukawa"
translator2: ""
---

&nbsp;

ニューロテックの世界では、[カリフォルニア州立大学サンフランシスコ校(UCSF)の Chang Lab](https://www.neurotechjp.com/blog/david-chang-lab/)のように、動作や音声を復元する BCI(Brain Computer Interface)が多くの研究機関で開発されているが、ワシントン大学のチームは、世界で初めて脳と脳を繋ぐ BCI を実現した。

&nbsp;

ワシントン大学の[コンピュータサイエンス・エンジニアリング](https://www.cs.washington.edu/)と[電気・コンピュータ工学](https://www.ece.uw.edu/)の教授で、『[Brain Computer Interfacing: An Introduction](https://www.amazon.com/Brain-Computer-Interfacing-Introduction-Rajesh-Rao/dp/0521769418)』の著者である[Rajesh Rao](https://www.rajeshpnrao.com/)は、[Neural Systems Lab](https://neural.cs.washington.edu/)を率いて脳と AI が交わる研究を行っている。今回は、Rao 博士にニューロテックを始めたきっかけ、BrainNet、そしてニューロテックの未来についてインタビューした。

&nbsp;

## きっかけは Sci-Fi から

Rao 博士は、スタートレックのような SF 文学やテレビを見て、幼少期を過ごしていたという。**スタートレックは、多くの独創的な技術が登場し、Rao博士が重要な問いを考えるきっかけとなった。**

> これはただの**SF**なのか、それとも実現可能なものなのか

&nbsp;

高校の理科で優秀な成績を収めたRao博士は、メリーランド大学カレッジパーク校で初めて科学の研究を経験した。その後は奨学金を得てテキサス州のアンジェロ州立大学に入学し、コンピューターサイエンス、数学、物理学を学んだ。

修士号と博士号はロチェスター大学で取得した Rao 博士は、そこでさまざまな機械学習アルゴリズムによって映像解析を行う、コンピュータサイエンスとAIの一分野であるコンピュータビジョンという分野を通じて、コンピュータと脳への関心を融合させるようになった。そして、ポスドク期間中に神経科学の研究を始めることとなった。

&nbsp;

2000年にはワシントン大学にて、AI、機械学習、計算論的神経科学を融合した、自身の研究室を開いた。

&nbsp;

## 脳間コミュニケーションの先駆け、BrainNet

2013年、Rao博士のチームは、脳と脳の間で直接やりとりする研究を開始した。**それまでBCIはデバイスやロボットの制御に広く用いられていたが、Rao 博士は人間の脳に制御信号を送ることはできないかと考えた。**

> 2 つの脳が、一方はセンシングし、もう一方がコントロールするというように、直接協力することは可能だろうか？

&nbsp;

[最初の研究](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0111332)では、ワシントン大学のキャンパスの両端に、EEG を装着した送信者と、TMS(経頭蓋磁気刺激)装置をつけた受信者を用意した。送信者が運動をイメージすると、その脳信号が解読され、それがインターネット経由でキャンパスを越えて TMS 装置に伝わり、受信者の手の動きに関連する運動野の領域が刺激されることで、結果として受信者にキーボードを押させるというものだ。

![BrainNet with EEG cap](https://static.wixstatic.com/media/f0c175_38b41c4d33a64c0682f42088fdc34517~mv2_d_2395_1348_s_2.jpg/v1/crop/x_75,y_0,w_2320,h_1348/fill/w_720,h_406,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/EEG-RR.jpg)
_最初の BrainNet の研究で、送信者として EEG キャップを装着する Rao 博士(https://www.rajeshpnrao.com/projects)_

&nbsp;

[二つ目の研究](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0137303)は、 **コミュニケーションの流れの中での、意識的な意思決定に関するものだった**。実験で行われた 20 Questions というゲームでは、送信者がある物体を思い浮かべ、受信者がそれに対して質問をすると、送信者は視覚野への刺激を通じてその質問にイエスかノーで答える。

> 送信者がある物体を思い浮かべ、受信者がイエスかノーかの質問を繰り返す 20 Questions というゲームを行いました。
> 受信者は最終的に、脳間コミュニケーションのみによって、送信者がトラックを思い浮かべていたことを当てるのです。

![BrainNet with yes/no experiement](https://uw-s3-cdn.s3.us-west-2.amazonaws.com/wp-content/uploads/sites/6/2019/07/01111515/BrainNet_web006-750x500.jpg)
_EEGを装着した送信者は、点滅するLEDを見つめることにより引き起こされるSSVEP(定常状態視覚誘発電位)を利用して、イエスもしくはノーを回答する: [Mark Stone of University of Washington](https://www.washington.edu/news/2019/07/01/play-a-video-game-using-only-your-mind/)_

**その後2019年、チームは[コミュニケーションを2人の送信者と1人の受信者の3人に増やし、テトリスゲームを行なった。](https://www.nature.com/articles/s41598-019-41895-7) 2人の送り手のうち1人は、信頼できない情報を送る「嘘つき」となる状況を作り、どのようなコミュニケーションがなされるかシミュレーションするというものだった。**

実験中、受信者はテトリスをプレイするが、下の部分は見えない。送信者はテトリスの画面全体が見えているが、ブロックを直接制御することはできないので、受信者に対してブロックを「回転」させる信号を送ることになる。2人の送信者のうちの1人の信号は、「嘘つき」のシミュレーションをするためにノイズを含んでいる。

![Tetris](https://uw-s3-cdn.s3.us-west-2.amazonaws.com/wp-content/uploads/sites/6/2019/07/01110652/Game_Figure2.jpg)
_画像: 受信者はブロックを配置する最下段を見ることができず(左列)、送信者は盤面全体を見ているがブロックの制御をすることはできない(右列)。_

&nbsp;

**この一連の研究は、脳間コミュニケーションによる共同作業についての、PoC(概念実証)である。**

&nbsp;

最初の実験では、受信者が伝達される情報を意識的に処理しない実験となってしまっていたため、2回目と3回目の実験では、意思決定プロセスを含むようにしたという。

&nbsp;

## なぜ BrainNet なのか？

脳と脳が直接つながるという未来的な発想は、どのような応用が可能なのか、直感的には理解が難しい。

&nbsp;

現在の技術ではまだまだ限界もある。EEGは帯域幅に制限があり、TMSは研究室以外の場所での応用には向かないような、重厚な装置である。しかし技術が成熟して、脳と脳の間で高解像度の情報を送受信できるようになった未来では、何ができるのだろうか？

> 私たちは言語を(コミュニケーションに)使っていますが、それにはメリットとデメリットがあります。
> 言葉の数には限りがありますし、その人の知識を表現する能力にも限界があるはずです。
> そのボトルネックを、どうすれば取り除けるでしょうか？

**言語は本来、エンコード（思考→言語）とデコード（言語→思考）を必要とし、コミュニケーション上のボトルネックとなる。BrainNetや脳間コミュニケーションは、信号の解像度が大幅に向上すれば、言語のあつれきを減らすことができるかもしれない。**

&nbsp;

また、脳間BCIの応用として、学校やスポーツ、医療などの場面で、より抽象的なコミュニケーションも可能となる。

> ある人の脳と別の人の脳をうまくマッピングできれば、より早く学習できるようになるでしょう。
> セラピストが、別の人の脳を何かしらの方法でリハビリテーションに導くことも可能かもしれません。

&nbsp;

また、マトリックスのように直接知識を伝達することも、応用例の一つとなり得る。

> 例えば、カンフーを脳内にダウンロードすることはできるでしょうか？
> 直接情報をダウンロードしても、そのままカンフーができるようにはならないでしょう。ダウンロードした後にたくさん練習をしなくてはいけませんが、良いスタートダッシュを切ることは可能です。

![matrix](https://neurotechjp.com/img/rao-uw/matrix.png)
_映画マトリックス(1999)にて、Neo がカンフーを「ダウンロード」するシーン: https://www.youtube.com/watch?v=_UUFu8zjRxE_

&nbsp;

最後に Rao 博士は、BrainNet を通じて複数の脳を組み合わせ、それぞれがユニークな視点で問題を解決することで、人間の創造性を向上させることができるのではないかと指摘している。

> 複数の脳を繋ぐすることで、直接的に協力できるとしたらどうでしょう。**人間の創造性は増幅され、一人の頭脳では解決できないような難しい問題の解決策も思いつくかもしれません。**
> もし100人の頭脳を集めれば、個々の脳の容量が限られているために解決できないような非常に難しい問題を、解決できるかもしれません。

この非常に未来的な視点は、Rao博士がSFから受けたインスピレーションを反映している。この分野のリーダーとしてRao教授は近い将来、脳間コミュニケーションを可能にするかもしれない。

&nbsp;

Rao博士の研究室では現在、脳活動のデコーディングとエンコーディングを連動させたブレイン・コプロセッサのアイデアを追求している。

> 脳と一緒に情報処理を行うAIということで、私たちは「コプロセッサー」と呼んでいます。
> 人工神経回路網が生物学的な神経回路網と会話しているようなものと考えてもらえればよいでしょう。

&nbsp;

**このコプロセッシングは、脳卒中後の脳領域の橋渡しや、適度な刺激による脳領域の治癒など、さまざまな脳の能力を向上させる可能性がある。**[これは、Elon MuskがNeuralinkの応用例として述べた「tertiary [cortical] layer (第三の皮質)」の話とも関係が深い。](https://www.inverse.com/article/60897-elon-musk-says-neuralink-could-bring-a-i-superintelligence-to-the-brain)

&nbsp;

またRao博士は、「説明可能なAI」という重要な考え方についても触れた。ニューラルネットワークはAIの多くのアプリケーションで使われているが、アルゴリズムが失敗した場合なぜ失敗したのかがわからない。自動運転やBCIのような複雑に絡み合うアプリケーションを扱う場合、こうした間違いは深刻なものになりかねない。

> 脳を理解しなければ、いつか脳とインターフェースの両方の挙動を理解することができなくなります。

&nbsp;

このAIと神経科学、BCIにまたがる研究は、AIと神経科学のあり方を物語っている。

> 脳の仕組みがわかると、脳を繋ぐことも簡単になります。脳のブラックボックス的なAIインターフェースを使うのではなく、脳を刺激したらどうなるかを理解することができるのです。

&nbsp;

## BCI の未来 世界的な研究者の思惑

Rao博士に、ニューロテックは応用面でも技術面でも、どのように進化していくのかを伺った。

&nbsp;

Rao博士は、ニューロテックは**整形外科と同じような軌跡をたどることになるだろう**という。1950年代、整形手術は主にがん患者の治療目的で使われていた。しかし技術が発達し、手術のリスクが下がったことで、整形手術は多くの人にとって日常的なものとなった。

> 整形手術と同じように、今はニューロテクノロジーの多くが医療用に開発されている段階だと思います。今はまさに、医療こそがニューロテックが必要とされている領域なのです。

&nbsp;

医療目的で開発された後は、主な用途は整形手術の時と同じように、ヒューマンオーグメンテーション(人間拡張)に関わるものになるだろうとRao博士はいう。

> 将来、この技術が医療用途を超えたころに、ヒューマンオーグメンテーションに関する商業的なアプリケーションが出てくると思います。

&nbsp;

**しかし、人間の脳を拡張するとはどういうことなのだろうか？**

&nbsp;

Rao博士は、最初の洞窟に住んでいた原始人が、道具として使うために石を拾ったことによる人類の始まりから、オーグメンテーションは起こってきたという。より現代的な文脈では、スマートフォンやインターネットは、コミュニケーションや情報検索のためのオーグメンテーションだ。

> そう考えると、ニューロテクノロジーは自然な流れで、身体的な能力だけでなく、脳や精神的な能力も拡張するような、次なる一歩に過ぎないのです。

&nbsp;

情報の検索や取得の高速化など、オーグメンテーションはさまざまな形で実現可能だ。感覚器を通して情報にアクセスする代わりに、脳を通して直接アクセスすることで、スピードが大幅に向上し、世界との関わり方も変わってくるかもしれない。

&nbsp;

またRao博士は、Meta社のCTRL-LabsやNeuralink、Kernelなどの進歩による、商業的なニューロテックの現状についてもコメントした。

商業的アプリケーションの一例である教育用途でのニューロテックの展望として、知識の習得を早めるためにtDCSや交流電流刺激装置を検討している企業もあることを紹介してくれた。

> オーグメンテーションはいくつか種類がありますが、それらはどれも何かしら似通う部分があります。カフェインなどの薬物もそうですが、そうしたものよりも、より直接的な脳に作用することになります。

&nbsp;

さらにゲームやスポーツの分野では、刺激によって反応速度や集中力が高まると主張する企業もあるが、これらの効果が単なるプラシーボではないのかということについては、まだまだ議論の余地がある。

&nbsp;

## ユビキタス BCI を実現するためには何が必要か？

[Kernel社のRyan Fieldへのインタビュー](https://www.neurotechjp.com/jp/blog/ryan-kernel/)でも触れたが、彼らの大きな目標のひとつは、日常的に使える脳計測デバイスを開発することであった。**独創的なデザインのEEGデバイスの台頭により、多くの企業が「BCIのiPhone」とも呼べるような、ユビキタスBCIの実現に向け、投資を行っている。**

&nbsp;

そこでRao博士に、EEGのような非侵襲型の計測モダリティの開発についての意見を伺った。

Rao博士は、研究室ではEEGを使用しているが、それはアーチファクトを最小限に抑えた、制約のある実験環境であると述べる。**しかし、ユーザーが動いたり話したりするような自然な環境においては、EEGの信号品質は大きく損なわれる可能性が高い。**

> まず精度の問題があります。EEGの場合、信頼性に非常に疑問が残ります。非侵襲型において、高い精度で安定的に動作し、ノイズの非常に少ない計測ができるような、信頼性の高い製品が市場で出回っているのをまだ見たことがありません。

&nbsp;

また、TD-fNIRS技術を用いた非侵襲型デバイスを開発したKernelのような会社が、非侵襲型BCIの能力をさらに押し上げるだろうと言及している。

> KernelやNeuralinkのように、新しいセンシングの方法を実験し、作り出している企業があるのは素晴らしいことです。
> 物質科学者や物理学者、その他の分野の学者からも、もっと脳をイメージングする新しい方法を見つけられるような貢献が必要だと思います。

&nbsp;

## 侵襲型か非侵襲型か

最後にユビキタスBCIの実現に向けて、侵襲型と非侵襲型のどちらが最終的にキラーアプリケーションになる得ると思うか、Rao博士の考えを伺った。

> (侵襲型と非侵襲型のどちらが勝つかというのは、)とても大事な観点ですね。
> 最終的には、異なる用途に対して、異なるアプリケーションが存在することになるのでしょう。

&nbsp;

**Rao博士はリスクとべネフィットを考えた時に、侵襲型のインプラントが整形手術のように普及する時が来るかもしれないのに対して、非侵襲型ではリスクよりも、取得される信号やそれがどの程度役に立つかが問題だという。**

> どちらかを選ぶとするなら、手術のコストとリスクを下げることができれば、最終的には侵襲型の方が選ばれるでしょうね。

&nbsp;

## おわりに

今回、ワシントン大学Neural Systems LabのRajesh Rao博士にインタビューさせていただき、Rao博士の最先端の研究内容や、ニューロテック分野に対する考えなどを伺った。

&nbsp;

インタビューの最後に、Rao博士はニューロテックにはさまざまな分野が関わることを改めて強調した。**神経科学者やエンジニアは、ニューロテクノロジーの研究や開発に必要な多様で幅広い知識を学びながら、同時にコラボレーションが重要であることも忘れてはならない。**

> ある特定の分野にだけ特化するのもいいことです。すべての分野に詳しくなることは不可能なので、異なる分野のすべてを知っておく必要はありません。
> 他の分野についてもできる限り学び、他の人と協力できるようにしておくと良いです。

&nbsp;

Rao 博士は「[注目すべき BCI の大学研究室/施設 ５選](https://www.neurotechjp.com/jp/blog/5-bci-labs-facilities/)」でも紹介した、「Brain Computer Interfacing: An Introduction」も執筆している。

BrainNet や脳間コミュニケーションとともに、Rao 博士や神経システム研究室の今後の活躍にも注目だ。