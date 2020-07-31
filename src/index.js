import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import CadastraVideo from './pages/cadastro/Video';
import Page404 from './pages/Page404';
import CadastroCategoria from './pages/cadastro/Categoria';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/cadastro/video" component={ CadastraVideo } />
      <Route path="/cadastro/categoria" component={ CadastroCategoria } />
      <Route path="/" component={ Home } exact />
      <Route component={ Page404 } />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
