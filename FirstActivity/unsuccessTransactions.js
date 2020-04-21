const fs = require ('fs');

fs.readFile('transactions.txt', 'utf-8', (error,data) => {
    if (error) {
        throw error;
    }
    let transactions = data.split('\n');
    for (i = 0; i < transactions.length; i++){
        let transactionItems = transactions[i].split(':');
        if (transactionItems.length >= 4) {
            result = transactionItems[3].toUpperCase();
            if (result == 'RJ' || result == 'CD'){
                console.log (transactionItems[0]);
            }
        }
    }
});