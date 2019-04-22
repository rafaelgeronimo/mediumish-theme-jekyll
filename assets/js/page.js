// Obtain the page
const rootElement = document.getElementById("page");
// Create a ES6 class component
class Page extends React.Component {
  // Use the render function to return JSX component
  render() {
    return (
      <div className="site-content">
        <div className="container">
          <div className="mainheading">
            <div className="authorpage">
              <h1 className="sitetitle">{this.props.name}</h1>
              <p className="lead">Analista de Suporte | Desenvolvedor Web</p>
              <p>
                Há mais de 10 anos no mercado de tecnologia, comecei atuando
                como técnico de informática, assim que obtive essa formação no
                ano de 2006 pela Escola Técnica Estadual Fernando Prestes, em
                Sorocaba.
              </p>
              <p>
                Desde lá, passei por outras empresas no papel de suporte
                técnico, vindo a me tornar Analista na área de Suporte.
              </p>
              <p>
                Quando residente do estado de São Paulo, trabalhei na{" "}
                <a href="https://www.connectcom.com.br/" target="_blank">
                  <strong>Connectcom</strong>
                </a>{" "}
                prestando atendimento em diversas agências da{" "}
                <a href="https://www.caixa.gov.br/" target="_blank">
                  <em>Caixa Econômica Federal</em>
                </a>{" "}
                pelo interior do estado. Também passei um tempo alocado na{" "}
                <a href="https://www.ambev.com.br/" target="_blank">
                  <em>Ambev</em>
                </a>
                , enquanto contratado pela{" "}
                <a href="https://stefanini.com/pt-br/" target="_blank">
                  <strong>Stefanini</strong>
                </a>
                .
              </p>
              <p>
                Hoje morando na cidade de Curitiba, no Paraná, fui Analista de
                Suporte pelo{" "}
                <a href="https://ibpt.com.br/" target="_blank">
                  <strong>IBPT</strong> -{" "}
                  <strong>
                    Instituto Brasileiro de Planejamento e Tributação
                  </strong>
                </a>{" "}
                - e Analista de Infraestrutura no{" "}
                <a href="https://www.empresometro.com.br/" target="_blank">
                  <strong>Empresômetro - Inteligência de Mercado</strong>
                </a>
                .
              </p>
              <p>
                Formado em 2018 no curso de{" "}
                <a
                  href="https://www.unicesumar.edu.br/ead/cursos-graduacao/sistemas-para-internet/"
                  target="_blank"
                >
                  <em>Sistemas para Internet</em>
                </a>{" "}
                pela{" "}
                <a href="https://www.unicesumar.edu.br/home/" target="_blank">
                  <strong>Unicesumar</strong>
                </a>
                , estou atualmente trabalhando na{" "}
                <a
                  href="http://www.premierit.com.br/quem_somos"
                  target="_blank"
                >
                  <strong>PREMIER IT (Quality S.A.)</strong>
                </a>
                , prestando serviços para o{" "}
                <a
                  href="http://www.grupoboticario.com.br/pt/Paginas/Inicial.aspx"
                  target="_blank"
                >
                  Grupo Boticário
                </a>
                .{" "}
              </p>
              <h4>
                <a href="https://rafaelgeronimo.com/cvRafaelGeronimo.pdf" target="_blank">
                  <i className="fas fa-align-justify" /> Ver Currículo
                </a>
              </h4>
              <h4>
                <a
                  href="https://www.linkedin.com/in/rafaelgeronimo"
                  target="_blank"
                >
                  <i className="fab fa-linkedin-in" /> LinkedIn
                </a>
              </h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
// Create a function to wrap up your component
function App() {
  return (
    <div>
      <Page name="Rafael Gerônimo" />
    </div>
  );
}

// Use the ReactDOM.render to show your component on the browser
ReactDOM.render(<App />, rootElement);
