//frontend logic

$(document).ready(function()  {
  $("#jawsTicket").click(function() {
    $("#modalTitle").text("");
    $("#modalTitle").append("<h4><input type='hidden' id='movieVal' value='2'>Jaws</input></h4>");
  });
  $("#starWarsTicket").click(function() {
    $("#modalTitle").text("");
    $("#modalTitle").append("<h4><input type='hidden' id='movieVal' value='4.5'>Star Wars</input></h4>");
  });
  $("#independenceDayTicket").click(function() {
    $("#modalTitle").text("");
    $("#modalTitle").append("<h4><input type='hidden' id='movieVal' value='4'>Independence Day</input></h4>");
  });
  $("#pulpFictionTicket").click(function() {
    $("#modalTitle").text("");
    $("#modalTitle").append("<h4><input type='hidden' id='movieVal' value='3'>Pulp Fiction</input></h4>");
  });
  $("#theUsualSuspectsTicket").click(function() {
    $("#modalTitle").text("");
    $("#modalTitle").append("<h4><input type='hidden' id='movieVal' value='2'>The Usual Suspects</input></h4>");
  });
  $("#warCraftTicket").click(function() {
    $("#modalTitle").text("");
    $("#modalTitle").append("<h4><input type='hidden' id='movieVal' value='4'>Warcraft</input></h4>");
  });

  $(".purchaseTicket").click(function() {
    $('.blank')[0].reset();
    $("#priceForTicket").text("");

  });

  $("#getPrice").click(function(){
    var ticketType = parseInt($("input:radio[name='optradio']:checked").val());
    var ticketTime = parseInt($("#dropdown option:selected").val());
    var movieVal = parseInt($("#movieVal").val());
    console.log(movieVal);
    var ticket = new movieChoice(movieVal,ticketTime,ticketType);
    $("#priceForTicket").text(ticket.moviePrice());
    event.preventDefault();
  });
})

//backend logic

function movieChoice(oldMovie, time, ticket)  {
  this.movieAge = oldMovie;
  this.time = time;
  this.ticket = ticket;
}

movieChoice.prototype.moviePrice = function() {
  return this.movieAge + this.time + this.ticket;
}
