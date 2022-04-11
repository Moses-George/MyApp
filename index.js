
const applyBox = document.querySelectorAll(".apply");

const changeBgColor = () => {
    for (let  i = 0;  i < applyBox.length;  i++) {
        applyBox[ i].classList.remove('active');
    }
};

for (let j=0; j< applyBox.length; j++) {
    let el = applyBox[j];
        el.addEventListener('click', () => {
            changeBgColor();
            el.classList.add('active')
        })
};

// console.log(document.querySelectorAll(".active"));

