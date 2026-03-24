export default {
	currentYear () {
		return new Date().getFullYear();
	},
	currentMonth () {
		return new Date().getMonth();
	},
	getWeekNumber() {
		var date = new Date(SelectedYear.value, SelectedMonth.value, 1);
		const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
		const pastDaysOfYear = (date - firstDayOfYear) / 86400000 + 1;

		// Calculate ISO week number
		const weekNumber = Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 5) / 7);

		SelectedWeek.setValue(weekNumber);
		SelectedYear.setValue(date.getFullYear());
		return weekNumber;
	},
	aa() {Table1.tableHeaders.entries()[1].setLabel('aaa');
		var a = Table1.tableHeaders.entries();
		a.next();
		a.next();
		a.next().value[1].label="aa";
		
		return a.next();
	}
}