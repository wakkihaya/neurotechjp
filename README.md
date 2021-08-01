[NeurotechJP](https://neurotechjp.com) is running to reveal “The killer use cases of Neurotech”. We will publish trends, columns, and interviews with pioneers who are working at the cutting edge of the neurotech field.

## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Add post for blog

All posts are accomendated under `src/md` directory.

- JP -> `src/md/jp/blog`

- EN -> `src/md/en/blog`

### 1. Set meta data with contents

If you want to add a post, just add it along md type document. At the same time, make sure that you have meta data

- `title`
- `description`
- `datePublished`
- `bannerPhoto`
- `category` (`Interview` or `Column`)

### 2. See the target url of the post

After finishing it and deploying it, the page will be auto generated.

`md/en/blog/test-1.md` -> `https://neurotechjp.com/blog/test-1`

`md/jp/blog/test-1.md` -> `https://neurotechjp.com/jp/blog/test-1`
