const PLANOS={
  gratuito:{lim:5,func:["doc.basico","graf.simples"]},
  basico:{lim:30,func:["todos.doc","grafica"]},
  completo:{lim:9999,func:["licit","habitacao","leiloes"]},
  empresarial:{lim:99999,func:["tudo","varredura","publicar"]}
};

let USU=JSON.parse(localStorage.getItem("saytron_user")||'{"plano":"gratuito"}');
const PLANO_ATUAL=USU.plano;

function podeAcessar(nome){return PLANOS[PLANO_ATUAL].func.includes(nome)}
function liberarPlano(n){USU={plano:n,data:new Date().toISOString()};localStorage.setItem("saytron_user",JSON.stringify(USU));alert("✅ SAYTRON: plano "+n+" liberado")}
