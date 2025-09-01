document.addEventListener('DOMContentLoaded', function () {
    // Botão de acessibilidade (abre/fecha opções)
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');

    botaoDeAcessibilidade.addEventListener('click', function () {
        botaoDeAcessibilidade.classList.toggle('rotacao-botao');
        opcoesDeAcessibilidade.classList.toggle('apresenta-lista');

        const botaoSelecionado = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
        botaoDeAcessibilidade.setAttribute('aria-expanded', !botaoSelecionado);
    });

    // Botões de aumento/diminuição da fonte
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');

    // Botão de alternância de contraste
    const alternaContraste = document.getElementById('alterna-contraste');

    let tamanhoAtualFonte = 1;

    aumentaFonteBotao.addEventListener('click', function () {
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    });

    diminuiFonteBotao.addEventListener('click', function () {
        tamanhoAtualFonte -= 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    });

    alternaContraste.addEventListener('click', function () {
        document.body.classList.toggle('alto-contraste');
    });

    // Animações ScrollReveal para as seções
    ScrollReveal().reveal("#inicio", {
        reset: true,
        delay: 200,
        duration: 1000,
        distance: "50px",
        origin: "bottom"
    });

    ScrollReveal().reveal("#cultura", {
        reset: true,
        delay: 300,
        duration: 1000,
        distance: "50px",
        origin: "left"
    });

    ScrollReveal().reveal("#galeria", {
        reset: true,
        delay: 400,
        duration: 1000,
        distance: "50px",
        origin: "right"
    });

    ScrollReveal().reveal("#contato", {
        reset: true,
        delay: 500,
        duration: 1000,
        distance: "50px",
        origin: "bottom"
    });
});
