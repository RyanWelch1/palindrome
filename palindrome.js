function checkPalindrome(inputString) {
  var palindrome = inputString.length;
    for (var i = 0; i < palindrome /2; i++) {
        if (inputString.charAt(i) !== inputString.charAt(palindrome - 1 -i)) {
          return false;
      }
    }
    return true;
    
  

}
  