import React, { Suspense } from 'react'

const Profile = React.lazy(() => import('./profile'))

export default function ProfileLazy() {
    return <Suspense fallback={<div>loading...</div>}>
        <Profile />
    </Suspense>
}
