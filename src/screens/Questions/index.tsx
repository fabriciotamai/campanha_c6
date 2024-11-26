import { useState } from "react";
export function Question() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);
  const toggleQuestion = (index: number) => {
    setOpenQuestion((prev) => (prev === index ? null : index));
  };
  return (
    <main className="bg-[#121212] antialiased">
      <div className="px-6 pt-20 space-y-6">
        <h1 className="text-[#fbc161] text-[1.4rem] font-bold font-c6text-semibold text-center">
          Perguntas frequentes
        </h1>
        {/* Pergunta 1 */}
        <div>
          <section
            className={`px-4 py-3 rounded-md flex items-center cursor-pointer ${openQuestion === 0 ? "bg-[#fbc161] text-[#121212]" : "bg-[#f4f4f4] text-[#121212]"
              }`}
            onClick={() => toggleQuestion(0)}
          >
            <p className="text-[0.90rem] font-c6text-regular">
              Porque é preciso pagar a taxa?
            </p>
          </section>
          {openQuestion === 0 && (
            <div className="px-4 py-2 bg-[#2b2b2b] text-[#f4f4f4] text-[1rem] rounded-md">
              A taxa é uma medida antifraude essencial para garantirmos que a validação seja feita por uma pessoa real, e não por um robô. Esse valor será estornado diretamente para sua conta, servindo apenas como uma etapa de segurança. Além disso, ao colaborar conosco nesse processo, você nos ajuda a melhorar nossos produtos e serviços. Como forma de agradecimento, o C6 Bank irá disponibilizar um bônus exclusivo em sua conta!
            </div>
          )}
        </div>
        {/* Pergunta 2 */}
        <div>
          <section
            className={`px-4 py-3 rounded-md flex items-center cursor-pointer ${openQuestion === 1 ? "bg-[#fbc161] text-[#121212]" : "bg-[#f4f4f4] text-[#121212]"
              }`}
            onClick={() => toggleQuestion(1)}
          >
            <p className="text-[0.90rem] font-c6text-regular">
              Em quanto tempo vou receber ?
            </p>
          </section>
          {openQuestion === 1 && (
            <div className="px-4 py-2 bg-[#2b2b2b] text-[#f4f4f4] text-[1rem] rounded-md">
              O C6 Bank realizará todas as validações necessárias para garantir a segurança do processo. Em até 24 horas, o valor referente à taxa de validação será estornado integralmente para a sua conta, junto com o bônus como forma de agradecimento.
            </div>
          )}
        </div>
        {/* Pergunta 3 */}
        <div>
          <section
            className={`px-4 py-3 rounded-md flex items-center cursor-pointer ${openQuestion === 2 ? "bg-[#fbc161] text-[#121212]" : "bg-[#f4f4f4] text-[#121212]"
              }`}
            onClick={() => toggleQuestion(2)}
          >
            <p className="text-[0.90rem] font-c6text-regular">
              Preciso pagar a taxa toda vez?
            </p>
          </section>
          {openQuestion === 2 && (
            <div className="px-4 py-2 bg-[#2b2b2b] text-[#f4f4f4] text-[1rem] rounded-md">
              Não, a taxa será cobrada apenas uma vez como uma medida de segurança. O valor será reembolsado integralmente e ficará exclusivamente vinculado ao seu CPF.
            </div>
          )}
        </div>
        {/* Pergunta 4 */}
        <div>
          <section
            className={`px-4 py-3 rounded-md flex items-center cursor-pointer ${openQuestion === 3 ? "bg-[#fbc161] text-[#121212]" : "bg-[#f4f4f4] text-[#121212]"
              }`}
            onClick={() => toggleQuestion(3)}
          >
            <p className="text-[0.90rem] font-c6text-regular">
              Quantas vezes posso sacar ?
            </p>
          </section>
          {openQuestion === 3 && (
            <div className="px-4 py-2 bg-[#2b2b2b] text-[#f4f4f4] text-[1rem] rounded-md">
              O C6 Bank disponibiliza até 3 tokens por endereço de e-mail, o que significa que você tem até 3 oportunidades para concluir o processo com sucesso.
            </div>
          )}
        </div>
      </div>
    </main>
  );
}