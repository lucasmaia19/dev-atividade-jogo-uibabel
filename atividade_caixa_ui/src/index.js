import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from "./App";
import "./index.css";
import AtividadeJogo from './atividade-jogo/atividade-jogo';
import AtividadeMontar from './atividade-montar/atividade-montar';
import MenuBar from "./menu-bar/menu-bar";

import 'regenerator-runtime/runtime'

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Switch>
				<Route exact path="/appJs" component={App} />
				<Route exact path="/" component={AtividadeJogo} />
				<Route exact path="/atividade-montar" component={AtividadeMontar}/>
				<Route exact path="/atividade-montar/:id" component={AtividadeMontar}/>
				<Route exact path="/menuBar" component={MenuBar}/>
			</Switch>
		</BrowserRouter>,
	</React.StrictMode>,
  document.getElementById("root")
);
