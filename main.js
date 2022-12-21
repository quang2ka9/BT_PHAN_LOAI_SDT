var classifyPhoneCarrier = function (numbers) {
    var i = 0;
    var mobiphone = [];
    var vinaphone = [];
    var viettel = [];
    while (i < numbers.length) {
        if (numbers[i].substring(0, 3) == '123') {
            mobiphone.push(numbers[i]);
            i++;
        }
        else if (numbers[i].substring(0, 3) == '124') {
            vinaphone.push(numbers[i]);
            i++;
        }
        else {
            viettel.push(numbers[i]);
            i++;
        }
    }
    console.log('Mobiphone: ' + mobiphone);
    console.log('Vinaphone: ' + vinaphone);
    console.log('Viettel: ' + viettel);
};
classifyPhoneCarrier(['123654', '124822', '124675', '1267894', '123578', '1234567']);
