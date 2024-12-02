import './App.css';
import Produtos from './componentes/Produtos'
import Header from './componentes/header'
import SecaoCapa from './componentes/secaoCapa'
import SecaoSobre from './componentes/SecaoSobre'
import Footer from './componentes/footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <SecaoCapa/>
      <Produtos/>
      <SecaoSobre/>
      <Footer/>
      
    </div>
  );
}

export default App;
