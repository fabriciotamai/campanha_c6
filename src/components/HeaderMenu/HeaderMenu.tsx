import ImgC6 from "../../assets/c6/logoc6bank.svg";
import IconMenu from '../../assets/c6/menu.svg';
import { useAppContext } from "../../context/AppContext";

const Header = () => {
  const { quizScore, setIsModalOpen } = useAppContext();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <header className="fixed w-full bg-[#121212] shadow-md z-10 h-20">
      <section className="flex items-center justify-between px-8 py-5 h-full">
        <div className="flex items-center">
          <img src={ImgC6} alt="C6 Bank Logo" width={80} height={50} />
        </div>
        <div>
          {quizScore > 0 ? (
            <span className="bg-white text-black font-c6display-regular px-6 py-2 rounded-md text-[1.15rem]">
              R$ {quizScore.toFixed(2).replace('.', ',')}
            </span>
          ) : (
            <div className="flex gap-2">

              <button
                onClick={handleOpenModal}
                className="bg-[#fbfbfb] font-c6display-regular text-[0.90rem] rounded-md py-[0.40rem] px-4"
              >
                <p>Abrir minha conta</p>
              </button>
              <img src={IconMenu} width={20} height={20} alt="menu" />
            </div>
          )}
        </div>
      </section>
    </header>
  );
};

export default Header;
