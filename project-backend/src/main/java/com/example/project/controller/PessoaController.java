package com.example.project.controller;

import com.example.project.dto.PessoaDTO;
import com.example.project.entity.Pessoa;
import com.example.project.service.PessoaService;
import jakarta.validation.constraints.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/pessoa")
public class PessoaController {

    private PessoaService pessoaService;

    @Autowired
    public PessoaController(PessoaService pessoaService){
        this.pessoaService = pessoaService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<PessoaDTO> findById(@PathVariable Long id){
        return pessoaService.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping
    public ResponseEntity<List<PessoaDTO>> findAll(){
        List<PessoaDTO> pessoaDTOS = pessoaService.findAll();
        return ResponseEntity.ok(pessoaDTOS)
    }

    @PostMapping
    public ResponseEntity<String> cadastrar(@RequestBody Pessoa pessoa){
        try{
            pessoaService.cadastrar(pessoa);
            return ResponseEntity.ok().body("Regristro cadastrado com sucesso!");
        }catch (IllegalArgumentException e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
    @PutMapping("/{id}")
    public ResponseEntity<String> atualizar(@PathVariable @NotNull Long id, @RequestBody Pessoa pessoa){
        try{
            pessoaService.atualizar(id, pessoa);
            return ResponseEntity.ok().body("Registro cadastrado com sucesso!");
        } catch (IllegalArgumentException e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
