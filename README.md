# Quiz: Quero mesmo mudar de profissão?

Porta 2.3 da bio (`links.institutorumo.com`), a última do bloco 2. Fala com
adulto profissionalmente ativo e insatisfeito, e encaminha para Reorientação.

Oito perguntas, captura de lead depois da terceira, quatro camadas de mudança.
A pessoa nunca vê pontuação.

## A regra que não pode cair

**Os quatro resultados não são níveis.** O perfil 4 não é mais grave, mais
maduro nem mais avançado que o perfil 1. São hipóteses diferentes sobre de onde
vem a insatisfação, e nada no texto, na ordem ou no visual pode sugerir escada.

A premissa: mudar de profissão é apenas uma das formas de mudar a vida
profissional. Dá para mudar o contexto sem mudar a profissão, mudar a forma de
trabalhar sem abandonar a área, ou perceber que quem mudou foi você e que os
critérios precisam ser refeitos.

O quiz não diz para pedir demissão, para ficar nem para mudar. Não recomenda
profissão específica e não diagnostica nada.

A pessoa entra perguntando "quero mesmo mudar de profissão?" e sai com uma
pergunta melhor: **"que mudança minha vida profissional está pedindo agora?"**

O `npm test` guarda essas regras. Ele varre todos os textos procurando frase que
decida pela pessoa, que recomende profissão ou que ranqueie os perfis, incluindo
qualquer coisa no formato "nível N de 4".

## As quatro camadas

| perfil | nome público | a camada |
|---|---|---|
| `profile1` | Talvez o problema não seja a profissão | o contexto onde você trabalha |
| `profile2` | Seu jeito de trabalhar está pedindo mudança | a forma como você trabalha |
| `profile3` | Sua carreira perdeu conexão com você | os critérios que mudaram em você |
| `profile4` | Uma mudança de direção merece ser explorada | a direção da carreira |

## Pontuação

Cada alternativa alimenta exatamente um perfil. Não existe alternativa melhor:
existe alternativa que descreve qual camada está pedindo mudança. Vence o perfil
de maior soma.

O `npm test` verifica esse desenho: se alguma alternativa passar a alimentar
dois perfis, o desempate pela pergunta 8 deixa de funcionar e o teste falha.

Desempate, nesta ordem:

1. o perfil apontado pela **pergunta 8**, em que a pessoa diz o que gostaria de
   descobrir primeiro;
2. o perfil apontado pela **pergunta 7**;
3. prioridade técnica, arbitrária, só para o quiz nunca ficar sem resposta.

Sobre as 65.536 combinações possíveis: 6,6% precisam de desempate e apenas 0,73%
chegam na prioridade técnica. A distribuição fica entre 24,8% e 25,2% para cada
perfil, praticamente idêntica, que é o certo para quatro hipóteses que não são
níveis.

A pontuação é **sempre recalculada do zero** a partir das respostas guardadas.

## Configuração

Tudo que muda sem mexer em lógica está em `src/config.js`. O número do WhatsApp
não aparece em nenhum outro arquivo.

O `leadEndpoint` aponta para o Apps Script "Leads dos quizzes da bio". O mesmo
endpoint atende os quatro quizzes: quem separa os funis é o `QUIZ_SLUG`.

No CRM este quiz cai como produto `reorientacao_adulto`, com origem
"Quiz: mudar de profissão".

O payload sai em dois formatos ao mesmo tempo: os campos que a planilha e a RPC
do CRM leem, e os nomes da especificação (`name`, `answers`, `scores`,
`resultProfile`, `resultName`, `utm`, `pageUrl`, `createdAt`), para quem for
plugar outro destino depois não precisar reaprender os nomes daqui.

## Como rodar

```bash
npm install
npm run dev
```

**Atenção:** o `npm run dev` usa o mesmo endpoint de produção. Testar
localmente cria lead de verdade na planilha e cartão no CRM.

`npm test` roda a conferência completa, e também no CI antes de publicar.

## Estrutura

```
src/
  config.js              marca, WhatsApp, endpoint, slug
  data/questions.js      as 8 perguntas, os pesos, as camadas e os textos de tela
  data/results.js        os 4 perfis e o bloco final
  lib/quizScoring.js     soma por perfil e as três regras de desempate
  lib/leadService.js     submitLead, o único ponto de saída
  lib/storage.js         persistência contra refresh e UTMs
  lib/analytics.js       eventos
  components/            uma tela ou peça por arquivo
  App.jsx                a máquina de estados
```

## Visual

Quarto e último irmão da família. Mesma paleta, mesmas fontes e a mesma
estrutura dos outros três.

Quem conduz aqui é o **verde profundo**, e o bordô recua para os títulos de
seção. O público é adulto em transição, então o desenho é mais contido e com
mais contraste que o do quiz do adolescente, sem virar corporativo.

O motivo visual são as **camadas**, não a bifurcação do 2.2. É a tese do quiz:
existem níveis diferentes de mudança profissional e mudar de profissão é só o
mais externo deles. As quatro camadas aparecem empilhadas na abertura, com as
cores graduando do verde ao coral, **sem numeração e sem seta**, porque não são
uma escada.

Sem estética de coaching, sem alarme e sem banco de imagem de gente segurando a
cabeça.

## Acessibilidade

As alternativas são `button` de verdade, com `aria-pressed`. O foco vai para o
enunciado a cada pergunta. Os erros do formulário têm `role="alert"` e
`aria-describedby`. A tela de processamento tem `aria-live`. As animações
respeitam `prefers-reduced-motion`.

Nenhum evento de analytics carrega nome, e-mail ou telefone.
