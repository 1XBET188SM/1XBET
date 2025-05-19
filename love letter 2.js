$(document).ready(function () {
  var envelope = $("#envelope");

  envelope.addClass("close");

  envelope.click(function () {
    if (envelope.hasClass("close")) {
      open();
    } else {
      close();
    }
  });

  function open() {
    envelope.addClass("open").removeClass("close");
  }
  function close() {
    envelope.addClass("close").removeClass("open");
  }
});
