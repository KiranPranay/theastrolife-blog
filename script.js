$(function () {
 $(".sidebar-link").click(function () {
  $(".sidebar-link").removeClass("is-active");
  $(this).addClass("is-active");
 });
});

$(window)
 .resize(function () {
  if ($(window).width() > 1090) {
   $(".sidebar").removeClass("collapse");
  } else {
   $(".sidebar").addClass("collapse");
  }
 })
 .resize();

const allblogs = document.querySelectorAll(".blog");

allblogs.forEach((v) => {
 v.addEventListener("mouseover", () => {
  const blog = v.querySelector("blog");
  blog.play();
 });
 v.addEventListener("mouseleave", () => {
  const blog = v.querySelector("blog");
  blog.pause();
 });
});

// $(function () {
//  $(".logo, .logo-expand, .discover").on("click", function (e) {
//   $(".main-container").removeClass("show");
//   $(".main-container").scrollTop(0);
//  });
//  $(".trending, .blog").on("click", function (e) {
//   $(".main-container").addClass("show");
//   $(".main-container").scrollTop(0);
//   $(".sidebar-link").removeClass("is-active");
//   $(".trending").addClass("is-active");
//  });

// });