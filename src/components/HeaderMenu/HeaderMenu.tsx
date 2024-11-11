const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full flex items-center justify-between bg-white p-4 shadow-md z-10">
      <img src="/images/opinilogo.png" alt="OpinaPro Logo" className="h-10" />
      <button className="bg-green-500 text-white font-bold py-2 px-4 rounded-full text-lg shadow-md">
        R$ 133.00
      </button>
    </header>
  );
};

export default Header;