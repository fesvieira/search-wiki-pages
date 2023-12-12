import { StyledButton } from "@/components/StyledButton";
import { GlobalStyles } from "@/styles/global";
import { theme } from "@/styles/theme";
import { ThemeProvider } from "styled-components";
import { Montserrat } from "next/font/google";
import { SearchInput } from "@/components/SearchInput";

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Home() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <div className={`row card ${montserrat.className}`}>
                <h1>Search Wiki Pages</h1>
                <div className="row">
                    <SearchInput />
                    <StyledButton>Search</StyledButton>
                </div>
            </div>
        </ThemeProvider>
    )
};
