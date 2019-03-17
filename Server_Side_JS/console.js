function reverseString(inputString) {
    let splitString = inputString.split(' ');
    let reversedInput = [];
    
    splitString.forEach(element => {
        let word = element.split('');
        let reverseWord = word.reverse().join('');  
        reversedInput.push(reverseWord);
    })

 
    return reversedInput.join(' ');
 }

 reverseString("My Name Is Carlos and I study at Bloc")