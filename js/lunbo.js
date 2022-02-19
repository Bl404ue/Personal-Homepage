    var oImg = document.querySelectorAll(".footimg img"); 
    var oLi = document.querySelectorAll(".footli li"); 
    var index = 0;
    var timer;
    start();
    for (var i = 0; i < oLi.length; i++) {
      oLi[i].index = i;
      oLi[i].onmouseenter = function () {  
        clearInterval(timer);
          index=this.index
          activeOne()
      };
      oLi[i].onmouseleave=function(){
        start()
      }
    }
    function activeOne() {
      document.querySelector(".footimg .active").classList.remove("active");
        document.querySelector(".footli .active").classList.remove('active');
      oImg[index].classList.add("active");
        oLi[index].classList.add("active");
    }
    function start() {
      clearInterval(timer);
      timer = setInterval(function () {
        index++;
        if (index > 4) {
          index = 0;
        }
        activeOne();
      }, 2000);
    }
