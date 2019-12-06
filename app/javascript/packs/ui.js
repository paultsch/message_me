$( document ).on('turbolinks:load', function() {
  console.log("It works on each visit!")
})

$('.message .close')
  .on('click', function() {
    console.log("this worked!")
    $(this)
      .closest('.message')
      .transition('fade')
    ;

  })
;
