document.getElementById("cadastro-form").addEventListener("submit", function(event) {
    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmar-senha").value;
    
    if (senha !== confirmarSenha) {
        alert("As senhas não coincidem.");
        event.preventDefault();  // Impede o envio do formulário
    }
});
