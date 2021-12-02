//画面操作UIのスクリプト

////////////モーダル
const modalList = [
  { trigger:'video_pray', url:'video_pray.html #modal > *' }

]


const PageUI = {
  modalOpen: function(trigger,url){
    var triggerDom = $('[data-modalOpener=' + trigger + ']');
    triggerDom.on('click',function(){
      $('#modal_overlay').addClass('active');
      $('#modal').addClass('modal active').addClass(trigger).load(url);
    });
    $('#modal_overlay').on('click',function(){
      $('#modal_overlay').removeClass('active');
      $('#modal').removeClass();
    });
  }
}

PageUI.modalOpen(modalList[0].trigger, modalList[0].url);







//sectionの入れ替え
