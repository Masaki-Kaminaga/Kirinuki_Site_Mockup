//画面操作UIのスクリプト

////////////画面
const pageList = [
  { trigger:'top', url:'index.html .screen.top > *' }, //0_TOP画面
  { trigger:'input_url', url:'PC-Top_inputURL.html .screen.input_url > *' }, //1_URL入力画面
  { trigger:'video_edit', url:'PC-Edit.html .screen.video_edit > *' }, //2_動画編集画面
  { trigger:'confirm', url:'PC-Top_InputURL-Confirm.html .screen.confirm > *' }, //3_動画編集確認画面
  { trigger:'confirm', url:'PC-Top_delete-Confirm.html .screen.confirm > *' } //4_動画削除画面

]


////////////モーダル
const modalList = [
  { trigger:'video_pray', url:'video_pray.html #modal > *' }
]


const PageUI = {
  pageOpen: function(trigger,url){
    var triggerDom = $('[data-page-trigger=' + trigger + ']');
      $('.screen').empty().removeClass().addClass('screen').addClass(trigger).load(url);
  }

  ,

  modalOpen: function(trigger,url){
    var triggerDom = $('[data-modal-opener=' + trigger + ']');
      $('#modal_overlay').addClass('active');
      $('#modal').addClass('modal active').addClass(trigger).load(url);

    $('#modal_overlay').on('click',function(){
      $('#modal_overlay').removeClass('active');
      $('#modal').removeClass().addClass('modal');
    });
  }
}



$(document).on('click','[data-modal-opener],[data-page-trigger]',function(){
  var listNum = $(this).data('page-url');

  if($(this).data('modal-opener')){
    PageUI.modalOpen(modalList[listNum].trigger, modalList[listNum].url);

  } else if ($(this).data('page-trigger')){
    PageUI.pageOpen(pageList[listNum].trigger, pageList[listNum].url);
  }
});
