import axios from "axios";

const BASE_URL = "https://dnc-api-livros-back.vercel.app/"

export class LivrosService{
    static getLivros(){
        return axios.get(BASE_URL+'livros/obter');
    }

    static getLivro(livroId){
        return axios.get(`${BASE_URL}livros/obter/${livroId}`);
    }

    static createLivro(body){
        return axios.post(`${BASE_URL}livros/adicionar`,body);
    }

    static updateLivro(livroId,body){
        return axios.put(`${BASE_URL}livros/editar/${livroId}`,body);
    }

    static deleteLivro(livroId){
        return axios.delete(`${BASE_URL}livros/deletar/${livroId}`);
    }
    
}