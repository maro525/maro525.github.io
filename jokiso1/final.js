$(function() {
    
    //最初ゲーム画面は非表示にしておく
    $(".game").css("display", "none");
    //最初のスライド以外は非表示にしておく
    $("li").css("display", "none");
    //ボックス内を非表示にする
    $(".pan").css("display","none");
    //Goボタンを非表示にしておく
    $("#start").css("display","none"); 
    //次へボタンを非表示にしておく
    $("#nextone").css("display","none");
    //最初のスライド以外を非表示にしておく
    $(".slide").css("display","none");
    
    //Playボタンが押された時
    $("#skip").click(function() {
        $(this).css("display","none");
        $('#tuto').css("display","none");
        $("#start").css("display","block");
    });
    
    //遊び方ボタンが押された時
    $("#tuto").click(function() {
        $(this).css("display","none");
        $('#skip').css("display","none");
        $("#nextone").css("display","block");
        $("#slide1").css("display","block");
    });
        
    var slide = 1;     //スライドの番号
    
    //次へボタンがクリックされたときの処理
    $('#nextone').click(function() {
        $('#slide' + slide).css("display","none");
        slide = slide + 1;
        $('#slide' + slide).css("display","block");
        if(slide === 11) {
            $('#start').css("display", "block");
            $('#nextone').css("display", "none");
        }
    });
    
  //Goボタンが押された後の処理
  $('#start').click(function() {
      
     
    var NUM = 15;      // 単位の数
    var aaa = 3;       // aの数
    var a   = 0;       // 獲得したaの数
    var bbb = 4;       // bの数
    var b   = 0;       // 獲得したbの数
    var ccc = 3;       // cの数
    var c   = 0;       // 獲得したcの数
    var pan = 5;       //単位パンの数
    var p   = 0;       // 獲得したpanの数
    var SIZE = 590;    // ステージの大きさ
    var count = 0;     //タッチしたオブジェクトの数
    var score = 0;     //獲得した単位の数
    var senten = "<p>終了</p>"  //最後に表示する文字


    //最初の画面を非表示に
    $('.one').empty();
    //次の画面を表示する
    $(".game").toggle();
    //スタートボタンを非表示にしておく
    $("#start").css("display", "none");
    //リセットボタンを非表示にしておく
    $("#reset").css("display","none");
    
    // チェックボックスの新しい位置を返す。
    function newPos() {
      return {
        left: Math.floor(Math.random() * SIZE),
        top: Math.floor(Math.random() * SIZE)
      };
    }
    
    //単位Aの生成
    for (var i = 0; i < aaa; i++) {
        $('<span></span>')
            .appendTo('.feild')
            .css('position', 'absolute')
            .css(newPos())
            .addClass('tani')
            .addClass('tr')
            .addClass('aa')
            .append('<img src=images/A.png>');
    }
    
    //単位Bの生成
    for (var i = 0; i < bbb; i++) {
        $('<span></span>')
            .appendTo('.feild')
            .css('position', 'absolute')
            .css(newPos())
            .addClass('tani')
            .addClass('tr')
            .addClass('bb')
            .append('<img src=images/B.png>');
    }
    
    //単位Cの生成
    for (var i = 0; i < ccc; i++) {
        $('<span></span>')
            .appendTo('.feild')
            .css('position', 'absolute')
            .css(newPos())
            .addClass('tani')
            .addClass('tr')
            .addClass('cc')
            .append('<img src=images/c.jpeg>');
    }
    
    //単位パンの生成
    for (var i = 0; i < pan; i++) {
        $('<span></span>')
            .appendTo('.feild')
            .css('position', 'absolute')
            .css(newPos())
            .addClass('tani')
            .addClass('fa')
            .append('<img src=images/tanipan.png>');
    }
    
    //パンを隠す
    $('#hide').click(function(){
        $('.tani').empty();
        $("#start").toggle();
        $(this).hide();
        $('<img src=images/tanipan.png>')
                .appendTo('.tani');
    });
    
    //動き始める
    $('#start').click(function() {
        $(this).css("display", "none");
//        $("#reset").css("display","block");
        $(".tani").each(function(){
            $(this).animate(newPos(), 3000, arguments.callee);
        });
    });
    
    //単位がクリックされたら＋２
    $('.tr').click(function(){
        score = score + 2;
        $(this).css('display','none');
        
    });
    
    //Aがクリックされたとき
    $('.aa').click(function(){
        a = a + 1;
        $(this).css('display', 'none');
        $('#a'+ a).css('display', 'block');
    });
    
    //Bがクリックされたとき
    $('.bb').click(function(){
        b = b + 1;
        $(this).css('display', 'none');
        $('#b'+ b).css('display', 'block');
    });
    
    //Cがクリックされたとき
    $('.cc').click(function(){
        c = c + 1;
        $(this).css('display', 'none');
        $('#c'+ c).css('display', 'block');
    });
    
    //単位パンがクリックされたら-2
    $('.fa').click(function(){
        score = score - 1;
        p = p + 1;
        $(this).css('display', 'none');
        $('#pan'+ p).css('display', 'block');
    });
    
    // 単位or単位パンが押されたときの処理
    $('.tani').click(function() {
      count = count + 1;
      $('#num').text(score);
      $('#sc').text(10-count);
      
      if (count >= 10) {
          $(".tani").css("display","none");
          $("#reset").css("display","block");
          if(score >= 18) {
                senten += '<p>あなたは飛び級できます</p>';
            } else if(score < 18 && score >=10) {
                senten += '<p>あなたは進級できます</p>';
            } else {
                senten += '<p>あなたは原級です</p>';
            }
          $(senten)
                  .appendTo('.feild')
                  .addClass('done');
         
      }
    });
    
    //リセットボタンが押された時の処理
    $("#reset").click(function() {
        window.location.reload();
    });
    
    return false;
  });
  
  
});

