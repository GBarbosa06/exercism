const discount = {
    1: 0,
    2: 0.05,
    3: 0.1,
    4: 0.2,
    5: 0.25
  }
  
  //param: array
  function calcGroupCost(group) {
    
  }
  
  export const cost = (books) => {
    const basket = [0, 0, 0, 0, 0];
    const group = [0, 0, 0, 0, 0];
    let costCounter = 0;
    for (let i = 0; i < books.length; i++) {
      switch(books[i])
        {
          case 1:
            basket[0]++;
            break;
          case 2:
            basket[1]++;
            break;
          case 3:
            basket[2]++;
            break;
          case 4:
            basket[3]++;
            break;
          case 5:
            basket[4]++;
            break;
        }
    }
    while (basket.some(book => book !== 0)) { //esse while serve para definir grupo por grupo, a cada iteração o calculo de cada grupo tem que ser feito
      group = [0, 0, 0, 0, 0]
      for (let i = 0; i < 5; i++) { //o for para definir cada grupo, depois o grupo volta a tudo 0
        if (basket[i] !== 0) {
          group[i]++;
          basket[i]--;
          
        }
      }
      
    }
    console.log(group)
  };
  