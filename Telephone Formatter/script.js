const input = document.querySelector('input');

let flag = true;
input.addEventListener('input',(e)=>{
    const inputValue = e.target.value;

    if(/\d+$/g.test(inputValue)){
        input.value = inputValue;
    }
    else{
        input.value = inputValue.substring(0,inputValue.length - 1);
    }

    if(inputValue.length == 4 && flag){
        input.value = `+(${inputValue.substring(0,3)}) - ${inputValue[inputValue.length - 1]}`;
        flag = false;
    }
    else if(inputValue.length == 9 && !flag){
        input.value = input.value.slice(2,5);
        flag = true;
    }
})