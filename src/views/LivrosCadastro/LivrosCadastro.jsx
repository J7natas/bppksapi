import {useState} from 'react'
import Header from '../../components/Header/Header'
import "./index.scss"
import SubmenuLivros from '../../components/SubmenuLivros/SubmenuLivros'
import { LivrosService } from '../../api/LivrosService'

const LivrosCadastro = () => {
  
  const [livro, setLivro] = useState([])

  async function createLivro(){
    const body = {
        id:livro._id,
        titulo:livro.titulo,
        num_paginas: Number(livro.numero_paginas),
        isbn: livro.ISBN,
        editora: livro.editora
      }

      await LivrosService.createLivro(body)
      .then((response)=>{
        alert(response.data.statusMensaagem)
        document.getElementById('formulario')
      })
      .catch(({response:{data,status}})=>{
        alert(`${status} - ${data}`)      
      });
      console.log("Clicado")
    }

  return (
  <div>
    <Header/>    
    <SubmenuLivros/>
    <div className='livrosCadastro'>
        <h1>Cadastro de Livros</h1>
        <div>          
          <div id="formulario">
              <div className='form-group'>
                <label>Id</label>
                <input type="text" id='id' required onChange={(event)=>{ setLivro({...livro, id: event.target.value})}} ></input>
              </div>
              <div className='form-group'>
                <label>Titulo</label>
                <input type="text" id='titulo' required onChange={(event)=>{ setLivro({...livro, titulo: event.target.value})}}></input>
              </div>
              <div className='form-group'>
                <label>Número de Páginas</label>
                <input type="text" id='num' required onChange={(event)=>{ setLivro({...livro, num_paginas: event.target.value})}}></input>
              </div>
              <div className='form-group'>
                <label>ISBN</label>
                <input type="text" id='isbn' required onChange={(event)=>{ setLivro({...livro, isbn: event.target.value})}}></input>
              </div>
              <div className='form-group'>
                <label>Editora</label>
                <input type="text" id='editora' required onChange={(event)=>{ setLivro({...livro, editora: event.target.value})}}></input>
              </div> 
              <div className='form-group'>
                <button onClick={()=> createLivro() }>Cadastrar Livro</button>  
              </div>         
            </div>
        </div>
    </div>
  </div>)
  
}

export default LivrosCadastro