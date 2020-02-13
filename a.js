function consoleMessage(message) {
  console.log(`hello ${message}`);
}

consoleMessage();

setTimeout(() => {
  consoleMessage("Genesis");
}, 4000);

function getWords() {
  setTimeout(() => {
    consoleMessage("1");
  }, 1000);
  setTimeout(() => {
    consoleMessage("2");
  }, 2000);
  setTimeout(() => {
    consoleMessage("3");
  }, 3000);
}

getWords();

function done() {
  console.log("Job finished");
}

function countDown(num) {
  let count = setInterval(() => {
    num--;
    if (num == 1) {
      clearInterval(count);
      done();
    }
    console.log(num);
  }, 1000);
}

countDown(9);

let lunchTime = true;



const orderMeSomeFood = () => {
  return new Promise((resolve, reject) => {
    if ((lunchTime = false)) {
      let meal = {
        lunch: "your favorite food",
        drink: "your favorite drink"
      };
      resolve(meal)
    } else {
        let wrong = new Error('not hungry yet')
        reject(wrong)
    }
  });
};


orderMeSomeFood()
.then((meal)=>{
console.log(meal)
})

//       if (random % 2 === 0) {

// function slowEcho(message, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let random = 2;
//         resolve(message);
//       } else {
//         let err = new Error("what happened");
//         reject(err);
//         // resolve(message)
//       }
//     }, delay);
//   });
// }

// document.getElementById("btn").addEventListener("click", async () => {
//  try{
//      let message = await slowEcho('ive been waiting',1000)
//      console.log(message)
//  }
//  catch(e){
//      console.log(e)

//  }
// });
