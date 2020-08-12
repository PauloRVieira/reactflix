import { useState } from 'react';

function useForm(valoresIniciais) {
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

  function clearForms() {
    setValues([valoresIniciais]);
  }

  return {
    values,
    handleChange,
    clearForms,
  };
}

export default useForm;
