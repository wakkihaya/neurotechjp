---
title: "Toward the Practical Use of Artificial Retinas. A Japanese Researcher at Stanford University｜Hayato Nakamura"
description: "We interviewed Hayato Nakamura, who studied at Boston University from his first year as an undergraduate and is now a doctoral student at Stanford University. We discussed his career to date, the challenges of artificial retinas, and the future direction of BMI research."
datePublished: "2021/10/24"
bannerPhoto: "/img/dr-nakamura-stanford/cover.jpg"
category: "Interview"
---

&nbsp;

In BMI research, there is a popular research topic called [Artificial retina](https://icrcat.com/en/artificial-retina-chip/#:~:text=Artificial%20retina%20or%20retina%20chip%20is,that%20electrically%20stimulate%20the%20retina.&text=The%20camera%20sends%20information%20to,optic%20nerve%20to%20the%20brain.).

Artificial retina is a technology that allows people who have lost their eyesight to see things again by applying electrical stimulation directly to their eyes.

![Aritificial retina](https://med.stanford.edu/artificial-retina/research/_jcr_content/main/panel_builder/panel_0/panel_builder/panel_0/image.img.620.high.png/eye-implant.png)
_Image: Artificial retina_

We interviewed [Hayato Nakamura](https://twitter.com/eigencoffee), who studied at Boston University from his first year as an undergraduate and is now a doctoral student at Stanford University. We discussed his career to date, the challenges of artificial retinas, and the future direction of BMI research.

&nbsp;

## Beginning in junior high school, his interest in BMI brought him to the U.S.

Nakamura first encountered the term "BMI" when he was in junior high school.

> When I was in junior high school, **there was a special feature on artificial retina in MIT Review or something**.
> The research was rudimentary compared to today, but it was about restoring vision to people who had lost their sight because the photoreceptors at the back of their retinas had died.
> In the study, they tried to send visual signals to the brain by directly stimulating the RGCs (Retinal Ganglion Cells),which is located in front of the photoreceptors.
> In that study, the patient could only recognize the input image with a resolution of approximately 4×4,but I thought **it was interesting, just like Japanese anime called Ghost in the Shell**.
> This was my initial motivation.

The idea of an artificial retina being able to provide a visual experience by directly stimulating the brain is very appealing.

&nbsp;

In addition to the fact that BMI research was far more advanced in the U.S. than in Japan, Nakamura also had a sense of the limitation within the Japanese culture.

> In general, I felt that in Japan, people who like to do research and study are not treated very well.
> **I wanted to be more free to do what I wanted to do**, so I came to the U.S.

For these reasons, Nakamura decided to come to the U.S. He decided to study abroad as an undergraduate student in order to improve his English and acclimate to the local lifestyle, and enrolled in Boston University.

&nbsp;

## Immersed in research on computer vision and research using EEG as an undergraduate

During his first and second year as an undergraduate, Nakamura conducted computer vision research at the [VIP Lab](https://vip.bu.edu/); specializing in **object detection related research** in order to pursue methods to acquire a human-like visual system with computers.

> The main task of the research was human detection.
> **In normal person detection, input images are almost always ones in which the object and the ground are perpendicular, and there is almost never any kind of rotation.**
> During our research, the camera we used was a ceiling-mounted omnidirectional camera, which is equipped with lens distortion. For example, if there is a person standing right under the camera, their head will be enlarged.
> Depending on the position of the person, the legs may be facing upward and the head downward; ordinary computer vision algorithms cannot be applied.
> We developed a new algorithm and an architecture called RAPiD.
> When the paper was published, **it achieved [SOTA](https://www.cyberdefinitions.com/definitions/SOTA.html#:~:text=SOTA%20means%20%22State%20of%20the%20Art.%22) (State of The Art) in a dataset of panoramic image cameras.**

![EEG CV](https://neurotechjp.com/img/dr-nakamura-stanford/eeg-cv.jpg)
_Image: Human detection using omnidirectional camera_

The main goal of this project is to **improve Heat Ventilation Air Condition (HVAC) systems,** which are installed in buildings. Incorporating this human detection algorithm by Nakamura and his colleagues, the system is expected to reduce power consumption by adjusting ventilation and heating/cooling according to the number of people and their activities.

This [research paper](https://arxiv.org/abs/2005.11623v1), of which Nakamura is a co-author, was accepted by [CVPR](https://cvpr2020.thecvf.com/) (Computer Vision and Pattern Recognition), the top computer vision conference. However, as he continued his research on object detection, **he realized more how amazing the human visual system is**.

> I learned from my research that **the human visual system is really amazing.**
> During our research on object detection using Deep Learning, we achieved SOTA, but it still did not compare to a human's vision.
> First, **the architecture itself is data-hungry and extremely vulnerable to anomalies**; I felt that it was far from human performance.
> I decided to move forward with research on the human visual system.

With this in mind, during his third year as an undergraduate, he also conducted **research on human vision using EEG (Electroencephalography)** at [Reinhart Lab](https://sites.bu.edu/reinhartlab/) at Boston University.

> Using EEG, we recorded electrical signals from the human occipitotemporal lobe and decoded them.
> The setup of the experiment was to show the subject two striped patterns of black and white circles on a monitor at different times.
> At this time, each circle is rotated slightly, and **the the subject's task is to
> answer how much and which way the second circle was rotated relative to the first circle**.
> It was a study to decode the object rotation information stored in the subject's visual working memory from the data of the subject's brain during the task.

In fact, this research has some similarities to the object detection research that Nakamura did when he was a first and second year undergraduate student.

> The unique process I applied in Deep Learning was that I **put the rotation into the Loss Function**, I then researched **how humans store the angle information of rotation**.
> What I discovered was that **it was possible to decode rotation angle information even with EEG**.
> This is how I moved forward with neuroscience.

&nbsp;

## Currently a doctoral student at Stanford University, he is planning to research on artificial retinas

Nakamura started his doctoral program at Stanford University in September 2021. He plans to conduct research on BMIs (Brain Machine Interfaces), especially those related to artificial retinas. He chose Stanford from the following reasons:

> First, my personal reason was that **I always wanted to go to Stanford**.I think Stanford was the first American university of which I saw online lectures.
> I took a tour at Stanford and wanted to attend Stanford as an undergraduate student, however, I couldn't enter as an undergraduate, so I opted to attend Boston University.
> Later, I applied for graduate school again to fulfill my longtime desire.

> A larger reason that **I am interested in the human visual system** at Stanford.Stanford has many BMI-related laboratories. If I didn't join the lab, I could find interests in another laboratory. **Research on artificial retina would be the closest to the combined field of visual system and BMI**.
> Artificial retina is the best example of BMI, so I had been considering joining a laboratory that was working in this field.
> I researched and found a lab at Stanford that I considered suitable for me.

&nbsp;

## Challenges of artificial retina and future research

The issues with the current artificial retinas: The first is the **low resolution** of them.

> **The resolution of artificial retina machines on the market today is very low**. It's like 8×8.
> If you look at your fist, you'll see an 8x8 patch floating nearby and everything else is completely dark. The electrodes are attached to the peripheral retina, the patch is not in the center of your field of vision. **It is a far comparison from the normal visual experience.**
> If the text was just an outline, large enough or, a single letter, you may be able to read it. It may not be realistic.

One way to solve this problem is to increase the number of electrodes, but this alone does not achieve completely natural vision. This is because RGCs are not only lined up on a flat surface, but are also intricate in three dimensions.

Simply stimulating them with electrodes in two dimensions will stimulate all the other neurons on the axis, making it impossible to send the desired signals.

![RGC](https://neurotechjp.com/img/dr-nakamura-stanford/retina.jpg)
_Image: RGC_

In order to solve this problem, **we need to understand the role of each RGC**. It is not an easy task to investigate the properties of about 20 different RGCs, but in the lab that Nakamura is considering joining, they have already investigated the characteristics of four types of [cells](<https://en.wikipedia.org/wiki/Cell_(biology)>) in experiments using [macaque monkeys](https://en.wikipedia.org/wiki/Macaque).
In the future, it is expected that they will investigate the characteristics of the other cells and develop electrodes that can stimulate them precisely.

However, after all this work, we can only send black and white images. Further research will be needed to **send images with three color channels**.

> The next step is how to make it so that we can **send an image with three color channels.**
> This is also very difficult because we don't know **how the color information is encoded in the spike sequence, and what each RGC corresponds to.**
> If we don't figure that out first, we won't be able to deliver proper colors. We already have an algorithm for reconstructing grayscale images from spike trains, but we haven't yet reconstructed the color information.
> If the next paper comes out from our lab, I think it will be an algorithm for reconstructing images with color information.

To help solve these problems, Nakamura is also considering research on a topic called **smart artificial retina**, which combines computer vision and artificial retina.

> One of my research projects is to combine computer vision and artificial retina to create a smart artificial retina.
> Since there is very little information that can be displayed in 8x8 pixels, I would like to make full use of them to **show only the important information to the patient**. For example, when a person is talking, the most relevant information is their facial expressions.
> I'm also working on creating **an artificial retina that can identify the surrounding environment, classify the situation, and optimize the information to be presented.**
> This is one of the ways to solve the problem I mentioned earlier.

This kind of research can be applied to AR and other fields, and is expected to have a great impact not only on BMI.

&nbsp;

## Future of BMI research and career after graduation

Nakamura, who is currently conducting BMI research in academia, says that **companies will also play a significant role** in the future development of BMI.

> Everyone has their own ideas, but I think that **BMI will develop more and more from startups and companies.**
> I really think that neuro start-ups such as Eron Musk's Neuralink, will be the key to the future of not only neuroscience but of BMI.Originally, BMI research was only done in academia and for clinical applications.
> **However, if companies were to enter the field in the future, they would be interested in applications other than clinical ones, and such applications would flourish the field.**
> In that sense, I think that BMI will continue to develop from industry rather than academia.

As for the direction of development of BMI, he says that **there are only a limited number of things that can be done non-invasively, and he thinks that research will move in the direction of making invasive closer to non-invasive**.

> If we are discussing invasive or non-invasive, I personally think that **it needs to be invasive.**
> There are only a few things that can be done non-invasively. Of course, it would be better to do what can be done non-invasively, but I think what most people want to do is something that cannot be done non-invasively.
> Therefore, I think that **research on materials that can make invasive procedures as burdenless as non-invasive ones** is one of the policies that should be considered.

> It is difficult to say the boudary between invasive and non-invasive. Is it invasive if the skull is opened, or is it invasive if nanorobots are placed inside a blood vessel to measure the activity inside the body?
> I'm not sure if it's really invasive or non-invasive, but at the very least
> **it would be difficult to manage with EEG.**
> If not EEG, ultrasound modulation and imaging are probably more practical than EEG, and then there is optogenetics. If they are non-invasive, I think they have potential.

> Invasion, too, has some difficulties in its way, but when I think of the many patients participating in trials such as artificial retina, I think **they will do it without hesitation if it will change the quality of their lives considerably.**

Lastly, Nakamura answered about his own career as follows.

> I would like to **join the research department of a BMI company and do research.** If, in the next few years,BMI is still in its infancy and is too early for industry to enter, I may choose to stay in academia.
> If the momentum of the industry continues to accelerate, I may choose to work for a company after graduation and do research.
> I could also start my own business, but I'll think about it later, after I've had more experience.

&nbsp;

## Conclusion

In this interview, we talked to Hayato Nakamura, who conducted research on object detection and the human visual system using EEG at Boston University and is planning to conduct research on artificial retina at Stanford University.

Nakamura's research is rooted in MMO (Massive Multiplayer Online) games, which he has been addicted to since he was in kindergarten under the influence of his older brother.

If the mechanism of the human visual system is revealed, we may one day see a world where full dive in is possible.
