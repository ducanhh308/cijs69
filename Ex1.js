let inputArr = [2 ,3 ,-5 ,-2, 4]

function adjacentElementsProduct(inputArr) {
     var product = 0;
          for (let i = 0; i < inputArr.length - 1; i++){
               product = Math.max(product, inputArr[i] * inputArr[i + 1])
          }

     return product;   
    }
  
    console.log(adjacentElementsProduct(inputArr));

    


