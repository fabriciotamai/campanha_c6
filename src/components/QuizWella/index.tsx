import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Wella1 from "../../assets/wella-1.webp";
import Wella2 from "../../assets/wella-2.webp";
import Wella3 from "../../assets/wella-3.webp";
import WellaCreamy2 from "../../assets/wellacreamy2.webp";
import WellaCreamy3 from "../../assets/wellacreamy3.webp";
import WellaCreamy1 from "../../assets/wellacremy1.webp";
import WellaOleo from "../../assets/wellaoleo.webp";
import WellaOle1 from "../../assets/wellaoleo4.webp";
import WellaOle4 from "../../assets/welleooleo3.webp";
import { useAppContext } from "../../context/AppContext";

interface Question {
  text: string;
  options: string[];
}

interface Questionnaire {
  title: string;
  images: string[];
  reward: string;
  questions: Question[];
}

const QuizWella = () => {
  const { setCurrentStep, setSelectedBrand } = useAppContext();
  const navigate = useNavigate();
  const [currentQuestionnaire, setCurrentQuestionnaire] = useState<number>(0);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [selectedOptions, setSelectedOptions] = useState<{ [key: number]: string }>({});

  const questionnaires: Questionnaire[] = [
    {
      title: "Kit Wella Professionals Fusion Salon Duo (2 Produtos)",
      images: [Wella1, Wella2, Wella3],
      reward: "R$34,00",
      questions: [
        { text: "Você já ouviu falar ou usou esse produto?", options: ["Sim", "Não"] },
        { text: "Melhorou sua queda de cabelo?", options: ["Pouco", "Nada", "Muito"] },
        { text: "Você compraria novamente?", options: ["Sim", "Não"] },
      ],
    },
    {
      title: "Wella Professionals Invigo Nutri-Enrich Frizz Control - Leave-in Antifrizz 150ml",
      images: [WellaCreamy1, WellaCreamy2, WellaCreamy3],
      reward: "R$34,00",
      questions: [
        { text: "Você já ouviu falar ou usou esse produto?", options: ["Sim", "Não"] },
        { text: "Melhorou sua queda de cabelo?", options: ["Pouco", "Nada", "Muito"] },
        { text: "Você compraria novamente?", options: ["Sim", "Não"] },
      ],
    },
    {
      title: "Wella Professionals Oil Reflections - Óleo Capilar 100ml",
      images: [WellaOleo, WellaOle1, WellaOle4],
      reward: "R$34,00",
      questions: [
        { text: "Você já ouviu falar ou usou esse produto?", options: ["Sim", "Não"] },
        { text: "De 1 a 5, que nota você dá para essa fragrância?", options: ["1", "2", "3", "4", "5"] },
        { text: "Facilidade de uso e aplicação?", options: ["Bom", "Médio", "Excelente"] },
        { text: "Você compraria novamente?", options: ["Sim", "Não"] },
      ],
    },
  ];

  const current = questionnaires[currentQuestionnaire];

  const areAllQuestionsAnswered = () =>
    current.questions.every((_, index) => selectedOptions[index] !== undefined);

  const handleOptionSelect = (questionIndex: number, option: string) => {
    setSelectedOptions((prev) => ({ ...prev, [questionIndex]: option }));
  };

  const handleNextQuestionnaire = () => {
    if (currentQuestionnaire === questionnaires.length - 1) {
      setCurrentStep(3);
      setSelectedBrand('Wella')
      navigate("/agradecimento");
    } else {
      setCurrentQuestionnaire((prev) => prev + 1);
      setCurrentImageIndex(0);
      setSelectedOptions({});
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % current.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + current.images.length) % current.images.length);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 antialiased">
      <div className="pt-[64px] w-full max-w-md mx-auto bg-white shadow-md rounded-lg flex flex-col h-[calc(100vh-64px)] overflow-y-auto">

        <h1 className="text-[1.2rem] font-semibold text-left text-[#333333] px-6">
          {current.title}
        </h1>


        <div className="relative flex justify-center items-center mb-6 px-4">
          <button
            onClick={prevImage}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 px-4 py-2 rounded-md shadow hover:bg-gray-400 transition"
            style={{ margin: "0 16px" }}
          >
            ◀
          </button>
          <img
            src={current.images[currentImageIndex]}
            alt={`Imagem ${currentImageIndex + 1}`}
            className="w-full max-w-[300px] h-auto object-contain rounded-lg"
          />
          <button
            onClick={nextImage}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 px-4 py-2 rounded-md shadow hover:bg-gray-400 transition"
            style={{ margin: "0 16px" }}
          >
            ▶
          </button>
        </div>


        <div className="flex justify-center items-center mb-6 px-4">
          {current.images.map((_, index) => (
            <div
              key={index}
              className={`rounded-full mx-1 ${currentImageIndex === index
                ? "bg-gray-700 w-8 h-2"
                : "bg-gray-300 w-3 h-3"
                }`}
            ></div>
          ))}
        </div>


        {current.questions.map((question, index) => (
          <div key={index} className="mb-6 px-4">
            <p className="text-center text-gray-700 font-normal mb-3 text-base">
              {question.text}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {question.options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleOptionSelect(index, option)}
                  className={`py-3 px-6 rounded-full shadow-xl focus:outline-none text-sm ${selectedOptions[index] === option
                    ? "bg-purple-600 text-white"
                    : "bg-[#EEEEF0] text-gray-700 hover:bg-gray-300"
                    }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ))}

        {/* Botão de Navegação */}
        <div className="px-4 mt-auto mb-4">
          <button
            onClick={handleNextQuestionnaire}
            disabled={!areAllQuestionsAnswered()}
            className={`w-full py-3 rounded-lg shadow-md ${areAllQuestionsAnswered()
              ? "bg-purple-600 text-white hover:bg-purple-700"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
          >
            {currentQuestionnaire === questionnaires.length - 1
              ? "Finalizar"
              : "Próxima Pergunta"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizWella;
