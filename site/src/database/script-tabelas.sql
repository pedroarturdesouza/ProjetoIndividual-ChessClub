-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!
/*
comandos para mysql - banco local - ambiente de desenvolvimento
*/

CREATE DATABASE ProjetoPedroIndividual;
USE ProjetoPedroIndividual;
drop table usuario;

drop table usuario; 

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

create table resultadoQuiz (
	idQuiz INT PRIMARY KEY AUTO_INCREMENT,
    resultado varchar (45),
    fkUsuario INT, constraint fkU foreign key (fkUsuario) references usuario(id)); 
    
    truncate table usuario;
    
    select * from usuario;
    select * from resultadoQuiz;
    
    select resultado, nome from resultadoQuiz join usuario on fkUsuario = id group by nome, resultado ORDER BY resultado desc;  
    
    
    
    select 
    
  
    
    insert into resultadoQuiz values (
    );
    
    insert into usuario (nome, email, senha) values (
    'Nathan', 'nathan@raul.com', '123');
    

select * from usuario;
