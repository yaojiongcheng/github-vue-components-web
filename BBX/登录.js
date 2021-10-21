checkreg=function(){
    _user=document.getElementById("span")
    //if(_user.value==""){ //用这种方式，速度比较慢
    if(_user.value.length==0){//用这种方式会比较快，再加上可以检查他的长度
    alert("请输入用户名称");
    _user.focus();//把光标移到用户框里
    return;
    }