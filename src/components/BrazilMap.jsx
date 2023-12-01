import Map from "../assets/apa.png";
import Xarrow from "react-xarrows";
import States from "../assets/states.json";
import { lines } from "../utils/lineConnection";
import { useEffect } from "react";
import { useState } from "react";

export function BrazilMap({ departure, arrival, shortestPathResult }) {
  const statesLocation = [
    {
      bottom: "18.5rem",
      right: "60%",
    },
    {
      bottom: "19.2rem",
      right: "76.5%",
    },
    {
      bottom: "24.9rem",
      right: "65%",
    },
    {
      bottom: "30.2rem",
      right: "57%",
    },
    {
      bottom: "23.7rem",
      right: "35%",
    },
    {
      bottom: "30rem",
      right: "32%",
    },
    {
      bottom: "19.2rem",
      right: "24%",
    },
    {
      bottom: "24rem",
      right: "15%",
    },
    {
      bottom: "21.5rem",
      right: "9.5%",
    },
    {
      bottom: "24rem",
      right: "1%",
    },
    {
      bottom: "23.1rem",
      right: "-8%",
    },
    {
      bottom: "21.8rem",
      right: "-9%",
    },
    {
      bottom: "20.4rem",
      right: "-8.5%",
    },
    {
      bottom: "19rem",
      right: "-8%",
    },
    {
      bottom: "18rem",
      right: "-4.5%",
    },
    {
      bottom: "17.5rem",
      right: "7.6%",
    },
    {
      bottom: "11.5rem",
      right: "14%",
    },
    {
      bottom: "10.8rem",
      right: "5%",
    },
    {
      bottom: "7.8rem",
      right: "11%",
    },
    {
      bottom: "8.5rem",
      right: "25%",
    },
    {
      bottom: "6.3rem",
      right: "32.5%",
    },
    {
      bottom: "3.8rem",
      right: "28.5%",
    },
    {
      bottom: "1.2rem",
      right: "36%",
    },
    {
      bottom: "9.9rem",
      right: "39%",
    },
    {
      bottom: "16.7rem",
      right: "41%",
    },
    {
      bottom: "13rem",
      right: "29%",
    },
    {
      bottom: "14.2rem",
      right: "24%",
    },
  ];
  const [defLines, setDefLines] = useState([]);

  useEffect(() => {
    const complete_lines = [];

    lines.forEach((line) => {
      let color = shortestPathResult ? 'transparent' : 'blue';
      for (var i = 0; i < shortestPathResult?.path.length - 1; i++) {
        if (
          (shortestPathResult?.path[i] === line.start &&
            shortestPathResult?.path[i + 1] === line.end) ||
          (shortestPathResult?.path[i] === line.end &&
            shortestPathResult?.path[i + 1] === line.start)
        ) {
          color = "red";
          break;
        }
      }
      complete_lines.push({
        ...line,
        color: color,
        headSize: 0,
        strokeWidth: 2,
        curveness: 0.2,
        animateDrawing: 2,
      });
    });
    setDefLines(complete_lines);
  }, [shortestPathResult]);

  return (
    <div className="w-[80%] h-full max-h-[95%] bg-[#2395FF] rounded-3xl flex overflow-hidden justify-center items-center">
      <div className="w-full max-w-xl absolute h-full max-h-[38rem]">
        {defLines.map((line, index) => (
          <Xarrow key={shortestPathResult ? index : index + "result"} {...line} />
        ))}
        {States.map((state, index) => {
          return (
            <div
              id={state.id}
              key={index}
              className={`absolute m-10 w-6 h-6 bg-white rounded-full flex drop-shadow-lg
               justify-center items-center ${
                 departure && state.id === departure.id ? "bg-red-300" : ""
               } ${arrival && state.id === arrival.id ? "bg-green-300" : ""}
               ${shortestPathResult?.path.includes(state.id) && 'bg-[#223CF1] text-white font-bold'}`}
              style={{
                bottom: statesLocation[index].bottom,
                right: statesLocation[index].right,
                transform: "translate(-50%, -50%)",
              }}
            >
              <p className="text-xs">{state.id}</p>
            </div>
          );
        })}
      </div>
      <img src={Map} alt="Mapa" className="w-full max-w-xl" />
    </div>
  );
}
