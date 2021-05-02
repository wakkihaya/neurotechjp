NeurotechJP is a website gathering information of neurotechnology through interviews.

## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Add post for blog
All posts are accomendated under `md/blog` directory.
If you want to add post, just add it along md type document. At the same time, make sure that you have meta data 
- `title`
- `subtitle`
- `datePublished`
- `bannerPhoto`
- `canonicalUrl`
to show posts correclty. 
After finishing it and deploying it, the page will be auto generated.
(`md/blog/test-1.md` -> `https://neurotechjp.com/blog/test-1`)