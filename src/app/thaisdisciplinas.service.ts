import { Injectable } from '@angular/core';

interface Disciplinas {
  codigo: string;
  nome: string;
  horario: string;
  dia: string;
}

@Injectable()
export class ThaisdisciplinasService {
  disciplinas: Array<Disciplinas> = [];

  constructor() {
    this.adicionarDisciplina(
      '000',
      'Projeto de Encontrabilidade',
      '19:00',
      'Segunda-feira'
    );
    this.adicionarDisciplina(
      '0000',
      'Criação de Empresas para Internet',
      '19:00',
      'Terça-feira'
    );
    this.adicionarDisciplina('000', 'Inglês VI', '20:50', 'Terça-feira');
    this.adicionarDisciplina(
      '000',
      'Arquitetura Orientada a Serviços',
      '20:50',
      'Quarta-feira'
    );
    this.adicionarDisciplina(
      '000','Tópicos Especiais em Sistemas para Internet II',
      '20:50',
      'Quinta-feira'
    );
    this.adicionarDisciplina(
      '000',
      'Desenvolvimento para Servidores II',
      '19:00',
      'Quinta-feira'
    );
    this.adicionarDisciplina(
      '0000',
      'Tópicos Especiais em Sistemas para Internet III',
      '19:00',
      'Sexta-feira'
    );
    this.adicionarDisciplina(
      '0000',
      'Criação de Empresas para Internet',
      '19:00',
      'Sexta-feira'
    );
    this.adicionarDisciplina(
      '000',
      'Desenvolvimento para Dispositivos Móveis II',
      '12:30',
      'Sábado'
    );
  }

  adicionarDisciplina(codigo: string, nome: string, horario: string, dia: string) {
    if (codigo != '' && nome != '' && horario != '' && dia != '') {
      this.disciplinas.push({
        codigo,
        nome,
        horario,
        dia,
      });
    }
  }

  getDisciplinas() {
    return this.disciplinas;
  }

  removerDisciplina(index: number) {
    this.disciplinas.splice(index, 1);
  }
}