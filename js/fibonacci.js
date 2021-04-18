

//Memo 2n
const memoFibonacci = (n, memo) => {
  memo = memo || {};

  if (memo[n]) {
    return memo[n];   
  };
  if (n <= 1) {
    printAnswerM(n);
    return n;
  }

  let answer = memo[n] = memoFibonacci(n-1, memo) + memoFibonacci(n-2, memo);
  printAnswerM(answer);

  return answer;
}

const memobtn = () => {
  let n = document.querySelector('#inputM').value
  memoFibonacci(n);
}
function printAnswerM(content) {
  document.getElementById('memoanswer').innerText = content;    
}




// recursive 2^n
const recursiveFibonacci = (n) => {
  if (n >= 21){
    document.getElementById('recursiveanswer').innerText = 'that would take too long with this algorithm';    
    return
  }
  if ( n <= 1){
    printAnswerR(n);
    return n;  
  } 
  let answer = recursiveFibonacci(n-1)+recursiveFibonacci(n-2);
  printAnswerR(answer);
  return answer;
};

const recursivebtn = () => {
  let n = document.querySelector('#inputR').value
  recursiveFibonacci(n);
}
function printAnswerR(content) {
  document.getElementById('recursiveanswer').innerText = content;    
}


