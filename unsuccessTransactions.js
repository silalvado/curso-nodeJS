const fs = require ('fs');

fs.readFile('transactions.txt', 'utf-8', (error,data) => {
    if (error) {
        throw error;
    }
    let lines = data.split('\n');
    for (i = 0; i < lines.length; i++){
        let item = lines[i].split(':');
        if (item.length >= 4) {
            result = item[3].toUpperCase();
            if (result == 'RJ' || result == 'CD'){
                console.log (item[0]);
            }
        }
    }
});