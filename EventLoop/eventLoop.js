new Promise((resolve) => {
  resolve(5);
}).then((num) => {
  console.log(num);
  return num * 2;
}).then((num2)=>{
    console.log(num2);
    return num2 *2;
}).then((num3)=>{
    console.log(num3);
})
