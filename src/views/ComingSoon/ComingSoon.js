import Page from "components/Layout/Page"

const ComingSoon = () => {
    return(
        <Page>
            <div className="flex justify-center items-center min-h-screen flex-col">
                <img src="/hng-logo.png" className="mb-5" alt="Logo" />
                <h1 className="text-5xl text-primary font-bold">Coming Soon</h1>
            </div>
        </Page>
    )
}

export default ComingSoon