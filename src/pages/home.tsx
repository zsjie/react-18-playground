function Home() {
    function goToProfile() {
        window.history.pushState({}, "", '/profile')
        const event = new PopStateEvent('popstate', {})
        dispatchEvent(event)
    }

    function goToAbout() {
        window.history.pushState({}, "", '/about')
        const event = new PopStateEvent('popstate', {})
        dispatchEvent(event)
    }

    return <>
        <h1 className="text-3xl font-bold underline">
        Home Page
        </h1>
        <ul>
            <li>
                <button className="" onClick={goToProfile}>Profile</button>
            </li>
            <li>
                <button className="" onClick={goToAbout}>About</button>
            </li>
        </ul>
    </>
}

export default Home;
