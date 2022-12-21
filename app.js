// На ходим кнопки
const btnCandels = document.getElementById('candels');
const btnHany = document.getElementById('hanyes');
const btnOther = document.getElementById('other');

// На ходим листи свече и меда
let candelsList = document.querySelector('.candels_list');
let hanyList = document.querySelector('.hany_list');
let otherList = document.querySelector('.other_list');


// При срабативание скрипта страничка с медом не отображаеться
hanyList.style.display = 'none';
otherList.style.display = 'none';
btnCandels.style.textShadow = '0.1rem 0.03rem 0.3rem #000';

// При клике отображаеться candelsList или hanyList
btnCandels.addEventListener('click', function() {
    hanyList.style.display = 'none';
    otherList.style.display = 'none';
    candelsList.style.display = 'block';

    // Немяем textShadow
    if (candelsList.style.display === 'block') {
        btnCandels.style.textShadow = '0.1rem 0.03rem 0.3rem #000';
    }
    if (hanyList.style.display === 'none') {
        btnHany.style.textShadow = '0rem 0rem 0rem #000';
    }
    if (otherList.style.display === 'none') {
        btnOther.style.textShadow = '0rem 0rem 0rem #000';
    }
})

btnHany.addEventListener('click', function () {
    candelsList.style.display = 'none';
    otherList.style.display = 'none';
    hanyList.style.display = 'block';

    // Немяем textShadow
    if (hanyList.style.display === 'block') {
        btnHany.style.textShadow = '0.1rem 0.03rem 0.3rem #000';
    }
    if (candelsList.style.display === 'none') {
        btnCandels.style.textShadow = '0rem 0rem 0rem #000';
    }
    if (otherList.style.display === 'none') {
        btnOther.style.textShadow = '0rem 0rem 0rem #000';
    }
})

btnOther.addEventListener('click', function() {
    candelsList.style.display = 'none';
    hanyList.style.display = 'none';
    otherList.style.display = 'block';

    if (otherList.style.display === 'block') {
        btnOther.style.textShadow = '0.1rem 0.03rem 0.3rem #000';
    }
    if (candelsList.style.display === 'none') {
        btnCandels.style.textShadow = '0rem 0rem 0rem #000';
    }
    if (hanyList.style.display === 'none') {
        btnHany.style.textShadow = '0rem 0rem 0rem #000';
    }
})