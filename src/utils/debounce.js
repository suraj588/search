
const debounce = () => {
    let timeoutId;

    return function (callback,delay) {
        if(timeoutId){
            clearInterval(timeoutId);
        }
        timeoutId = setTimeout(callback,delay);
    }
}


export {debounce};