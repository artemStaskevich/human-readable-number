module.exports = function toReadable (number) {
    if (number == 0) {
        return 'zero';
    }
	
    var units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
	var dozens1 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    var dozens2 = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    
    var hundreds = Math.trunc(number/100),
		dozen = Math.trunc(number/10)%10,
		unit = number%10,
		add = number%100;	
   
	var res = [];
	if (hundreds != 0) {
		res.push(units[hundreds]);
		res.push('hundred');
	}
	
	if (add>= 10 && add< 20) {
		res.push(dozens1[add-10]);
	} else {
		if (dozen != 0) {
			res.push(dozens2[dozen]);
		}
		if (unit != 0) {
			res.push(units[unit]);
		}
	}

	return res.join(' ');
}
