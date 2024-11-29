import api from '../../src/lib/api';

export async function onLoadStatusPayment(transactionId: string): Promise<string> {
  console.log('Iniciando verificação de status da transação...', transactionId);

  try {
    const response = await api.get(`/getstatustransaction/${transactionId}`);
    console.log('Resposta da API:', response.data);

    // Valide se a resposta contém o objeto esperado
    if (response.data && response.data.status) {
      return response.data.status; // Retorna o status diretamente
    } else {
      throw new Error('A resposta da API não contém um status válido.');
    }
  } catch (error: any) {
    console.error('Erro ao verificar status da transação:', error.message || error);
    throw new Error('Não foi possível verificar o status da transação.');
  }
}
