package com.example.atividade_caixa.controller;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.atividade_caixa.model.AtividadeCaixa;
import com.example.atividade_caixa.modelDTO.AtividadeCaixaDTO;
import com.example.atividade_caixa.repository.AtividadeCaixaRepository;
import com.example.atividade_caixa.service.AtividadeCaixaService;


@CrossOrigin(origins = "http://localhost:8080")
@RestController
@RequestMapping("atividade_caixa")
//@Slf4j
public class AtividadeCaixaController {

	@Autowired
	private AtividadeCaixaRepository atividadeCaixaRepository;

	@Autowired
	private AtividadeCaixaService atividadeCaixaService;

	@GetMapping
	public List<AtividadeCaixa> listarAtividadeCaixa() {
		return atividadeCaixaRepository.findAll();
	}

	@GetMapping("/{id}")
	public Optional<AtividadeCaixa> listarUmaAtividadeCaixa(@PathVariable Long id) {
		return atividadeCaixaRepository.findById(id);
	}

	@PostMapping
	public ResponseEntity<AtividadeCaixa> cadastrarAtividade(@ModelAttribute("atividadeDTO") AtividadeCaixaDTO atividadeDTO) throws IOException {
		return ResponseEntity.ok(atividadeCaixaService.cadastrarAtividade(atividadeDTO));
	}
	
	@DeleteMapping("/{id}")
	public Map<String, Object> deletarCadastro(@PathVariable Long id) {
		atividadeCaixaRepository.deleteById(id);

		Map<String, Object> responseMap = new HashMap<>();
		return responseMap;
	}

}
