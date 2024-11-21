import ImgC6 from "../../assets/c6/logoc6bank.svg";
import { useAppContext } from "../../context/AppContext";

const Header = () => {
  const { setIsModalOpen } = useAppContext(); // Acessa o manipulador do modal

  const handleOpenModal = () => {
    setIsModalOpen(true); // Abre o modal
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-black shadow-md z-10">
      <section className="flex items-center justify-between px-8 py-4">
        <div className="flex items-center justify-between">
          <img src={ImgC6} alt="C6 Bank Logo" width={80} height={50} />
        </div>
        <div>
          <button
            onClick={handleOpenModal} // Abre o modal ao clicar
            className="bg-[#fbfbfb] font-c6display-light text-[0.90rem] rounded-md py-[0.40rem] px-4"
          >
            <p>Abrir minha conta</p>
          </button>
        </div>
      </section>
    </header>
  );
};

export default Header;
