
const Quadrado = ({ valor, onCliqueQuadrado }) => {
  return (
    <button
      className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white border border-gray-400 text-3xl font-bold flex items-center justify-center transition-colors text-black  hover:bg-green-300"
      onClick={onCliqueQuadrado}>
      {valor}
    </button>
  )
}

export default Quadrado
