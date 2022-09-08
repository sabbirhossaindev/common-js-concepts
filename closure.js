function kitchen(){
    let roast = 0;
    return function(){
        roast++;
        return roast;
    }
}

const firstServer = kitchen();
const sec = kitchen();
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());
console.log(sec());