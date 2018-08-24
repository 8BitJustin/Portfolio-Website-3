const introText = document.getElementById('intro');
const displayImg = document.getElementById('img-display-id');
const imgSmall = document.querySelectorAll('.img-small');
let imgSmallOne = document.getElementById('img-list-count-id-1');
let imgSmallTwo = document.getElementById('img-list-count-id-2');
let imgSmallThree = document.getElementById('img-list-count-id-3');
let imgSmallFour = document.getElementById('img-list-count-id-4');
let imgSmallFive = document.getElementById('img-list-count-id-5');
let displayCount = document.getElementById('img-display-count');
let listCount = 0;

for(let i = 0; i < imgSmall.length; i++) {
    imgSmall[i].addEventListener('click', function() {
        introText.style.display = 'none';
        console.log('clicked');
        displayImg.src = imgSmall[i].src;
        displayImg.id = imgSmall[i].id;
        listCount = imgSmall[i].previousElementSibling.innerText;
        document.getElementById('img-display-count').innerText = listCount;
        document.getElementById('img-display-name').innerText = imgSmall[i].parentNode.firstElementChild.innerText;
    });
};

displayImg.addEventListener('click', function() {
    displayCount.innerText++;
    switch(displayImg.id) {
        case 'img-one':
            console.log('one');
            imgSmallOne.innerText++;
            if (imgSmallOne.innerText == 100) {
                alert('You really love this kitteh!');
            };
            break
        case 'img-two':
            console.log('two');
            imgSmallTwo.innerText++;
            if (imgSmallTwo.innerText == 100) {
                alert('You really love this kitteh!');
            };
            break
        case 'img-three':
            console.log('three');
            imgSmallThree.innerText++;
            if (imgSmallThree.innerText == 100) {
                alert('You really love this kitteh!');
            };
            break
        case 'img-four':
            console.log('test four');
            imgSmallFour.innerText++;
            if (imgSmallFour.innerText == 100) {
                alert('You really love this kitteh!');
            };
            break
        case 'img-five':
            console.log('test five');
            imgSmallFive.innerText++;
            if (imgSmallFive.innerText == 100) {
                alert('You really love this kitteh!');
            };
            break
        default:
            console.log('default');
      };
});