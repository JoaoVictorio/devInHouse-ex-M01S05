O gitflow é um modelo de fluxo de trabalho que controla versões de projetos usando o sistema de controle de versão git. Tem um conjunto de regras que organiza as ramificações (branches) e a fluídez do desenvolvimento do trabalho.

O conceito do GitFlow envolve a criação de duas ramificações principais: a ramificação "master" e a ramificação "develop". A ramificação "master" é a versão estável e final do projeto, enquanto a ramificação "develop" é a ramificação principal.

Além dessas ramificações principais, o GitFlow utiliza outras ramificações:

1. Feature branches (ramificações de funcionalidades): criadas a partir da ramificação develop que desenvolve novas funções, pois cada funcionalidade e desenvolvida em uma ramificação separada.

2. Release branches (ramificações de lançamento): criadas a partir da ramificação develop quando está próximo o momento de lançar uma nova versão do projeto. Aqui acontece preparação para o lançamento. Correção de bus e etc.

de acordo como vi na aula os desenvolvedores trabalham em paralelo em diferentes funcionalidades, reduzindo conflitos e mantendo um histórico de alterações bastante estruturado.