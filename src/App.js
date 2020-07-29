import React from 'react';
import Menu from './components/Menu'
import DadosIniciais from './data/dados_iniciais.json';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';

function App() {
  return (
    <div>
      <Menu />

      <BannerMain
        videoTitle={DadosIniciais.categorias[0].videos[0].titulo}
        url={DadosIniciais.categorias[0].videos[0].url}
        videoDescription={DadosIniciais.categorias[0].videos[0].videoDescription}
      />

      <Carousel
        ignoreFirstVideo
        category={DadosIniciais.categorias[0]}
      />

      <Carousel
        ignoreFirstVideo
        category={DadosIniciais.categorias[1]}
      />

      <Carousel
        ignoreFirstVideo
        category={DadosIniciais.categorias[2]}
      />

      <Carousel
        ignoreFirstVideo
        category={DadosIniciais.categorias[3]}
      />


    </div>
  );
}

export default App;
