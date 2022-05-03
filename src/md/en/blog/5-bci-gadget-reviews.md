---
title: "5 non-invasive BCI Gadget Reviews"
description: "In this article, we introduce five consumer BCIs that are particularly noteworthy, along with our impressions of their actual use."
datePublished: "2022/5/8"
bannerPhoto: "/img/5-bci-gadget-reviews/cover.jpg"
category: "Column"
writer1: "Hayato Waki"
writer2: ""
interviewer1: ""
interviewer2: ""
translator1: "Toma Itagaki"
translator2: ""
---

&nbsp;

BCI companies around the world are working on a variety of use cases.

Although BCI is best known for its use for device control and medical purposes, it is also being used in education, sports, and other areas familiar to the average consumer.

![BCI2022 landscape](https://neurotechjp.com/img/5-bci-gadget-reviews/bci-landscape-en.jpg)
_Image: BCI landscape 2022_

&nbsp;

In particular, the number of companies offering non-invasive BCI has increased over the years, and **large companies are acquiring non-invasive BCI startups**. The news in March of this year that **[Snap acquired non-invasive BCI startup NextMind](https://newsroom.snap.com/welcome-nextmind/)** may have surprised many people.

&nbsp;

NeurotechJP has [previously introduced5 featured non-invasive BCI startups](https://neurotechjp.com/blog/5-startups-non-invasive-bci/), but **not only researchers but also general consumers can easily use BCIs are increasing in number, and BCIs for general consumers are gaining attention due to their functionality and cost-effectiveness**.

In this article,
for developers, who want to do something with brain activity data, with the question:
”I'd like to touch a BCI to analyze brain activity data, but I don't know what to use.”

we introduce five consumer BCIs that are particularly noteworthy, along with our impressions of their actual use.

&nbsp;

## Affordable BCI Major Players Overall View

![Affordable-BCI-main-players--competitive-advantage](https://neurotechjp.com/img/5-bci-gadget-reviews/affordable-bcis-en.jpg)
_Image: Affordable BCI major players | Competitive advantages_

We introduced the BCI landscape at the beginning of this article, and the figure above picks out the major non-invasive BCI players **whose devices can be purchased** and summarizes their competitive advantages on the axis of **price range and intended use**.

\*While some companies may have different prices for the devices they offer, they are mapped based on the average price of the device.

&nbsp;

This article will review the following five devices, which are the most widely used non-invasive BCIs.

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

There are two types of products offered, with the following differences

&nbsp;

### Products

[Muse 2](https://choosemuse.com/muse-2/)

| Price                        | $250                                          |
| ---------------------------- | --------------------------------------------- |
| Channels                     | 4 channels(TP9, TP10, AF7, AF8) [Dry]         |
| Functionalities              | ・EEG measurement ・Meditation session in app |
| Possible to acquire raw data | Yes                                           |

&nbsp;

[Muse S](https://choosemuse.com/muse-s/)

| Price                        | $400                                                                 |
| ---------------------------- | -------------------------------------------------------------------- |
| Channels                     | 4 channels(TP9, TP10, AF7, AF8) [Dry]                                |
| Functionalities              | ・EEG measurement ・Meditation session in app ・Sleep session in app |
| Possible to acquire raw data | Yes                                                                  |

&nbsp;

### Pros

- It has enough channels to measure the frontal lobes, yet it is inexpensive and cost-effective.
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

| Company            | Emotiv |
| ------------------ | ------ |
| Year of foundation | 2011   |
| Total funding      | $120K  |
| Country            |        |

&nbsp;

Emotiv is a startup that offers a number of EEG devices and applications for research and development.

There are three main types of devices offered.

&nbsp;

### Products

[Emotiv Insight](https://www.emotiv.com/insight/)

| Price                        | $500                               |
| ---------------------------- | ---------------------------------- |
| Channels                     | 5 channels [Semi-dry]              |
| Functionalities              | ・EEG measurement                  |
| Possible to acquire raw data | Yes (Need to subscribe Emotiv Pro) |

&nbsp;

[Emotiv Epoc-X](https://www.emotiv.com/epoc-x/)

| Price                        | $850                               |
| ---------------------------- | ---------------------------------- |
| Channels                     | 14 channels [Semi-dry]             |
| Functionalities              | ・EEG measurement                  |
| Possible to acquire raw data | Yes (Need to subscribe Emotiv Pro) |

&nbsp;

[Emotiv Epoc-Flex](https://www.emotiv.com/epoc-flex/)

| Price                        | $1699+                             |
| ---------------------------- | ---------------------------------- |
| Channels                     | Up to 32 channels                  |
| Functionalities              | ・EEG measurement                  |
| Possible to acquire raw data | Yes (Need to subscribe Emotiv Pro) |

&nbsp;

### Pros

- By installing the free software service called [Emotiv Launcher](https://www.emotiv.com/emotiv-launcher/), you can immediately try out the BCI applications offered by Emotiv.

&nbsp;

### Cons

- Requires charging for Emotiv Pro to get Raw data, which is expensive (cheaper for students).

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

OpenBCI provides devices that can acquire all kinds of biological signals, not only EEG. The company also provides its own software [OpenBCI GUI](https://openbci.com/downloads) for real-time EEG monitoring.

The company offers the following types of EEG devices, but you also need to purchase a board to acquire EEG signals and transmit them to your PC. ([Cyton Board](https://shop.openbci.com/products/cyton-biosensing-board-8-channel?variant=38958638542))

&nbsp;

### Product

[Ultracortex “Mark IV” EEG Headset](https://shop.openbci.com/collections/frontpage/products/ultracortex-mark-iv?variant=23280742211)

| Price                        | $1149(Max)                                              |
| ---------------------------- | ------------------------------------------------------- |
| Channels                     | Up to 16 channels                                       |
| Functionalities              | ・EEG measurement ・35 locations along the 10-20 system |
| Possible to acquire raw data | Yes                                                     |

&nbsp;

[EEG Electrode Cap Kit](https://shop.openbci.com/products/openbci-eeg-electrocap?variant=16456881766472)

| Price                        | $799(Max)         |
| ---------------------------- | ----------------- |
| Channels                     | 21 channels       |
| Functionalities              | ・EEG measurement |
| Possible to acquire raw data | Yes               |

&nbsp;

### Pros

- "Mark IV" can be customized with 16 electrodes in 10-20 system preferred locations to meet any need, such as taking the main occipital lobe

&nbsp;

### Cons

- Not only the EEG device, but also the Cyton Board and other boards need to be purchased, resulting in a cost of $1k~$2k. Other parts are also expensive, so replacing them is also a hurdle.

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

NeuroSky will not only offer [EEG devices](https://store.neurosky.com/), which can be purchased starting at $100 for consumers, but will also provide SDK kits for developers free of charge. The company will also be in the business of selling the chip infrastructure that is NeuroSky's core technology.

NeuroSky has been a pioneer in the BCI industry, and [NeurotechJP was able to interview its CEO, Stanley](https://neurotechjp.com/blog/yang-neurosky/).

&nbsp;

### Products

[MindWave Mobile2](https://www.neurosky.jp/mindwave-mobile2/)

| Price                        | $110                     |
| ---------------------------- | ------------------------ |
| Channels                     | 1 channel (Frontal lobe) |
| Functionalities              | ・EEG measurement        |
| Possible to acquire raw data | Yes                      |

&nbsp;

### Pros

- Anyway, it's cheap, and there are a lot of SDKs and OSS to hack NeuroSky.

&nbsp;

### Cons

- There is only one channel of electrodes, so what can be done is quite limited. (e.g., alpha wave acquisition)

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

Neurosity offers a proprietary BCI "Crown" with excellent design and processing power and a developer's SDK, which is widely used by developers who want to try brainwave control. [NeurotechJP interviewed Alex, the CTO and co-founder of Neurosity](https://neurotechjp.com/blog/castillo-neurosity/), and asked him about the company's path to developing BCI.

&nbsp;

### Products

[Crown](https://neurosity.co/tech-specs)

| Price                        | $1000                                           |
| ---------------------------- | ----------------------------------------------- |
| Channels                     | 8 channels (CP3, C3, F5, PO3, PO4, F6, C4, CP4) |
| Functionalities              | ・EEG measurement ・Focus session in app        |
| Possible to acquire raw data | Yes                                             |

&nbsp;

### Pros

- The SDK for developers is quite extensive, and the hurdles for BCI application development are low.

&nbsp;

### Cons

None so far

&nbsp;

### Resources

- [Brainflow Neurosity](https://brainflow.readthedocs.io/en/stable/SupportedBoards.html#neurosity)
- [Official SDK doc](https://docs.neurosity.co/docs/reference/classes/notion)

&nbsp;

## By use

**If you just want to do a little EEG analysis at a low cost, Muse, NeuroSky.**

**If you want to measure and analyze properly, use Emotiv, OpenBCI.**

**If you want to build a full stack of BCI apps, Neurosity.**

&nbsp;

## Conclusion

In this article, we have covered five non-invasive BCIs with their advantages and disadvantages. All of them are affordable and have extensive SDKs, so we encourage those who want to try a bit of EEG analysis to give them a try.

In general, it is important for businesses in the BCI industry to find killer use cases using BCI, but at the same time, they need to make this new type of device available to a wider audience. As we saw in the BCI introduced here, BCI that is affordable, functional, and easy to customize will become the mainstream BCI in our real lives in the future.
