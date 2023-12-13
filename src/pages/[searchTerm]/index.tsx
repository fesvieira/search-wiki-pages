import getWikiResults from "../../../lib/getWikiResults"
import { FC } from "react"
import { GetServerSideProps, InferGetStaticPropsType } from "next"
import PageCard from "./components/PageCard";


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
    return (
        <main className="searchColumn">
            {
                results
                    ? Object.values(results).map(result => {
                        return <PageCard key={result.pageid} result={result}/>
                    })
                    : <h2>{`Not Found`}</h2>
            }
        </main>
    )
}

export default SearchResults