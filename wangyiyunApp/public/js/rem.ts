function remSize(){
  //获取设备的宽度
  var deviceWidth = document.documentElement.clientWidth || window.innerWidth
  if(deviceWidth >= 750){
    deviceWidth = 750;
  }
  if(deviceWidth <= 320){
    deviceWidth = 320;
  }
  // 750px ==> 1rem = 75px; 375px ==> 1rem = 50px
  document.documentElement.style.fontSize = (deviceWidth/7.5)+'px'
  //设置字体大小
 
    const body = document.querySelector('body')
    if(body){ 
      body.style.fontSize = 0.3+'rem';
    }
}
remSize();
window.onresize = function(){
  remSize();
}