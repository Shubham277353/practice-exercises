const userLeft = false ;
const userWatchingCatMeme = true;

function watchLecture(callBack,errorCallBack){
    if(userLeft){
        errorCallBack({
            name: "user left",
            message: ":("
        })
    }else if (userWatchingCatMeme){
        errorCallBack({
            name : "user watching cat meme",
            message: "JsLecture < cat"
        })
    }else{
        callBack("wow very nice , you studying!")
    }
}

watchLecture((message)=>{
    console.log("Message : ",message)
},(message)=>{
    console.log(message.name +" "+message.message);
})