const imagem = document.querySelectorAll('img')
let foto_troca = false

function trocaFoto() {
    if (foto_troca === false) {
        for (let i = 0; i < imagem.length; i++) {
            imagem[i].src = `img/manual${i + 9}.jpeg`
        }
        foto_troca = true;
    } else {
        for (let i = 0; i < imagem.length; i++) {
            imagem[i].src = `img/manual${i + 1}.jpeg`;
        }
        foto_troca = false;
    }
}