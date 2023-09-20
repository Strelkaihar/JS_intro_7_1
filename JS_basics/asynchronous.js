function start (){
    console.log("Start")
}
function inProgress (){
    setTimeout(() => {
        console.log("inProgress")
    }, 2000)
}
function end (){
    console.log("End")
}
start();
inProgress();
end();

// 
function start (){
    console.log("Start")
}
function inProgress (callback){
    setTimeout(() => {
        console.log("inProgress")
        callback()
    }, 2000)
}
function end (){
    console.log("End")
}
start();
inProgress(end);

function downloadImage(url, theCallBack, failure) {
    setTimeout(() => {
        console.log(`Downloading ${url}`)
        theCallBack(url)
    }, 3000)
}
const url1 = "Https:// example"
const url2 = "Https:// example"

downloadImage(url1, (myUrl) => {
    console.log(`Downloading image from ${myUrl} ...`);
    downloadImage(url2, (myUrl) => {
    console.log(`Downloading image 2 ${myUrl}`);
    })
});

// Create a simple Promise
const myPromise = new Promise((resolve, reject) => {
    // resolve("Fullfilled");
    // reject("Failed")
});
console.log(myPromise);

// Convert 
function goToUrl() {
    console.log("go to url")
}
function findButton(callback) {
    setTimeout(() => {
        console.log("Find button")
        callback()
    }, 2000)
}
function assetText() {
    console.log("asset text")
}
goToUrl();
findButton(assetText)


