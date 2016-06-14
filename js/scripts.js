//frontend logic

$(document).ready(function()  {
  $("#").
  event.preventDefault();
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
