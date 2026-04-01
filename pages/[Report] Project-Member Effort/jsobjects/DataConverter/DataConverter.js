export default {
	myVar1: [],
	myVar2: {},
	divideNumbersBy(data, y) {
		if (!data) return [];
		let newData = structuredClone(data);
		var sum = {}
		sum["project"] = "Total";
		newData.forEach(obj => {
			for (let key in obj) {
				if (typeof obj[key] === 'number') {
					obj[key] = parseFloat((obj[key] / y).toFixed(0));
					sum[key] = sum[key]? sum[key] + obj[key] : obj[key];
				}
			}
		  obj['Avg Actual'] = parseFloat((obj['tat'] / 5).toFixed(1));
		  obj['Avg Plan'] = parseFloat((obj['tpl'] / 5).toFixed(1));
		});
		sum['Avg Plan'] = sum['tpl'] / 5;
		sum['Avg Actual'] = sum['tat'] / 5;
		newData.push(sum)
		return newData;
	},
	getMemberWeeklyEffort() {
		return this.divideNumbersBy(DataWithCond.data, TableUnit.selectedOptionValue);
	}
}