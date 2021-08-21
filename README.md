# MeuAngular

Projeto desenvolvido passo a passo em lives para mostrar e ensinar o potencial do Angular e como trabalhar com ele.

## Primeiros passos

Ao clonar o repositorio, acessar a pasta dele pelo terminal e rodar npm install
Angular e node precisam estar instalados na maquina

## Terminado o NPM install

O comando para rodar o servidor é ng serve


O arquivo para ordenar a lista é o corpo.component.ts
Já tem um comentário de onde inserir a lógica.

## Desafio

    Ordenar a lista que recebemos por ordem de media de votos (vote_average)

## Como ordenar um array

Considere o array
dados = [3,8,7,1]

Para ordenar ele:

        this.dados.sort(function (a,b){
            if (a > b){
                return -1;
            }
            if (a < b ){
                return 1;
            }
            return 0;
        });

Considere o array de objetos
dados = [{nome:"Clayton",idade:33},
         {nome:"João", idade:22}  ]

Use a mesma lógica, mas defina qual critério

        this.dados.sort(function (a,b){
            if (a.idade > b.idade){
                return -1;
            }
            if (a.idade < b.idade){
                return 1;
            }
            return 0;
        });

Boa sorte