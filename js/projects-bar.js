window.addEventListener("load", function () {
  var barLinkFirst = document.querySelector(".bar-a__first");
  var barLinkSecond = document.querySelector(".bar-a__second");
  var barLinkThird = document.querySelector(".bar-a__third");
  var barLinkFourth = document.querySelector(".bar-a__fourth");

  var sectionDesign = document.querySelector(".design");
  var sectionPosm = document.querySelector(".posm");
  var sectionMerch = document.querySelector(".merch");
  var sectionEvent = document.querySelector(".event");

  var projectsArticle = document.querySelector(".article-hide");
  var notes = document.querySelector(".notes");

  barLinkSecond.addEventListener("click", transitTwo);
  barLinkThird.addEventListener("click", transitThree);
  barLinkFourth.addEventListener("click", transitFour);


  barLinkFirst.addEventListener("click", function () {
    sectionDesign.classList.remove("d-none");
    sectionPosm.classList.add("d-none");
    sectionMerch.classList.add("d-none");
    sectionEvent.classList.add("d-none");

    barLinkFirst.classList.add("bar-active");
    barLinkSecond.classList.remove("bar-active");
    barLinkThird.classList.remove("bar-active");
    barLinkFourth.classList.remove("bar-active");
  });


  function transitTwo() {
    sectionDesign.classList.add("d-none");
    sectionPosm.classList.remove("d-none");
    sectionMerch.classList.add("d-none");
    sectionEvent.classList.add("d-none");

    projectsArticle.classList.add("d-hide");
    notes.classList.add("d-hide");

    barLinkFirst.classList.remove("bar-active");
    barLinkSecond.classList.add("bar-active");
    barLinkThird.classList.remove("bar-active");
    barLinkFourth.classList.remove("bar-active");
  }

  function transitThree () {
    sectionDesign.classList.add("d-none");
    sectionPosm.classList.add("d-none");
    sectionMerch.classList.remove("d-none");
    sectionEvent.classList.add("d-none");

    projectsArticle.classList.add("d-hide");
    notes.classList.add("d-hide");

    barLinkFirst.classList.remove("bar-active");
    barLinkSecond.classList.remove("bar-active");
    barLinkThird.classList.add("bar-active");
    barLinkFourth.classList.remove("bar-active");
  }

   function transitFour () {
    sectionDesign.classList.add("d-none");
    sectionPosm.classList.add("d-none");
    sectionMerch.classList.add("d-none");
    sectionEvent.classList.remove("d-none");

    projectsArticle.classList.add("d-hide");
    notes.classList.add("d-hide");

    barLinkFirst.classList.remove("bar-active");
    barLinkSecond.classList.remove("bar-active");
    barLinkThird.classList.remove("bar-active");
    barLinkFourth.classList.add("bar-active");
  }

});
