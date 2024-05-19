# API desenvolvida para o Projeto Final do BootCamp da DB1.

## Regras da entrega

Uma empresa da região, a NetXoes, quer desenvolver uma vitrine virtual para ao seus produtos,
normalmente são tênis e materiais esportivos. O dono da empresa, Bill Jobs, quer te contratar
para desenvolver esta vitrine, que deverá conter:

1. Uma página inicial que mostre pelo menos 6 produtos randomicamente (Com foto,
   nome do produto, valor e um botão detalhes)
2. Uma página para cada produto, gerada dinamicamente
3. Esta página deverá mostrar uma imagem do produto, descrição e valor
4. Abaixo do valor deverá se demonstrado a quantidade máxima de parcelas, com juros de
   1.99% am. O valor mínimo de cada parcela é de R$ 10,00.
5. Um botão para que o usuário possa favoritar o produto que está vendo e uma página
   de favoritos onde ele poderá verificar os produtos favoritados.
6. Os dados que serão carregados na vitrine devem ser consumidos através de APIs.
   O projeto deve ser versionado com o GitHub. Além disso, em sua estrutura devem ser aplicados
   os conceitos de UX e Usabilidade, além do site ser responsivo. Lembrando que você deve
   também gerar e popular o banco de dados, com pelo menos 15 produtos diferentes. Se desejar,
   os produtos poderão ser separados por categorias.
   A apresentação do Projeto será no dia 03 de Junho, à partir das 19h15 pelo Google Meet
   (https://meet.google.com/dox-wotp-nad).

## Endpoints:

| Método | Endpoint      | Responsabilidade       | Autenticação                          |
| ------ | ------------- | ---------------------- | ------------------------------------- |
| GET    | /products     | Lista todos os produts | Qualquer usuário, não necessita token |
| GET    | /products/:id | Lista produto por ID   | Qualquer usuário, não necessita token |
