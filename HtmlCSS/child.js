function callParent() {
    console.log("부모창에 있는 함수 call 호출");
    var msg = $('#sendMsg').val();
    if(msg == '') {
        alert('input창에 텍스트를 입력해주시기 바랍니다.');
        return;
    }
    opener.call(msg);
    window.close();
};

//enter키를 누르면 callparent 함수 실행 되도록
$('#sendMsg').bind('keydown keypress', function(e) {
    if(e.which == 13) {
        callParent();
    }

});