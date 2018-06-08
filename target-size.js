javascript:
var linksbuttons = document.querySelectorAll('a, button, input:matches([type="text"], [type="button"], [type="submit"]), textarea');
for (var i = linksbuttons.length - 1; i >= 0; i--) {
  linksbuttons[i].style.display = 'inline-block';
  linksbuttons[i].style.position = 'relative';
  var width = linksbuttons[i].offsetWidth;
  var height = linksbuttons[i].offsetHeight;
  linksbuttons[i].innerHTML = '<span style="position: absolute; top:0; left:0; background-color: rgba(255,255,255, .8);">'+width+'⨉'+height+'</span>'+linksbuttons[i].innerHTML;
  if((width<44)||(height<44)) {
    linksbuttons[i].style.outline = "2px solid red";
  }
  else {
    linksbuttons[i].style.outline = "2px solid green";
  }
}
