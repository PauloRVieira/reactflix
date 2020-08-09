import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [categorias, setCategorias] = useState([]);

  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    // chave é dinâmico, pode ser nome, descricao, cor, bla, bli
    setValues({
      ...values,
      [chave]: valor, // [chave] "traduz" em nome: '<valor>' / descricao: '<valor>' / bla: '<valor>'
    });
  }

  function handleChange(info) {
    setValue(
      info.target.getAttribute('name'), info.target.value,
    );
  }

  useEffect(
    () => {
      const URL_TOP = window.location.hostname.includes('localhost') ? 'http://localhost:8080/categorias' : 'https://paulovieiraflix.herokuapp.com/categorias';
      fetch(URL_TOP)
        .then(async (respostadoServidor) => {
          const resposta = await respostadoServidor.json();
          setCategorias([
            ...resposta,
          ]);
        });
    },
  );

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form onSubmit={(info) => {
        info.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);

        setValues([valoresIniciais]);
      }}
      >

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

          <Button>
            Cadastrar
          </Button>

        </div>

      </form>

      {categorias.length === 0 && (
      <div>
        Loading..
      </div>
      )}

      <ul>
        {categorias.map((categoria, index) => (
          <li key={`${categoria}${index}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para a Home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
