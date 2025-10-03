const imagem = document.querySelectorAll('img')
let foto_troca = false

function trocaFoto() {
    if (foto_troca === false) {
        for (let i = 0; i < imagem.length; i++) {
            imagem[i].src = `img/leon${i + 9}`
        }
        foto_troca = true;
    } else {
        for (let i = 0; i < imagem.length; i++) {
            imagem[i].src = `img/leon${i + 1}`;
        }
        foto_troca = false;
    }
}