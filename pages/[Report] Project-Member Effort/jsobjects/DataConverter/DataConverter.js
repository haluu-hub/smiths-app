export default {
	myVar1: [],
	myVar2: {},
	divideNumbersBy(data, y) {
		// Iterate over each object in the array
		var sum = {}
		sum["project"] = "Total";
		data.forEach(obj => {
			// Iterate over each key-value pair in the object
			for (let key in obj) {
				if (typeof obj[key] === 'number') {
					// Divide each number value by 40
					obj[key] = parseFloat((obj[key] / y).toFixed(0));
					sum[key] = sum[key]? sum[key] + obj[key] : obj[key];
				}
			}
		  obj['Avg Actual'] = parseFloat((obj['tat'] / 5).toFixed(1));
		  obj['Avg Plan'] = parseFloat((obj['tpl'] / 5).toFixed(1));
		});
		sum['Avg Plan'] = sum['tpl'] / 5;
		sum['Avg Actual'] = sum['tat'] / 5;
		data.push(sum)
		return data;
	},
	getMemberWeeklyEffort() {
		return this.divideNumbersBy(DataWithCond.data, TableUnit.selectedOptionValue);
	}
}