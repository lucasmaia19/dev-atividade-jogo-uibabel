package com.example.atividade_caixa.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.atividade_caixa.model.AtividadeCaixa;

@Repository
public interface AtividadeCaixaRepository extends JpaRepository<AtividadeCaixa, Long>{

}
