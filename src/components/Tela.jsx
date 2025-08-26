import { useState } from 'react';
import Quadrado from './Quadrado';


function calcularVencedor(quadrados) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (quadrados[a] && quadrados[a] === quadrados[b] && quadrados[a] === quadrados[c]) {
      return quadrados[a];
    }
  }
  return null;
}

const Tela = () => {

  const [quadrados, setSquadrados] = useState(Array(9).fill(null));
  const [xProximo, setXProximo] = useState(true);

  function handleClick(i) {
    if (quadrados[i] || calcularVencedor(quadrados)) {
      return;
    }
    const proximoQuadrado = quadrados.slice();
    if (xProximo) {
      proximoQuadrado[i] = '</>';
    } else {
      proximoQuadrado[i] = '@';
    }
    setSquadrados(proximoQuadrado);
    setXProximo(!xProximo);
  }

  const vencedor = calcularVencedor(quadrados);
  let status;
  if (vencedor) {
    status = 'Vencedor: ' + vencedor;
  } else if (quadrados.every(Boolean)) {
    status = 'Empate!';
  } else {
    status = 'Próximo a jogar: ' + (xProximo ? '</>' : '@');
  }

  return (
    <>

   
    <div className="bg-gray-800 text-green-400 uppercase p-6 rounded-lg shadow-2xl flex flex-col items-center">
      <h1 className="text-white text-xl">City velha- 1.0</h1>
      <div className="text-xl text-green-400 sm:text-2xl font-semibold mb-4">{status}</div>
      <div className="grid grid-cols-3 gap-2">
        {quadrados.map((valor, i) => (
          <Quadrado key={i} valor={valor} onCliqueQuadrado={() => handleClick(i)} />
        ))}
      </div>
      <button
        className="mt-6 px-4 py-2 text-white uppercase bg-blue-500 rounded-md hover:bg-blue-600 transition-colors"
        onClick={() => {
          setSquadrados(Array(9).fill(null));
          setXProximo(true);
        }}
      >
        Jogar Novamente
      </button>

      <h6 className="text-[10px] mt-2">&copy;2025-Direitos reservados</h6>
    </div>

     </>
  );
  
}

export default Tela
