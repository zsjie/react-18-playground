function Profile() {
    const goBack = () => {
        window.history.back()
    }

    return <>
        <button onClick={goBack}>&lt; back</button>
        <h1 className="text-3xl font-bold underline">
            Profile
        </h1>
    </>
  }
  
  export default Profile;
  