import QuizCreamy from '../QuizCreamy';
import QuizEuDora from '../QuizEudora';
import QuizWella from '../QuizWella';

interface AdSectionProps {
  selectedBrand: string; // Marca selecionada passada pelo App
  onComplete: () => void; // Função para ir para o próximo passo
}

const AdSection = ({ selectedBrand, onComplete }: AdSectionProps) => {
  if (selectedBrand === 'Wella') {
    return <QuizWella onComplete={onComplete} />;
  }

  if (selectedBrand === 'Eudora') {
    return <QuizEuDora onComplete={onComplete} />;
  }

  if (selectedBrand === 'Creamy') {
    return <QuizCreamy onComplete={onComplete} />;
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p className="text-lg font-semibold text-gray-800">
        Nenhuma marca selecionada. Por favor, volte e escolha uma marca.
      </p>
    </div>
  );
};

export default AdSection;
