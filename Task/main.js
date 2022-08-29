// sum of the disits should be 9
// Digits should be in ascending order

for (var i = 0; i <= 200; i++) {
    
    if (i > 10) {

        let num = i.toString().split('')

        let integer = num.map((numbers) => { return Number(numbers) });

        let sum = integer.reduce((a, b) => a + b);

        if (sum == 9) {
            let arr = [];
            let ascendingValue = integer.sort().join(' is less than ');
            // let str;
            // if(i > 100){
            //     for(let x = 0; x < ascendingValue.length; x++){
            //         if(ascendingValue[x] == ascendingValue[x+1]){
            //             str = ascendingValue.slice(1, ascendingValue.length);
            //             console.log(str);                
            //         }
            //         // else{
            //         //     str = ascendingValue.slice(0, ascendingValue.length);
            //         // }
            //     }
            // }else{
            //     str = ascendingValue.slice(0, ascendingValue.length);
            // }
           
            console.log(ascendingValue);
            // console.log(str.join("less then"));
            console.log("sum of =", sum);

        }
        
    }
    
}
