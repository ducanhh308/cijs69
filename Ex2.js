var inputArr = [60 ,40 ,55 ,75 ,64];

     function alternatingSums(inputArr) {
          var team1 =[]
          var team2 =[]
     for (i=0; i<inputArr.length; i++) {
          if(i % 2==0){
                team1 = team1.concat(inputArr[i]);
                
          }else if(i % 2==1){
                team2 =  team2.concat(inputArr[i]);
          }  
     }  
   
          var team1Sum = team1.reduce(function(total,num){
               return total + num;
          },0)

          var team2Sum = team2.reduce(function(total,num){
               return total + num;
          },0)

          var totalSum = [team1Sum,team2Sum]

     return totalSum;     
}
console.log(alternatingSums(inputArr))

