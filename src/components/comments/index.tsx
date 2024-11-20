
interface CommentProps {
  name: string;
  location: string;
  date: string;
  comment: string;
  stars: number;
  usefulYes: number;
  usefulNo: number;
}

const commentsData: CommentProps[] = [
  {
    name: 'Vitória F.',
    location: 'Fortaleza, CE',
    date: '28/09/2024',
    comment: 'Produto Maravilhoso!!! Beleza na web arrasou nem acredito..',
    stars: 5,
    usefulYes: 0,
    usefulNo: 1,
  },
  {
    name: 'Bianca C.',
    location: 'São Paulo, SP',
    date: '21/09/2024',
    comment: 'Chegou! não acredito estou encatada com o produto.',
    stars: 4,
    usefulYes: 0,
    usefulNo: 1,
  },
  {
    name: 'Cristiane M.',
    location: 'Belo Horizonte, MG',
    date: '04/06/2024',
    comment:
      'Essa linha é maravilhosa. Cheirinho gostoso, demorou um pouco o frete mais tudo certo... ',
    stars: 4,
    usefulYes: 0,
    usefulNo: 0,
  },
  {
    name: 'Beatriz K.',
    location: 'Blumenau, SC',
    date: '02/09/2024',
    comment:
      'Maravilhoso essa experiencia com os clientes! não acredito que paguei apenas o frete',
    stars: 5,
    usefulYes: 0,
    usefulNo: 0,
  },
];

const UserComments = () => {
  return (
    <div className="flex flex-col  w-full mx-auto bg-white rounded-xl shadow-lg  text-gray-800 space-y-4">
      {commentsData.map((comment, index) => (
        <div key={index} className="border-b pb-4 mb-4 w-full">
          {/* Nome e Estrelas */}
          <div className="flex items-center space-x-2">
            <h3 className="font-medium text-[1rem] text-left  flex">{comment.name}</h3>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-orange-500"
                  fill={i < comment.stars ? 'currentColor' : 'none'}
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .587l3.668 7.568 8.332 1.151-6.001 5.794 1.417 8.333L12 18.897l-7.416 4.536 1.417-8.333-6.001-5.794 8.332-1.151z" />
                </svg>
              ))}
            </div>
          </div>


          <p className="text-sm text-[#878787] text-left pt-3">
            {comment.location} | {comment.date}
          </p>

          {/* Comentário */}
          <p className="text-[#878787] text-[0.75rem] mt-2 text-left pt-2">{comment.comment}</p>

          {/* Avaliação útil */}
          <div className="mt-4 ">
            <p className="text-gray-600 text-sm mb-4 text-left  ">Esta avaliação foi útil?</p>
            <div className="flex  space-x-3">
              <button className="flex items-center space-x-1 border px-4 py-[0.10rem] rounded-md text-green-600 border-green-600 hover:bg-green-50">
                <span className="text-[0.80rem]">Sim</span>
                <span className="text-sm">({comment.usefulYes})</span>
              </button>
              <button className="flex items-center space-x-1 border px-3  rounded-md text-gray-600 border-gray-600 hover:bg-gray-50">
                <span className="text-[0.80rem]" >Não</span>
                <span className="text-sm">({comment.usefulNo})</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserComments;
