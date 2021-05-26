package com.example.atividade_caixa.service;

import java.io.BufferedInputStream;
import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.atividade_caixa.model.AtividadeCaixa;
import com.example.atividade_caixa.model.AtividadeCaixaResposta;
import com.example.atividade_caixa.modelDTO.AtividadeCaixaDTO;
import com.example.atividade_caixa.repository.AtividadeCaixaRepository;

@Service
public class AtividadeCaixaService {

	@Autowired
	private AtividadeCaixaRepository atividadeCaixaRepository;

	public AtividadeCaixa cadastrarAtividade(AtividadeCaixaDTO atividadeDTO) throws IOException {

		AtividadeCaixa atividade = new AtividadeCaixa();
		atividade.setPerguntaTitulo(atividadeDTO.getPerguntaTitulo());
		atividade.setPerguntaTxt(atividadeDTO.getPerguntaTxt());
		atividade.setPerguntaUrl(atividadeDTO.getPerguntaUrl());
		atividade.setPerguntaUrl(atividadeDTO.getPerguntaUrl());
		atividade.setPerguntaImg(parseUrlToByte(atividade.getPerguntaUrl()));

		AtividadeCaixaResposta atividadeCaixaRespostaA = new AtividadeCaixaResposta(); 
		atividadeCaixaRespostaA.setRespostaTxt(atividadeDTO.getRespostaATxt());
		atividadeCaixaRespostaA.setRespostaUrl(atividadeDTO.getRespostaAUrl());
		atividadeCaixaRespostaA.setRespostaImg(parseUrlToByte(atividadeDTO.getRespostaAUrl()));
		atividadeCaixaRespostaA.setRespostaCorreta(atividadeDTO.getRespostaACorreta());
		atividade.setAtividadeCaixaRespostaA(atividadeCaixaRespostaA);

		AtividadeCaixaResposta atividadeCaixaRespostaB = new AtividadeCaixaResposta(); 
		atividadeCaixaRespostaB.setRespostaTxt(atividadeDTO.getRespostaBTxt());
		atividadeCaixaRespostaB.setRespostaUrl(atividadeDTO.getRespostaBUrl());
		atividadeCaixaRespostaB.setRespostaImg(parseUrlToByte(atividadeDTO.getRespostaBUrl()));
		atividadeCaixaRespostaB.setRespostaCorreta(atividadeDTO.getRespostaBCorreta());
		atividade.setAtividadeCaixaRespostaB(atividadeCaixaRespostaB);
		
		AtividadeCaixaResposta atividadeCaixaRespostaC = new AtividadeCaixaResposta(); 
		atividadeCaixaRespostaC.setRespostaTxt(atividadeDTO.getRespostaCTxt());
		atividadeCaixaRespostaC.setRespostaUrl(atividadeDTO.getRespostaCUrl());
		atividadeCaixaRespostaC.setRespostaImg(parseUrlToByte(atividadeDTO.getRespostaCUrl()));
		atividadeCaixaRespostaC.setRespostaCorreta(atividadeDTO.getRespostaCCorreta());
		atividade.setAtividadeCaixaRespostaC(atividadeCaixaRespostaC);

		return atividadeCaixaRepository.save(atividade);

	}
	
	private byte[] parseUrlToByte(String url) throws MalformedURLException, IOException {

		BufferedInputStream bis = new BufferedInputStream(new URL(url).openStream());
		return bis.readAllBytes();
	}

}
