import { StyledButton } from "@/components/StyledButton";
import { GlobalStyles } from "@/styles/global";
import { theme } from "@/styles/theme";
import { ThemeProvider } from "styled-components";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Home() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <div className={`row ${montserrat.className}`}>
                <h1>Search Wiki Pages</h1>
                <StyledButton>Search</StyledButton>
            </div>
        </ThemeProvider>
    )
};
