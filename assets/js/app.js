  let namber1 = +prompt('Введите число?');
  let namber2 = +prompt('Введите число?');
  let namber3 = +prompt('Введите число?');

  function countAverageNumber(nam1,nam2,nam3){
    return (nam1 + nam2 + nam3)/ 3;  
  } 

  let countResult = countAverageNumber(namber1,namber2,namber3);

  alert(countResult);