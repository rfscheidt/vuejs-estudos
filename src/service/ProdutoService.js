import axios from 'axios';

export const ProdutoService = {
    
    carregarProduto: async () => {
        let response = await axios.get(`http://localhost:8888/produtos`)
        return response
    }
    
}