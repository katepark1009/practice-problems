var chargeAmount = 0;
var cashAmount = 0;
var results = {};

function populateRecords(array){
    // var newDiv = $('<div>');
    // $('#testArea').append(newDiv).addClass('transactionRecord testOutput');
    var newTable = $('<table>');
    var tr = $('<tr>');
    var td = $('<td>');
    

    for (i=0; i < array.length; i++){

        if (array[i].type === 'charge') {
            chargeAmount += parseFloat(array[i].amount);
        }
        else if (array[i].type === 'cash advance'){
            cashAmount += parseFloat(array[i].amount)
        }

        for (var key in array[i]){
            td.text(key);
        }
        tr.append(td);
        $(newTable).append(tr)
        $('body').append(newTable)
    }

   
   console.log(cashAmount);
   console.log(chargeAmount);
   results.charge = chargeAmount;
   results["cash advance"]= cashAmount;
   
   return results;
}
