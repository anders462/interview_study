//encrypt one
// function encryptString(str){
//    let encryptedStr = str.split('').map( (char) => {
//    	if(char.charCodeAt(0) == 122) return "a";
//    	return String.fromCharCode(char.charCodeAt(0) +1 ) ;
//    });
//    return encryptedStr;
// }
//
// consoleencryptString("zello");

let list = ["a", "b", "c", "d"];

function perm(list){

  findOne(n, perm) {
    if (perm.length == list.length) {
      console.log(perm);
    }
    findOne(n, perm.push(list(n+1)))
  }

}
perm(list)
               //
              //                                  abcd
              //                     a                        b          c       d
              //       ab         ac          ad
              //  abcd   abdc   acbd acdb  adbc adcb
