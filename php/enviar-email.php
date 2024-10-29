<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $nome = htmlspecialchars($_POST['nome']);
    $mensagem = htmlspecialchars($_POST['mensagem']);
    
    $to = "talesmfernandes@uni9.edu.br"; 
    $subject = "Mensagem do formulário de contato";
    $body = "Nome: $nome\n";
    $body .= "E-mail: $email\n";
    $body .= "Mensagem: $mensagem\n";
    
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    
    if (mail($to, $subject, $body, $headers)) {
        echo "Mensagem enviada com sucesso!";
    } else {
        echo "Erro ao enviar a mensagem.";
    }
} else {
    echo "Método de requisição inválido.";
}
?>
