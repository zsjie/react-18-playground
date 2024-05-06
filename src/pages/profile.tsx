import React, { Suspense } from "react";
import { Link } from "react-router-dom";

const BigComponent = React.lazy(() => import('../components/a-big-components'))

function Profile() {
    return <>
        <Link to="/">&lt; back</Link>
        <h1 className="text-3xl font-bold underline">
            Profile
        </h1>
        <Suspense fallback={<div>loading...</div>}>
            <BigComponent />
        </Suspense>
    </>
  }
  
  export default Profile;
  