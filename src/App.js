// Importações
import {useState} from 'react';

function App() {

  const [counter, setCounter] = useState(0);

  // Função que incrementa valor da variável counter.
  function incrementaValor(){
    setCounter(counter + 1);
    // Exibir valor da variável sendo incrementada
    console.log(counter);
  }

  return (
    <div className="App">
      <br></br>
      <div>
        Contador = {counter}
      </div>
      <button onClick={incrementaValor}>Incremento</button>
    </div>
  );
}

export default App;
