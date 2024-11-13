import { useState } from 'react';
import TwoAndTwo from '../../assets/images/212-produto-2.webp';
import Demaquic from '../../assets/images/demaquilant.webp';
import Shampoo from '../../assets/images/produto-1.webp';
import useWindowSize from '../../hooks/useResizeObserver'; // Certifique-se de que o caminho está correto

// Tipagem das propriedades do componente
interface AdSectionProps {
  onComplete: () => void;
}

// Tipagem da estrutura dos questionários
interface Question {
  text: string;
  options: string[];
}

interface Questionnaire {
  image: string;
  reward: string;
  questions: Question[];
}

const AdSection = ({ onComplete }: AdSectionProps) => {
  const [currentQuestionnaire, setCurrentQuestionnaire] = useState<number>(0);
  const [selectedOptions, setSelectedOptions] = useState<{ [key: number]: string }>({});
  const windowSize = useWindowSize();

  const questionnaires: Questionnaire[] = [
    {
      image: Demaquic,
      reward: 'R$34,00',
      questions: [
        {
          text: 'De 1 a 5, que nota você dá para essa fragrância?',
          options: ['1', '2', '3', '4', '5'],
        },
        {
          text: 'Facilidade de Uso e Aplicação?',
          options: ['Bom', 'Médio', 'Excelente'],
        },
        { text: 'Você compraria novamente?', options: ['Sim', 'Não'] },
      ],
    },
    {
      image: TwoAndTwo,
      reward: 'R$34,00',
      questions: [
        {
          text: 'De 1 a 5, que nota você dá para essa fragrância?',
          options: ['1', '2', '3', '4', '5'],
        },
        {
          text: 'Fixação do produto?',
          options: ['Bom', 'Médio', 'Excelente'],
        },
        { text: 'Você compraria novamente?', options: ['Sim', 'Não'] },
      ],
    },
    {
      image: Shampoo,
      reward: 'R$34,00',
      questions: [
        {
          text: 'De 1 a 5, que nota você dá para essa fragrância?',
          options: ['1', '2', '3', '4', '5'],
        },
        {
          text: 'Fixação do produto?',
          options: ['Bom', 'Médio', 'Excelente'],
        },
        { text: 'Você compraria novamente?', options: ['Sim', 'Não'] },
      ],
    },
  ];

  // Tipagem da função handleOptionSelect
  const handleOptionSelect = (questionIndex: number, option: string) => {
    setSelectedOptions((prevSelected) => ({
      ...prevSelected,
      [questionIndex]: option,
    }));
  };

  const handleNextQuestionnaire = () => {
    if (currentQuestionnaire === questionnaires.length - 1) {
      onComplete();
    } else {
      setCurrentQuestionnaire((prev) => prev + 1);
      setSelectedOptions({});
    }
  };

  const current = questionnaires[currentQuestionnaire];

  const imageWidth = windowSize.width
    ? windowSize.width < 768
      ? windowSize.width * 0.6
      : 300
    : 300;
  const imageHeight = imageWidth * 0.6;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-xl w-full max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto overflow-hidden">


        <div className="flex justify-center mb-4">
          <div className="w-full flex justify-center">
            <img
              src={current.image}
              alt="Questionnaire Image"
              style={{
                width: `${imageWidth}px`,
                height: `${imageHeight}px`,
                objectFit: 'contain',
              }}
            />
          </div>
        </div>

        {current.questions.map((question, index) => (
          <div key={index} className="mb-4">
            <p className="text-center text-gray-700 font-semibold mb-3 text-sm lg:text-base">
              {question.text}
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-4">
              {question.options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleOptionSelect(index, option)}
                  className={`py-2 px-5 md:px-4 rounded-lg shadow-sm focus:outline-none text-sm lg:text-base ${selectedOptions[index] === option
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
      </div>
      <button
        onClick={handleNextQuestionnaire}
        className="flex items-center justify-center bg-[#9222DC] w-full py-4 rounded-lg mt-8 text-white"
      >
        Enviar respostas
      </button>
    </div>
  );
};

export default AdSection;
