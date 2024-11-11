import { useState } from 'react';

import Demaquic from '../../assets/images/demaquilant.webp';

const AdSection = () => {

  const [currentQuestionnaire, setCurrentQuestionnaire] = useState(0);


  const questionnaires = [
    {
      image: Demaquic,
      reward: 'R$34,00',
      title: 'Responda e ganhe R$34,00!',
      questions: [
        { text: 'De 1 a 5, que nota voce da para o atendimento do Nubank?', options: ['1', '2', '3', '4', '5'] },
        { text: 'Em um banco, voce prefere um cartao com limite maior ou menores taxas?', options: ['Limite maior', 'Menores taxas'] },
        { text: 'Voce faria um emprestimo nesse banco atualmente?', options: ['Sim', 'Nao'] },
      ],
    },
    {
      image: Demaquic,
      reward: 'R$40,00',
      title: 'Responda e ganhe R$40,00!',
      questions: [
        { text: 'De 1 a 5, que nota voce da para o atendimento do Outro Banco?', options: ['1', '2', '3', '4', '5'] },
        { text: 'Em um banco, voce prefere um cartao com limite maior ou menores taxas?', options: ['Limite maior', 'Menores taxas'] },
        { text: 'Voce faria um emprestimo nesse banco atualmente?', options: ['Sim', 'Nao'] },
      ],
    },

  ];


  const handleNextQuestionnaire = () => {
    setCurrentQuestionnaire((prev) => (prev + 1) % questionnaires.length);
  };

  const current = questionnaires[currentQuestionnaire];

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 mt-6 w-full max-w-md mx-auto">
      <h2 className="text-green-600 text-center text-xl font-bold mb-4">{current.title}</h2>
      <div className="flex justify-center mb-4">
        <img src={current.image} alt="Questionnaire Image" className="w-1/2 rounded-lg" />
      </div>

      {current.questions.map((question, index) => (
        <div key={index} className="mb-4">
          <p className="text-center text-gray-700 font-semibold mb-2">{question.text}</p>
          <div className="flex justify-center space-x-2">
            {question.options.map((option, idx) => (
              <button
                key={idx}
                className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg shadow-sm focus:outline-none hover:bg-gray-300"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ))}

      <button
        onClick={handleNextQuestionnaire}
        className="bg-green-500 text-white font-bold py-2 px-4 rounded-lg w-full mt-4"
      >
        Enviar respostas
      </button>
    </div>
  );
};

export default AdSection;
