-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!
/*
comandos para mysql - banco local - ambiente de desenvolvimento
*/

CREATE DATABASE ProjetoPedroIndividual;
USE ProjetoPedroIndividual;
drop table usuario;



CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
    fkQuiz INT, constraint fkQ foreign key (fkQuiz) references resultadoQuiz (idQuiz) 
);

create table resultadoQuiz (
	idQuiz INT PRIMARY KEY AUTO_INCREMENT,
    resultado varchar (45)); 
    
    select * from usuario;
    select * from resultadoQuiz;
    
    insert into resultadoQuiz values (
    );
    
    insert into usuario (nome, email, senha) values (
    'Nathan', 'nathan@raul.com', '123');
    

select * from usuario;
