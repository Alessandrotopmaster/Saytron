// 📌 SAYTRON — Arquivo extra de complementos
const SAYTRON_EXTRAS = {
  versao_extra: "1.0‑COMPLEMENTAR",
  validarCampos: function(texto){
    if(!texto || texto.trim().length < 3) return {ok:false, aviso:"Escreva algo com mais detalhes…"};
    return {ok:true};
  },
  limparResposta: function(texto){
    return texto.replace(/<[^>]*>/g,"").trim();
  },
  exportarComoTexto: function(conteudo,nome="saytron‑saida"){
    const a=document.createElement("a");
    const blob=new Blob([conteudo],{type:"text/plain;charset=utf‑8"});
    a.href=URL.createObjectURL(blob);
    a.download=nome+".txt";
    a.click();
    URL.revokeObjectURL(a.href);
  },
  ajustarParaImpressao: function(){
    document.body.classList.add("modo‑impressao");
  },
  restaurarVisual: function(){
    document.body.classList.remove("modo‑impressao");
  }
};

window.SAYTRON_EXTRAS = SAYTRON_EXTRAS;

// ———————————————————
// Projeto SAYTRON
// Desenvolvido por: Sandro Rhilmanelly
// ———————————————————
