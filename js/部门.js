var mybody = document.getElementsByTagName('body')[0];

   

//滑动处理

var startX, startY, moveEndX, moveEndY, X, Y;   

mybody.addEventListener('touchstart', function(e) {

    //e.preventDefault();

    startX = e.touches[0].pageX;

    startY = e.touches[0].pageY;

}, false);

mybody.addEventListener('touchmove', function(e) {

    //e.preventDefault();

    moveEndX = e.changedTouches[0].pageX;

    moveEndY = e.changedTouches[0].pageY;

    X = moveEndX - startX;

    Y = moveEndY - startY;

    if ( Math.abs(Y) > Math.abs(X) && Y > 0){
        doucument.getElementsById("pa").innerHTML="";
        document.write('<div id="pb" class="move">'+
        '<img src="png/manage.png" z-index="1" class="pic1">'+
        '<img src="png/plan.png" z-index="1" class="pic2">'+
        '<img src="png/video.png" z-index="1" class="pic3">'+
        '<img src="png/communicate.png" z-index="1" class="pic4">')
        if ( Math.abs(Y) > Math.abs(X) && Y > 0){
            doucument.getElementsById("pb").innerHTML="";
            document.write('<div  class="move">'+
            '<img src="png/manpower.png" z-index="1" class="pic1">'+
            '<img src="png/program.png" z-index="1" class="pic2">'+
            '<img src="png/product.png" z-index="1" class="pic3">')
        }
    }
})