let count = 0;

document.getElementById('mudancaDeCor').addEventListener('click', function() {
    count++;
    if (count % 2 !== 0) {
        // Altera as cores para a primeira configuração
        document.body.style.backgroundColor = '#F20707';
        document.querySelectorAll('.fotosalbuns img, #informacoes, #video').forEach(function(element) {
            element.style.backgroundColor = '#0D0D0D';
        });
    } else {
        // Altera as cores para a segunda configuração
        document.body.style.backgroundColor = '#0D0D0D';
        document.querySelectorAll('.fotosalbuns img, #informacoes, #video').forEach(function(element) {
            element.style.backgroundColor = '#F20707';
        });
    }
});
