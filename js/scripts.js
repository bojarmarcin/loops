function drawtree(amount) {
  for(var i = 0; i < amount; i++ ) {
    var star = ' ';

    for(var j = 0; j < i; j++ ) {
      star += '*';
    }
    document.write(star);
  }
}
drawtree(40);
