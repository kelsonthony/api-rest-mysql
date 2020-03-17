# api-rest-mysql
api-rest-mysql


# Create a Database 

# CREATE DATABASE qualisdb;

# CREATE USER 'qualis_user'@'192.168.150.128' IDENTIFIED BY 'qualis123';

# GRANT ALL PRIVILEGES ON *.* TO 'qualis_user'@'192.168.150.128' WITH GRANT OPTION;

# FLUSH PRIVILEGES;

# mysql> CREATE TABLE qualis(
#    -> id_qualis int not null primary key auto_increment,
#    -> issn varchar(100),
#    -> titulo text,
#    -> area_avaliacao text,
#    -> estrato text);
# Query OK, 0 rows affected (0.06 sec)


insert into qualis(issn, titulo, area_avaliacao, estrato)values('1981-030X', '19&20 (RIO DE JANEIRO)', 'ADMINISTRAÇÃO PÚBLICA E DE EMPRESAS, CIÊNCIAS CONTÁBEIS E TURISMO', 'C');


insert into qualis(issn, titulo, area_avaliacao, estrato)values('2236-6695', 'A BARRIGUDA: REVISTA CIENTÍFICA', 'ADMINISTRAÇÃO PÚBLICA E DE EMPRESAS, CIÊNCIAS CONTÁBEIS E TURISMO', 'B4');

insert into qualis(issn, titulo, area_avaliacao, estrato)values('1413-6090', 'A ECONOMIA EM REVISTA', 'ADMINISTRAÇÃO PÚBLICA E DE EMPRESAS, CIÊNCIAS CONTÁBEIS E TURISMO', 'B4');

insert into qualis(issn, titulo, area_avaliacao, estrato)values('1516-3210', 'A&C. REVISTA DE DIREITO ADMINISTRATIVO & CONSTITUCIONAL (IMPRESSO)', 'ADMINISTRAÇÃO PÚBLICA E DE EMPRESAS, CIÊNCIAS CONTÁBEIS E TURISMO', 'B4');

insert into qualis(issn, titulo, area_avaliacao, estrato)values('0001-3072', 'ABACUS (SYDNEY. PRINT)', 'ADMINISTRAÇÃO PÚBLICA E DE EMPRESAS, CIÊNCIAS CONTÁBEIS E TURISMO', 'A2');