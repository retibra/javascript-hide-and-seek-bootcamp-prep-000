function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function increaseRankBy(n){
  var array = document.getElementsByClassName('ranked-list');
  for (var i = 0; i < array.length; i++) {
    array[i].innerHTML = (parseInt(i,10) + n).toString();
  }
}

function deepestChild(){
  var dig = document.getElementById('grand-node')
  var deeper = dig.children[0]
    while(deeper) {
      dig = deeper;
      deeper = dig.children[0]
    }
  return dig;

}
