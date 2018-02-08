//Search box function
function myFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toLowerCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");
  for(i = 0; i < li.length; i++) {
     a = li[i].getElementsByTagName("a")[0];
      if (a.innerHTML.toLowerCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
  }
}

// Lightbox custom
lightbox.option({
  fitImagesInViewport: true,
  resizeDuration: 100,
  wrapAround: true,
  maxWidth: 600,
  maxHeigth: 600
})
