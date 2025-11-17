$(document).ready(function() {
    // Scroll suave para seções
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var target = $(this.getAttribute('href'));
        if(target.length) {
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 70
            }, 1000);
        }
    });
    
    // Botão Saiba Mais
    $('#saibaMaisBtn').on('click', function() {
        $('html, body').animate({
            scrollTop: $('#apresentacao').offset().top - 70
        }, 1000);
    });
    
    // Efeito de scroll no navbar
    $(window).scroll(function() {
        if($(this).scrollTop() > 50) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });
    
    // Toggle de detalhes dos veículos
    $('.toggle-details').on('click', function() {
        var details = $(this).siblings('.vehicle-details');
        details.slideToggle(400);
        
        if($(this).text() === 'Ver Detalhes') {
            $(this).text('Ocultar Detalhes');
        } else {
            $(this).text('Ver Detalhes');
        }
    });
    
    // Validação do formulário
    $('#contatoForm').on('submit', function(e) {
        e.preventDefault();
        
        var isValid = true;
        
        // Reset errors
        $('.error-message').hide();
        $('.form-control').removeClass('is-invalid');
        
        // Validar nome
        var nome = $('#nome').val().trim();
        if(nome === '') {
            $('#nomeError').show();
            $('#nome').addClass('is-invalid');
            isValid = false;
        }
        
        // Validar email
        var email = $('#email').val().trim();
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(email === '' || !emailRegex.test(email)) {
            $('#emailError').show();
            $('#email').addClass('is-invalid');
            isValid = false;
        }
        
        // Validar telefone
        var telefone = $('#telefone').val().trim();
        if(telefone === '') {
            $('#telefoneError').show();
            $('#telefone').addClass('is-invalid');
            isValid = false;
        }
        
        // Validar mensagem
        var mensagem = $('#mensagem').val().trim();
        if(mensagem === '') {
            $('#mensagemError').show();
            $('#mensagem').addClass('is-invalid');
            isValid = false;
        }
        
        // Se o formulário for válido
        if(isValid) {
            // Simular envio
            alert('Mensagem enviada com sucesso! Em breve entraremos em contato.\n\n' +
                  'Nome: ' + nome + '\n' +
                  'E-mail: ' + email + '\n' +
                  'Telefone: ' + telefone);
            
            // Limpar formulário
            $('#contatoForm')[0].reset();
        } else {
            // Scroll até o primeiro erro
            $('html, body').animate({
                scrollTop: $('.is-invalid').first().offset().top - 100
            }, 500);
        }
    });
    
    // Remover erro ao digitar
    $('.form-control').on('input', function() {
        if($(this).val().trim() !== '') {
            $(this).removeClass('is-invalid');
            $(this).siblings('.error-message').hide();
        }
    });
});