function solve(s){
    let upper = 0
    let lower = 0
    let sArray = s.split("")
    console.log(s.split(""))
    for (let i = 0; i < sArray.length; i++){
      if (sArray[i] == sArray[i].toUpperCase()){
        upper ++
      } else{
        lower ++
      } 
    }
    if (upper > lower){
      return s.toUpperCase()
    } else {
      return s.toLowerCase()
    }
  }