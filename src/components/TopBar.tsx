'use client'

import { FormEvent, useState } from "react"
import { SearchInput } from "./SearchInput"
import { StyledButton } from "./StyledButton"
import { useRouter } from "next/router"

export const TopBar = () => {
    const [search, setSearch] = useState('')
    const router = useRouter()

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSearch('')

        // Push to web address
        router.push(`/${search}/`)
    }


    return (
        <div className={`row card`}>
            <h1>Search Wiki Pages</h1>
            <form
                className="row"
                onSubmit={handleSubmit}>
                <SearchInput
                    type="text"
                    value={search}
                    onChange={(e) => { setSearch(e.target.value) }}
                    placeholder="Search"
                />
                <StyledButton>Search</StyledButton>
            </form>
        </div>
    )
}