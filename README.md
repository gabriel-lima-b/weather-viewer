# WeatherViewer
Este projeto é um hub onde se pode ver as temperaturas atuais de cidades onde moram as pessoas integrantes do time do StartDB - 2021/22 e ele também mostra a temperatura de qualquer cidade no mundo.

Todos os dias nós falamos sobre como a temperatura está em nossas cidades, então resolvi criar um aplicativo que mostre a temperatura das cidades de todos os integrantes do time.

Este projeto utiliza Angular 13.0.3.
API: https://openweathermap.org/

### Como fiz esse projeto?
Eu comecei esse projeto procurando na [documentação da API](https://openweathermap.org/current) como ela é utilizada.

E então segui os seguintes passos:
1. criei o projeto angular com o comando `ng new`.
2. modifiquei o app.component para ter a forma que eu queria inicialmente.
3. criei o service para acessar a API.
4. criei uma `div` com `*ngFor` para mostrar os dados buscados na API.
5. fui atrás de fontes legais para colocar no css.

### O que aprendi com este projeto?

Eu criei este projeto com o objetivo de melhorar minhas habilidades com angular e css. Portanto achei válido acompanhar por aqui o que eu aprendi com ele.

- aprendi como acessar propriedades de objetos compostos por outros objetos.
- aprendi a utilizar um pipe do angular para arredondar números diretamente no html.
- aprendi a importar fontes no angular.