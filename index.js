// Code your solution in this file!
function distanceFromHqInBlocks (pickUp) {
  const numberOfBlocks= (pickUp > 42) ? (pickUp-42) : (42-pickUp);
return numberOfBlocks;
}
function distanceFromHqInFeet(pickUp) {
    const blocks = (pickUp > 42) ? (pickUp-42) : (42-pickUp);
    const distanceInFeet= blocks*264;
    return distanceInFeet;
}
function  distanceTravelledInFeet(pickUp, dropOff) {
    const blocks = (pickUp > dropOff) ? (pickUp-dropOff) : (dropOff-pickUp);
 const distanceInFeet= blocks*264;
return distanceInFeet;
}
function  calculatesFarePrice(start, destination) {
    const blocks = (start > destination) ? (start-destination) : (destination-start);
    let feet= blocks*264;
    const Totalfeet= feet-400;

     let price;

//    switch (true) {
//     case (feet <= 400): 
//     price = 0;
//     break;
//     case (feet >=2500):
//     price= 'cannot travel that far';
//     break;
//     case (feet > 400 && feet <= 2000):
//         price= Totalfeet*0.02;
//     break;
//     case (feet > 200 && feet <= 2500):
//         price= 25;
//         break;
        
//    }
//    return price;

    if (feet <= 400)
    { 
    price = 0;
    }
    else if (feet >=2500)
    {
    price= 'cannot travel that far';
    }
    else if (feet > 400 && feet <= 2000)
    {
        price= Totalfeet*0.02;
    }
    else if (feet > 200 && feet <= 2500) {
        price= 25;
    }
   return price;
}