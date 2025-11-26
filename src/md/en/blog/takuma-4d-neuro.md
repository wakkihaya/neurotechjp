---
title: "4D Neuroscience Opened Up by Light Field Technology | Takuma Sugi"
description: "We spoke with Professor Takuma Sugi of Hiroshima University about the development and applications of 4D imaging using light field technology. This technology, which breaks through the limitations of conventional imaging methods and achieves both cell-level spatial resolution and high temporal resolution, holds the potential to revolutionize research from neuroscience to all of biology."
datePublished: "2025/11/26"
bannerPhoto: "/img/takuma-4d-neuro/ogp.jpg"
category: "Interview"
writer1: ""
writer2: ""
interviewer1: ""
interviewer2: ""
translator1: ""
translator2: ""
---

&nbsp;

## Light Field Technology

### **What is Light Field?**

Light field technology is a technique that captures three-dimensional spatial images with a single camera exposure. Most conventional imaging methods construct two-dimensional images, and to obtain three-dimensional spatial images, it is necessary to stack images captured with focus at different depths. In contrast, light field technology achieves imaging by using an imaging element called a microlens array. When this approach is adapted for microscopy, it gives rise to what is known as a light field microscope.

&nbsp;

**Limitations of Conventional Imaging Methods**

Conventional imaging methods require determining the depth of focus when capturing images. However, to obtain three-dimensional spatial images with this method, it is necessary to perform "scanning" by repeatedly capturing images while gradually changing the focus position. You would then integrate the individual images, which takes a long time for a single capture. For example, with two-photon microscopy, which is currently the mainstream measurement method for nervous systems, it takes several seconds to several tens of seconds to image a region of a few millimeters in each dimension. Therefore, with conventional imaging techniques, it is difficult to capture phenomena that have three-dimensional extent and change rapidly. Additionally, there is a problem that the timing of imaging differs depending on the location within a single imaging target region, resulting in the loss of temporal information within the region.

&nbsp;

