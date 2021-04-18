
var generate = function(n) {
  fibNums = n;
  if ( n <= 1){
    printAnswer(n);
    return n;  
  } 
  let answer = generate(n-1)+generate(n-2);
  printAnswer(answer);
  return answer;
  // return fibNums;
};


function printAnswer(content) {
    document.getElementById('answer').innerText = content;    
}

const generatebtn = () => {
  var parent = document.getElementById('parent');
  // while ( parent.firstChild ) parent.removeChild( parent.firstChild );
  let rows = document.querySelector('#input').value
  // generate(rows);
  generate(rows);
}
