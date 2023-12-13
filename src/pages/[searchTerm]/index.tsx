import { log } from "console"
import getWikiResults from "../../../lib/getWikiResults"
import { FC, useEffect, useState } from "react"
import { GetServerSideProps, InferGetStaticPropsType } from "next"


export const getServerSideProps = (async (ctx) => {
    const searchTerm = ctx.params?.searchTerm

    if (typeof searchTerm != 'string') {
        return { props: { results: [] } }
    }

    const wikiData: Promise<SearchResult> = getWikiResults(searchTerm)
    const data = await wikiData
    const results: Result[] | undefined = data?.query?.pages

    return { props: { results: results } }

}) satisfies GetServerSideProps<{
    results: Result[] | undefined;
}>;

const SearchResults: FC<InferGetStaticPropsType<typeof getServerSideProps>> = ({
    results
}) => {

    const content = (
        <main>
            {
                results
                    ? Object.values(results).map(result => {
                        return <div>{JSON.stringify(result)}</div>
                    })
                    : <h2>{`Not Found`}</h2>
            }
        </main>
    )

    return content
}

export default SearchResults