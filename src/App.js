import Header from "./components/Header";
import Card1 from './components/Card1'
import Card2 from './components/Card2';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import PopularProd from './components/PopularProd'

function App(){
  return(
  <div className='App'>
    <Header/>
    <Card1/>
    <br/>
    <h3>Our Most Popular Products</h3>
    <PopularProd></PopularProd>
  </div>

  );
}

export default App;
