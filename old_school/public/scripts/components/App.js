/**
 * @param {logo : string} props This component gets logo as a prop and uses it to render an image
 * This function is equivilant to the following in JSX
 * <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
 **/

function App(props) {
    const a = React.createElement("a", {
        className: "App-link",
        href: "https://reactjs.org",
        target: "_blank",
        rel: "noopener noreferer"
    }, "Learn React"); // <a className="App-link" ...>Learn React</a>
    const code = React.createElement("code", {}, "src/App.js")
    const p = React.createElement("p", {}, "Edit ", code, " and save to reload")
    const img = React.createElement("img", {src: props.logo, className: "App-logo"})
    const header = React.createElement("header", {className: "App-header"}, img, p , a) // <header><img>..</img><p>...</p><a>...</a></header>
    return React.createElement("div", {className: "App"}, header) //<div className="app"><header>...</header></div>
  }