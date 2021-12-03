//画面操作UIのスクリプト

////////////画面
const pageList = [
  { trigger:'input_url', url:'PC-Top_inputURL.html .screen.input_url > *' } //URL入力画面

]


////////////モーダル
const modalList = [
  { trigger:'video_pray', url:'video_pray.html #modal > *' }
]


const PageUI = {
  pageOpen: function(trigger,url){
    var triggerDom = $('[data-page-trigger=' + trigger + ']');
      $('.screen').empty().removeClass().addClass('screen input_url').load(url);
  }

  ,

  modalOpen: function(trigger,url){
    var triggerDom = $('[data-modal-opener=' + trigger + ']');
      $('#modal_overlay').addClass('active');
      $('#modal').addClass('modal active').addClass(trigger).load(url);

    $('#modal_overlay').on('click',function(){
      $('#modal_overlay').removeClass('active');
      $('#modal').removeClass();
    });
  }
}

$('[data-modal-opener],[data-page-trigger]').on('click',function(){
  var listNum = $(this).data('page-url');

  if($(this).data('modal-opener')){
    PageUI.modalOpen(modalList[listNum].trigger, modalList[listNum].url);

  } else if ($(this).data('page-trigger')){
    PageUI.pageOpen(pageList[listNum].trigger, pageList[listNum].url);
  }
});







//sectionの入れ替え
