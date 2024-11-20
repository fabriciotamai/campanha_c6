
import QuizCreamy from '../../components/QuizCreamy';
import QuizWella from '../../components/QuizWella';
import { useAppContext } from '../../context/AppContext';



const AdSection = () => {
  const { selectedBrand } = useAppContext();



  if (selectedBrand === 'Wella') {
    return <QuizWella />;
  }

  // if (selectedBrand === 'Eudora') {
  //   return <QuizEuDora />;
  // }

  if (selectedBrand === 'Creamy') {
    return <QuizCreamy />;
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
