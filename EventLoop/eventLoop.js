new Promise((resolve, reject) => {
  resolve("Hey its done ");
  reject("Something went wrong");
})
.catch((error) => {
  console.log("Error:", error);
})
  .then((result) => {
    console.log(result);
  })
