function Home() {

    return (
      <>
        <h1 className="font-bold text-3xl pb-5">/ About Me</h1>
        <p>My name is <span className="text-purple-500">Sulfur</span>, I am 20-year-old developer.</p>
        <p>Most of the time, I am building web applications and playing around with databases.</p>

        <h1 className="font-bold text-lg pb-5 pt-5">Current Project</h1>
        <p>I am currently working on a Homelab Dashboard similar to <a className="text-purple-500" href="https://heimdall.site">Heimdall</a>, <a className="text-purple-500" href="https://github.com/pawelmalak/flame">Flame</a>, etc. It's going to have a custom backend and frontend, fully customizable with a movable grid-like system for all home lab applications. I am aiming for easy and straightforward setup, easy to host at home with Docker. <br /> <br /> Currently, I don't have any estimate for this application to deploy; it's still very much a work in progress that I am developing in my free time.</p>
      </>
    )
  }
  
  export default Home