const FONTES = [
  {id:1,nome:"F‑1",ativa:true},
  {id:2,nome:"F‑2",ativa:true},
  {id:3,nome:"F‑3",ativa:true},
  {id:4,nome:"F‑4",ativa:true}
];
let ind=0;

async function rodar(){
  const txt=ent.value.trim();
  if(!txt) return sai.textContent="Escreva algo…";
  try {
    sai.textContent=await processar(txt);
    guardar(txt,sai.textContent);
  }catch(e){trocaFonte(); sai.textContent="🔄 Trocando fonte… tente novamente";}
}

async function processar(texto){
  return `📘 SAYTRON — ${FONTES[ind].nome}
Entrada: ${texto}
Plano: ${PLANO_ATUAL}
Funções carregadas: ${Object.keys(MODELOS).join(", ")}`;
}

function trocaFonte(){FONTES[ind].ativa=false; ind=(ind+1)%4}

function guardar(com,res){
  let h=JSON.parse(localStorage.getItem("saytron_hist")||"[]");
  h.push({com,res,data:new Date().toISOString()});
  if(h.length>500)h=h.slice(-400);
  localStorage.setItem("saytron_hist",JSON.stringify(h));
}

setInterval(()=>{buscarNovos();},21600000);
