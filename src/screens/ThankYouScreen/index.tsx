// import { useEffect, useRef, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import CreamyImage3 from '../../assets/kitcongralutions03.webp';
// import CreamyImage1 from '../../assets/kitcreamycongragulation.webp';
// import CreamyImage2 from '../../assets/kitcreamycongralations02.webp';
// import WellakitOne from '../../assets/kitwellas.webp';
// import WellaskitFor from '../../assets/kitwellas4.webp';
// import WellakiFive from '../../assets/kitwellas5.webp';
// import WellasSix from '../../assets/kitwellas6.webp';
// import Star from '../../assets/star.svg';
// import WellakiTwo from '../../assets/Wellaskit2.webp';
// import WellakiTHere from '../../assets/wellaskit3.webp';
// import UserComments from '../../components/comments'; //
// import { useAppContext } from '../../context/AppContext';



// const ThankYouScreen = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const { selectedBrand, setCurrentStep, setCartActive } = useAppContext();
//   const navigate = useNavigate();

//   useEffect(() => {
//     console.log(selectedBrand)

//   }, [])

//   const totalResponses = 120;
//   const rating = 4.9;
//   const recommendation = 96;
//   const ratingsBreakdown = [
//     { stars: 5, count: 107 },
//     { stars: 4, count: 10 },
//     { stars: 3, count: 3 },
//     { stars: 2, count: 0 },
//     { stars: 1, count: 0 },
//   ];
//   const footerRef = useRef<HTMLDivElement | null>(null);

//   const handleNavigationAddress = () => {
//     navigate('/endereco');
//     setCurrentStep(4)
//     setCartActive(true)
//   }


//   const brandImages = {
//     Wella: [WellakitOne, WellakiTwo, WellakiTHere, WellaskitFor, WellakiFive, WellasSix],
//     Creamy: [CreamyImage1, CreamyImage2, CreamyImage3],
//     Eudora: [CreamyImage1, CreamyImage2, CreamyImage3],
//   };

//   const productDetails = {
//     Wella: {
//       name: 'Kit Wella Professionals Oil Reflections Tratamento (3 Produtos)',
//       description1: 'Kit Tratamento para todos os tipos de cabelo. Kit Wella Professionals Oil Reflections Tratamento é um spa de maciez e luminosidade para os seus fios.',
//       description2: 'O Kit Wella Professionals Oil Reflections tratamento mantém a água dos fios, evitando perda de hidratação. Ele promove nutrição e hidratação intensa, cor protegida.',
//     },
//     Creamy: {
//       name: 'Kit Creamy Tratamento Antiacne (4 Produtos)',
//       description1: 'Kit facial para tratamento antiacne. Creamy Tratamento Antiacne promove uma pele saudável com oleosidade controlada e acnes reduzidas',
//       description2: 'O Kit Creamy Tratamento Antiacne apresenta um combo incrível que reúne os melhores ativos para cuidar das peles acneicas. Oferece em um só kit passos para uma limpeza nutritiva, tonificação, tratamento e proteção da pele. Seus produtos possuem propriedades capazes de controlar a oleosidade excessiva, reduzir cravos e espinhas, além de uniformizar o tom da pele, deixando ainda mais bela e macia',
//     },
//     Eudora: {
//       name: 'Kit Eudora Beleza Perfeita (3 Produtos)',
//       description1: 'Kit Beleza para um cuidado completo. O Kit Eudora Beleza Perfeita promove maciez e proteção.',
//       description2: 'O Kit Eudora hidrata intensamente os cabelos, realçando a luminosidade natural dos fios.',
//     },
//   };

//   const images = brandImages[selectedBrand] || [];
//   const selectedProduct = productDetails[selectedBrand] || {
//     name: '',
//     description1: '',
//     description2: '',
//   };

//   const nextImage = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   const prevImage = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);



//   const scrollToFooter = () => {
//     footerRef.current?.scrollIntoView({ behavior: 'smooth' });
//   };

//   if (images.length === 0) {
//     return (
//       <div className="flex items-center justify-center min-h-screen text-red-500">
//         <p>Erro: Marca selecionada inválida.</p>
//       </div>
//     );
//   }

