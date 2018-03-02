function drawtree(amount) {
  for(var i = 0; i < amount; i++ ) {

    for(var j = 0; j < i; j++ ) {
      document.write('*');
    }
    document.write('<br>');
  }
}
drawtree(10);
