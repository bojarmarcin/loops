function drawtree(amount) {
  var amount = prompt('How many rows do you want in your christmas tree?');
  for(var i = 0; i < amount; i++ ) {

    for(var j = 0; j < i; j++ ) {
      document.write('*');
    }
    document.write('<br>');
  }
}
drawtree();
