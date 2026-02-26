const userLeft = false;
const userWatchingCatMeme = false;

function watchPromiseLecture() {
  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({
        name: "user left",
        message: ":(",
      });
    } else if (userWatchingCatMeme) {
      reject({
        name: "user watching cat meme",
        message: "JsLecture < cat",
      });
    } else {
      resolve("wow very nice , you studying!");
    }
  });
}

watchPromiseLecture()
  .then((message) => {
    console.log("Message : ", message);
  })
  .catch((message) => {
    console.log(message.name + " " + message.message);
  });
