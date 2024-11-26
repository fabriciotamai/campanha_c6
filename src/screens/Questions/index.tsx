import { useEffect, useState } from "react";
import { SyncLoader } from "react-spinners";
import Iconsend from '../../assets/c6/iconsend.svg';

export function Question() {
  const [messages, setMessages] = useState<{ sender: string; text: string; timestamp: string }[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [userName, setUserName] = useState<string | null>(null);
  const [hasGreeted, setHasGreeted] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  const [inactiveTimer, setInactiveTimer] = useState<NodeJS.Timeout | null>(null); // Timer de inatividade


  const questions = [
    "Porque é preciso pagar a taxa?",
    "Em quanto tempo vou receber?",
    "Preciso pagar a taxa toda vez?",
    "Quantas vezes posso sacar?",
  ];

  const answers = [
    "A taxa é uma medida antifraude essencial para garantirmos que a validação seja feita por uma pessoa real, e não por um robô. Esse valor será estornado diretamente para sua conta, servindo apenas como uma etapa de segurança. Além disso, ao colaborar conosco nesse processo, você nos ajuda a melhorar nossos produtos e serviços. Como forma de agradecimento, o C6 Bank irá disponibilizar um bônus exclusivo em sua conta!",
    "O C6 Bank realizará todas as validações necessárias para garantir a segurança do processo. Em até 24 horas, o valor referente à taxa de validação será estornado integralmente para a sua conta, junto com o bônus como forma de agradecimento.",
    "Não, a taxa será cobrada apenas uma vez como uma medida de segurança. O valor será reembolsado integralmente e ficará exclusivamente vinculado ao seu CPF.",
    "O C6 Bank disponibiliza até 3 tokens por endereço de e-mail, o que significa que você tem até 3 oportunidades para concluir o processo com sucesso.",
  ];


  const getTimestamp = () => {
    const now = new Date();
    return now.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
  };


  useEffect(() => {
    setTimeout(() => {
      setMessages([
        {
          sender: "bot",
          text: "Olá! Sou Bianca, sua assistente virtual do C6 Bank. Para começarmos, por favor, digite seu nome.",
          timestamp: getTimestamp(),
        },
      ]);
      setIsTyping(false);
    }, 2000);

    startInactiveTimer();
  }, []);


  const startInactiveTimer = () => {
    if (inactiveTimer) clearTimeout(inactiveTimer);
    setInactiveTimer(
      setTimeout(() => {
        setIsOnline(false);
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: "O chat foi encerrado devido à inatividade.", timestamp: getTimestamp() },
        ]);
      }, 30000)
    );
  };


  const resetChat = () => {
    setIsOnline(true);
    setMessages([
      { sender: "bot", text: "Olá! Sou Bianca, sua assistente virtual do C6 Bank. Para começarmos, por favor, digite seu nome.", timestamp: getTimestamp() },
    ]);
    setUserName(null);
    setHasGreeted(false);
    startInactiveTimer();
  };

  const handleSendMessage = () => {
    if (input.trim() === "") return;


    if (!isOnline) {
      resetChat();
      setInput("");
      return;
    }

    const newMessages = [...messages, { sender: "user", text: input, timestamp: getTimestamp() }];
    setMessages(newMessages);
    setInput("");

    startInactiveTimer();

    if (!userName) {
      setUserName(input);
      setIsTyping(true);
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: `Olá, ${input}! Tudo bem? Como posso te ajudar?`, timestamp: getTimestamp() },
        ]);
        setHasGreeted(true);
        setIsTyping(false);
      }, 1000);
    } else if (hasGreeted) {
      setHasGreeted(false);
      setIsTyping(true);
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: "Aqui estão alguns tópicos que você pode perguntar:", timestamp: getTimestamp() },
          ...questions.map((q, index) => ({
            sender: "bot",
            text: `${index + 1}. ${q}`,
            timestamp: getTimestamp(),
          })),
        ]);
        setIsTyping(false);
      }, 5000);
    } else {
      const questionIndex = parseInt(input) - 1;
      setIsTyping(true);
      setTimeout(() => {
        if (!isNaN(questionIndex) && questionIndex >= 0 && questionIndex < questions.length) {
          setMessages((prev) => [
            ...prev,
            { sender: "bot", text: answers[questionIndex], timestamp: getTimestamp() },
          ]);
        } else {
          setMessages((prev) => [
            ...prev,
            { sender: "bot", text: "Desculpe, não entendi sua pergunta. Por favor, escolha um número de 1 a 4.", timestamp: getTimestamp() },
          ]);
        }
        setIsTyping(false);
      }, 5000);
    }
  };

  return (
    <main className="bg-[#121212] h-screen flex flex-col pt-24 ">
      <header className="bg-[#1e1e1e] py-2 text-[#f4f4f4] text-center font-medium flex justify-center items-center space-x-2">
        <div
          className={`w-3 h-3 rounded-full ${isOnline ? "bg-green-500" : "bg-gray-400"}`}
          title={isOnline ? "Online" : "Offline"}
        ></div>
        <span>Bianca - Assistente Virtual</span>
      </header>

      <div className="flex-1 px-6 overflow-y-auto space-y-4 mt-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-xs p-3 text-[0.80rem] rounded-lg ${message.sender === "user"
                ? "bg-[#fbc161] text-[#121212]"
                : "bg-[#2b2b2b] text-[#f4f4f4]"
                }`}
            >
              <p>{message.text}</p>
              <p className="text-xs text-gray-400 text-right mt-1">{message.timestamp}</p>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="max-w-xs p-3 rounded-lg bg-[#2b2b2b] text-[#f4f4f4] flex items-center">
              <SyncLoader size={8} color="#fbc161" />
              <span className="ml-2 text-sm">Digitando...</span>
            </div>
          </div>
        )}
      </div>

      <div className="fixed bottom-12 left-0 w-full bg-[#1e1e1e] p-4 flex items-center space-x-2">
        <input
          type="text"
          className="w-[90%] py-2  px-4 rounded-md bg-[#2b2b2b] text-[#d3d3d3] outline-none"
          placeholder={userName ? "Digite sua mensagem..." : "Digite seu nome..."}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
        />
        <button
          className="  bg-[#2b2b2b] text-[#121212] py-2 px-3 rounded-md font-bold"
          onClick={handleSendMessage}
        >
          <img src={Iconsend} />

        </button>
      </div>
    </main>
  );
}
