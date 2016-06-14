//frontend logic

$(document).ready(function()  {
  $("#jawsTicket").click(function() {
    $("#modalTitle").text("Jaws");
  });
  $("#starWarsTicket").click(function() {
    $("#modalTitle").text("Star Wars");
  });
  $("#independenceDayTicket").click(function() {
    $("#modalTitle").text("Indpendence Day");
  });
  $("#pulpFictionTicket").click(function() {
    $("#modalTitle").text("Pulp Fiction");
  });
  $("#theUsualSuspectsTicket").click(function() {
    $("#modalTitle").text("The Usual Suspects");
  });
  $("#warCraftTicket").click(function() {
    $("#modalTitle").text("War Craft");
  });
  $(".purchaseTicket").click(function() {
    $('.blank')[0].reset();
    $("#priceForTicket").text("");

  })
  $("#getPrice").click(function(){
    var ticketType = parseInt($("input:radio[name='optradio']:checked").val());
    var ticketTime = parseInt($("#dropdown option:selected").val());
    debugger;
    var ticket = new movieChoice(3,ticketTime,ticketType);
    $("#priceForTicket").text(ticket.moviePrice());
    console.log(ticket.moviePrice());
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
