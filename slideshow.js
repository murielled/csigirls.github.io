var i = 0;
var images = [];
var time = 3000; //time in milliseconds

//image list

images[0] = 'img/jumpgirl.jpg';
images[1] = 'img/shadowgirls.jpg';
images[2] = 'img/peace.jpg';

function changeImg() {
    document.slide.src=images[i];
    
    if (i< images.length-1) {
        i++;
    } else {
        i=0
    }
    
setTimeout("changeImg()",time);
}

window.onload =changeImg;
