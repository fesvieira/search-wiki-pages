import { SearchInput } from "./SearchInput"
import { StyledButton } from "./StyledButton"

export const TopBar = () => {
    return (
        <div className={`row card`}>
            <h1>Search Wiki Pages</h1>
            <div className="row">
                <SearchInput />
                <StyledButton>Search</StyledButton>
            </div>
        </div>
    )
}