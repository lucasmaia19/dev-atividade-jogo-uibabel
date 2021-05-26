import React, { useRef } from 'react';
import axios from 'axios';

import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
 
import { useState } from 'react';

import './atividade-jogo.css';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { confirmDialog } from 'primereact/confirmdialog'
import { Toast } from 'primereact/toast';
import { ProgressBar } from 'primereact/progressbar';
import { ProgressSpinner } from 'primereact/progressspinner';

import PesquisarImagemService from '../pesquisar-imagem/pesquisar-imagem-service';
import MenuBar from '../menu-bar/menu-bar';

  const AtividadeJogo = () => {

	const history = useHistory();

	// export default function  AtividadeJogo() {

	const [displayBasic, setDisplayBasic] = useState(false);
	const [displayBasic2, setDisplayBasic2] = useState(false);
	const [displayBasic3, setDisplayBasic3] = useState(false);
	const [displayBasic4, setDisplayBasic4] = useState(false);

	const [position, setPosition] = useState('center');
	const [position2, setPosition2] = useState('center');
	const [position3, setPosition3] = useState('center');
	const [position4, setPosition4] = useState('center');

	const [nome, setNome] = useState("");
	const [nome2, setNome2] = useState("");
	const [nome3, setNome3] = useState("");
	const [nome4, setNome4] = useState("");

	const [products, setProducts] = useState([]);
	const [products2, setProducts2] = useState([]);
	const [products3, setProducts3] = useState([]);
	const [products4, setProducts4] = useState([]);

	const [atividadeAPI, setAtividadeAPI] = useState(null);

	const [respostaACorreta, setRespostaACorreta] = useState(false);
	const [respostaBCorreta, setRespostaBCorreta] = useState(false);
	const [respostaCCorreta, setRespostaCCorreta] = useState(false);

	const [requestProgress, setRequestProgress] = useState(false);
	const [progressSpinner, setProgressSpinner] = useState(false);

	const toast = useRef(null);

	useEffect(() => {
	setRequestProgress(true)
	axios.get('http://localhost:8001/atividade_caixa').then(response => {
		console.log('response', response.data);
		
		setAtividadeAPI(response.data)
		setRequestProgress(false)

	});
	}, []);

	const dataService = new PesquisarImagemService();

	const [atividade, setAtividade] = useState({
	perguntaTitulo: 'QUAL A PRIMEIRA LETRA?',
})

function onChange(evento) {
	const { name, value } = evento.target;
	
	setAtividade({ ...atividade, [name]: value })
	
}

function onSubmit(evento) {
		setProgressSpinner(true)
		evento.preventDefault();

		const formData = new FormData();

		const dados = atividade
		Object.keys(dados).forEach(k => {
			formData.append(k, dados[k]);
		})

		formData.append('respostaACorreta', respostaACorreta);
		formData.append('respostaBCorreta', respostaBCorreta);
		formData.append('respostaCCorreta', respostaCCorreta);

		// Display the key/value pairs
		for (var pair of formData.entries()) {
			console.log(pair[0] + ', ' + pair[1]);
		}

		axios.post('http://localhost:8001/atividade_caixa', formData).then(snapshot => {
			toast.current.show({severity:'success', summary: 'Cadastro Completo', life: 3000});
			console.log('Cadastrado com sucesso')
			setProgressSpinner(false)
		})
		.catch((error) => {
			toast.current.show({severity:'error', summary: 'Cadastro Falhou', life: 3000});
			setProgressSpinner(false)
		})
		
	}

	function deleteOneAtividade(id) {
	console.warn("deleteOneAtividade", id)

		axios.delete(`http://localhost:8001/atividade_caixa/${id}`).then(response => {
		toast.current.show({severity:'success', summary:' Deletado com Sucesso',
			detail:'Id: ' + id , life: 3000});
			console.log("Cadastro com o id", id, "excluido")
		});
	}

	const onClick = (name, position) => {
		dialogFuncMap[`${name}`](true);

		if (position) {
			setPosition(position);
		}
	}

	const onClick2 = (name2, position2) => {
		dialogFuncMap2[`${name2}`](true);

		if (position2) {
			setPosition2(position2);
		}
	}

	const onClick3 = (name3, position3) => {
		dialogFuncMap3[`${name3}`](true);

		if (position3) {
			setPosition3(position3);
		}
	}

	const onClick4 = (name4, position4) => {
		dialogFuncMap4[`${name4}`](true);

		if (position4) {
			setPosition4(position4);
		}
	}

	const dialogFuncMap = {
		'displayBasic': setDisplayBasic,

	}

	const dialogFuncMap2 = {
		'displayBasic2': setDisplayBasic2,
	}

	const dialogFuncMap3 = {
		'displayBasic3': setDisplayBasic3,

	}

	const dialogFuncMap4 = {
		'displayBasic4': setDisplayBasic4,

	}

	const onHide = (name) => {
		dialogFuncMap[`${name}`](false);
	}

	const onHide2 = (name2) => {
		dialogFuncMap2[`${name2}`](false);
	}

	const onHide3 = (name3) => {
		dialogFuncMap3[`${name3}`](false);
	}

	const onHide4 = (name4) => {
		dialogFuncMap4[`${name4}`](false);
	}

	const renderFooter = (name) => {
		return (
			<div>
				<Button label="No" icon="pi pi-times" onClick={() => onHide(name)} className="p-button-text" />
				<Button label="Yes" icon="pi pi-check" onClick={() => onHide(name)} autoFocus />
			</div>
		);
	}

	const renderFooter2 = (name2) => {
		return (
			<div>
				<Button label="No" icon="pi pi-times" onClick={() => onHide2(name2)} className="p-button-text" />
				<Button label="Yes" icon="pi pi-check" onClick={() => onHide2(name2)} autoFocus />
			</div>
		);
	}

	const renderFooter3 = (name3) => {
		return (
			<div>
				<Button label="No" icon="pi pi-times" onClick={() => onHide3(name3)} className="p-button-text" />
				<Button label="Yes" icon="pi pi-check" onClick={() => onHide3(name3)} autoFocus />
			</div>
		);
	}

	const renderFooter4 = (name4) => {
		return (
			<div>
				<Button label="No" icon="pi pi-times" onClick={() => onHide4(name4)} className="p-button-text" />
				<Button label="Yes" icon="pi pi-check" onClick={() => onHide4(name4)} autoFocus />
			</div>
		);
	}

	const onFormSubmit = (e) => {
		e.preventDefault()
		dataService.getData(nome).then(data => setProducts(data))
		// dataService.getData(nome).then(data => setAtividade(data))

	}

	const onFormSubmit2 = (e) => {
		e.preventDefault()
		dataService.getData2(nome2).then(data => setProducts2(data))
		// dataService.getData(nome).then(data => setAtividade(data))

	}

	const onFormSubmit3 = (e) => {
		e.preventDefault()
		dataService.getData3(nome3).then(data => setProducts3(data))

	}

	const onFormSubmit4 = (e) => {
		e.preventDefault()
		dataService.getData4(nome4).then(data => setProducts4(data))

	}

	const imageBodyTemplate = (rowData) => {
		return <img src={rowData.contentUrl} className="data-image" />
	}

	const imageBodyTemplate2 = (rowData2) => {
		return <img src={rowData2.contentUrl} className="data-image" />
	}

	const imageBodyTemplate3 = (rowData3) => {
		return <img src={rowData3.contentUrl} className="data-image" />
	}

	const imageBodyTemplate4 = (rowData4) => {
		return <img src={rowData4.contentUrl} className="data-image" />
	}

	const buttonSelecionarImage = (rowData) => {
		return <Button className="button-selecionar-imagem" label="Selecionar" onClick={ () => selecionarImagem(rowData.contentUrl)}/>

	}

	const buttonSelecionarImage2 = (rowData2) => {
		return <Button className="button-selecionar-imagem" label="Selecionar" onClick={ () => selecionarRespostaAUrl(rowData2.contentUrl)}/>

	}

	const buttonSelecionarImage3 = (rowData3) => {
		return <Button className="button-selecionar-imagem" label="Selecionar" onClick={ () => selecionarRespostaBUrl(rowData3.contentUrl)}/>

	}

	const buttonSelecionarImage4 = (rowData4) => {
		return <Button className="button-selecionar-imagem" label="Selecionar" onClick={ () => selecionarRespostaCUrl(rowData4.contentUrl)}/>

	}

	const buttonSelecionarAtividade = (atividadeAPI) => {

		const confirm = () => {
			confirmDialog({
				message: 'Tem Certeza quer Excluir?',
				header: 'Atenção',
				icon: 'pi pi-exclamation-triangle',
				accept: () => deleteOneAtividade(atividadeAPI.id),
				// reject: () => rejectFunc()
			});
		}

		return (
			<div>
				<Button className="button-excluir" icon="pi pi-trash" onClick={confirm}/>
				<Button className="button-editar" icon="pi pi-file" onClick={ () => getOneAtividade(atividadeAPI.id)}/>
			</div>
			)
	}


	function getOneAtividade(id) {
		history.push(`/atividade-montar/${id}`)
		console.log("id", id)

	}

	function selecionarImagem(rowData, evento) {

		const perguntaUrl = rowData;

		console.log("perguntaUrl", perguntaUrl)

		setAtividade({ ...atividade, perguntaUrl})
	}

	function selecionarRespostaAUrl(rowData, evento) {

		const respostaAUrl = rowData;

		console.log("respostaAUrl", respostaAUrl)

		setAtividade({ ...atividade, respostaAUrl})
	}

	function selecionarRespostaBUrl(rowData, evento) {

		const respostaBUrl = rowData;

		console.log("respostaBUrl", respostaBUrl)

		setAtividade({ ...atividade, respostaBUrl})
	}

	function selecionarRespostaCUrl(rowData, evento) {

		const respostaCUrl = rowData;

		console.log("respostaCUrl", respostaCUrl)

		setAtividade({ ...atividade, respostaCUrl})
	}

	function clickRadioButtonA(e) {
		console.warn('clickRadioButton()')
		setRespostaACorreta(true);
		setRespostaBCorreta(false);
		setRespostaCCorreta(false);
	}

	function clickRadioButtonB(e) {
		console.warn('clickRadioButton()')
		setRespostaACorreta(false);
		setRespostaBCorreta(true);
		setRespostaCCorreta(false);
	}

	function clickRadioButtonC(e) {
		console.warn('clickRadioButton()')
		setRespostaACorreta(false);
		setRespostaBCorreta(false);
		setRespostaCCorreta(true);
	}

	return (	
		<div>
			<MenuBar/>
			<div className="p-grid">

				<If condition= { requestProgress }>
					<ProgressBar mode="indeterminate" className="progressBar"/>
				</If>

				<If condition = { !requestProgress }>
					<div>
						<Toast ref={toast} />

						<div className="">
							<div className="p-field p-col-12 p-sm-12 p-md-6">
								<h5>Titulo da Atividade</h5>
								<div className="p-fluid p-formgrid p-grid">
									<div className="p-field p-col-12 p-sm-12 p-md-6">
										<InputText className="input-titulo" id="firstname2" type="text" name="perguntaTitulo"
											value={atividade.perguntaTitulo} onChange={onChange}/>
									</div>
								</div>
							</div>

							<div className="h-titulos">
								<h5>Pergunta</h5>
							</div>
							<div className="p-fluid p-formgrid p-grid">
								<div className="p-field p-col-12 p-sm-12 p-md-6">
									<Button className="button-pergunta" label="Imagem" icon="pi pi-external-link"
									onClick={() => onClick('displayBasic')} />
								</div>
								<div className="p-field p-col-12 p-sm-12 p-md-6">
									<InputText className="input-pergunta" type="text" rows="4" 
									name="perguntaTxt" value={atividade.perguntaTxt} onChange={onChange}>
									</InputText>
								</div>
							</div>

							<Dialog header="Procurar Imagens" visible={displayBasic} style={{ width: '90vw' }}
								footer={renderFooter('displayBasic')}
								onHide={() => onHide('displayBasic')}>
								<InputText value={nome} onChange={(e) => setNome(e.target.value)} />
								<Button onClick={onFormSubmit} icon="pi pi-check" className="p-ml-2"/>
								<div className="card">
									<DataTable value={products.value}>
										{/* <Column header="URL" field="contentUrl"></Column> */}
										<Column header="Image" body={imageBodyTemplate}></Column>
										<Column header="Selecionar" body={buttonSelecionarImage}></Column>
									</DataTable>
								</div>
							</Dialog>

							<div className="h-titulo-respostas">
								<h5>Respostas</h5>
							</div>
							<div className="p-fluid p-formgrid p-grid">
								<If condition = { respostaACorreta }>
									<div className="p-field p-col-2 p-sm-3 p-md-1">
									<Button icon="pi pi-check" className="" 
										style={{width: '100%', height: '100%'}}  name="respostaCorreta"
										onClick={() => {clickRadioButtonA()}}/>
									</div>
								</If>

								<If condition= { !respostaACorreta }>
									<div className="p-field p-col-2 p-sm-3 p-md-1">
									<Button icon="pi pi-times" className=""
										style={{width: '100%', height: '100%'}} name="respostaCorreta"
										onClick={() => {clickRadioButtonA()}}/>
									</div>
								</If>

								<div className="p-field p-col-1 p-sm-1 p-md-1">
								<Button className="" style={{width: '100%', height: '100%'}} 
									label="A" onClick={() => onClick2('displayBasic2')} />
								</div>
								<div className="p-field p-col-8 p-sm-8 p-md-4">
								<InputText className="input-resposta" type="text" name="respostaATxt"
									value={atividade.respostaATxt} onChange={onChange}/>
								</div>
							</div>

							<Dialog header="Procurar Imagens" visible={displayBasic2} style={{ width: '90vw' }}
								footer={renderFooter2('displayBasic2')}
								onHide={() => onHide2('displayBasic2')}>
								<InputText value={nome2} onChange={(e) => setNome2(e.target.value)} />
								<Button onClick={onFormSubmit2} icon="pi pi-check" className="p-ml-2"/>
								<div className="card">
									<DataTable value={products2.value}>
										{/* <Column header="URL" field="contentUrl"></Column> */}
										<Column header="Image" body={imageBodyTemplate2}></Column>
										<Column header="Selecionar" body={buttonSelecionarImage2}></Column>
									</DataTable>
								</div>  
							</Dialog>

							<div className="p-fluid p-formgrid p-grid">
									<If condition = { respostaBCorreta }>
										<div className="p-field p-col-2 p-sm-3 p-md-1">
											<Button icon="pi pi-check" className="" 
												style={{width: '100%', height: '100%'}}  name="respostaCorreta"
												onClick={() => {clickRadioButtonB()}}/>
										</div>
									</If>

									<If condition= { !respostaBCorreta }>
										<div className="p-field p-col-2 p-sm-3 p-md-1">
											<Button icon="pi pi-times" className=""
												style={{width: '100%', height: '100%'}} name="respostaCorreta"
												onClick={() => {clickRadioButtonB()}}/>
										</div>
									</If>

									<div className="p-field p-col-1 p-sm-1 p-md-1">
									<Button className="" style={{width: '100%', height: '100%'}} 
										label="B" onClick={() => onClick3('displayBasic3')} />
									</div>
									<div className="p-field p-col-8 p-sm-8 p-md-4">
									<InputText className="input-resposta" type="text" name="respostaBTxt"
										value={atividade.respostaBTxt} onChange={onChange}/>
									</div>
								</div>

							<Dialog header="Procurar Imagens" visible={displayBasic3} style={{ width: '90vw' }}
								footer={renderFooter3('displayBasic3')}
								onHide={() => onHide3('displayBasic3')}>
								<InputText value={nome3} onChange={(e) => setNome3(e.target.value)} />
								<Button onClick={onFormSubmit3} icon="pi pi-check" className="p-ml-2"/>
								<div className="card">
									<DataTable value={products3.value}>
										{/* <Column header="URL" field="contentUrl"></Column> */}
										<Column header="Image" body={imageBodyTemplate3}></Column>
										<Column header="Selecionar" body={buttonSelecionarImage3}></Column>
									</DataTable>
								</div>  
							</Dialog>

							<div className="p-fluid p-formgrid p-grid">
								<If condition = { respostaCCorreta }>
									<div className="p-field p-col-2 p-sm-3 p-md-1">
										<Button icon="pi pi-check" className="" 
											style={{width: '100%', height: '100%'}}  name="respostaCorreta"
											onClick={() => {clickRadioButtonC()}}/>
									</div>
								</If>

								<If condition= { !respostaCCorreta }>
									<div className="p-field p-col-2 p-sm-3 p-md-1">
										<Button icon="pi pi-times" className=""
											style={{width: '100%', height: '100%'}} name="respostaCorreta"
											onClick={() => {clickRadioButtonC()}}/>
									</div>
								</If>

								<div className="p-field p-col-1 p-sm-1 p-md-1">
									<Button className="" style={{width: '100%', height: '100%'}} 
										label="C" onClick={() => onClick4('displayBasic4')} />
								</div>
								<div className="p-field p-col-8 p-sm-8 p-md-4">
									<InputText className="input-resposta" type="text" name="respostaCTxt"
										value={atividade.respostaCTxt} onChange={onChange}/>
								</div>
							</div>

							<Dialog header="Procurar Imagens" visible={displayBasic4} style={{ width: '90vw' }} 
								footer={renderFooter4('displayBasic4')}
								onHide={() => onHide4('displayBasic4')}>
								<InputText value={nome4} onChange={(e) => setNome4(e.target.value)} />
								<Button onClick={onFormSubmit4} icon="pi pi-check" className="p-ml-2"/>
								<div className="card">
									<DataTable value={products4.value}>
										{/* <Column header="URL" field="contentUrl"></Column> */}
										<Column header="Image" body={imageBodyTemplate4}></Column>
										<Column header="Selecionar" body={buttonSelecionarImage4}></Column>
									</DataTable>
								</div>  
							</Dialog>

							<form onSubmit={onSubmit}> 
								<div className="p-fluid">
									<div className="p-field p-col-12 p-sm-12 p-md-6">
										<Button className="button-salvar" type="submit" label="Salvar" onSubmit={onSubmit}/>
									</div>
								</div>
							</form>

							<If condition={ progressSpinner }>
								<ProgressSpinner style={{width: '50px', height: '50px'}} strokeWidth="8" fill="#EEEEEE" 
									animationDuration=".5s"/>
							</If>

						</div>

						<div className="data">
							<DataTable value={atividadeAPI}>
								<Column field="perguntaTxt" header="Titulo"></Column>
								<Column  field="name" header="#" body={buttonSelecionarAtividade}>
								{/* <Column field="name" header="#" icon="pi pi-trash" onClick={buttonSelecionarAtividade}> */}
								</Column>
							</DataTable>
						</div>
					</div>
				</If>
			</div>
		</div>
	);
}

export default (AtividadeJogo);