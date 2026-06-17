function falar(){
  const u=new SpeechSynthesisUtterance(sai.textContent);
  u.lang="pt‑BR"; speechSynthesis.speak(u);
}

function imprimir(){
  const e=document.createElement("style");
  e.textContent="@page{size:A4;margin:8mm}";
  document.head.appendChild(e);
  window.print();
}

async function listarImpressoras(){console.log("📡 SAYTRON: buscando equipamentos…")}
