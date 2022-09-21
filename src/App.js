
import Header from './componentes/Header';
import Card from './componentes/Card';
import Footer from './componentes/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/main.css';

function App() {
  return (
    <div className="App">
      <Header className="App-header" title="Galería de Imágenes con React" />
      <div className="contendorImagenes">
          <Card ruta="https://cdn.pixabay.com/photo/2022/03/01/09/35/iceland-poppy-7040946_960_720.jpg" titulo="Flor naranja" descripcion="lorem ipsun dolor 1" />
          <Card ruta="https://cdn.pixabay.com/photo/2022/09/05/09/40/citrine-7433765_960_720.jpg"  titulo="Cuarzo" descripcion="lorem ipsun dolor 2" />
          <Card ruta="https://cdn.pixabay.com/photo/2022/09/04/08/14/book-7431063_960_720.jpg"  titulo="Libro" descripcion="lorem ipsun dolor 3" />
          <Card ruta="https://cdn.pixabay.com/photo/2022/09/04/18/42/fog-7432407_960_720.jpg"  titulo="Niebla" descripcion="lorem ipsun dolor 4" />
          <Card ruta="https://cdn.pixabay.com/photo/2022/08/14/13/01/top-7385857_960_720.jpg"  titulo="Montaña" descripcion="lorem ipsun dolor 5" />
      </div>
      /** componente footer solicitado */
      <Footer descripcion="Juan Peñailillo" />
    </div>
  );
}

export default App;
