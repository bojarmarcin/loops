function drawtree(amount) {
  for(var i = 0; i < amount; i++ ) {
      var star = ' ';
    for(var j = 0; j < i; j++ ) {
      star += '*';
    }
    console.log(star);
  }
}
drawtree(10);
