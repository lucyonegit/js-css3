var imgbox = document.getElementsByClassName('imgbox')[0];
var img = document.getElementById('img');
imgbox.addEventListener('mousemove',rotate,false);
imgbox.addEventListener('mouseout',out,false);
function rotate(e){
    var baseX = e.pageX - this.offsetWidth/2 - this.offsetLeft,
        baseY = e.pageY - this.offsetHeight/2 - this.offsetTop;
        img.style.transform = 'rotateX(' + baseY/(-20) + 'deg) rotateY(' + baseX/20 + 'deg)';
}
function out(){

}