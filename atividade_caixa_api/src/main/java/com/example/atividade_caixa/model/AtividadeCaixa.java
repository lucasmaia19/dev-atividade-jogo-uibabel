package com.example.atividade_caixa.model;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class AtividadeCaixa implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;


	private String perguntaTitulo;

	private String perguntaTxt;

	private String perguntaUrl;

	@Lob
	private byte[] perguntaImg;

	@ManyToOne(cascade = CascadeType.ALL)
//	@JoinColumn(name="estado_id")
	private AtividadeCaixaResposta atividadeCaixaRespostaA;

	@ManyToOne(cascade = CascadeType.ALL)
//	@JoinColumn(name="estado_id")
	private AtividadeCaixaResposta atividadeCaixaRespostaB;

	@ManyToOne(cascade = CascadeType.ALL)
//	@JoinColumn(name="estado_id")
	private AtividadeCaixaResposta atividadeCaixaRespostaC;

}
