---
title: "BCIによる脳活動計測をメインストリームに。Kernel CTOにインタビュー。| Ryan Field"
description: "今回はKernelでCTOを務めるRyan Fieldにインタビューを行い、Kernelが非侵襲型BCIに開発にかける思いとその現状、さらには今後の展望を伺った。"
datePublished: "2022/3/23"
bannerPhoto: "/img/ryan-kernel/cover.jpg"
category: "インタビュー"
writer1: "Nao Yukawa"
writer2: ""
interviewer1: "Nao Yukawa"
interviewer2: "Hayato Waki"
translator1: ""
translator2: ""
---

&nbsp;

非侵襲型BCIの開発により一般消費者へのBCI普及を目指す主力企業の一つに、[Kernel](https://www.kernel.com/)という会社がある。今回はKernelでCTOを務める[Ryan Field](https://www.linkedin.com/in/ryanmfield/)にインタビューを行い、Kernelが非侵襲型BCIに開発にかける思いとその現状、さらには今後の展望を伺った。

&nbsp;

## 非侵襲型BCIの開発により、脳測定をメインストリームに

[以前NeurotechJPでも取り上げた](https://neurotechjp.com/jp/blog/5-startups-non-invasive-bci/)Kernelは、2016年に設立された。CEOの[Bryan Johnson](https://www.linkedin.com/in/bryanrjohnson/)はかつて[Braintree](https://www.braintreepayments.com/)と呼ばれるフィンテックの会社を創業し、Venmoを買収したのち、PayPalに800億円で売却した経歴を持つ。BryanはKernelに対して50億円もの投資を行なっている。2020年には外部からの資金調達も行い、総資金調達額は合計で**100億円**を超える。

![Kernel logo](https://neurotechjp.com/img/ryan-kernel/kernel-logo.jpg)
_画像: Kernelロゴ_

&nbsp;

現在非侵襲型BCIを開発する会社としての地位を確立しているKernelだが、元々は脳からの読み取りと書き込みの両方をミッションに掲げて設立され、かつては侵襲型の手法を模索していた。
しかし数年間調査を進めるにつれ、「**脳測定をメインストリームにすることで、誰もが自らの脳について知り、生活をより良いものにする**」という、Kernelの壮大なミッションに、侵襲型の手法は合わないということがわかった。結果として、Kernelは侵襲型の手法から非侵襲型の手法へとピボットすることとなった。

&nbsp;

このピボットは、Kernelにとってもいくつかのメリットがあったという。一つは、規制の緩和だ。侵襲型の手法の場合、FDAからの承認が必要で、これにはそれなりに時間がかかる。一方で非侵襲型の場合は、こうした規制が幾分か緩くなり、開発スピードも向上した。もう一つのメリットは、局所的なインプラントを用いるような侵襲型の手法と比べて、包括的な脳活動の記録が行えるようになることである。

> 非侵襲型にすることで、**脳全体を見ることができる**ようになります。ほとんどのインプラントはとても局所的で、何か特定の脳の機能を回復させることに主眼が置かれています。例えば麻痺を抱えていたり、発話に問題があったり、その他の病気があったりした場合に、インプラントが使われて、治療に充てられます。
>
> 私たちは、局所的な脳領域しか測れないインプラントを使わないことにより、脳で何が起きているのかをより全体的に把握することができ、ニューロテックの幅広い応用と市場への普及につながると思っています。

&nbsp;

## Kernelが開発する二つのプロダクト: FlowとFlux

KernelはFlowと呼ばれる、[**TD-fNIRS (Time Domain Functional Near-Infrared Spectroscopy)**](https://pubmed.ncbi.nlm.nih.gov/23747285/)を主軸とするマルチモーダルBCIを開発した。[fNIRS](https://www.an.shimadzu.co.jp/apl/lifescience/invivo.htm)は近赤外光を用い、神経活動に伴う血液中の酸素量の変化を測定することで、脳内の活動を記録する技術である。TDベースのデバイスは従来、持ち運びができないこととデバイス自体の大きさゆえに、実用的ではなかった。一方でこの技術は、深部まで含めて精度高く血液中の酸素量の変化を測定することができる。Kernel Flowは従来の課題を克服し、持ち運び可能なデバイスとなっている。

![Flow](https://www.kernel.com/static/a72a3c3cb35c0bef323dea7318a4e1f1/8afe2/HeadSet2.png)
_画像: Flow_

&nbsp;

なおFlowについて、現在Kernelはロサンゼルスで[一般公募の実験](https://www.kernel.com/participate)参加者を募集しており、アプリからサインアップすることで参加できる(アプリのダウンロードは[こちら](https://apps.apple.com/us/app/kernel-app/id1534622186))。NeurotechJPも今回、このデモに参加することで実際に体験することができた。デモの様子は下記YouTubeリンクからご覧いただける。

[![Flow demo](https://neurotechjp.com/img/ryan-kernel/flow-demo-v2.jpg)](https://youtu.be/dTClMLKx8bk)
_動画: Flowデモ体験の様子_

&nbsp;

KernelはFlowの他にも、神経活動に伴って発生する磁場を測定するOP-MEG (Optically-Pumped Magnetoencephalography)という技術を用いたFluxと呼ばれるデバイスの開発も行なっていたが、一般家庭への普及の困難さから、現在はFlowのみに注力している。

> Kernelが侵襲型から非侵襲型にピボットした時、EEGやMEG、光学ベースのものから超音波まで、脳の情報を読むための手法として考えうるものを全て調査し、結果二つの手法に落ち着きました。一つはMEGを用いたKernel Fluxで、もう一つはTD-fNIRSのKernel Flowです。

&nbsp;

非侵襲型BCIを開発する多くのスタートアップがEEGを用いる中、Kernelは困難とも言われるTD-fNIRSに挑戦した。Ryanは、fNIRSという技術自体は数十年前から研究がなされているが、TD-fNIRSはそのハードウェア開発の難しさから、研究領域ですら広く用いられるレベルには到達していなかったという。Kernelもこの問題には、Flowを開発する上で直面した。

> Kernel Flowの開発にあたって最も困難だったことの一つは、**既存のハードウェアで利用可能なものがなく、time domainの技術をスケールさせるためには自分たちでカスタムした集積回路やチップを作る必要**があったということです。

&nbsp;

こうした困難がありながらも、Kernelは去年Flowをリリースすることができた。最新版のFlowでは、全ての配線はヘッドセットの中に収まっており、USB-Cケーブル一本だけで繋ぐことができる。

いかにしてKernelは、困難であるとされるTD-fNIRSの開発に成功したのだろうか。この点についてRyanに伺った。

> Kernelの強みは、この問題に対するアプローチの仕方にあると思います。**私たちは、この問題に対して初めてフルスタックに取り組もうとした企業のうちの一つです**。

&nbsp;

上でも述べたように、Kernelは新しいチップも自分たちで1から作り上げる必要があった。こうしたエンジニアリング力の高さが、彼らの1番の強みなのかもしれない。脳から出てくる光子のレーザーを用いた検出から、機械学習やAIなどのアルゴリズムに至るまで、チームはフルスタックに取り組んでいた。こうすることで、ハードウェアソフトウェア関わらず、それぞれの要素をうまく調整し、まとめることができた。

> 大学のラボからスピンアウトしたような既存のfNIRSを見てみると、ハードウェア開発のような、特定の分野に特化している場合が多く、実験やソフトウェア周りの、専門外の仕事は他と協力する、といったケースが多いです。私たちはそういった専門的な知識を一つのチームとしてまとめることで、**素早く何度も試行を重ねることができます**。

&nbsp;

現在Kernelでは、新たに得られた知見をもとに、新世代Flowに向けたR&Dも進めている。

> 個人的には、**time domain fNIRSは、非侵襲型で脳を精度高く測るには最も良い方法**なのではないかなと思っています。
>
> **time domain fNIRSを可能にする技術そのものには, 私たちのKernel Flowだけでもいくつも改善の余地はあると思います。**

&nbsp;

## 2033年のゴールに向けて、Kernelの思い描く道

Kernelでは野望的なミッションとして、2033年までに、各家庭にFlowが置かれ脳の計測が当たり前となる世界の実現を掲げている。現状、Flowは研究施設などへの貸し出しのみとなっているが、消費者に配り始めるのはいつを予定しているのだろうか。

Ryanは**初期の消費者向けプロダクトは2024年ごろに出る**と考えている。ただし、これらはアーリーアダプター用のデバイスで、スマートフォンでいうところの[PalmPilot](https://ja.wikipedia.org/wiki/PalmPilot)のようなものになるだろうとのことだ。このバージョンは、Kernelが思い描くような、各家庭に置かれるものではなく、消費者向けBCIの試作品の一つという位置付けだ。

脳というのは人間の体において最も理解するのが難しいものの一つで、デバイスを作る難しさもKernelは理解している。デバイス開発における最も困難な点は、信頼できる信号を取得することだという。

> **脳計測をメインストリームにするためには、しっかりとした科学的な根拠を持ちながら、常に信頼できるロバストな信号を測定できる必要**があります。消費者向けのプロダクトにするなら、75%の確率でだけうまくいく、というようなことではダメなのです。

&nbsp;

Flowは脳活動情報を高いレベルで計測できるものの、ピボット前のKernelが侵襲型で目指していたような、脳への書き込みは行うことができない。Kernelは脳刺激を、脳へ”介在”する手法の一種としてしか見ていない。例えばTMSなどの脳刺激や、薬、さらには、時間はかかるが学習も脳を変えるという点においては同じである。

Kernelにとって今重要なことは、脳への介在の新しい手法を模索することではなく、既存の手法がどのように脳に影響するかを調べることだという。

> **Kernelがどこかのタイミングで、脳への介在を提供する会社になることもありうる**でしょう。ただし、**今は脳計測に基づいて、脳への介在の特徴を調べることが最も大事**だと考えています。

&nbsp;

## 研究機関や企業との連携で、更なるユースケースの拡大へ
Kernelは かつて、[Flow 50](https://www.kernel.com/news/kernel-flow-50-live-stream-summary)と呼ばれる、研究機関を対象としたKernel Flowの貸し出しプログラムを行っていた。100個もの応募の中から、Ryan達は神経科学の研究に寄与し、Flowや脳計測デバイスの可能性を拡げるような50個のプロジェクトを選んだ。

> 私たちは、**社会や神経活動計測の未来にとって意味のある貢献を成す可能性を秘めている**プロジェクトを選びました

&nbsp;

Flow 50は2ヶ月間のみの募集にもかかわらず、多くの研究機関からの注目を集めた。Flow 50自体は終了してしまったが、デバイスをより多くの人に利用してもらうべく、Kernelは動き出している。

一つは、製品版Flowの事前予約で、今年中に配送を開始する予定だ。もう一つはFlow Uと呼ばれる大学向けの販売プログラムで、研究機関に対して1年間Flowを無料で貸し出すというものだ。想像を超える応募により、現在は一時休止となっている。

さらにKernelではFlow 50などを通じた研究機関との協力に加えて、二つの企業との提携もアナウンスされている。一社は[Cybin](https://cybin.com/)という、幻覚剤によるメンタルヘルスの治療に注力する会社で、もう一社は[Statespace](https://statespace.gg/)という、eSportsやビデオゲームでのパフォーマンスの最適化を目指す[Aim Lab](https://aimlab.gg/)を所有する会社である。

![Cybin-and-Kernel](https://www.kernel.com/static/be417d4d8f47953d691b931b598a01f4/5fc9a/61856ce7f69d07807d2e5eb8_Cybin_Kernel.png)
_Image: Cybin × Kernel_

&nbsp;

Kernelは、脳に対して何かしらの働きかけを行う企業や機関との提携に興味を示している。KernelのBCIにより正確な測定で、提携企業は自社プロダクトがどのように脳に影響を与えているかを知ることができる。特にRyanは、メンタルヘルスやゲームがKernelの脳活動計測の恩恵を受ける領域として挙げている。

> 脳計測を用いたロバストなアプリケーションであれば、私たちはどんな種類のものでも興味があります。

&nbsp;

これまではプロダクトの開発に注力してきたKernelだが、今後は各種研究機関や企業などとの連携により、更なるユースケースの拡大を目指す。

&nbsp;

## さいごに

今回は非侵襲型BCIの開発を行うKernelにてCTOを務めるRyan Fieldにインタビューをさせていただき、Kernelの歴史から、今後ニューロテック分野を大きく変えようとする野望まで伺った。

Kernelは非侵襲型BCIの開発により、BCIがスマートフォン並みに普及し、誰もが自分の脳について理解することで、生活をより良くすることができるような社会を、2033年までに実現することを目指している。インタビューで答えていただいたように、Kernelは今後もいくつもイベントが計画されており、その動向にはこれからも目が離せない。
