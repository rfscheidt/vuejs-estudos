import axios from 'axios';

export const ProdutoService = {
    
    listaProdutos: async () => {
        let response = await axios.get(`http://localhost:8888/produtos`)
        return response
    },

    salvarProdutos: (form) => {
       axios.post('http://localhost:8888/produtos', form)
    }
    
}