export default {
	myVar1: [],
	myVar2: {},
	divideNumbersBy(data, y) {
    // Iterate over each object in the array
    data.forEach(obj => {
        // Iterate over each key-value pair in the object
        for (let key in obj) {
            if (typeof obj[key] === 'number') {
                // Divide each number value by 40
                obj[key] = parseFloat((obj[key] / y).toFixed(2));
            }
        }
    });
    return data;
  },
	getMemberWeeklyEffort() {
		if (SelectReportType.selectedOptionValue === "PROJECT") {
			return this.divideNumbersBy(MemberWeeklyEffort.data, TableUnit.selectedOptionValue);
		} else if (SelectReportType.selectedOptionValue === "MEMBER") {
			return this.divideNumbersBy(ProjectWeeklyEffort.data, TableUnit.selectedOptionValue);
		} else {
			return this.divideNumbersBy(ProjectMemberWeeklyEffort.data, TableUnit.selectedOptionValue);
		}
	}
}