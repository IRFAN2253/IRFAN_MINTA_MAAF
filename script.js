const daunContainer = document.getElementById('daun-container');
const daunCount = 20;

for (let i = 0; i < daunCount; i++) {
    const daun = document.createElement('div');
    daun.classList.add('daun');

    const randomX = Math.random() * 100;
    const randomY = Math.random() * 100;
    const randomDelay = Math.random() * 5;

    daun.style.left = `${randomX}%`;
    daun.style.top = `${randomY}%`;
    daun.style.animationDelay = `${randomDelay}s`;

    daun.style.setProperty('--randomX', Math.random() * 2 - 1);
    daun.style.setProperty('--randomY', Math.random() * 2 - 1);

    daunContainer.appendChild(daun);
}

function tampilkanPesan(salah) {
    const pesanElement = document.getElementById('pesan');
    let pesan = '';

    if (salah === 'ya') {
        pesan = 'Yaudah gua minta maaf, tapi itu karena lu duluan yang mulai gak sih? <br> Gua padahal baik kalau lu gak berulah mah ;>)';
    } else if (salah === 'setengah') {
        pesan = 'Ya karena gua merasa gak pernah salah hehe :>';
    } else if (salah === 'tidak') {
        pesan = 'Yaiyalah ipannn mah gak pernah salah :VVV';
    } else {
        pesan = 'Gua punya salah gak sih sebenernya???';
    }

    pesanElement.innerHTML = pesan;
}