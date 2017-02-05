//encrypt one
function encryptString(str){
   let encryptedStr = str.split('').map( (char) => {
   	if(char.charCodeAt(0) == 122) return "a";
   	return String.fromCharCode(char.charCodeAt(0) +1 ) ;
   });
   return encryptedStr;
}

consoleencryptString("zello");
