const SAYTRON_CFG={versao:"1.0‑COMPLETA",offline:true,voz:true,impressao:true};

const AJUDA=`📖 SAYTRON
• Digite direto: contrato, edital, recibo, convite…
• Funciona sem internet
• Voz • Gráfica • Impressão • Licitações • Habitação • MEI • Contábil`;

const MODELOS={
  doc:["declaração","procuração","contrato","recibo","autorização","solicitação","termo‑responsab","distrato","comodato","doação"],
  cartorio:["certidão‑nasc/cas/obito","procuração‑pública","reconhecimento‑firma","autenticação‑cópia","registro‑imóvel","registro‑empresa","alteração‑contrato‑social","baixa‑empresa","ata‑reunião"],
  licit:["edital‑padrão","proposta‑comercial","decl‑inexist‑imped","decl‑capac‑técnica","decl‑cumpr‑requisitos","plano‑trabalho","cronograma‑fís‑fin","orçamento‑detalhado","mem‑cálculo","compos‑preço‑unitário"],
  habitacao:["contrato‑aluguel","contrato‑compra‑venda","proposta‑financiamento‑caixa‑brasileira","decl‑residência","planta‑baixa‑descritiva","mem‑desc‑imóvel","laudo‑avaliação","vistoria‑entrada‑saída","distrato‑aluguel","caução‑garantia"],
  grafica:["convite‑cas/anivers/evento","cartão‑visita","etiqueta‑produto","banner‑divulgação","cartaz‑aviso","folheto‑pequeno","logotipo‑esquema‑básico","diagrama‑layout‑simples","papel‑carta‑cabeçalho","selo‑identificação"],
  contabil:["mei‑registro‑inicial","mei‑decl‑anual","livro‑caixa‑resumido","folha‑pagamento‑simples","recibo‑serv‑prestado","nota‑fiscal‑modelo‑simples","plano‑contas‑básico","balanço‑simplificado","demonstr‑resultado‑simples","guia‑recolh‑imposto‑simples"],
  sistema:["histórico‑processos","busca‑atualizações","controle‑limite‑uso","filtro‑respostas","export‑texto‑pdf‑simples","modo‑leitura‑som‑voz"]
};

async function buscarNovos(){console.log("🔄 SAYTRON: atualizando editais, normas e tabelas…")}
