import '../styles/index.scss';

console.log('Start...');

const maxZeroGap = n => {
    var number = n;
    var binary = '';
    var counter = -1;
    var max = 0;
    while(number > 0) {
        var digit = number % 2;
        
        if(digit === 1) {
            if(counter > max) {
                max = counter;
            }
            counter = 0;
        } else if(counter >= 0) {
            counter++;
        }
        
        binary = '' + digit + binary;
        number = parseInt(number / 2);
        console.log('number, binary:', number, binary);
    }
    
    
    
    return max;
};

console.log(maxZeroGap(9));