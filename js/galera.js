(function (){
    var canvas = document.getElementById("glitch");
    var ctx = canvas.getContext('2d');
    var text = "2K16";

    var count = 200;
    var dir = 4;

    ctx.textAlign = "center"
    ctx.textBaseline = "middle";
    ctx.font = "200pt serif";


    function ret(nr) {
        return Math.abs((nr%400) + 100);
    }
    function pos(nr) {
        //return nr;

        if(nr<300) {
            return ret(nr);
        }


        if(nr>=500 && nr<700) {
            return ret((nr-300)/2 + 300);
        }

        return ret((500-nr));

    }

    function step() {
        count += dir;


        if(count >= 1000) {
            count = 200;
            window.setTimeout(function(){window.requestAnimationFrame(step)},500);
            return;
        }

        var top = pos(count);

        ctx.clearRect(0,0,1000,500);

        ctx.save();
        ctx.beginPath();
        ctx.rect(0,top,1000,100);
        ctx.clip();
        ctx.fillStyle = "blue"
        ctx.fillText(text,495,245,1000,500)
        ctx.restore();

        ctx.save();
        ctx.beginPath();
        ctx.rect(0,top-100,1000,10);
        ctx.clip();
        ctx.fillStyle = "red"
        ctx.fillText(text,505,255,1000,500)
        ctx.restore();

        ctx.fillStyle = "white"
        ctx.fillText(text,500,250,1000,500)


        bw(top,40,10,1000,500);
        bw(top,120,-17,500,0);



        window.requestAnimationFrame(step)
    }

    function bw(top,o,off,r,i) {
        ctx.save();
        ctx.beginPath();
        ctx.rect(i,top-o,r,30);
        ctx.clip();
        ctx.fillStyle = "black"
        ctx.fillText(text,500,250,1000,500)
        ctx.restore();

        ctx.save();
        ctx.beginPath();
        ctx.rect(i,top-o,r,20);
        ctx.clip();
        ctx.fillStyle = "white"
        ctx.fillText(text,500-off,250,1000,500)
        ctx.restore();
    }


    window.requestAnimationFrame(step)
})();