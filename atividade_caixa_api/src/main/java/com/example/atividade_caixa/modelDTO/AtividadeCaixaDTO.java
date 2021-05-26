package com.example.atividade_caixa.modelDTO;

import java.io.Serializable;

import javax.persistence.Lob;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AtividadeCaixaDTO implements Serializable {

	private static final long serialVersionUID = 1L;


	// Pergunta

	private String perguntaTitulo;


	private String perguntaTxt;

	private String perguntaUrl;

	@Lob
	private byte[] perguntaImg;


	// RepostaA

	private String respostaATxt;

	private String respostaAUrl;

	private String respostaAImg;

	private Boolean respostaACorreta;


	// RepostaB

	private String respostaBTxt;

	private String respostaBUrl;

	private String respostaBImg;

	private Boolean respostaBCorreta;
	
	// RepostaC

	private String respostaCTxt;
	
	private String respostaCUrl;
	
	private String respostaCImg;
	
	private Boolean respostaCCorreta;

}
