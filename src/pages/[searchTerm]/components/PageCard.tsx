import Link from "next/link"

type Props = {
    result: Result
}
const PageCard = ({ result }: Props) => {

    const textCol = (
        <div>
            <h3>
                <Link href={`https://en.wikipedia.org/?curid=${result.pageid}`} target="_blank">{result.title}</Link>
            </h3>
            <p>{result.extract}</p>
        </div>
    )

    const content = result?.thumbnail?.source
        ? (
            <div className="pageCardRow">
                <img
                    src={result.thumbnail.source}
                    alt={result.title}
                    width={result.thumbnail.width}
                    height={result.thumbnail.height}
                    loading="lazy"
                />

                {textCol}
            </div>
        )
        : (
            <div className="pageCardRow">{textCol}</div>
        )

    return content
}

export default PageCard