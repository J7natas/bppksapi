import {useEffect , useState} from 'react'
import Header from '../../components/Header/Header'
import "./index.scss"
import SubmenuLivros from '../../components/SubmenuLivros/SubmenuLivros'
import { useParams } from 'react-router-dom'
import { LivrosService } from '../../api/LivrosService'

const LivrosEdicao = () => {  
  let { livroId } = useParams();

  const [livro, setLivro] = useState([])

  async function getLivro(){
    const { data } = await LivrosService.getLivro(livroId);
    setLivro(data.resposta)
  }

  async function editLivro(){
    const body = {
        id:livro._id,
        titulo:livro.titulo,
        num_paginas: Number(livro.numero_paginas),
        isbn: Number(livro.ISBN),
        editora: livro.editora
      }

    if(livro._id!=undefined && livro._id!='' && livro.titulo!=undefined && livro.titulo!='' && livro.numero_paginas!=undefined && livro.numero_paginas!='' && livro.ISBN !=undefined && livro.ISBN !='' && livro.editora !=undefined && livro.editora !=''){
      await LivrosService.updateLivro(livroId,body)
      .then(({data})=>{
        alert(data.statusMensaagem)
      })
      .catch(({response:{data,status}})=>{
        alert(`${status} - ${data}`)      
      });
    } 
    
    console.log("Clicado")

  }

  useEffect(() => {
    getLivro()    
  },[])  
  
  return (
  <>
    <Header/>    
    <SubmenuLivros/>
    <div className='livrosCadastro'>
        <h1>Edição de Livros</h1>
        <div>
            <div className='form-group'>
              <label>Id</label>
              <input type="text" disabled required onChange={(event)=>{ setLivro({...livro, id: event.target.value})}} value={livro._id || ''}></input>
            </div>
            <div className='form-group'>
              <label>Titulo</label>
              <input type="text" required onChange={(event)=>{ setLivro({...livro, titulo: event.target.value})}} value={livro.titulo || ''} ></input>
            </div>
            <div className='form-group'>
              <label>Número de Páginas</label>
              <input type="text"  required onChange={(event)=>{ setLivro({...livro, numero_paginas: event.target.value})}} value={livro.numero_paginas || ''}></input>
            </div>
            <div className='form-group'>
              <label>ISBN</label>
              <input type="text"  required onChange={(event)=>{ setLivro({...livro, ISBN: event.target.value})}} value={livro.ISBN || ''}></input>
            </div>
            <div className='form-group'>
              <label>Editora</label>
              <input type="text"  required onChange={(event)=>{ setLivro({...livro, editora: event.target.value})}} value={livro.editora || ''}></input>
            </div> 
            <div className='form-group'>
              <button onClick={() => editLivro()}>Atualizar Livro</button>  
            </div>                   
          </div>        
    </div>
  </>)
  
}

export default LivrosEdicao