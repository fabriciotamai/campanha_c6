// import apiClient from './apiClient.js';


// export async function criarTransacao(dadosUsuario:any) {
//   try {
//     const response = await apiClient.post('/transactions', {
//       valor: dadosUsuario.valor,
//       cliente: {
//         nome: dadosUsuario.nome,
//         email: dadosUsuario.email,
//         telefone: dadosUsuario.telefone,
//       },
//       metodo_pagamento: 'PIX',
//     });

//     console.log('Transação criada com sucesso:', response.data);
//     return response.data;
//   } catch (error) {
//     console.error('Erro ao criar transação:', error.response?.data || error.message);
//     throw error;
//   }
// }
