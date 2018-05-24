var tab = $('.tab');
var list = $('.notice, .pds')
var list_item = $('.board li');
// 탭 요소에 키보드 포커스를 받을 수 있도록 tabindex 속성 추가
tab.attr('tabindex', '0');
// 공지사항 및 자료실 목록에 아이콘 클래스 추가
list_item.attr('class', 'icon-dot-circled');

// 탭을 클릭 했을 때 is-act 클래스를 제어하기 위한 선언
tab.click(function(e){
  e.preventDefault();
  list.removeClass('is-act');
  $(this).parent().addClass('is-act');
});
// 키보드 이벤트 발생 시 (엔터 및 스페이스) is-act 클래스를 제어하기 위한 선언
tab.keyup(function(e){
  e.preventDefault();
  if(e.keyCode === 13){
    list.removeClass('is-act');
    $(this).parent().addClass('is-act');
  }else{
    return false;
  }
});
