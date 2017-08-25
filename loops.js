function forLoop(array) {
  for (var i = 0; i < 25; i++) {
    if(i === 1) {array.push("This is 1 strange loop.")}
    else {array.push("This is `${i}` strange loops.")}
  }
  return array
}

function whileLoop(n) {
  while (n > 0) {
    console.log(--n)
  }
return "done"
}

function doWhileLoop(array) {
  do{function maybeTrue(){
    return Math.random() >= 0.5}
  }
  while(array.length = 0 && maybeTrue())
  return array
}
