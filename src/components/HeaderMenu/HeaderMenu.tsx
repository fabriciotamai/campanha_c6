import { useEffect, useRef } from "react";
import ImgC6 from "../../assets/c6/logoc6bank.svg";
import { useAppContext } from "../../context/AppContext";

const Header = () => {
  const { cartActive, currentStep } = useAppContext(); // Consome o estado do contexto
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {

    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Autoplay prevented:", error);
      });
    }
  }, [currentStep]); // Atualiza quando o passo atual mudar

  const steps = ["Email", "Marca", "Quiz", "Endereço", "Frete"];

  return (
    <header className="fixed top-0 left-0 w-full bg-black shadow-md z-10">

      <section className="flex items-center justify-between">
        <div className="flex items-center justify-between  ">

          <img src={ImgC6} alt="Beleza na Web Logo" width={100} height={60} />

        </div>
        <div>
          <button className="bg-[#fbfbfb] rounded-md py-1 px-3">
            <p>

              Abrir minha conta
            </p>
          </button>
        </div>
      </section>
    </header>
  );
};

export default Header;
