import { StyledButton } from "@/components/StyledButton";
import { GlobalStyles } from "@/styles/global";
import { theme } from "@/styles/theme";
import { ThemeProvider } from "styled-components";
import { Montserrat } from "next/font/google";
import { SearchInput } from "@/components/SearchInput";
import { TopBar } from "@/components/TopBar";

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Home() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <div className={montserrat.className}>
                <TopBar />
            </div>
            
        </ThemeProvider>
    )
};
