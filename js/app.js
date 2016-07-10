
function playHadoukenSound(){
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}

$(document).ready(function(){
    $('#ryu').mouseenter(function(){
        /*alert('mouse enter')*/
        $('#ryu-stand').hide()
        $('#ryu-ready').show()
    })

    $('#ryu').mouseleave(function(){
        $('#ryu-ready').hide()
        $('#ryu-stand').show()
    })

    .mousedown(function(){
        console.log('mouse down');
        $('#ryu-ready').hide();
        $('#ryu-stand').hide();
        $('#ryu-throw').show();
    })

    .mouseup(function() {
        playHadoukenSound();
          $('#ryu-throw').hide();
          $('#ryu-ready').show();
          $('#hadouken').finish().show().animate(
          {'left':'1020px'},
          500,
          function(){
            $(this).hide();
            $(this).css('left', '520px');
          });
    })

    $(document).keydown(function(e){ /*what is e*/
        var keyNum = e.keyCode;
        console.log(keyNum);
        if (keyNum == 88){
            console.log(keyNum);
            $('#ryu-stand').hide();
            $('#ryu-ready').hide();
            $('#ryu-throw').hide();
            $('#ryu-cool').show();
            /*$('#ryu-stand').hide();*/
        }
    }).keyup(function(){
        /*console.log('keyup');*/
        $('#ryu-cool').hide();
        $('#ryu-stand').show();
        /*$('#ryu-stand').hide();*/

    })
});
