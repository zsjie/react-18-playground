import { Link } from "react-router-dom"

function Home() {
    return <>
        <h1 className="text-3xl font-bold underline">
        Home Page
        </h1>
        <ul>
            <li>
                <Link to="profile" >Profile</Link>
            </li>
            <li>
                <Link to="about" >About</Link>
            </li>
        </ul>
    </>
}

export default Home;
