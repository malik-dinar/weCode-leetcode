/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let l=0;
    let r=s.length-1;
    const arr = [...s]; 
    while(l<r){
        if(arr[l]!= 'a' && arr[l]!= 'e' && arr[l]!= 'i' && arr[l]!= 'o' && arr[l]!= 'u' && arr[l]!= 'A' && arr[l]!= 'E' && arr[l]!= 'I' && arr[l]!= 'O' && arr[l]!= 'U' ){
            console.log(arr[l]);
            l++;
        }else{
            while(l<r){
                if(arr[r]!= 'a' && arr[r]!= 'e' && arr[r]!= 'i' && arr[r]!= 'o' && arr[r]!= 'u' && arr[r]!= 'A' && arr[r]!= 'E' && arr[r]!= 'I' && arr[r]!= 'O' && arr[r]!= 'U'){
                    r--;
                }else{
                    console.log(l,r)
                    let temp = arr[l];
                    arr[l] = arr[r];
                    arr[r] = temp;
                    l++;
                    r--;
                    break;
                }
            }
            
        }
    }
    const str = arr.join("");
    return str
};