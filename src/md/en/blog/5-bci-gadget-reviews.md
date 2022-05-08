---
title: "5 non-invasive BCI Gadget Reviews"
description: "This article introduces five consumer BCIs that are noteworthy for developers who want to work with brain activity data"
datePublished: "2022/5/8"
bannerPhoto: "/img/5-bci-gadget-reviews/cover.png"
category: "Column"
writer1: "Hayato Waki"
writer2: ""
interviewer1: ""
interviewer2: ""
translator1: "Toma Itagaki"
translator2: ""
---

&nbsp;

BCI (Brain-Computer Interface) companies around the world are developing devices for a variety of applications.

Although BCIs are best known for device control and medical purposes, more companies are developing BCIs for education, sports, and other areas more familiar to an average consumer.

![BCI2022 landscape](https://neurotechjp.com/img/5-bci-gadget-reviews/bci-landscape-en.jpg)
_Image: BCI landscape 2022_

&nbsp;

In particular, the number of companies offering non-invasive BCI has increased over the years, and **large companies are acquiring non-invasive BCI startups**. In March, the news that **[Snap acquired non-invasive BCI startup NextMind](https://newsroom.snap.com/welcome-nextmind/)** may have surprised many.

&nbsp;

NeurotechJP has [previously introduced 5 featured non-invasive BCI startups](https://neurotechjp.com/blog/5-startups-non-invasive-bci/), but **many devices are beginning to trend towards becoming more friendly to general consumers. Many of these devices also house high functionality at a relatively low-cost, garnering the attention of experts and consumers.**

&nbsp;

If you’ve ever asked the question, ”I'd like to use a BCI to analyze brain data, but don't know which one to purchase,” this article introduces five consumer BCIs that are noteworthy for developers who want to work with brain activity data.

&nbsp;

## Affordable BCI Major Players Overall View

![Affordable-BCI-main-players--competitive-advantage](https://neurotechjp.com/img/5-bci-gadget-reviews/affordable-bcis-en.jpg)
_Image: Affordable BCI major players | Competitive advantages_

We introduced the BCI landscape at the beginning of this article, and the figure above picks out the major non-invasive BCI players **whose devices can be purchased** and summarizes their competitive advantages on the axes of **price range** and **intended use**.

\*While some companies may have different prices for the devices they offer, they are mapped based on the average price of the device.

&nbsp;

This article will review the following five featured devices.

- Muse
- Emotiv
- OpenBCI
- Neurosky
- Neurosity

&nbsp;

## [Muse](https://choosemuse.com/)

![Muse2](https://choosemuse.com/app/uploads/2018/10/BlogCTA_Muse2_Harley-Oliver.jpg)
_Image：Muse2_

| Company            | Interaxon |
| ------------------ | --------- |
| Year of foundation | 2007      |
| Total funding      | $30.4M    |
| Country            | Canada    |

&nbsp;

Muse is a device that measures EEG (electroencephalogram) and heart rate, and when used in conjunction with a unique mobile app, can improve meditation and sleep quality.

There are two products offered, with the following differences:

&nbsp;

### Products

[Muse 2](https://choosemuse.com/muse-2/)

| Price              | $250                                            |
| ------------------ | ----------------------------------------------- |
| Channels           | 4 channels(TP9, TP10, AF7, AF8) [Dry]           |
| Key features       | ・EEG measurements ・Meditation session(in-app) |
| Access to raw data | Yes                                             |

&nbsp;

[Muse S](https://choosemuse.com/muse-s/)

| Price              | $400                                                                    |
| ------------------ | ----------------------------------------------------------------------- |
| Channels           | 4 channels(TP9, TP10, AF7, AF8) [Dry]                                   |
| Key features       | ・EEG measurements ・Meditation session(in-app) ・Sleep session(in-app) |
| Access to raw data | Yes                                                                     |

&nbsp;

### Pros

- Enough channels to measure the frontal lobes.
- Inexpensive and cost-effective.
- The library and SDK for data acquisition and processing are well-developed.

&nbsp;

### Cons

- Measurement accuracy is poor and noise is often present.

&nbsp;

### Resources

- Official [SDK](https://sites.google.com/a/interaxon.ca/muse-developer-site/sdk-setup)
- [LSL library](https://github.com/alexandrebarachant/muse-lsl)
- Tutorial：
  - [EEG-notebook](https://neurotechx.github.io/eeg-notebooks/)
  - [Neurotech-berkeley](https://github.com/neurotech-berkeley/muse-workshops)
- [Brainflow Muse](https://brainflow.readthedocs.io/en/stable/SupportedBoards.html#muse)

&nbsp;

## [Emotiv](https://www.emotiv.com/)

![Image：Emotiv EpocX](https://d2z0k1elb7rxgj.cloudfront.net/uploads/2020/02/FB-Epoc-X-share-link-1.png)

_Image：Emotiv EpocX_

| Company            | Emotiv              |
| ------------------ | ------------------- |
| Year of foundation | 2011                |
| Total funding      | $120K               |
| Country            | San Francisco, U.S. |

&nbsp;

Emotiv is a startup that offers a number of EEG devices and applications for research and development.

There are three main types of devices offered.

&nbsp;

### Products

[Emotiv Insight](https://www.emotiv.com/insight/)

| Price              | $500                               |
| ------------------ | ---------------------------------- |
| Channels           | 5 channels [Semi-dry]              |
| Key features       | ・EEG measurements                 |
| Access to raw data | Yes (Need to subscribe Emotiv Pro) |

&nbsp;

[Emotiv Epoc-X](https://www.emotiv.com/epoc-x/)

| Price              | $850                               |
| ------------------ | ---------------------------------- |
| Channels           | 14 channels [Semi-dry]             |
| Key features       | ・EEG measurements                 |
| Access to raw data | Yes (Need to subscribe Emotiv Pro) |

&nbsp;

[Emotiv Epoc-Flex](https://www.emotiv.com/epoc-flex/)

| Price              | $1699+                             |
| ------------------ | ---------------------------------- |
| Channels           | Up to 32 channels                  |
| Key features       | ・EEG measurements                 |
| Access to raw data | Yes (Need to subscribe Emotiv Pro) |

&nbsp;

### Pros

- By installing the free software service called [Emotiv Launcher](https://www.emotiv.com/emotiv-launcher/), you can immediately try out the BCI applications offered by Emotiv.

&nbsp;

### Cons

- Requires Emotiv Pro to access raw data, which is expensive (cheaper for students).

\*Emotiv Pro

- Standard: $99/mo
- Student: $29/mo

&nbsp;

### Resources

- [Emotiv Pro Doc](https://emotiv.gitbook.io/emotivpro-v3/)
- [LSL library](https://github.com/Emotiv/labstreaminglayer)

&nbsp;

## OpenBCI

![Image：OpenBCi “Mark IV”](https://neurotechjp.com/img/5-bci-gadget-reviews/open-bci.jpg)
_Image：OpenBCi “Mark IV”_

| Company            | OpenBCI        |
| ------------------ | -------------- |
| Year of foundation | 2014           |
| Total funding      | N/A            |
| Country            | New York, U.S. |

&nbsp;

OpenBCI provides devices that can acquire all kinds of biological signals, not only EEG. The company also provides its own [OpenBCI GUI](https://openbci.com/downloads) for real-time EEG monitoring.

The company offers the following types of EEG devices, but you also need to purchase a board to acquire EEG signals and transmit them to your PC. ([Cyton Board](https://shop.openbci.com/products/cyton-biosensing-board-8-channel?variant=38958638542))

&nbsp;

### Product

[Ultracortex “Mark IV” EEG Headset](https://shop.openbci.com/collections/frontpage/products/ultracortex-mark-iv?variant=23280742211)

| Price              | $1149(Max)                                               |
| ------------------ | -------------------------------------------------------- |
| Channels           | Up to 16 channels                                        |
| Key features       | ・EEG measurements ・35 locations along the 10-20 system |
| Access to raw data | Yes                                                      |

&nbsp;

[EEG Electrode Cap Kit](https://shop.openbci.com/products/openbci-eeg-electrocap?variant=16456881766472)

| Price              | $799(Max)          |
| ------------------ | ------------------ |
| Channels           | 21 channels        |
| Key features       | ・EEG measurements |
| Access to raw data | Yes                |

&nbsp;

### Pros

- "Mark IV" can be customized with 16 electrodes in 10-20 system preferred locations to meet the need of many applications.

&nbsp;

### Cons

- The Cyton Board and other boards need to be purchased alongside electrodes and other components, resulting in a cost of $1k~$2k.
- Each part is also expensive, so replacing parts can be a hurdle.

  &nbsp;

### Resources

- [OpenBCI GUI](https://openbci.com/downloads)
- [OpenBCI Doc](https://docs.openbci.com/)
- [Brainflow OpenBCI](https://brainflow.readthedocs.io/en/stable/SupportedBoards.html#openbci)

&nbsp;

## [NeuroSky](http://neurosky.com/)

![Image：NeuroSky](https://img20.shop-pro.jp/PA01194/667/product/103760419_o1.jpg?cmsp_timestamp=20160623162322)
_Image：NeuroSky_

| Company            | NeuroSky      |
| ------------------ | ------------- |
| Year of foundation | 2004          |
| Total funding      | N/A           |
| Country            | San Jose U.S. |

&nbsp;

NeuroSky not only offers [EEG devices](https://store.neurosky.com/), which can be purchased starting at $100 for consumers, but will also provide SDK kits for developers free of charge. The company is also in the business of selling chip infrastructure which is NeuroSky's core technology.

NeuroSky has been a pioneer in the BCI industry, and [NeurotechJP was able to interview its CEO, Stanley](https://neurotechjp.com/blog/yang-neurosky/).

&nbsp;

### Products

[MindWave Mobile2](https://www.neurosky.jp/mindwave-mobile2/)

| Price              | $110                     |
| ------------------ | ------------------------ |
| Channels           | 1 channel (Frontal lobe) |
| Key features       | ・EEG measurements       |
| Access to raw data | Yes                      |

&nbsp;

### Pros

- Low cost
- Many SDKs and OSS to hack NeuroSky.

&nbsp;

### Cons

- There is only one channel, limiting the range of possible applications. (e.g., alpha wave acquisition)

&nbsp;

### Resources

- [Official SDK doc](https://developer.neurosky.com/docs/doku.php)
- [Communication Socket library](https://github.com/afiedler/node-thinkgear-sockets)

&nbsp;

## [Neurosity](https://neurosity.co/)

![Image：Neurosity “CROWN”](https://www.divergenceneuro.com/wp-content/uploads/2021/06/crown-back-1024x723.jpg)
_Image：Neurosity “CROWN”_

| Company            | Neurosity      |
| ------------------ | -------------- |
| Year of foundation | 2018           |
| Total funding      | N/A            |
| Country            | New York, U.S. |

&nbsp;

Neurosity offers a proprietary BCI "Crown" with excellent design and processing power and a developer SDK, which is widely used by developers who want to try brainwave control. [NeurotechJP interviewed Alex, the CTO and co-founder of Neurosity](https://neurotechjp.com/blog/castillo-neurosity/), and asked him about the company's path to developing BCI.

&nbsp;

### Products

[Crown](https://neurosity.co/tech-specs)

| Price              | $1000                                           |
| ------------------ | ----------------------------------------------- |
| Channels           | 8 channels (CP3, C3, F5, PO3, PO4, F6, C4, CP4) |
| Key features       | ・EEG measurements ・Focus session in app       |
| Access to raw data | Yes                                             |

&nbsp;

### Pros

- Extensive developer SDK, reducing the hurdles for BCI application development.
- The device has CPU in itself, so you can try to implement data saving, background processing, and so on.

&nbsp;

### Cons

- None so far

&nbsp;

### Resources

- [Brainflow Neurosity](https://brainflow.readthedocs.io/en/stable/SupportedBoards.html#neurosity)
- [Official SDK doc](https://docs.neurosity.co/docs/reference/classes/notion)

&nbsp;

## By use

**For beginners who have no experience with EEG data analysis, we recommend one of the low cost devices from Muse or Neurosky.**

**For those with experience in EEG analysis, the Emotiv or OpenBCI products offers richer data and higher versatility.**

**For those wanting to develop a full stack BCI application (mobile/web), we recommend the Neurosity Crown.**

&nbsp;

## Conclusion

In this article, we covered five non-invasive BCI companies and their products, highlighting some of their advantages and disadvantages. These are purely based on the opinion of NeurotechJP and is in no way an exhaustive list of pros and cons.

&nbsp;

Every device listed in this article is much more affordable than traditional research grade devices and we encourage those who are interested in tinkering with neural data to give these options a shot.

&nbsp;

Alongside the development of killer applications of BCIs, the industry must continue to reach a wider audience through more affordable and friendly devices. Like we see in the devices showcased in this article, BCIs that have high functionality and high versatility will likely push BCIs towards becoming more mainstream.
