###################
Projeto Dodge Showroom
###################

Analisado a proposta feita, resolvi desenvolver um projeto de Showroom da Dodge. Uma espécie de mostruário de carros onde o "admin" cadastrará os carros aos quais serão exibidos no showroom.

*******************
Funcionalidades
*******************

Como me foi pedido um CRUD, o "admin" terá de cadastrar os carros, mas para isso, precisará cadastrar primeiro as categorias dos carros e possíveis cores. Após isso, basta cadastrar um carro e voltar a pagina inicial, e o showroom estará atualizado

**************************
Flow de Teste
**************************

Chega de palavras e vamos à ação. 
-  Na tela inicial haverá um carro cadastrado, experimente passar o mouse sobre ele.
-  Legal né? Agora apagaremos este carro e adicionaremos outro. No canto superior direito à um icone de engrenagem que te levará para a página do "admin".
-  Nesta página, começaremos navegando pelas possíveis páginas, logo acima da tabela, no canto direito da navbar, há botões que levam às outras abas de configuração, as cores e as categorias, haverá uma em cada uma.
-  Excluiremos todo o conteúdo existente, no final de cada linha da tabela, há um icone de lixeira, após o clique, será exibida uma mensagem de confirmação, confirme e faça isso nas três tabelas existentes.
-  Agora se voltarmos a home, uma mensagem será exibida indicando que não há carros a serem exibidos.
-  Agora cadastraremos outro carro, entre na pagina de admin novamente, e o botão de "+ New Car" te levará ao formulário de inserção.
-  Mas espera, há avisos dizendo que temos primeiro que cadastrar cores e categorias, volte e acesse a página de cores, experimente adicionar uma cor, "Preto" por exemplo.
-  Faça o mesmo com uma categoria, "SUV", por exemplo.
-  Note que não é possível adicionar a mesma categoria ou cor mais de uma vez.
-  Agora estamos prontos para adicionar um carro à lista, certifique-se de ter uma imagem do carro com dimensões maiores ou iguais a 1024x768.
-  Acesse a página de inserção, e preencha completamente o formulário, incluindo a imagem do carro no botão "Upload Car Photo".
-  Caso não seja preenchido completamente, as mensagens de erro indicarão quais os campos que faltam ou não foram preenchidos corretamente.
-  Após o envio, se correu tudo bem, você poderá visualizar o carro cadastrado no showroom.
-  Experimente cadastrar mais carros. A visualização do showroom é responsiva, a pagina de "admin" é destinada à web somente.

**************************
Considerações finais
**************************

Por não conhecer o framework, surgiram muitas duvidas sobre a boa prática e sobre estruturação de código, mas fiz o meu melhor e espero ter atendido as expectativas, é isso ai...

###################
Até mais
###################
