
import { useState } from 'react';
import TwoAndTwo from '../../assets/images/212-produto-2.webp';
import Demaquic from '../../assets/images/demaquilant.webp';
import Shampoo from '../../assets/images/produto-1.webp';

const AdSection = ({ onComplete }: any) => {
  const [currentQuestionnaire, setCurrentQuestionnaire] = useState<any>(0);
  const [selectedOptions, setSelectedOptions] = useState<any>({});

  const questionnaires: any = [
    {
      image: Demaquic,
      reward: 'R$34,00',
      questions: [
        { text: 'De 1 a 5, que nota você dá para essa fragrância?', options: ['1', '2', '3', '4', '5'] },
        { text: 'Facilidade de Uso e Aplicação?', options: ['Bom', 'Médio', 'Excelente'] },
        { text: 'Você compraria novamente?', options: ['Sim', 'Não'] },
      ],
    },
    {
      image: TwoAndTwo,
      reward: 'R$34,00',
      questions: [
        { text: 'De 1 a 5, que nota você dá para essa fragrância?', options: ['1', '2', '3', '4', '5'] },
        { text: 'Fixação do produto?', options: ['Bom', 'Médio', 'Excelente'] },
        { text: 'Você compraria novamente?', options: ['Sim', 'Não'] },
      ],
    },
    {
      image: Shampoo,
      reward: 'R$34,00',
      questions: [
        { text: 'De 1 a 5, que nota você dá para essa fragrância?', options: ['1', '2', '3', '4', '5'] },
        { text: 'Fixação do produto?', options: ['Bom', 'Médio', 'Excelente'] },
        { text: 'Você compraria novamente?', options: ['Sim', 'Não'] },
      ],
    },
  ];

  // Armazena a seleção do usuário para cada pergunta
  const handleOptionSelect = (questionIndex: any, option: any) => {
    setSelectedOptions((prevSelected: any) => ({
      ...prevSelected,
      [questionIndex]: option,
    }));
  };

  const handleNextQuestionnaire = () => {
    if (currentQuestionnaire === questionnaires.length - 1) {
      onComplete();
    } else {
      setCurrentQuestionnaire((prev: any) => prev + 1);
      setSelectedOptions({});
    }
  };

  const current = questionnaires[currentQuestionnaire];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 ">
      <div className="bg-white shadow-lg rounded-xl w-full max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto overflow-hidden">
        <h2 className="text-green-600 text-center text-lg lg:text-xl font-bold ">{current?.title}</h2>

        <div className="flex justify-center mb-4">
          <img
            src={current.image}
            alt="Questionnaire Image"
            width={300}
            height={240}
          />
        </div>

        {current.questions.map((question: any, index: any) => (
          <div key={index} className="mb-6">
            <p className="text-center text-gray-700 font-semibold mb-3 text-sm lg:text-base">{question.text}</p>
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              {question.options.map((option: any, idx: any) => (
                <button
                  key={idx}
                  onClick={() => handleOptionSelect(index, option)}
                  className={`py-2 px-3 md:px-4 rounded-lg shadow-sm focus:outline-none text-sm lg:text-base ${selectedOptions[index] === option
                    ? 'bg-[#a000e4] text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ))}

        <button
          onClick={handleNextQuestionnaire}
          className="bg-[#a000e4] text-white font-bold py-3 lg:py-4 rounded-lg w-full mt-6 text-sm lg:text-base"
        >
          Enviar respostas
        </button>
      </div>
    </div>
  );
};

export default AdSection;
