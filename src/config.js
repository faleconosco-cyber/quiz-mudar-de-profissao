// Tudo que muda sem mexer em lógica fica aqui.
//
// O número do WhatsApp não é repetido em lugar nenhum do código: quem precisa
// dele importa daqui.

export const config = {
  brandName: 'Instituto Rumo',

  // Só dígitos, com código do país.
  whatsappNumber: '5521990625330',

  // Apps Script "Leads dos quizzes da bio", implantação "Quizzes da bio v1".
  // O mesmo endpoint atende os quatro quizzes: quem separa os funis é o campo
  // `quiz` do payload, não a URL.
  //
  // Ele grava na planilha, manda pro Brevo e chama a RPC criar_lead_quiz do
  // Supabase, que abre o cartão no CRM.
  leadEndpoint:
    'https://script.google.com/macros/s/AKfycbwQ4Wcl1U5SUKxTDlJ5JjUwqX5P5_O0TwhXwdlPQxRMvwGec14_sG3eWksGjFSqvuhn/exec',

  privacyPolicyUrl: '',
  instagramUrl: 'https://instagram.com/rumoorientacao',
}

// O slug separa este funil dos outros três. No CRM ele cai como produto
// `reorientacao_adulto`, com origem "Quiz: insatisfeito com o curso".
//
// Mudar aqui sem mudar na tabela `quizzes` do banco não dá erro: o lead entra
// com origem genérica e ninguém percebe. Conferir os três lugares juntos.
export const QUIZ_SLUG = 'mudar-de-profissao'
