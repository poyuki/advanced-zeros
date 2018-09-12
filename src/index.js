module.exports = function getZerosCount(number, base) {

    let i=2,r=[],distinctR,oneMoreArray=[],tempBase=base;
    while(i<Math.sqrt(base)){
        if(tempBase%i===0){
            r.push(i);
            tempBase/=i
        }else{
            i===2?i++:i+=2;
        }
    }
    distinctR=distinctArray(r);
    distinctR.forEach((el,index)=>{
        let i=1;
        oneMoreArray[index]=[];
        while (+((number/(Math.pow(el,i))).toFixed())!==0){
            let t=Math.pow(el,i);
            oneMoreArray[index].push((number/t).toFixed());
            i++;
        }
    })
};

let distinctArray = (arrArg) => {
    return arrArg.filter((elem, pos, arr) => {
        return arr.indexOf(elem) === pos;
    });
};












/*let res=0,numberInBase='',numberInBaseArray=[],temp;
    while(number>=base){
        temp=number%base;
        number=(number-temp)/base;
        numberInBaseArray.push(temp);
    }
    numberInBaseArray.push(number);

    for(let i=(numberInBaseArray.length-1);i>=0;i--){
        numberInBase+=numberInBaseArray[i];
    }
    numberInBase=parseInt(numberInBase);
    let currentVal=numberInBase-(numberInBase%5);
    while(currentVal>1){
        currentVal=(currentVal-(currentVal%5))/5;
        res+=currentVal;
    }



    return res;*/