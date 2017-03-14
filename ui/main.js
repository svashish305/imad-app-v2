console.log('Loaded!');
//change the text of div-main-text
var element = document.getElementById('main-text');
element.innerHTML = 'New Value';
//Move the image
var img = document.getElementById('madi');
img.onclick = function() {
    img.style.marginLeft = '100px';
};

