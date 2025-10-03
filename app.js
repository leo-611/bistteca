const imagem = document.querySelectorAll('img');
let foto_troca = false;

function trocaFoto() {
    if (foto_troca === false) {
        for (let i = 0; i < imagem.length; i++) {
            // Troca as imagens, aceitando tanto .jpg quanto .jpeg
            imagem[i].src = `img/leon${i + 9}.jpg`;  // Começa com .jpg
            if (imagem[i].src.endsWith('.jpg')) {
                imagem[i].src = imagem[i].src.replace('.jpg', '.jpeg');  // Se for .jpg, troca para .jpeg
            }
        }
        foto_troca = true;
    } else {
        for (let i = 0; i < imagem.length; i++) {
            imagem[i].src = `img/leon${i + 1}.jpg`;  // Começa com .jpg
            if (imagem[i].src.endsWith('.jpg')) {
                imagem[i].src = imagem[i].src.replace('.jpg', '.jpeg');  // Troca para .jpeg
            }
        }
        foto_troca = false;
    }
}
