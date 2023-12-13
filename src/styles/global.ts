import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    
    .row {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        row-gap: 16px;
        column-gap: 16px;
    }

    .card {
        background-color: #c7c7c7;
        border-radius: 16px;
        padding: 8px;
        margin: 0px;
    }

    .aligncenter {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .cleanLink {
        text-decoration: none;
        color: black;
    }

    .searchColumn {
        display: flex;
        flex-direction: column;
        row-gap: 16px;
        align-items: center;
        padding: 8px;
    }

    .pageCardRow {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        row-gap: 16px;
        column-gap: 16px;
        width: 100%;
        background-color: #ededfd;
        border-radius: 8px;
        padding: 8px;
        margin-left: 5rem;
        margin-right: 5rem;
    }
`