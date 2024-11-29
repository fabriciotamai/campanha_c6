import C6Footer from '../../assets/c6/pngfooter.png';


import IconC6 from '../../assets/c6/logoc6bank.svg';

import IconIntagram from '../../assets/c6/iconinstagram.svg';
import IconTikTok from '../../assets/c6/icontiktok.svg';
import IconTwitter from '../../assets/c6/icontwitter.svg';
import IconYoutube from '../../assets/c6/iconyoutube.svg';


import IconApple from '../../assets/c6/iconApple.svg';
import IconGoogle from '../../assets/c6/iconGoogle.svg';


export function FooterOriginalC6() {
  return (
    <main>
      <footer
        className="relative w-full bg-cover bg-center bg-no-repeat  flex flex-col justify-center  py-9"
        style={{
          backgroundImage: `url(${C6Footer})`,
        }}
      >
        <section className="lojas gap-4 flex flex-col w-full px-6">
          <button className="bg-[#121212] px-3 py-[0.60rem]  w-full items-center justify-center flex border-white border rounded-md" onClick={() => window.location.href = 'https://play.google.com/store/apps/details?id=com.c6bank.app'}>
            <img src={IconGoogle} width={120} height={120} />
          </button>
          <button onClick={() => window.location.href = 'https://apps.apple.com/br/app/c6-bank-cart%C3%A3o-conta-e-mais/id1463463143'} className="bg-[#121212] px-3 py-[0.60rem] mt-2 w-full items-center justify-center flex border-white border rounded-md">
            <img src={IconApple} width={120} height={120} />
          </button>

        </section>
        {/* <div className="text-center text-white py-9">
          <p className="font-bold text-lg">Obrigado por estar conosco!</p>
          <p className="text-sm mt-2">© 2024 C6 Bank - Todos os direitos reservados.</p>
        </div> */}
        <section className="flex items-start justify-start">
          <div className="flex flex-col  px-6  gap-2 pt-16 w-full text-left font-c6display-regular font-normal ">
            <p className="text-[#FFFFFFB3] pb-2 text-[1rem]">SITEMAP</p>
            <p className="text-[#fff] text-[1rem]">Produtos</p>
            <p className="text-[#FFF] text-[1rem]" onClick={() => window.location.href = "https://www.c6bank.com.br/conexao-c6/"}>Conexão C6</p>
            <p className="text-[#FFF] text-[1rem]" onClick={() => window.location.href = "https://www.c6bank.com.br/esg-sustentabilidade/"}>Sustentabilidade</p>
            <p className="text-[#409CFF] font-bold" onClick={() => window.location.href = "https://www.c6bank.com.br/conexao-c6/"} >Ver tudo</p>
          </div>
        </section>
        <section className="flex items-start justify-start">
          <div className="flex flex-col  px-6  gap-2 pt-10 w-full text-left font-c6display-regular font-normal antialiased ">
            <p className="text-[#FFFFFFB3] pb-2 text-[0.90rem]">C6 BANK</p>
            <p className="text-[#FFF]  text-[1rem]" onClick={() => window.location.href = "https://www.c6bank.com.br/jp-morgan-chase/"}>Benefícios JP Morgan Chase</p>
            <p className="text-[#FFF]  text-[1rem]" onClick={() => window.location.href = "https://www.c6bank.com.br/blog"} >Blog</p>
            <p className="text-[#FFF] text-[1rem]" onClick={() => window.location.href = "https://job-boards.greenhouse.io/c6bank"}>Trabalhe Conosco</p>
            <p className="text-[#FFF] text-[1rem]" onClick={() => window.location.href = "https://www.c6bank.com.br/imprensa/"}>Sala de Imprensa</p>
          </div>
        </section>
        <section className="flex items-start justify-start" >
          <div className="flex flex-col  px-6  gap-2 pt-16 w-[30% text-left ">
            <p className="text-[#FFFFFFB3] pb-2 text-[1rem]">DÚVIDAS</p>
            <p className="text-[#FFF]">Tire suas dúvidas</p>
            <p className="text-[#FFF]">Canal de Transparência</p>
            <p className="text-[#FFF]">LGPD</p>
            <p className="text-[#FFF] font-bold">CTVM LGPD</p>
            <p className="text-[#FFF] font-bold">C6Seg LGPD</p>
          </div>
        </section>
        <section className="px-6 ">
          <h1 className="text-[1.4rem] pt-16 text-left  text-[#FFF] font-c6display-regular">Atendimento</h1>
          <p className="text-left pt-4 text-[#b1b0b0] text-[0.85rem] ">24 horas por dia, 7 dias por semana</p>
          <div className="border-b text-[#7d7d7d52] border-[#525050]  mt-4" />
        </section>
        <section className="text-left px-6 py-4 gap-2 font-c6text-regular">
          <h1 className="text-[#FFF] text-[1.1rem] font-c6text-regular">Acesse pelo celular</h1>
          <h1 className="text-[#409CFF] text-[1.1rem] font-c6text-regular" >No chat do app</h1>
          <h1 className="text-[#FFF] text-[1.1rem] font-c6text-regular">Whatsapp</h1>
          <h1 className="text-[#409CFF] text-[1.1rem] font-c6text-regular" > <a href="tel:30036161" >(11) 2832 6088</a></h1>
          <h1 className="text-[#FFF] text-[1.1rem] mt-2">Capitais e regiões metropolitanasr</h1>
          <a href="tel:30036161" className="cursor-pointer">
            3003 6161
          </a>
          <h1 className="text-[#FFF] text-[1.1rem] mt-2 ">Demais localidades</h1>
          <a href="tel:08006600060" className="text-[#409CFF] text-[1.1rem] font-c6text-regular">
            0800 660 6116
          </a>
        </section>
        <section className="px-6 mt-4 text-left w-full" >
          <h1 className="text-[#FFF] text-[1.4rem] font-c6text-regular">Atendimento em libras</h1>
          <p className="text-left pt-4 text-[#b1b0b0] text-[0.85rem] ">Segunda a sexta, das 9h as 18h, exceto em feriados nacionais</p>
          <div className="border-b text-[#7d7d7d52] text-[0.20rem] border-[#525050]  mt-4" />
        </section>
        <section className="text-left px-6 py-4 gap-2 font-c6text-regular">
          <h1 className="text-[#FFF] text-[1.1rem] font-c6text-regular">Acesse pelo celular</h1>
          <h1 className="text-[#409CFF] text-[1.1rem] font-c6text-regular" >No chat do app</h1>
          <h1 className="text-[#FFF] text-[1.1rem] font-c6text-regular mt-2">Para perda ou roubo</h1>
          <h1 className="text-[#409CFF] text-[1.1rem] font-c6text-regular" onClick={() => window.location.href = 'https://call.icom-libras.com.br/c6bank/chamada/video?svId=4d2d262d-266b-4069-8997-2bb98bbcabcf&preCall=false&queue=ICOM-presencial'}  >Acesse pelo link</h1>
        </section>
        <section className="px-6 text-left">
          <h1 className="text-[#FFF] text-[1.4rem] pt-4 ">SAC</h1>
          <p className="text-left pt-3 text-[#b1b0b0] text-[0.85rem] ">24 horas por dia, 7 dias por semana</p>
          <div className="border-b text-[#7d7d7d52] text-[0.20rem] border-[#525050]  mt-4" />
        </section>
        <section className="text-left px-6 py-4 gap-2 font-c6text-regular">
          <h1 className="text-[#FFF] text-[1.1rem] font-c6text-regular">Todas as regiões</h1>
          <a href="tel:08006600060" className="text-[#409CFF] text-[1.1rem] font-c6text-regular">
            0800 660 0060
          </a>
          <h1 className="text-[#FFF] text-[1.4rem] font-c6text-regular mt-12">Ouvidoria</h1>
          <p className="text-left pt-3 text-[#b1b0b0] text-[0.85rem] ">Segunda a sexta, exceto feriados</p>
          <div className="border-b text-[#7d7d7d52] text-[0.20rem] border-[#525050]  mt-4" />
        </section>
        <section className="text-left px-6  gap-2 font-c6text-regular">
          <h1 className="text-[#FFF] text-[1.1rem] font-c6text-regular">Das 9h as 18h</h1>
          <h1 className="text-[#409CFF] text-[1rem] font-c6text-regular" >0800 660 6060</h1>

          <h1 className="text-[#409CFF] text-[1rem] font-c6text-regular mt-4" onClick={() => window.location.href = 'https://www.c6bank.com.br/c6-ouvidoria'}>Página de ouvidoria</h1>
        </section>
        <section className="w-full flex flex-row items-center justify-center px-6 pt-8 space-x-16">
          <button onClick={() => window.open("https://www.instagram.com/c6bank/", "_blank")}>
            <img src={IconIntagram} width={18} height={18} />
          </button>
          <button onClick={() => window.open("https://www.tiktok.com/@c6bank", "_blank")}>
            <img src={IconTikTok} width={18} height={18} />
          </button>
          <button onClick={() => window.open("https://www.youtube.com/channel/UCjNVJpBwOc81Vmpni5GXV-w/videos", "_blank")}>
            <img src={IconYoutube} width={18} height={18} />
          </button>
          <button onClick={() => window.open("https://x.com/C6bank/", "_blank")}>
            <img src={IconTwitter} width={18} height={18} />
          </button>

        </section>
        <section className="px-6 pt-14 font-c6text-regular text-[#fff] text-left gap-2 w-full">
          <img src={IconC6} width={100} className="mb-10" />
          <p className="text-[0.90rem] font-c6text-regular ">2024 BANCO C6 S.A.</p>
          <p className="mt-4 font-c6display-regular text-[0.80rem]">CNPJ:31.872.495/0001-72</p>
          <p className="mt-2 text-[0.86rem] font-c6text-regular">Av. Nove de Julho,3186 - Jardim Paulista, São paulo - 01406-000</p>
          <p className="mt-8 font-c6text-regular text-[0.95rem]" onClick={() => window.location.href = 'https://www.c6bank.com.br/documentos#todos'} >
            Tarifa
          </p>
          <p className="mt-3 font-c6text-regular text-[0.95rem]" onClick={() => window.location.href = 'https://www.c6bank.com.br/termos-de-uso/'}>
            Termos de uso
          </p>
          <p className="mt-3 font-c6text-regular text-[0.95rem]" onClick={() => window.location.href = 'https://www.c6bank.com.br/portal-de-seguranca/'}>
            Segurança
          </p>
        </section>
      </footer>
    </main>
  )
}