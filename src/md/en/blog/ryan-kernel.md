---
title: "Making brain measurement mainstream. Interview with CTO of Kernel, a company developing a non-invasive BCI. | Ryan Field"
description: "This time, we interviewed Ryan Field, CTO of Kernel, and asked him about their thoughts on development of non-invasive BCI, its current status, and future prospects."
datePublished: "2022/2/13"
bannerPhoto: "/img/ryan-kernel/cover.jpg"
category: "Interview"
writer1: "Nao Yukawa"
writer2: ""
interviewer1: "Nao Yukawa"
interviewer2: "Hayato Waki"
translator1: "Toma Itagaki"
translator2: ""
---

&nbsp;

The demo by [Neuralink](https://neuralink.com/), a company led by Elon Musk, left its mark on the world this past year. [The Link](https://neuralink.com/approach/#:~:text=The%20Link,to%20an%20implant%2C%20the%20Link.), an implantable chip they are developing, is an invasive BCI, which requires surgery. Though invasive BCIs have unique strengths, the invasive nature limits its use cases to medical applications.

On the other hand, non-invasive BCIs — not requiring invasive surgeries — are better suited for the general market. The company leading the charge in non-invasive BCIs is [Kernel](https://www.kernel.com/). Developing at a remarkable pace, Kernel has reached incredible heights in terms of funding and technology. When it comes to invasive BCIs, Neuralink is most famous, but Kernel is making its name known as a big player in the non-invasive market.

We interviewed [Ryan Field](https://www.linkedin.com/in/ryanmfield/), CTO of Kernel, about his thoughts on the development, current state, and future of non-invasive BCIs.

&nbsp;

## Making Brain Measurements Mainstream with Non-Invasive BCIs

As covered in a [previous article](https://neurotechjp.com/blog/5-startups-non-invasive-bci/), Kernel was founded in 2016 by [Bryan Johnson](https://www.linkedin.com/in/bryanrjohnson/), who previously founded a fintech company called [Braintree](https://www.braintreepayments.com/), which acquired Venmo and was then sold to PayPal for 800 million dollars. Bryan has personally invested 50 million dollars in Kernel based on the huge amount of capital obtained at that time. In 2020, the company raised its Series C, growing its **valuation to over 100 million dollars.**

![Kernel logo](https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/vtkmcdz3nfbwkoavyqnq)
_Image: Kernel logo_

&nbsp;

Kernel, which now develops non-invasive BCIs at its core, used to explore invasive techniques; a huge pivot in terms of its core technology.

> Kernel initially started as a company with the mission to both read and write to the brain.
> We went down an invasive exploration path at first, like what type of implant technologies and things could we design
> in order to achieve this goal.
>
> However, after a couple of years doing some exploratory work and
> thinking about the larger mission of what kernel wanted to do,
> which is to **make brain measurement mainstream so that anyone in the world can learn things about the brain**
> **and use that information to better their lives**,
> invasive technologies do not really map on to the goal and ambition of being a mainstream brain measurement company.
> So Kernel pivoted from invasive to non-invasive techniques.

&nbsp;

This pivot had several key advantages for Kernel.

> Some of the side effects from this pivoting are that when you go non-invasive,
> **you don't need to have the same regulatory approvals that are needed in order to do invasive technology**.
> By that, you can iterate faster and the development time gets much faster.
>
> And then, it really gives you the opportunity of **looking at the whole brain** at the same time.
> We all know that most implanted devices are very localized and typically focused on trying to restore some kind of function.
> So if someone is paralyzed, or has lost speech, or has some other ailment, then these implants are used to try and treat that.
>
> At Kernel, we had to think of the whole brain and how it all works together. By not limiting us to implants in a localized region,
> we're able to get a more complete picture of everything that's going on in the brain,
> which we think will lead to more applications and broader market use of neurotechnology.
>
> You get this precision measurement of the whole brain activity,
> and really start to understand what things influence the brain and how it changes.

&nbsp;

## Two Headsets: Flow and Flux

Kernel currently hosts two products, called Flow and Flux.

Flow is a device that uses technology called **[TD-fNIRS (Time Domain Functional Near-Infrared Spectroscopy)](https://pubmed.ncbi.nlm.nih.gov/23747285/)**. [fNIRS](https://en.wikipedia.org/wiki/Functional_near-infrared_spectroscopy) uses near-infrared light to record brain activity by measuring changes in the amount of oxygenation in the blood associated with neural activity in the brain. There is another technique called [CW-fNIRS (Continuous Wave fNIRS)](https://nirx.net/cwfnirs). TD-fNIRS is expected to provide more information than CW-fNIRS due to the use of pulsed lasers, but is more complicated and difficult to develop.

![Flow](https://www.kernel.com/static/a72a3c3cb35c0bef323dea7318a4e1f1/8afe2/HeadSet2.png)
_Image: Flow_

&nbsp;

Flux is a device that uses a technology called **[OP-MEG (Optically-Pumped Magnetoencephalography)](https://www.researchgate.net/publication/335780394_Imaging_the_human_hippocampus_with_optically-pumped_magnetoencephalography)**. [MEG](https://en.wikipedia.org/wiki/Magnetoencephalography) is a technique which measures activity in the brain using the magnetic field generated by neural activity, and [SQUIDs (Superconducting Quantum Interface Devices)](https://en.wikipedia.org/wiki/SQUID) are commonly used as magnetic sensors, but they require the use of liquid helium to achieve a cryogenic state, which usually is very expensive. Kernel’s Flux reduces the cost and size of the sensor by using a technique called [OPM (Optically Pumped Magnetometer)](https://www.sciencedirect.com/science/article/pii/S1053811919304550), which does not require SQUIDs.

![Flux](https://i.ytimg.com/vi/6QizMOa4ZJM/maxresdefault.jpg)
_Image: The demo of Flux_

&nbsp;

Kernel is currently conducting [a public experiment](https://www.kernel.com/participate) using its Flow headset in Los Angeles, where its headquarters are located, and NeurotechJP was able to participate and experience it firsthand. The demo can be viewed on YouTube from the link below.

![Flow demo](https://neurotechjp.com/img/ryan-kernel/flow-demo.jpg)
_Video: Flow demo experience_

&nbsp;

Ryan describes the difficulties in developing Flow and Flux as follows.

> When Kernel switched from invasive into non-invasive techniques about four and a half years ago,
> the company looked at every technology that was out there, whether it was EEG, MEG, optical based, ultrasound,
> or any modality that you can imagine to read the brain, and we settled in on two candidates.
> One was the MEG system, which we called Kernel Flux, and one was the time domain fNIRS system called Kernel Flow.
>
> MEG was able to achieve very high temporal resolution while maintaining some of the the spatial resolution.
> It's used currently in SQUID MEG systems where they look at measuring regions of the brain for epileptic patients
> and those sorts of things.
> With fNIRS, what we knew is that it is very spatially specific and it worked with a different modality.
>
> So these two things are not really the same. MEG is looking at the magnetic fields of the neurons firing,
> where time domain fNIRS is looking at the changes in blood oxygenation, as the neurons undergo some metabolic activity.

> Each of the two technologies has their own challenges. Toward the end of last year, we actually stopped development on the MEG system
> because it didn't have a clear path to reaching this mainstream adoption that we're looking for as a company.
> One of the reasons is that **the size of the magnetic fields emitted from the brain is very tiny**.
> When you compare that to Earth's magnetic field, the background, and all the other things in the environment
> that create magnetic fields like your computer, toaster, or television, you have these really strong noise sources that are fighting with the magnetic signals from the brain.
> So it requires having this shielded and isolated room to suppress this environmental magnetic field.
> And we didn't see a good path out of that into something that was more portable, wearable, and ultimately,
> something that people could use in their homes every day.
>
> So that's the rationale behind the two products and where our focus is now, which is on Kernel Flow.
> For the Kernel Flow, one of the biggest challenges was time domain fNIRS. fNIRS generally has been around for decades,
> but time domain specifically never got to a point of widespread use even in the research field
> because the hardware was too challenging to make. So one of the most difficult things we had to overcome in
> developing Kernel Flow was that
> **we couldn't use any available hardware, and we had to build our own custom integrated circuits or custom chips**
> **in order to enable time domain technology to scale**.
> And it's really trying to figure out what was needed in order to do that.
> It wasn't straightforward at all like what the requirements were for the chip, or how you can design this from the ground up.
> So we set out on a research program. We went through three generations of research prototypes, designing our own custom
> ASICs (Application Specific Integrated Circit), doing research measuring people's brains, and then feeding back information into our chip design process
> so we could implement improvements.
>
> And where we landed is in the Kernel Flow that you see today, which is a highly integrated time domain system.
> You see just a single USB-C cable connected to it, and all the electronics are built into the headset.
> It's approaching some of the smallest, most compact versions of the CW fNIRS,
> but it increases the amount of information you get from measuring the brain optically.

&nbsp;

Despite these challenges, Kernel successfully released the Flow this past year. We asked Ryan about the unique strength of Kernel that differentiates itself from other companies.

> I think kernel has been successful so far and continues to push things forward because
> **we were one of the first groups to approach the problem by looking at the full stack**.
>
> We started at the lowest level, which is how we drive the lasers and detect the photons that come out of the brain,
> all the way up to the machine learning and AI algorithms, the inference that you make on the data you record.
> And we do everything in the middle. All the hardware is custom designed by us, all the software that runs on the system is built by us,
> and all the analysis tools that run in the cloud are built by us. So I think that really sets us apart because
> **we have the ability to tune every piece in the technology stack and make it all work together really nicely**.
>
> If you look at a lot of existing fNIRS companies that were spun out of university labs, they typically have a specialty
> like they focus on the hardware development and collaborate with someone for doing some experimental work or
> collaborate with someone for doing the software.
> We brought all that expertise in-house and we're able to iterate really quickly and come up with the best solutions that we could.
>
> And we continue to do that today. I'm pretty excited about what the next version of Kernel Flow that gets released is going to be
> because we've had systems out in the world since July 2021 when we first started shipping, and have gotten feedback
> from early customers and from our own internal use.
> **We have already made quite a few improvements and changes to the system that will be reflected**
> **when we launch our production systems later this year**.

&nbsp;

Kernel is currently focused on their fNIRS technology. Now, with newfound insights they are beginning to iterate on their technology with R&D underway for the next generation Flow.

> If you look at optical measurement of the brain, I think **it's pretty widely accepted that
> the time domain fNIRS is the gold standard and has all the information you could want**
> because you get these very detailed signals that are distributions of how far photons traveled in the brain
> and you can see how those distributions change over time. It gives you the maximum amount of information like depth selectivity,
> or how far the photons have penetrated, which is one of the biggest weaknesses of CW-fNIRS.
> With CW-fNIRS, you have to use a lot of short channels to remove superficial signals.
> It really opens up the the possibilities for doing new and improved measurements if we have these absolute metrics of
> what the blood oxygenation is inside the brain.
> So to me, I think **time-domain fNIRS is probably one of the best that you can use for non-invasively measuring the brain with precision**.
>
> **For the technology that's enabled us to do that, I think there's a lot of room for improvement on just our existing Kernel Flow**.
> What we've done today is pretty great already, and I'm very thrilled with what the team has put together and what we've been able to achieve.
> But in doing this, we have so many ideas on how to improve the system and make it even better.
> So **we're starting some R&D efforts now on future generation devices that will come out in two or three years**
> that we think will take the field even farther along in terms of optical brain measurement.

&nbsp;

## Kernel's Vision - The Path Towards its 2033 Goal

Kernel ambitiously envisions a world in which brain measurements are commonplace and Flow is a household staple; and their goal is to realize this by 2033. Considering that Flow is currently only available to research institutes, what is their plan to start business with general consumers?

> We think **the earliest consumer-oriented product could come out around 2024**.
> And I think this will not be the device that is in everyone's home because, like we said, 2033 as a far out goal,
> there is a long path to the point where brain interfaces are widely used as smartphones.
> So it's going to be like the early adopters version, like the the Palm Pilot to the smartphone,
> a version you can buy and use but is not going to be the final thing that really drives everyone.
>
> The reason that we think this is if you think about brain interfaces generally or neuroscience,
> **the brain is one of the hardest to understand things in the human body**.
> It is so complex and everyone who studies it spent a lot of time becoming experts in not just how the brain functions
> but how to measure what the brain is doing. And we don't take that lightly.
> We don't think that we can just put together a consumer product, a piece of hardware, and send it out and say,
> here's the thing that you can use and it'll do something like play a game or do something like that.
> We recognize that, **in order to make brain measurement mainstream, you need to have a solid scientific foundation,**
> **and you need to have a robust signal that you can measure reliably and really count on every time**.
> It can't work 75% of the time, if you want it to be a consumer product.
>
> So we think it's gonna take time for the applications and the science and the things that
> consumers really want to do with a brain measurement device to evolve.
> That's why we set 2024 as our first target for a consumer-oriented product,
> and then 2033 as being the long term goal of making brain interfaces really mainstream.

&nbsp;

Flow is capable of high quality measurements of brain activity, but the device does not have the ability to stimulate (or “write”) to the brain which was part of the initial exploration with invasive techniques. Kernel sees stimulations as simply one method of brain intervention, but recognizes that the current challenge lies in measuring and quantifying the brain.

> At Kernel, **we think of stimulation as just one type of way to modify the brain**.
> And so if you back out one level and you bucket all these things together that can modify the brain,
> we classify them as **interventions**. An intervention can be a stimulation device,
> like you can use TMS, tDCS, deep brain stimulation, and whatever that's going to modify the brain.
> But you could also modify the brain by studying.
> It takes a lot longer to make a change in the brain, but when you're learning something,
> you're developing new neural pathways. You can also modify the brain by maybe taking a drug,
> like you have depression and you take an antidepressant. That's an intervention.
>
> We have some ideas on interventions that could modify the brain for good.
> So **Kernel can become an interventions company at some point in the future**.
> But **we really believe that the most important thing to do now is to characterize interventions based on brain measurements**.
> So rather than make new ones, we should see what the existing things are doing to the brain and have good measurement data.
>
> When you play a game, what is your brain doing? Is that actually good for your brain? Or is it bad for your brain?
> Are you engaging neural pathways that are increasing motor learning or some other skill that you want to?
> Or are you just doing something that has no real development value on your brain?
> I don't know what the answer to these questions are. But those are the types of things that we're looking at now,
> which is just how we understand the brain better.
> So when we do go after interventions, whether it's stimulation or some kind of digital interventions,
> that is when we have the right data and we can quantify what they do.

&nbsp;

## Collaborations in Research Leads to Opens Up New Applications

Kernel previously hosted a program dubbed Flow 50 where fifty research institutes and companies could rent a Kernel Flow. Ryan and his team chose each project carefully with the hope that the program would contribute to neuroscience research but also further the applications of Flow and brain measurement devices.

> We had a lot of people apply for Flow 50. And from these 100 applications, we hand-selected the ones that we liked the best.
> So honestly, all those 50 customers are my favorite because those were the ones that were doing something interesting
> that had compelling stories about what they wanted to do with brain measurement.
>
> And I'll say that not all of the full 50 customers are academic researchers.
> There are companies that have interesting recent research questions that they're trying to answer with the Kernel Flow device.
> So it's a mix of people and all of them have a special place at Kernel
> because the areas that they're going after are
> what we think **have the potential to make meaningful contributions to society and the future of neuro-measurement**.

&nbsp;

Given the short application window of around two months for Flow 50, a hundred applications seems to reflect the high amount of interest and attention that Kernel Flow is getting from many research groups. Although the Flow 50 program is over, Kernel is moving swiftly to make the device available to more people.

> We do not have any Japanese research institutes that are part of Flow 50, but we are interested in working with Japanese research institutes.
> So we'd be happy to talk to the readers in Japan, especially if you have really interesting research questions that center around brain measurement.
>
> For the Flow 50 program, it was a pretty narrow application window, and we accepted applications in 2020 between October and the end of the year.
> Each research institute wrote a proposal, and we evaluated the proposal based on alignment on how fast they can do the work,
> what the hope for outcomes would be, and all of these things.
>
> We are no longer doing anything Flow 50, but we have two things right now.
>
> First, **we are taking pre orders for our production Flow systems**.
> When we finish our designs and have things ready for later this year, we'll start shipping the production version of Flow.
> So if you're a corporate research partner, we'll work with you to get a system in the pre order line,
> or try to find what research questions maybe we can help you answer earlier.
>
> And then we recently launched **an academic purchase program that we call [Flow U](https://www.kernel.com/flow-u)**,
> which is pretty similar to Flow 50. It doesn't have the same application requirements,
> but it gives academic research institutions the ability to get a Flow system for 12 months,
> while they find funding and apply for grants and those types of things.
> So we really want to make sure that it's as easy as possible for academic partners to get access to Flow.
>
> Both of those programs are on our website now. So if you go to [kernel.com/products](http://kernel.com/products),
> you can look at both our academic purchase program and preorder.

&nbsp;

![Flow U](https://neurotechjp.com/img/ryan-kernel/flow-u.jpg)
_Image: Website of Flow U_

&nbsp;

In addition to collaborating with research institutes through Flow 50, Kernel has also announced partnerships with two companies. One with [Cybin](https://cybin.com/), a company that focuses on the treatment of mental health problems caused by psychedelics. The other with [Statespace](https://statespace.gg/), the publisher of [Aim Lab](https://aimlab.gg/), which aims to optimize performance in eSports and video games.

We asked Ryan about future partnerships that Kernel is interested in.

> We also have partnerships in other areas that are not public yet, and I can't say anything that we haven't released publicly.
> But I will say generally that **we're interested in partnering with anyone who has a product**
> **that is meant to change the brain or do something to the brain**.
>
> Mental health is one area that's very obvious. And then I think gaming is really a question of performance,
> like what training programs are most effective in developing the brain of a person to optimize their performance.
>
> There are a number of things like these, and all of them are very positive, like how do you help people by measuring brains.
> We are interested in all application services,
> and there's nothing that doesn't interest us as long as it's a robust application of brain measurement.

&nbsp;

Kernel’s main focus thus far has been in product development, refining the technology behind Flow. Now, they aim to further expand the application of Flow through collaborations and partnerships with research institutes and companies.

&nbsp;

## Conclusions

We would like to extend our thanks to Ryan Field for his insights into Kernel’s history and their big plans to revolutionize the field of neurotech.

Utilizing non-invasive TD-fNIRS technology, Kernel envisions a world where BCIs will be as ubiquitous as the smartphone by 2033; a world in which everyone can improve their lives by understanding their own brains. With new insights from Ryan, it is no doubt that Kernel has plans moving forward so keep an eye out for exciting news!
