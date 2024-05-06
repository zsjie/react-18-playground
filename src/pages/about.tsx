function About() {
    const goBack = () => {
        window.history.back()
    }

    return <>
        <button onClick={goBack}>&lt; back</button>
        <h1 className="text-3xl font-bold underline">
            About
        </h1>
    </>
  }
  
  export default About;
  