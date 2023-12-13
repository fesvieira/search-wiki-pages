import { GlobalStyles } from "@/styles/global";
import { theme } from "@/styles/theme";
import { ThemeProvider } from "styled-components";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Home() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            
            
            
        </ThemeProvider>
    )
};
