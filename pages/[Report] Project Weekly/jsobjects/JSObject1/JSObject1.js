export default {
	myVar1: [],
	myVar2: {},
	myFun1 () {
		//	write code here
		//	this.myVar1 = [1,2,3]
	},
	
	getWeekNumber() {
		var date = new Date(DatePicker1.selectedDate);
		date = new Date(date.getFullYear(), date.getMonth(), 1);
		const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
		const pastDaysOfYear = (date - firstDayOfYear) / 86400000 + 1;

		// Calculate ISO week number
		const weekNumber = Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 5) / 7);

		SelectedWeek.setValue(weekNumber);
		SelectedYear.setValue(date.getFullYear());

	}
}