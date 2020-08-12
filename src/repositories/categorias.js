import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND_TOP}/categorias`;

function fetchServer(url) {
  return fetch(url)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }

      throw new Error('Não foi possível recuperar os dados :(');
    });
}

function getAll() {
  return fetchServer(`${URL_CATEGORIES}`);
}

function getAllWithVideos() {
  return fetchServer(`${URL_CATEGORIES}?_embed=videos`);
}

export default {
  getAllWithVideos,
  getAll,
};
