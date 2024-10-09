
// Função para garantir que apenas uma checkbox esteja selecionada
const clientCheckbox = document.getElementById('isClient');
const employeeCheckbox = document.getElementById('isEmployee');

//Função para mensagem ser enviada ao whatsapp
function sendForm (){
    var messageLabelText = document.getElementById("floatingMessage").value;
    

    var mensagemCodificada = encodeURIComponent(messageLabelText)
    let linkWhatsApp = `https://wa.me/5511942739227?text=Olá,%20Sou%20${permission}%20${messageName},%20${mensagemCodificada}`;
    return linkWhatsApp;
}



//Funcionamento do botão BUSCAR
document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o comportamento padrão do formulário

    var query = document.getElementById('searchInput').value.toLowerCase();

    if (query.includes('sobre')) {
        window.location.href = 'sobrenos.html'; // Redireciona para a página "Sobre Nós"
    } else if (query.includes('agendamento')) {
        window.location.href = 'infoagenda.html'; // Redireciona para a seção "Agendamento"
    } else if (query.includes('serviços')) {
        window.location.href = '#servicos'; // Redireciona para a seção "Serviços"
    } else if (query.includes('LGPD')) {
        window.location.href = 'LGPD.html'; // Redireciona para a seção "Serviços"
    } else {
        alert('Nenhum resultado encontrado para "' + query + '".');
    }
});
