// Importações
import {useState} from 'react';
import User from './pages/User';

function App() {
  /*
  const [counter, setCounter] = useState(0);

  // Função que incrementa valor da variável counter.
  function incrementaValor(){
    setCounter(counter + 1);
    // Exibir valor da variável sendo incrementada
    console.log(counter);
  }
  */

  return (
    <div className="App">
      <div>
        <User />
      </div>
    </div>
  );
}

export default App;
