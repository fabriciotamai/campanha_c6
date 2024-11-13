import { useState } from 'react';
import TwoAndTwo from '../../assets/images/212-produto-2.webp';
import Demaquic from '../../assets/images/demaquilant.webp';
import Shampoo from '../../assets/images/produto-1.webp';

const AdSection = ({ onComplete }) => {
  const [currentQuestionnaire, setCurrentQuestionnaire] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});

  const questionnaires = [
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
  const handleOptionSelect = (questionIndex, option) => {
    setSelectedOptions((prevSelected) => ({
      ...prevSelected,
      [questionIndex]: option,
    }));
  };

  // Avança para o próximo questionário ou chama onComplete se for o último
  const handleNextQuestionnaire = () => {
    if (currentQuestionnaire === questionnaires.length - 1) {
      onComplete(); // Chama a função para mostrar o ThankYouScreen
    } else {
      setCurrentQuestionnaire((prev) => prev + 1);
      setSelectedOptions({}); // Reseta as seleções ao avançar
    }
  };


  const current = questionnaires[currentQuestionnaire];

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-sm mx-auto overflow-hidden">
      <h2 className="text-green-600 text-center text-base font-bold mb-4">{current.title}</h2>

      <div className="flex justify-center mb-4">
        <img
          src={current.image}
          alt="Questionnaire Image"
          className="w-40 h-40 object-contain rounded-lg"
        />
      </div>

      {current.questions.map((question, index) => (
        <div key={index} className="mb-4">
          <p className="text-center text-gray-700 font-semibold mb-2 text-sm">{question.text}</p>
          <div className="flex flex-wrap justify-center gap-2">
            {question.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleOptionSelect(index, option)}
                className={`py-2 px-3 rounded-lg shadow-sm focus:outline-none text-sm ${selectedOptions[index] === option
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
        className="bg-[#a000e4] text-white font-bold py-2 rounded-lg w-full mt-4 text-sm"
      >
        Enviar respostas
      </button>
    </div>
  );
};

export default AdSection;
