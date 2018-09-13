module.exports = function getZerosCount(number, base) {
    let res=0;
    if(base!==10) {
        let i = 2, r = 0,
            ArrayForBaseFactors = new Map(),
            ArrayForBaseFactorsCount = new Map(),
            tempBase = base;

        while (i < Math.sqrt(base)) {
            if (tempBase % i === 0) {
                r++;
                ArrayForBaseFactors.set(i, r);
                tempBase /= i
            } else {
                i === 2 ? i++ : i += 2;
                r = 0;
            }
        }
        if(tempBase!==1) ArrayForBaseFactors.set(tempBase, 1);
        /*if(ArrayForBaseFactors.size===0){
            ArrayForBaseFactors.set(base, 1)
        }*/


        ArrayForBaseFactors.forEach((value, key,map) => {
            let i = 1, sum = 0;

            while (Math.trunc(number / (Math.pow(key, i))) !== 0) {
                let t = Math.pow(key, i);
                sum += Math.trunc(number/ t);
                i++;
            }
            ArrayForBaseFactorsCount.set(key, sum);
        });
        let minVal = Infinity, minKey;

        ArrayForBaseFactorsCount.forEach((value, key) => {
            if (value < minVal) {
                minVal = value;
                minKey = key;
            }
        });
        return res = Math.trunc(minVal / (ArrayForBaseFactors.get(minKey)));
    }else{
        let currentVal=number-(number%5);
        while(currentVal>1){
            currentVal=(currentVal-(currentVal%5))/5;
            res+=currentVal;
        }

        return res;
    }
};
