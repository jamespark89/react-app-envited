import "./home.css"
function home() {
  return (
    <div className="home">
      <header>
        <div className="header">
          <h1>Imagine if </h1>
          <h1 className="snapchat">Sanpchat </h1>
          <h1>had events.</h1>
        </div>
        <div className="subtitle">
          <p>
            Easily host and share events with your <br />
            friends across any social media.
          </p>
        </div>
      </header>
      <div className="landingpageimage">
        <img
          src="Landing page image.svg"
          alt="landingpageimage"
        ></img>
      </div>
      <div>
        <a href="/create">
          <button className="createButton">
            <p>🎉 Create by event</p>
          </button>
        </a>
      </div>
    </div>
  )
}

export default home
