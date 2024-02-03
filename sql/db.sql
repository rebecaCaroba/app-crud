  /*DATABASE Contatos*/


  create table pessoas (
    id INT AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    telefone VARCHAR(15) NOT NULL,
    sexo ENUM('M', 'F') NOT NULL,
    primary key(id)
   ) default charset = utf8;