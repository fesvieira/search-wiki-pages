import { GlobalStyles } from "@/styles/global";
import { theme } from "@/styles/theme";
import { ThemeProvider } from "styled-components";
import PageCard from "./[searchTerm]/components/PageCard";

export default function Home() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />

            <div className="aligncenter">
                <h2>Welcome to Search Wiki Pages</h2>

                <p>Type a topic you want to and check the Wikipedia pages about it!</p>

                <img 
                    src={"https://upload.wikimedia.org/wikipedia/commons/d/de/Wikipedia_Logo_1.0.png"}
                    width={200}
                />         
                
            </div>
            

            
        </ThemeProvider>
    )
};
