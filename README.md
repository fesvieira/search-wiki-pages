# search-wiki-pages
Project using NextJS Styled Components and Axios to fetch Wikipedia pages

## Example Axios

```typescript

import axios from 'axios';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

type Repo = {
    userId: number,
    id: number,
    title: string,
    body: string,
}

export const getServerSideProps = (async (context) => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    const repo = await response.data

    return { props: { repo } }
}) satisfies GetServerSideProps<{
    repo: Repo
}>

export default function Page({ repo }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <h1>{repo.body}</h1>
    )
}

```
