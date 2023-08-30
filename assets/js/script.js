
function showMenu(){

  let sideClass = $(".instr-main__sidebar").attr('id');

  if ('main-sidebar__show' == sideClass) {
    $(".instr-main__sidebar").hide();
    $(".instr-main__sidebar").attr("id","main-sidebar__hide");

    $(".instr-main__outer").css('padding-left','0');
  }
  else{
    $(".instr-main__sidebar").show();
    $(".instr-main__sidebar").attr("id","main-sidebar__show");

    $(".instr-main__outer").css('padding-left','280px');
  }
  
}
