

// Теперь ета переменная хронит в себе путь к '.main_list'
// let wayToMainList = document.body.querySelector('.main_list');

// При клике вилазет divCandels или divHony
// btnCandels.addEventListener('click', function(e) {
//     let divCandels = document.createElement('div');
//     divCandels.classList = 'divCandels';

//     if (!wayToMainList.querySelector('.divCandels')) {
//         wayToMainList.appendChild(divCandels);
//     }
//     if (wayToMainList.querySelector('.divHony')) {
//         wayToMainList.removeChild(document.querySelector('.divHony'));
//     }
// })

// btnHany.addEventListener('click', function(e) {
//     let divHony = document.createElement('div');
//     divHony.classList = 'divHony';

//     if (!wayToMainList.querySelector('.divHony')) {
//         wayToMainList.appendChild(divHony);
//     }
//     if (wayToMainList.querySelector('.divCandels')) {
//         wayToMainList.removeChild(document.querySelector('.divCandels'))
//     }
// })

const btnCandels = document.getElementById('candels');
const btnHany = document.getElementById('hanyes');
let candelsList = document.querySelector('.candels_list');
let hanyList = document.querySelector('.hany_list');

hanyList.style.display = 'none';

// При клике отображаеться candelsList или hanyList
btnCandels.addEventListener('click', function() {
    hanyList.style.display = 'none';
    candelsList.style.display = 'flex';

    // Немяем backengraund
    if (candelsList.style.display === 'flex') {
        btnCandels.style.backgroundColor = 'rgba(5, 2, 5, 0.1)'
    }
    if (hanyList.style.display === 'none') {
        btnHany.style.backgroundColor = 'rgba(0, 0, 0, 0.0)'
    }
})

btnHany.addEventListener('click', function (e) {
    candelsList.style.display = 'none';
    hanyList.style.display = 'flex';

    // Немяем backengraund
    if (hanyList.style.display === 'flex') {
        btnHany.style.backgroundColor = 'rgba(5, 2, 5, 0.1)'
    }
    if (candelsList.style.display === 'none') {
        btnCandels.style.backgroundColor = 'rgba(0, 0, 0, 0.0)'
    }
})