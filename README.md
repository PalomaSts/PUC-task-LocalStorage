# boletim-LocalStorage
Atividade da matéria de Padrões Web com objetivo de arquivar as informações do boletim dos alunos no LocalStorage do navegador.

- `Página precisa ter os seguintes recursos:`

• Conter uma tag title com valor “Boletim JS”

• Fazer uso de um arquivo de estilos (.css) externo

• Fazer uso de um arquivo JavaScript (.js) externo.

- `Comportamentos esperados:`

• Ao clicar no botão “Adicionar” o JS deverá pegar os valores digitados no formulário e adicionar na tabela “Notas”

• A coluna “Aluno” corresponde ao campo “Aluno”

• A coluna “Total” corresponde à soma de todas as 3 notas

• A coluna “Média” corresponde à média das notas do aluno

• A coluna Resultado exibirá a palavra “Aprovado” ou “Reprovado” conforme formula abaixo

• Aprovado se a nota média for maior que 70, caso contrário, Reprovado.

• O botão Salvar no Browser deve gravar um item do tipo LocalStorage de novo “boletim” contendo o HTML da tabela “Notas”

• Quando a página for carregada, um JS deverá verificar se existe um item LocalStorage de nome “boletim” com valor, em caso afirmativo, deverá renderizar o conteúdo na tabela “Notas”
