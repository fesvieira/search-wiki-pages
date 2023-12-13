import { TopBar } from '@/components/TopBar'
import { GlobalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <GlobalStyles />
            <div className={montserrat.className}>
                <TopBar />
            </div>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp