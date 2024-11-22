import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Wella1 from "../../assets/c6/c6limit.webp";
import C6SORRISO from "../../assets/c6/c6sorriso.png";
import { useAppContext } from "../../context/AppContext";
import { ModalCash } from "../ModalCash";

const QuizWella = () => {
  const { addToQuizScore } = useAppContext();
  const navigate = useNavigate();
  const [currentQuestionnaire, setCurrentQuestionnaire] = useState<number>(0);
  const [selectedOptions, setSelectedOptions] = useState<{ [key: number]: string }>({});
  const [isModalVisible, setModalVisible] = useState(false);
  const [currentCashValue, setCurrentCashValue] = useState<number>(0); // Valor do prêmio atual

  // Questionários com valores
  const questionnaires = [
    {
      title: `Responda e ganhe R$ ${47.00}!`,
      value: 47.90, // Valor do prêmio da etapa 1
      image: Wella1,
      questions: [
        {
          text: "Como você avalia o atendimento CDB limite do C6 Bank?",
          options: ["Excelente", "Satisfatório", "Insatisfatório"],
        },
      ],
    },
    {
      title: `Responda e ganhe R$ ${32.00}!`,
      value: 32.00, // Valor do prêmio da etapa 2
      image: C6SORRISO,
      questions: [
        {
          text: "Como você avalia o Seguro odontológico do C6 Bank?",
          options: ["Excelente", "Satisfatório", "Insatisfatório"],
        },
      ],
    },
  ];

  const current = questionnaires[currentQuestionnaire]; // Etapa atual

  const areAllQuestionsAnswered = () =>
    current.questions.every((_, index) => selectedOptions[index] !== undefined);

  const handleOptionSelect = (questionIndex: number, option: string) => {
    setSelectedOptions((prev) => ({ ...prev, [questionIndex]: option }));
  };

  const handleNextQuestionnaire = () => {
    // Define o valor do prêmio atual para o modal
    setCurrentCashValue(current.value);

    // Adiciona o prêmio atual ao score total
    addToQuizScore(current.value);

    // Exibe o modal
    setModalVisible(true);

    if (currentQuestionnaire < questionnaires.length - 1) {
      // Avança para o próximo questionário após fechar o modal
      setTimeout(() => {
        setModalVisible(false); // Fecha o modal
        setCurrentQuestionnaire((prev) => prev + 1); // Avança para a próxima etapa
        setSelectedOptions({}); // Reseta as respostas
      }, 4000);
    } else {
      // Redireciona para a página de agradecimento após a última etapa
      setTimeout(() => {
        setModalVisible(false);
        navigate("/agradecimento");
      }, 3000);
    }
  };

  return (
    <div className="flex flex-col items-center pt-14 min-h-screen antialiased">
      {/* Modal */}
      <ModalCash
        isVisible={isModalVisible}
        onClose={() => setModalVisible(false)}
        cashValue={currentCashValue} // Valor do prêmio da etapa atual
      />
      <section className="bg-[black] px-6 pt-6">
        {/* Container Principal */}
        <div className="w-full max-w-md bg-black shadow-md rounded-xl p-6">
          {/* Título */}
          <h1 className="bg-gradient-to-r from-gradient1 via-gradient3 to-gradient6 bg-clip-text text-transparent font-c6text-bold text-center text-[1.4rem] mb-4">
            {current.title}
          </h1>
          {/* Imagem */}
          <div className="flex justify-center mb-6">
            <img
              src={current.image}
              alt="Produto"
              className="w-full h-[200px] object-cover rounded-md"
            />
          </div>
          {/* Perguntas */}
          {current.questions.map((question, index) => (
            <div key={index} className="mb-6">
              <p className="text-center text-white font-medium text-base mb-4">{question.text}</p>
              {/* Opções */}
              <div className="flex flex-col gap-4">
                {question.options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleOptionSelect(index, option)}
                    className={`w-full py-[0.60rem] rounded-lg text-sm font-medium transition-all ${selectedOptions[index] === option
                      ? "bg-[#fbfbfb] text-[#121212]"
                      : "bg-black border text-white hover:bg-gray-300"
                      }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ))}
          {/* Botão de Envio */}
          <div className="mt-8">
            <button
              onClick={handleNextQuestionnaire}
              disabled={!areAllQuestionsAnswered()}
              className={`w-full py-3 rounded-lg text-[#121212] font-c6display-regular transition-all ${areAllQuestionsAnswered()
                ? "bg-[#FBC161] hover:bg-orange-600"
                : "bg-gray-300 cursor-not-allowed"
                }`}
            >
              {currentQuestionnaire < questionnaires.length - 1
                ? "Próximo"
                : "Enviar respostas"}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuizWella;
