// Obtain the header
const rootElement = document.getElementById("header");
// Create a ES6 class component
class Header extends React.Component {
  // Use the render function to return JSX component
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top mediumnavigation nav-down">
        <div className="container pr-0">
          <a className="navbar-brand" href="/home">
            <img src={this.props.img} />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarMediumish"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarMediumish">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a href="#" className="nav-link">
                  <i className="fas fa-home" /> Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://blog.rafaelgeronimo.me">
                  <i className="fas fa-newspaper" /> Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  <i className="fas fa-info" /> Sobre{" "}
                </a>
              </li>
              <li className="nav-item">
                <a
                  target="_blank"
                  className="nav-link"
                  href="https://www.linkedin.com/in/rafaelgeronimo"
                >
                  <i className="fab fa-linkedin-in" />
                </a>
              </li>
              <li className="nav-item">
                <a
                  target="_blank"
                  className="nav-link"
                  href="https://github.com/rafaelgeronimo"
                >
                  <i className="fab fa-github" />
                </a>
              </li>
              <li className="nav-item">
                <a
                  target="_blank"
                  className="nav-link"
                  href="https://www.facebook.com/rafaelggeronimo/"
                >
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li className="nav-item">
                <a
                  target="_blank"
                  className="nav-link"
                  href="https://twitter.com/RAFAELGER0NIM0"
                >
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li className="nav-item">
                <a
                  target="_blank"
                  className="nav-link"
                  href="https://wa.me/5541984375647"
                >
                  <i className="fab fa-whatsapp" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
// Create a function to wrap up your component
function App() {
  return <Header img="assets/img/log.png" />;
}

// Use the ReactDOM.render to show your component on the browser
ReactDOM.render(<App />, rootElement);
//Toggle menu
$(document).ready(function() {
  $(".navbar-toggler").click(function() {
    $("#navbarMediumish").toggle();
  });
});
