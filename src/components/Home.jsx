import { useState } from "react";
import { dijkstraAlgorithm } from "../utils/Dijkstras"; // Cambiado el nombre de la función importada
import { BrazilMap } from "./BrazilMap";
import { SelectStateButton } from "./SelectStateButton";

export function Home() {
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [shortestPathResult, setShortestPathResult] = useState();

  return (
    <div className="w-full h-screen flex items-center">
      <div className="max-w-md space-y-5 mr-16 ">
        <h1 className="font-bold text-4xl">Corte_3</h1>
        <p className="text-3xl">
          Recorrido por el camino mas corto
        </p>
        <p className="text-3xl">Por favor, seleccione su recorrido:</p>
        <SelectStateButton
          localPoint={"Inicio"}
          onChange={(state) => setDeparture(state)}
          departure={departure}
          arrival={arrival}
        />
        <SelectStateButton
          localPoint={"Llegada"}
          onChange={(state) => setArrival(state)}
          departure={departure}
          arrival={arrival}
        />
        <button
          className="w-full bg-green-500 h-[64px] rounded-lg text-white font-bold hover:bg-green-600 transition-colors disabled:bg-gray-400 relative"
          disabled={!departure || !arrival}
          onClick={() => setShortestPathResult(dijkstraAlgorithm (departure.id, arrival.id))} // Cambiado el nombre de la función invocada
        >
          Encontrar ruta mas corta
        </button>
      </div>
      <BrazilMap departure={departure} arrival={arrival} shortestPathResult={shortestPathResult}/>
    </div>
  );
}
