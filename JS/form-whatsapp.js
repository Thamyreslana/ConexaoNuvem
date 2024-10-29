document.getElementById('contatoForm').addEventListener('submit', function(event){
    event.preventDefault();

    const nome = event.target.nome.value;
    const email = event.target.email.value;
    const mensagem = event.target.mensagem.value;

    const whatsappNumero = '5511941492290';
    const whatsappMensagem = `Nome: ${nome}\nE-mail: ${email}\n*Assunto:*\n _${mensagem}_`;

    const whatsappURL = `https://api.whatsapp.com/send?phone=${whatsappNumero}&text=${encodeURIComponent(whatsappMensagem)}`;

    window.open(whatsappURL, '_blank');
});