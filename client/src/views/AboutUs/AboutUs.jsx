import React from "react";
import { Link } from "react-router-dom";
//image
import dana from "./utils/dana.jpg";
import frango from "./utils/frango.jpg";
import guido from "./utils/guido.jpg";
import raul from "./utils/raul.jpg";
import tomas from "./utils/tomas.jpg";
import vero from "./utils/vero.jpg";
import linkedin from "./utils/linkedin.png";
import github from "./utils/github.png";

const AboutUs = () => {
  return (
    <>
      <div className="text-5xl flex justify-center py-5">
        <h2 className="">About</h2>
        <h2 className="text-lime-400">Us</h2>
      </div>
      <div className="grid grid-cols-3 gap-x-0 gap-y-6 justify-items-center">
        {/* dana */}
        <div className="bg-yellow-50 p-8 rounded flex flex-col items-center justify-center ">
          <img
            className="w-20 h-20  rounded-full ring ring-lime-500 ring-offset-4"
            src={dana}
            alt="desarrollador"
          />
          <h1 className="text-black p-8">Dana Jacob Casanoves</h1>

          {/* Información y enlaces */}
          <div className="flex flex-col items-center">
            <div className="flex flex-row items-center mb-2">
              <img className="w-9 h-9 p-1" src={linkedin} alt="LinkedIn" />
              <p className="ml-2">
                <a href="https://www.linkedin.com/in/danajacobc/">LinkedIn</a>
              </p>
            </div>

            <div className="flex flex-row items-center">
              <img className="w-9 h-9 p-1" src={github} alt="GitHub" />
              <p className="ml-2">
                <a href="https://github.com/danajacobc">GitHub</a>
              </p>
            </div>
          </div>
        </div>

        {/* fran */}
        <div className="bg-yellow-50 p-8 rounded flex flex-col items-center justify-center ">
          <img
            className="w-20 h-20  rounded-full ring ring-lime-500 ring-offset-4"
            src={frango}
            alt="desarrollador"
          />
          <h1 className="text-black p-8">Francisco Gonzalez Casarino</h1>

          {/* Información y enlaces */}
          <div className="flex flex-col items-center">
            <div className="flex flex-row items-center mb-2">
              <img className="w-9 h-9 p-1" src={linkedin} alt="LinkedIn" />
              <p className="ml-2">
                <a href="https://www.linkedin.com/in/francisco-gonzalez-casarino-135b82237/">
                  LinkedIn
                </a>
              </p>
            </div>

            <div className="flex flex-row items-center">
              <img className="w-9 h-9 p-1" src={github} alt="GitHub" />
              <p className="ml-2">
                <a href="https://github.com/Frango113">GitHub</a>
              </p>
            </div>
          </div>
        </div>
        {/* guido */}
        <div className="bg-yellow-50 p-8 rounded flex flex-col items-center justify-center ">
          <img
            className="w-20 h-20  rounded-full ring ring-lime-500 ring-offset-4"
            src={guido}
            alt="desarrollador"
          />
          <h1 className="text-black p-8">Guido Contartese</h1>

          {/* Información y enlaces */}
          <div className="flex flex-col items-center">
            <div className="flex flex-row items-center mb-2">
              <img className="w-9 h-9 p-1" src={linkedin} alt="LinkedIn" />
              <p className="ml-2">
                <a href="https://www.linkedin.com/in/guido-contartese-785a8b135/">
                  LinkedIn
                </a>
              </p>
            </div>

            <div className="flex flex-row items-center">
              <img className="w-9 h-9 p-1" src={github} alt="GitHub" />
              <p className="ml-2">
                <a href="https://github.com/guidounion6">GitHub</a>
              </p>
            </div>
          </div>
        </div>
        {/* tomas */}
        <div className="bg-yellow-50 p-8 rounded flex flex-col items-center justify-center ">
          <img
            className="w-20 h-20  rounded-full ring ring-lime-500 ring-offset-4"
            src={tomas}
            alt="desarrollador"
          />
          <h1 className="text-black p-8">Tomas Aquino Bajusz</h1>

          {/* Información y enlaces */}
          <div className="flex flex-col items-center">
            <div className="flex flex-row items-center mb-2">
              <img className="w-9 h-9 p-1" src={linkedin} alt="LinkedIn" />
              <p className="ml-2">
                <a href="https://www.linkedin.com/in/tomas-gabriel-aquino-bajusz/">
                  LinkedIn
                </a>
              </p>
            </div>

            <div className="flex flex-row items-center">
              <img className="w-9 h-9 p-1" src={github} alt="GitHub" />
              <p className="ml-2">
                <a href="https://github.com/TomasGaAqBz">GitHub</a>
              </p>
            </div>
          </div>
        </div>
        {/* vero */}
        <div className="bg-yellow-50 p-8 rounded flex flex-col items-center justify-center ">
          <img
            className="w-20 h-20  rounded-full ring ring-lime-500 ring-offset-4"
            src={vero}
            alt="desarrollador"
          />
          <h1 className="text-black p-8">Veronica Araque</h1>

          {/* Información y enlaces */}
          <div className="flex flex-col items-center">
            <div className="flex flex-row items-center mb-2">
              <img className="w-9 h-9 p-1" src={linkedin} alt="LinkedIn" />
              <p className="ml-2">
                <a href="https://www.linkedin.com/in/veronica-araque-franco/">
                  LinkedIn
                </a>
              </p>
            </div>

            <div className="flex flex-row items-center">
              <img className="w-9 h-9 p-1" src={github} alt="GitHub" />
              <p className="ml-2">
                <a href="https://github.com/Veronicayf">GitHub</a>
              </p>
            </div>
          </div>
        </div>
        {/* raul */}
        <div className="bg-yellow-50 p-8 rounded flex flex-col items-center justify-center ">
          <img
            className="w-20 h-20  rounded-full ring ring-lime-500 ring-offset-4"
            src={raul}
            alt="desarrollador"
          />
          <h1 className="text-black p-8">Raúl Contreras</h1>

          {/* Información y enlaces */}
          <div className="flex flex-col items-center">
            <div className="flex flex-row items-center mb-2">
              <img className="w-9 h-9 p-1" src={linkedin} alt="LinkedIn" />
              <p className="ml-2">
                <a href="https://www.linkedin.com/in/ra%C3%BAl-contreras-a0498724a/">
                  LinkedIn
                </a>
              </p>
            </div>

            <div className="flex flex-row items-center">
              <img className="w-9 h-9 p-1" src={github} alt="GitHub" />
              <p className="ml-2">
                <a href="https://github.com/RaulCont">GitHub</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