//   return (
//     <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-8">
//       <div className="w-full sm:max-w-md lg:max-w-lg mx-auto bg-white text-gray-900 rounded-xl shadow-lg overflow-hidden">
//         <section className="px-6 py-4">
//           <h1 className="text-xl md:text-2xl font-medium mb-4 pt-8">Obrigado pelo seu tempo!</h1>
//           <p className="text-[0.90rem] mb-2 leading-5 md:leading-6 text-justify text-[#575757]">
//             Agradecemos por compartilhar sua opinião conosco! Seu feedback nos ajuda a melhorar nossos produtos e
//             serviços.
//           </p>
//           <p className="text-base font-semibold text-purple-600 mb-2">
//             Como agradecimento, a <span className="text-pink-500 font-bold">Beleza na Web</span> oferece um kit
//             especial para você!
//           </p>
//         </section>
//         <strong className="text-left flex text-[1rem] font-medium px-1 bg-[#eeeef0]">
//           {selectedProduct.name}
//         </strong>
//         <section className="star flex flex-row items-center justify-end px-4 py-2">
//           <div className="border px-4 py-1 items-center justify-center flex rounded-2xl mr-2">
//             <button
//               className="bg-yellow-500 rounded-md pointer mr-1"
//               onClick={scrollToFooter}
//             >
//               <img src={Star} width={80} height={80} />
//             </button>
//             <div>
//               <p>(120)</p>
//             </div>
//           </div>
//         </section>
//         <div className="relative flex justify-center items-center mb-6">
//           <button
//             onClick={prevImage}
//             aria-label="Imagem anterior"
//             className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#d3d3d3] rounded-md px-4 py-2 shadow-md hover:bg-gray-300 transition z-10"
//             style={{ margin: '0 5px' }}
//           >
//             ◀
//           </button>
//           <img
//             src={images[currentIndex]}
//             alt={`Kit de Agradecimento - ${selectedBrand}`}
//             className="w-full max-w-full object-contain rounded-lg"
//           />
//           <button
//             onClick={nextImage}
//             aria-label="Próxima imagem"
//             className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#d3d3d3] rounded-md px-4 py-2 shadow-md hover:bg-gray-300 transition z-10"
//             style={{ margin: '0 5px' }}
//           >
//             ▶
//           </button>
//         </div>

//         <div className="flex justify-center space-x-2 mb-4">
//           {images.map((_, index) => (
//             <div
//               key={index}
//               className={`rounded-full ${index === currentIndex ? 'bg-gray-500 w-6 h-2' : 'bg-gray-300 w-2 h-2'}`}
//             ></div>
//           ))}
//         </div>
//       </div>
//       <footer ref={footerRef} className="detalhes w-full">
//         <div className="borda py-[0.03rem] w-full border-[0.05rem] bg-[#5466AB] my-2" />
//         <div className="px-1">
//           <strong className="text-[#5466AB] font-light text-left flex py-1 text-[1.25rem]">Detalhes</strong>
//           <strong className="text-[#212121] font-normal text-left flex py-2 text-[1rem] w-[90%]">{selectedProduct?.name}</strong>
//           <p className="text-left text-[0.80rem] text-[#515151]">{selectedProduct?.description1}</p>
//           <p className="text-left py-6 text-[0.80rem]">{selectedProduct?.description2}</p>
//         </div>
//       </footer>
//       <div className="py-1 w-full bg-[#d3d3d3]" />
//       <section className="w-full ">
//         <div className="flex flex-col items-center justify-center w-full  mx-auto bg-white rounded-xl shadow-lg text-gray-800">



//           {/* Título */}
//           <h2 className="font-medium text-[1.25rem] pt-4 ">Avaliações</h2>

//           {/* Nota geral */}
//           <div className="flex flex-col items-center">
//             <div className="text-2xl font-light text-white px-2  my-3 rounded-sm bg-orange-400">{rating} / 5</div>
//             <div className="flex">
//               {[...Array(5)].map((_, index) => (
//                 <svg
//                   key={index}
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-[1.1rem] w-6 text-orange-500"
//                   fill={index < Math.round(rating) ? 'currentColor' : 'none'}
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M12 .587l3.668 7.568 8.332 1.151-6.001 5.794 1.417 8.333L12 18.897l-7.416 4.536 1.417-8.333-6.001-5.794 8.332-1.151z" />
//                 </svg>
//               ))}
//             </div>
//             <p className="text-[1rem] font-normal text-gray-500 py-2">{totalResponses} respostas obtidas</p>
//           </div>

//           {/* Percentual de recomendação */}
//           <div className="text-center mb-6">
//             <p className="text-[1.5rem] font-bold text-gray-800">{recommendation}%</p>
//             <p className="text-sm text-gray-500">
//               dos respondentes recomendam esse produto.
//             </p>
//           </div>


//           <div className="w-full space-y-2 mb-6 border-b pb-8">
//             {ratingsBreakdown.map(({ stars, count }) => (
//               <div key={stars} className="flex items-center space-x-3">
//                 <p className="text-sm font-medium text-gray-700">{stars} Estrelas</p>
//                 <div className="w-full bg-gray-200 rounded-full h-[0.40rem] flex-1">
//                   <div
//                     className="bg-orange-500 h-[0.40rem] rounded-full"
//                     style={{
//                       width: `${(count / totalResponses) * 100}%`,
//                     }}
//                   ></div>
//                 </div>
//                 <p className="text-sm font-medium text-gray-700">{count}</p>
//               </div>
//             ))}
//           </div>

//           <UserComments />

//         </div>

//       </section>
//       <div className="border-spacing-4" />
//       <button
//         onClick={() => handleNavigationAddress()}
//         className="flex items-center justify-center bg-purple-700 w-full max-w-sm sm:max-w-md py-3 rounded-lg px-4 mt-6 text-white font-semibold hover:bg-purple-800 transition"
//       >
//         Cadastrar Endereço
//       </button>
//     </main>
//   );
// };

// export default ThankYouScreen;
