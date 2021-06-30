$(document).ready(function () {
  $('img').click(function () {
    $(this).attr('src', $(this).attr('data-alt-src'));
  });
});
//1: makes sure document is ready before doing anything else
//2: puts click event handler on img tags
//3: when img is clicked, the src attribute of the img clicked will be replaced with the cat stored in custom data attribute we created
//4 and 5: close out their respective functions