![Conceptual diagram showing how 2D images are stacked to obtain a 3D image](https://neurotechjp.com/img/takuma-4d-neuro/img1.png)

_Conceptual diagram showing how 2D images are stacked to obtain a 3D image (generated with ChatGPT)_

&nbsp;

**Advantages and Mechanisms of Light Field Technology**

When the target region is made wider, the time required to image the entire region becomes longer. To shorten the imaging time, it is necessary to narrow the target region. How can we resolve this trade-off and image four-dimensional phenomena—combining the three dimensions spanning space with the time axis—with high resolution? Light field technology is one solution.

&nbsp;

What characterizes light field technology is the microlens array placed in front of the imaging sensor. As its name suggests, this is an optical element consisting of thousands of tiny lenses arranged in an array, and when light passes through each microlens, which microlens it passed through is recorded by the image sensor. In other words, it functions to record angular information of light rays, since they reach different pixels on the image sensor depending on the microlens and the incident angle of the light ray. The light ray information obtained in this way results in each pixel having information about focal depth. Therefore, after recording with the image sensor, by selectively using the recorded information of pixels corresponding to a specific depth through computation with a reconstruction algorithm, it is possible to retrospectively construct images with focus at arbitrary positions.

&nbsp;

![Conceptual diagram of light field technology](https://neurotechjp.com/img/takuma-4d-neuro/img2.png)

_Conceptual diagram of light field technology (provided by Prof. Sugi)_

&nbsp;

A notable point about this technology is that information for three-dimensional images that can be focused at arbitrary depths can be obtained with a single capture. This means, for example, that recording a region that previously required 100 captures with conventional imaging techniques can now be done with a single capture, achieving 100 times the speed and 100 times the temporal resolution. At the same time, we can also solve the problem of losing temporal information within the target region.

&nbsp;

In this way, by using light field technology, it becomes possible to record three-dimensional spatial images together with precise temporal information = **4D imaging**.

&nbsp;

### **Novelty of Professor Sugi's Research: Improvement of Spatial Resolution and Application to Optical Fibers**

While light field technology enables imaging that is completely different from conventional measurement techniques, it also has problems. One issue that stands out is low spatial resolution. Reconstruction algorithms that have been developed for light field technology up until now had the problem of spatial resolution being more than 10 times inferior compared to conventional confocal microscopes.

&nbsp;

**Breakthrough**

Professor Sugi's research and development achieved a groundbreaking breakthrough by significantly improving the spatial resolution in light field technology. Professor Sugi's team developed a new algorithm that differs from any existing reconstruction algorithms. While maintaining the characteristic of light field technology of recording three-dimensional spatial images with a single capture, they achieved high spatial resolution at the single-cell level, realizing 4D imaging at the cellular level. Furthermore, this algorithm is based on optical computation and is not AI-based. Therefore, there is no limitation of the algorithm's application being restricted to samples used in training data, which is often a problem with AI-based algorithms. Professor Sugi's algorithm enables 4D imaging of various subjects, from C. elegans to organoids to mouse brains.

&nbsp;

### **What Has Become Possible?**

**Understanding the Spatiotemporal Structure of Neural Population Activity**

The 4D imaging brought about by the breakthrough of improving the spatial resolution of light field technology has enabled the visualization of detailed spatiotemporal structures of nervous system activity.

&nbsp;

![Video or image showing how the activity of all neurons in C. elegans was recorded as a smooth video](https://neurotechjp.com/img/takuma-4d-neuro/img3.png)

_Video or image showing how the activity of all neurons in C. elegans was recorded as a smooth video (provided by Prof. Sugi)_

&nbsp;

This is a 4D imaging recording of the activity of all neurons in C. elegans that Professor Sugi performed using the developed light field technology. With conventional confocal microscopy imaging, even imaging creatures as small as C. elegans can result in a video resembling a flip book animation due to the time it takes to image the video frames. On the other hand, using the developed light field microscope, it is possible to obtain smooth videos while capturing the activity of individual neurons. This made it possible to clearly capture the detailed behavior of neurons and interactions between cells.

&nbsp;

**Light Field Endoscopy**

Furthermore, Professor Sugi discovered that bundles of optical fibers function equivalently to microlens arrays. Each individual fiber in a densely packed bundle of optical fibers has optical properties similar to each individual microlens, providing angular information of incident light. Based on this concept, when the reconstruction algorithm was applied to light information recorded through optical fibers, three-dimensional spatial images of samples at the tip of the fibers could be beautifully obtained.

&nbsp;

![Conceptual diagram of how bundles of optical fibers function equivalently to microlens arrays](https://neurotechjp.com/img/takuma-4d-neuro/img4.png)

_Conceptual diagram of how bundles of optical fibers function equivalently to microlens arrays (provided by Prof. Sugi)_

&nbsp;

This measurement technology born from the fusion of optical fibers and light field can be said to be an endoscope with a completely novel system. This measurement technology, which can be called a light field endoscope, makes it possible to acquire fine three-dimensional information of internal biological tissues that cannot be reached without using an endoscope.

&nbsp;

Using this technology, Professor Sugi actually achieved 4D imaging of the hypothalamus in mice, which cannot be measured with confocal microscopes because it is blocked by the cerebral cortex.

&nbsp;

![Image obtained using light field endoscopy in the mouse hypothalamus](https://neurotechjp.com/img/takuma-4d-neuro/img5.png)

_Image obtained using light field endoscopy in the mouse hypothalamus (provided by Prof. Sugi)_

&nbsp;

The ability to image deep brain activity in living organisms, where measurements are currently limited to electrophysiological methods, by performing 4D measurements provides various possibilities in neuroscience research. Furthermore, this technology has potential applications in many fields, including future applications in endoscopic surgery.

&nbsp;

**From Correlation Analysis to Causal Biology**

The 4D imaging enabled by light field microscopy brings a new perspective to neuroscience research and biological research. This is because it makes it possible to grasp causal relationships between interacting microscopic elements.

&nbsp;

Much of traditional biological research has been limited to analyzing correlations. To give an example from neuroscience, even if it can be measured that three adjacent neurons simultaneously increased their activity, it is impossible to determine whether there is a 1-to-2 connection or two 1-to-1 connections. In other words, the relationships between individual neurons can only be captured as correlations.

&nbsp;

![Diagram showing how information propagation between three neurons can be captured as causal relationships for the first time through 4D analysis](https://neurotechjp.com/img/takuma-4d-neuro/img6.png)

_Diagram showing how information propagation between three neurons can be captured as causal relationships for the first time through 4D analysis (provided by Prof. Sugi)_

&nbsp;

If there are only about three cells, causal relationships can be captured using measurement methods with high temporal resolution, such as electrophysiological measurements. However, when dealing with a large number of cells, none of the conventional methods can capture the true interactions between cells. In contrast, by using a light field microscope, it is possible to target a large number of neurons due to its wide field of view, while simultaneously achieving both cell-level spatial resolution and high temporal resolution, thereby capturing the sequence of activity between individual neurons within that neuronal population. It becomes possible to grasp the causal relationships in the flow of information transmission between neurons.

&nbsp;

> Traditional biology, including biochemistry for example, has all been based on correlation analysis. (omitted) However, I believe that without examining causal relationships, we cannot know things accurately. Therefore, we are now advocating for what we call **causal biology**, and I think 4D technology can be used for that purpose.

&nbsp;

The ability to grasp causal relationships between individual elements, which becomes possible only when all three—wide field of view, spatial resolution, and temporal resolution—are present, will bring innovation to research not only in neuroscience but in all of biology. A paradigm shift from correlation analysis to causal biology, made possible by the ability to observe the precise spatiotemporal structure of phenomena occurring within living organisms. 4D imaging with light field microscopy should become the fulcrum for this shift.

&nbsp;

### **What Led to Light Field Technology**

The circumstances that led to the breakthrough in light field technology are deeply connected to the research stance that Professor Sugi has maintained.

&nbsp;

> As a policy in my research, I value combining different fields. For example, in neuroscience, I introduce various things like optics. I think it's important to differentiate myself from others through such combinations. In that context, in 2019, I was introduced to "light field technology" by a distributor of a research equipment company. I had no idea about it at the time, but I thought it was amazing that you could capture 3D in one shot. However, I learned that there were challenges with spatial resolution, so I first applied for an AMED grant with that topic. And then I got accepted. (laughs)

I thought I had to quickly research that field, so I googled it at a cafe and found a paper by Professor Usuki, who is now my collaborator, and immediately contacted him by email. I started the research while learning various things from Professor Usuki.

&nbsp;

Professor Sugi, who values "combining different fields," became interested after the distributor introduced him to light field technology and ventured into an area outside his expertise. He then applied for an AMED grant with an idea to improve spatial resolution, and by "giving it form first," he ultimately won the grant. Furthermore, he immediately emailed Professor Usuki, whom he had never met before, which led to their collaboration. Professor Sugi's attitude of "acting immediately following his curiosity" was evident. In this way, the work rapidly developed into concrete experiments within a short period, leading to the subsequent breakthrough.

&nbsp;

### **4D Neuroscience - Commercialization of Light Field Technology**

Professor Sugi's team is preparing to establish a startup in order to further disseminate this technology. They plan to provide services to target fields using two methods for which they have developed the technology: the "microlens array type" and the "fiber type."

&nbsp;

The "microlens array type" is a device that enables immediate 4D imaging simply by embedding a microlens array in the mount section between the microscope and camera that the user already owns. Users can perform 4D imaging in their existing state without having to rebuild their experimental systems. They are considering providing the microlens array and its processing algorithm for this purpose. The "fiber type" applies a similar algorithm to optical fibers, enabling microendoscopy capable of 3D measurement. They plan to provide licenses for this algorithm to endoscope manufacturers and others.

&nbsp;

There are four main areas they are considering for provision.

&nbsp;

**Disease Research and Drug Discovery Research (Life Science and Drug Discovery Markets)**

The first targets are basic research in life sciences and drug discovery research. In research, if one-photon imaging is being performed, 4D imaging becomes possible by introducing the microlens array and processing algorithm. In the drug discovery field, 3D tissue such as organoids can be captured in one shot, enabling high-throughput, high-precision evaluation. This dramatically accelerates development speed. There is potential to complete the same tasks with a process that takes only a fraction of the previous time.

&nbsp;

**Microendoscopic Imaging (Medical Market)**

As mentioned previously, the "fiber type" technology can make microendoscopic imaging 4D. It can be used in scenarios such as quantifying cancer invasion in 4D, obtaining three-dimensional information, as well as others.

&nbsp;

**Microbiome Analysis Testing (Healthcare Market)**

The technology also shows high compatibility in oral and intestinal microbiome research. For example, it can evaluate the time sequence in which pharmaceuticals like toothpaste kill only harmful bacteria in the oral cavity without killing beneficial bacteria. Similar analysis is also possible for intestinal bacteria.

&nbsp;

**3D Pathology (Medical Market)**

Finally, there is application in the field of pathological examination. Currently, pathological examination takes a great deal of time, despite the fact that the number of pathologists is gradually decreasing. Sections must be cut and examined one by one, but if 3D imaging becomes possible without cutting sections, that time can be shortened.

&nbsp;

![Business Concept for Light Field Technology](https://neurotechjp.com/img/takuma-4d-neuro/img7.png)

_Business Concept for Light Field Technology (Provided by Prof. Sugi)_

&nbsp;

### **Tackling "Consciousness" with Light Field Technology—Challenging the Ultimate Non-Obviousness**

**From Pain Research to the Mystery of Consciousness**

Along with his business plans, the next research area Professor Sugi will tackle using light field technology is "pain." He aims to approach the mystery of "consciousness" through the study of pain.

&nbsp;

Pain research lags somewhat behind studies of vision, hearing, and smell. Because it is a subjective experience, it is deeply connected to consciousness. The mystery that pain stimuli propagate extremely rapidly on a time scale of just a few dozen milliseconds and are instantly perceived as "painful" also stimulates Professor Sugi's curiosity.

&nbsp;

> Pain is subjective information. I believe we can approach the mystery of consciousness by quantifying how this is represented in the brain and how much information is being processed.

&nbsp;

Light field 4D technology can maintain millisecond-scale temporal resolution while capturing a wide field of view at the cellular level. In other words, it can track in real time **"which neurons, in what order, passed information to where,"** allowing direct mapping of the causal connections hidden in pain perception networks. If the "arrows of information" that were invisible in conventional correlation analysis can be revealed, pain research will accelerate and quantification will become realistic.

&nbsp;

**"Non-Obviousness" That Led to Curiosity About the "Brain" and "Consciousness"**

Professor Sugi's interest in the "brain" and "consciousness" lies in the "non-obviousness" of these subjects.

&nbsp;

> In my research, I value things that give me a sense of "non-obviousness." There's an overwhelming amount we don't understand about the brain, right? I especially think about this when observing insects. For example, termites have brains and possess incredible sociality. When such small creatures live with such remarkable social structures, it's truly fascinating. There's "non-obviousness" there. In other words, it's amazing even though it can't easily be explained logically.

Its ultimate question is consciousness, I believe. I want to approach the problem of consciousness through the study of "pain."

&nbsp;

The ultimate non-obviousness—Professor Sugi pushes forward toward the mystery of "consciousness," combining different fields as he goes.

&nbsp;

## Conclusion

This time, we had the opportunity to speak with Professor Takuma Sugi of Hiroshima University.

&nbsp;

The brain has a microscopic structure that extends through three-dimensional space and further utilizes temporal degrees of freedom for representing information. Therefore, when measuring brain activity, one is plagued by trade-offs among numerous factors. Among spatial resolution, temporal resolution, measurement range, and compatibility with other technologies, choosing one often means sacrificing another, requiring researchers to select measurement methods suited to the phenomena they wish to capture. The technology developed by Professor Sugi this time achieves both spatial resolution and temporal resolution in three-dimensional space, breaking through these trade-offs—a true breakthrough. This technology will undoubtedly bring about changes in the experimental paradigm of neuroscience, and by extension, biology.

&nbsp;

We cannot take our eyes off the future of light field microscopy and Professor Sugi's future activities as he attempts to connect this to startup establishment and the elucidation of the mystery of consciousness, opening up new horizons.
