import Header from "./common/header"
import { Html } from "next/document"

const Layout = ({ children }) => {
    return (
        <>
            <Html lang="en">
            <Header />
            <main>
                {children}
            </main>
            </Html>
        </>
    )
}

export default Layout
