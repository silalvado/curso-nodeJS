const fs = require ('fs');

fs.readFile('./res/transactions.txt', 'utf-8', (error,data) => {
    if (error) {
        throw error;
    }
    let lines = data.split('\n');
    for (i = 0; i < lines.length; i++){
        line = lines[i];
        l = line.length;
        if (l >= 2){
            result = line[l-2] + line[l-1];
            if (result != 'OK'){
                console.log (line);
            }
        }
    }
});