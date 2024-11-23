import { useState } from "react";
import { useNavigate } from "react-router-dom";
import C6ATomos from '../../assets/c6/c6atomos.webp';
import C6Finamciamento from '../../assets/c6/c6financimento.webp';
import C6Friend from '../../assets/c6/C6FRIEND.webp';
import C6investiment from '../../assets/c6/c6invest.webp';
import Wella1 from "../../assets/c6/c6limit.webp";
import C6Iphone from '../../assets/c6/c6seguroiphone.webp';
import C6SORRISO from "../../assets/c6/c6sorriso.png";
import C6BankLogo from '../../assets/c6/logoc6bank.svg';
import C6Family from '../../assets/c6/seguro famili.webp';

import { useAppContext } from "../../context/AppContext";
import { ModalCash } from "../ModalCash";

const QuizWella = () => {
  const { addToQuizScore } = useAppContext();
  const navigate = useNavigate();
  const [currentQuestionnaire, setCurrentQuestionnaire] = useState<number>(0);
  const [selectedOptions, setSelectedOptions] = useState<{ [key: number]: string }>({});
  const [isModalVisible, setModalVisible] = useState(false);
  const [currentCashValue, setCurrentCashValue] = useState<number>(0);


  const questionnaires = [
    {
      title: `Responda e ganhe ${37.90.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}!`,
      value: 37.90,
      image: C6BankLogo,
      questions: [
        {
          text: "Como você conheceu o quiz C6bank?",
          options: ["Instagram", "TikTok", "Facebook"],
        },
      ],
    },
    {
      title: `Responda e ganhe ${42.90.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}!`,
      value: 42.90,
      image: C6Iphone,
      questions: [
        {
          text: "Como você avalia o App C6Bank?",
          options: ["Intuitivo", "Fácil", "Confuso"],
        },
      ],
    },
    {
      title: `Responda e ganhe ${32.90.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}!`,
      value: 32.90,
      image: C6Family,
      questions: [
        {
          text: "Você conhece o C6 seguro familia ?",
          options: ["Sim", "Não", "Quero conhecer"],
        },
      ],
    },
    {
      title: `Responda e ganhe ${34.90.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}!`,
      value: 34.90,
      image: C6Friend,
      questions: [
        {
          text: "Voce já desfruta do C6+Benefícios ?",
          options: ["Sim", "Não", "Quero conhecer"],
        },
      ],
    },
    {
      title: `Responda e ganhe ${52.90.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}!`,
      value: 52.90,
      image: Wella1,
      questions: [
        {
          text: "Como você avalia o atendimento CDB limite do C6 Bank?",
          options: ["Excelente", "Satisfatório", "Insatisfatório"],
        },
      ],
    },
    {
      title: `Responda e ganhe ${24.34.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}!`,
      value: 41.20,
      image: C6investiment,
      questions: [
        {
          text: "Como você avalia as taxas do c6 invest ?",
          options: ["Excelente", "Razoavel", "Não conheço"],
        },
      ],
    },
    {
      title: `Responda e ganhe ${49.90.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}!`,
      value: 49.90,
      image: C6ATomos,
      questions: [
        {
          text: "Como qualificaria o Cashback do C6ATOMOS?",
          options: ["Excelente", "Razoavel", "Não conheço"],
        },
      ],
    },
    {
      title: `Responda e ganhe ${30.99.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}!`,
      value: 30.99,
      image: C6SORRISO,
      questions: [
        {
          text: "Como você avalia o Seguro odontológico do C6 Bank?",
          options: ["Excelente", "Satisfatório", "Insatisfatório"],
        },
      ],
    },
    {
      title: `Responda e ganhe ${37.90.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}!`,
      value: 37.90,
      image: C6Finamciamento,
      questions: [
        {
          text: "Como você avalia as taxa do C6 financimento ?",
          options: ["Alta", "Execelente", "Razoavel"],
        },
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

    setCurrentCashValue(current.value);


    addToQuizScore(current.value);


    setModalVisible(true);

    if (currentQuestionnaire < questionnaires.length - 1) {

      setTimeout(() => {
        setModalVisible(false);
        setCurrentQuestionnaire((prev) => prev + 1);
        setSelectedOptions({});
      }, 2000);
    } else {

      setTimeout(() => {
        setModalVisible(false);
        navigate("/agradecimento");
      }, 3000);
    }
  };

  return (
    <div className="flex flex-col items-center   antialiased bg-[#121212]">
      {/* Modal */}
      <ModalCash
        isVisible={isModalVisible}
        onClose={() => setModalVisible(false)}
        cashValue={currentCashValue}
      />
      <section className="bg-[#242424]    rounded-lg  py-6">
        {/* Container Principal */}
        <div className="w-full  bg-[#242424] shadow-md rounded-xl px-4">
          {/* Título */}
          <h1 className="bg-gradient-to-r from-gradient1 via-gradient3 to-gradient6 bg-clip-text text-transparent font-c6text-semibold  text-center text-[1.2rem] mb-6">
            {current.title}
          </h1>
          {/* Imagem */}
          <div className="flex justify-center items-center mb-6 w-min-[90%] h-[10rem] bg-[#242424] rounded-md">
            <img
              src={current.image}
              alt="Produto"
              className={`w-full min-w-[320px] h-[180px] border-[0.01rem] border-[#535050] rounded-lg ${currentQuestionnaire === 0 ? "object-contain" : "object-cover"}`}
            />
          </div>
          {/* Perguntas */}
          {current.questions.map((question, index) => (
            <div key={index} className="mb-6">
              <div className="flex items-center justify-center">


                <p className="text-center text-white self-center  font-c6display-light text-[1rem] mb-4 max-w-[280px]  flex items-center justify-center ">{question.text}</p>
              </div>

              <div className="flex flex-col gap-4 w-full">
                {question.options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleOptionSelect(index, option)}
                    className={`w-full py-[0.7rem] rounded-[0.85rem] text-sm font-c6display-light transition-all ${selectedOptions[index] === option
                      ? "bg-[#FBFBFB] text-[#121212]"
                      : "bg-black  border-[0.01rem] text-white hover:bg-gray-300"
                      }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ))
          }
          {/* Botão de Envio */}
          <div className="mt-8">
            <button
              onClick={handleNextQuestionnaire}
              disabled={!areAllQuestionsAnswered()}
              className={`w-full py-2 rounded-[0.85rem] text-[#121212] font-c6display-regular transition-all ${areAllQuestionsAnswered()
                ? "bg-[#FBC161] hover:[#FBC161]"
                : "bg-gray-300 cursor-not-allowed"
                }`}
            >
              {currentQuestionnaire < questionnaires.length - 1
                ? "Próximo"
                : "Enviar resposta"}
            </button>
          </div>
        </div >
      </section >
    </div >
  );
};

export default QuizWella;
