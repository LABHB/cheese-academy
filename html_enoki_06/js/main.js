// Slick
$('.slider3').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
});

// jsを記述する際はここに記載していく
$(document).ready(function () {
  $("#header-btn").on("click",function(){
    $("body").toggleClass("is-openMenu");
  });
});
$(document).ready(function () {
  $("#gnav__list-btn0").on("click",function(){
    $("body").toggleClass("is-openMenu");
  });
});
$(document).ready(function () {
  $("#gnav__list-btn1").on("click",function(){
    $("body").toggleClass("is-openMenu");
  });
});
$(document).ready(function () {
  $("#gnav__list-btn2").on("click",function(){
    $("body").toggleClass("is-openMenu");
  });
});
$(document).ready(function () {
  $("#gnav__list-btn3").on("click",function(){
    $("body").toggleClass("is-openMenu");
  });
});
$(document).ready(function () {
  $("#gnav__list-btn4").on("click",function(){
    $("body").toggleClass("is-openMenu");
  });
});

// classが設定されている場所にさらにclassを加えることはできない？？
window.onload = function() {
  const spinner = document.getElementById('loadingnow');
  spinner.classList.add('loaded');
}

// ボタン、モダル、モダルの閉じるボタン、オーバーレイを変数に格納
const btn = document.querySelector('.btn');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close');
const overlay = document.querySelector('.overlay');

// ボタンをクリックしたら、モダルとオーバーレイに.activeを付ける
btn.addEventListener('click', function(e){
  // aタグのデフォルトの機能を停止する
  e.preventDefault();
  // モーダルとオーバーレイにactiveクラスを付与する
  modal.classList.add('active');
  overlay.classList.add('active');
});

// モダルの閉じるボタンをクリックしたら、モダルとオーバーレイのactiveクラスを外す
closeBtn.addEventListener('click', function(){
  modal.classList.remove('active');
  overlay.classList.remove('active');
});

// オーバーレイをクリックしたら、モダルとオーバーレイのactiveクラスを外す
overlay.addEventListener('click', function() {
  modal.classList.remove('active');
  overlay.classList.remove('active');
});


// ボタン、モダル、モダルの閉じるボタン、オーバーレイを変数に格納
const chatBtn = document.querySelector('.chat__request');
const chatmodal = document.querySelector('.modal__forchat');
const chatcloseBtn = document.querySelector('.modal__close');
const chatoverlay = document.querySelector('.overlay__forchat');
const chatgotop = document.querySelector('.gotop');

// ボタンをクリックしたら、モダルとオーバーレイに.activeを付ける
chatBtn.addEventListener('click', function(e){
  // aタグのデフォルトの機能を停止する
  e.preventDefault();
  // モーダルとオーバーレイにactiveクラスを付与する
  chatmodal.classList.add('active');
  chatoverlay.classList.add('active');
  chatgotop.classList.add('active');
});

// モダルの閉じるボタンをクリックしたら、モダルとオーバーレイのactiveクラスを外す
chatcloseBtn.addEventListener('click', function(){
  chatmodal.classList.remove('active');
  chatoverlay.classList.remove('active');
  chatgotop.classList.remove('active');
});

// オーバーレイをクリックしたら、モダルとオーバーレイのactiveクラスを外す
chatoverlay.addEventListener('click', function() {
  chatmodal.classList.remove('active');
  chatoverlay.classList.remove('active');
  chatgotop.classList.remove('active');
});

// 参考にした！！https://9-bb.com/jquery%E3%81%A0%E3%81%91%E3%81%A7iframe%E3%82%92%E5%86%8D%E8%AA%AD%E3%81%BF%E8%BE%BC%E3%81%BFreload%E3%81%95%E3%81%9B%E3%82%8B%E6%96%B9%E6%B3%95%E3%81%A8javascript%E3%82%92%E4%BD%BF%E3%81%A3/
$('#modal__close').on('click', function(){
  var src = $("#foo").attr("src");
  $("#foo").attr("src","");
  $("#foo").attr("src",src); 
});


// InstgramのAPI 参考にした！！https://yamatk12.net/instagram-api-embed/
$.ajax({
  type: 'GET',
  url: 'https://graph.facebook.com/v8.0/17841433746322280?fields=name%2Cmedia.limit(4)%7Bcaption%2Clike_count%2Cmedia_url%2Cpermalink%2Cthumbnail_url%7D&access_token=EAAFAWN3dtP0BAAKPvlyAlp59C2FNBIFi0WvqiwDWemxlGZBzWyFGf2FdfhiZCPaRxtv25HDYwO4qFHt1IqaHA7uF68lB48PIJ8FFK6NKM0i9t3kE2kwZB9AmsR8oUxDzttNaGdoZAZBoY2gFzQ4npIwjTsJj8mWm13YBM0V1XuXzwZBP0nbr1CVCRvWVOl49IZD' ,
  dataType: 'json',
  success: function(json) {
  var ig = json.media.data;
  var html = "";
  var caption;
  for (var i = 0; i < ig.length; i++) {
  var link = ig[i].permalink;
  var image;
  caption = ig[i].caption;
  if(!ig[i].thumbnail_url) {
  // 動画の場合はこちら
  image = ig[i].media_url;}
  else {
  // 写真の場合はこちら
  image = ig[i].thumbnail_url;
  }
  html += '<div><a href="' + link + '" target="_blank"><img src="' + image + '"></a><p>'+caption+'</p></div>'
  }
  $(".instagram").append(html);
  }
  });
  
// // Instgramの画像をSlickに格納
//   $(".instagram img").addClass("instagram__img");

//   // Instgramの画像をn番目を取り出して、各divの要素と入れ替え
//   var src1 =$(".instagram img:nth-child(1)")
//   var src2 =$(".instagram img:nth-child(2)")
//   var src3 =$(".instagram img:nth-child(3)")
//   var src4 =$(".instagram img:nth-child(4)")
//   $('.instagram__img_tentative01').children('img').attr('src', src1);
//   $('.instagram__img_tentative02').children('img').attr('src', src2);
//   $('.instagram__img_tentative03').children('img').attr('src', src3);
//   $('.instagram__img_tentative04').children('img').attr('src', src4);
