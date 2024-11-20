import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Wella1 from "../../assets/wella-1.webp";
import Wella2 from "../../assets/wella-2.webp";
import Wella3 from "../../assets/wella-3.webp";
import { useAppContext } from "../../context/AppContext";

const QuizWella = () => {
  const { setCurrentStep, setSelectedBrand } = useAppContext();
  const navigate = useNavigate();
  const [currentQuestionnaire, setCurrentQuestionnaire] = useState<number>(0);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [selectedOptions, setSelectedOptions] = useState<{ [key: number]: string }>({});

  const questionnaires = [
    {
      title: "Kit Wella Professionals Fusion Salon Duo (2 Produtos)",
      images: [Wella1, Wella2, Wella3],
      reward: "R$34,00",
      questions: [
        { text: "Você já ouviu falar ou usou esse produto ?", options: ["Sim", "Não"] },
        { text: "Melhorou sua queda de cabelo?", options: ["Pouco", "Nada", "Muito"] },
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
      setSelectedBrand("Wella");
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 antialiased pt-8 pb-32">
      <div className="pt-[64px] w-full max-w-md mx-auto bg-white shadow-md rounded-lg flex flex-col flex-grow overflow-y-scroll">
        <h1 className="text-[1rem] font-semibold text-left text-[#333333] px-6">{current.title}</h1>
        <div className="relative flex justify-center items-center mb-6 px-4">
          <button
            onClick={prevImage}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 px-4 py-2 rounded-md shadow hover:bg-gray-400 transition"
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
          >
            ▶
          </button>
        </div>
        <div className="flex justify-center items-center mb-4 px-4">
          {current.images.map((_, index) => (
            <div
              key={index}
              className={`rounded-full mx-1 ${currentImageIndex === index ? "bg-gray-700 w-8 h-2" : "bg-gray-300 w-3 h-3"
                }`}
            ></div>
          ))}
        </div>
        {current.questions.map((question, index) => (
          <div key={index} className="mb-4 px-4">
            <p className="text-center text-gray-700 font-normal mb-4 text-[0.90rem]">{question.text}</p>
            <div className="flex flex-wrap justify-center gap-4">
              {question.options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleOptionSelect(index, option)}
                  className={`py-[0.50rem] px-6  rounded-md shadow-xl focus:outline-none text-[0.85rem] ${selectedOptions[index] === option
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
        <div className="px-4 mt-4 mb-10 ">
          <button
            onClick={handleNextQuestionnaire}
            disabled={!areAllQuestionsAnswered()}
            className={`w-full py-3 rounded-lg shadow-md ${areAllQuestionsAnswered()
              ? "bg-purple-600 text-white hover:bg-purple-700"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
          >
            {currentQuestionnaire === questionnaires.length - 1 ? "Finalizar" : "Próxima Pergunta"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizWella;
