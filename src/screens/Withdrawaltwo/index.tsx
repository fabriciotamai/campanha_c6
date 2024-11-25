import { useNavigate } from 'react-router-dom';
import IconC6bank from '../../assets/c6/logoc6bank.svg';

export function WithdrawalTwo() {
  const navigate = useNavigate();
  return (
    <main className="pt-24 flex flex-col items-center justify-center antialiased">
      <img src={IconC6bank} width={180} height={180} />
      <p className="text-[#f4f4f4] text-[3rem] uppercase">Quiz</p>
      <strong className=" leading-1 mt-2 text-[2rem] bg-gradient-to-r font-bold from-gradient1 via-gradient2 via-gradient3 via-gradient4 via-gradient5 to-gradient6 bg-clip-text text-transparent uppercase ">Parabéns</strong>
      <section className="px-8 text-[#d3d3d3] leading-1 text-[0.90rem]">
        Estamos processando seu saque e garantimos que ele será <b className="text-[#f4f4f4]">reembolsado </b>em sua conta no prazo estimado de 4 a 5 dias úteis. Qualquer novidade, manteremos você atualizado!
      </section>
      <br></br>
      <p className="px-8 text-[#d3d3d3] leading-1 text-[0.90rem]">Sabemos que, às vezes, a urgência fala mais alto e o dinheiro pode fazer diferença.
        Pensando em você, criamos uma opção de saque imediato: receba o valor em sua conta em até 5 minutos, por uma taxa de apenas <b className="text-[#f4f4f4] font-c6text-bold">R$ 29,91.</b></p>
      <div className="px-6 w-full pt-4">
        <button onClick={() => navigate('/gatewayadiantamento')} className="bg-[#fbc161] w-full  uppercase rounded-lg py-3 text-[0.90rem] font-bold my-3 ">
          Pagar Taxa de adiantamento
        </button>
        <p className="text-[#f4f4f4] text-center  text-[1.1rem] font-c6text-bold font-bold py-2">Porque é necessario essa taxa ?</p>
        <p className="text-[0.70rem] bg-gradient-to-r font-bold from-gradient1 via-gradient2 via-gradient3 via-gradient4 via-gradient5 to-gradient6 bg-clip-text text-transparent px-8 text-center"> Essa taxa é devido a custos operacionais e manutenção do nosso banco.</p>

      </div>
    </main>
  )
}