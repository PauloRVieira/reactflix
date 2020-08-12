import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import useForm from '../../../hooks/useForm';

function CadastraVideo() {
  const history = useHistory();
  const { handleChange, values } = useForm({
    titulo: 'Tigas, o mito!',
    url: 'https://www.youtube.com/watch?v=75fK0iwhxdE',
    categoria: 'Front End',
  });

  return (
    <PageDefault>
      <h1>Cadastro de video</h1>

      <form onSubmit={(event) => {
        event.preventDefault();

        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: 1,
        })
          .then(() => {
            history.push('/');
          });
      }}
      >

        <FormField
          label="Título do video:"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL:"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria:"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>

      </form>

      <Link to="/cadastro/categoria">
        Cadastro de Categoria
      </Link>

    </PageDefault>
  );
}

export default CadastraVideo;
