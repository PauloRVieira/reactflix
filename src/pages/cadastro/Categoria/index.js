import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria() {

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  }

  const [categorias, setCategorias] = useState([]);

  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    //chave é dinâmico, pode ser nome, descricao, cor, bla, bli
    setValues({
      ...values,
      [chave]: valor, //[chave] "traduz" para nome: '<valor>' ou descricao: '<valor>' ou bla: '<valor>'
    })
  }
  
  function handleChange(info) {
    const { value } = info.target;
    const { getAttribute } = info.target;

    setValue(
      info.target.getAttribute('name'), value
    );
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={ (info) => {
        info.preventDefault();
        setCategorias([
          ...categorias,
          values
        ]);

        setValues([valoresIniciais]);
      }}>

      <FormField
        input="text"
        label="Nome da Categoria:"
        type="text"
        name="nome"
        value={values.nome}
        onChange={handleChange}
      />

      <FormField
        input="textarea"
        label="Descrição:"
        type="textarea"
        value={values.descricao}
        name="descricao"
        onChange={handleChange}
      />
      
      <FormField
        input="text"
        label="Cor:"
        type="color"
        value={values.cor}
        name="cor"
        onChange={handleChange}
      />
      
      <div>

        <button>
          Cadastrar
        </button>

      </div>

      </form>

      <ul>
        {categorias.map( (categoria, index) => {
          return (
            <li key={`${categoria}${index}`}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>

      <Link to="/" >
        Ir para a Home
      </Link>
    </PageDefault>
  );

}
  
export default CadastroCategoria;