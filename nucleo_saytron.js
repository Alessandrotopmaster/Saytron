const NUCLEO = {
  modelo: "gpt-3.5-turbo",
  voz: "onyx",
  endpoint: "https://api.openai.com/v1/chat/completions",

  async responder(textoUsuario) {
    try {
      const CHAVE = "9G5gGKGEU3geshpTlk6QonGzr1amKaT3BlbkFJwAme0gKY2Po0qSoyBjo_AI6EammTytd0ViYEVT7ICOJNQ7AWBkJ6a6kvRIlttmHolNh6";

      const resposta = await fetch(this.endpoint, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${CHAVE}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: this.modelo,
          messages: [
            { role: "system", content: "Você é o Saytron: rápido, direto, confiante e com tom firme." },
            { role: "user", content: textoUsuario }
          ],
          temperature: 0.7
        })
      });

      const dados = await resposta.json();
      return dados.choices?.[0]?.message?.content || "Não entendi direito. Tente de novo.";
    } catch (erro) {
      console.error("Erro Saytron:", erro);
      return "⚠️ Falha ao acessar inteligência.";
    }
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const entrada = document.getElementById("entrada");
  const botao = document.getElementById("enviar");
  const saida = document.getElementById("saida");

  if (botao && entrada && saida) {
    botao.addEventListener("click", async () => {
      const pergunta = entrada.value.trim();
      if (!pergunta) return;

      saida.textContent = "Pensando…";
      const texto = await NUCLEO.responder(pergunta);
      saida.textContent = texto;

      const fala = new SpeechSynthesisUtterance(texto);
      fala.lang = "pt-BR";
      fala.rate = 1.05;
      fala.pitch = 0.9;
      window.speechSynthesis.speak(fala);
    });
  }
});
