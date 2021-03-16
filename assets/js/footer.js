// Obtain the footer
const rootElement = document.getElementById("footer");
// Create a ES6 class component
class Footer extends React.Component {
  // Use the render function to return JSX component
  render() {
    const today = new Date();
    const year = today.getFullYear();
    return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6 text-center text-lg-left">
              Copyright © { year } - {this.props.name}
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
// Create a function to wrap up your component
function App() {
  return <Footer name="Rafael Gerônimo" />;
}

// Use the ReactDOM.render to show your component on the browser
ReactDOM.render(<App />, rootElement);
