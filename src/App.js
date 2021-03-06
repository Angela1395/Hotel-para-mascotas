import './App.css';
import React from 'react';
class App extends React.Component {
  state = {
    url: '',
    loaded: false,
  };
  componentDidMount() {
    fetch('https://random.dog/woof.json')
      .then((data) => data.json())
      .then((response) => {
        if (!response.url.includes('mp4 && gif')) {
          this.setState({
            url: response.url,
            loaded: true,
          });
        }
      });
  }
  render() {
    const { url } = this.state;
    return (
      url !== '' && (
        <body>
          <section class="title">
            <h1>HOTEL PARA MASCOTAS</h1>
          </section>

          <nav class="navegacion">
            <ul class="menu">
              <li class="first-item">
                <a href="#">
                  <img
                    src="http://2.1m.yt/C6KpkTU.jpg"
                    alt=""
                    class="imagen"
                  ></img>
                  <span class="text-item">Inicio</span>
                  <span class="down-item"></span>
                </a>
              </li>

              <li>
                <a href="#">
                  <img
                    src="http://2.1m.yt/QZyUs0.jpg"
                    alt=""
                    class="imagen"
                  ></img>
                  <span class="text-item">Servicios</span>
                  <span class="down-item"></span>
                </a>
              </li>

              <li>
                <a href="#">
                  <img
                    src="http://2.1m.yt/J8mLPHo.jpg"
                    alt=""
                    class="imagen"
                  ></img>
                  <span class="text-item">Blog</span>
                  <span class="down-item"></span>
                </a>
              </li>

              <li>
                <a href="#">
                  <img
                    src="http://2.1m.yt/RfRbRNg.jpg"
                    alt=""
                    class="imagen"
                  ></img>
                  <span class="text-item">Contacto</span>
                  <span class="down-item"></span>
                </a>
              </li>
            </ul>
          </nav>
          <div
            id="imagen fondo"
            style={{
              height: '100vh',
              position: 'absolute',
              top: '0',
              opacity: '0.4',
              width: '100%',
              backgroundSize: 'cover',
              backgroundImage: `url(${url})`,
            }}
          ></div>
        </body>
      )
    );
  }
}
export default App;
