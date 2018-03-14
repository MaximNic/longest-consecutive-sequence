module.exports = function longestConsecutiveLength(array) {

 function compareNumbers(a, b) {
    return a - b;
  }
  array.sort(compareNumbers);
  var longestCons=1;                                  // longest sequence
  var seq=1;                                          // current sequence
  for (let i=0; i<array.length; i++){                   
    if (array[i] != array[i+1]){                // если не дубль
      if (array[i]==array[i+1]-1){                //если следующий элемене на 1 больше текущего
        seq++;                                    // текущий счет +1
                                           //  console.log(seq,' ++    elem-',array[i],'-',array[i+1],'    longest-',longestCons);
      } else {        
        if (seq>longestCons){                    // если текущее больше максимального          
                                      //  console.log(seq,' longest-',longestCons);
          longestCons=seq;                 
          
        }
        seq=1;                        //  console.log(' longest-',longestCons);
      }
    }else {
      //console.log('  para-',array[i]);
    }
  }
  //console.log(array,' longest-',longestCons);
  
 return longestCons;
  
  // your solution here
}
