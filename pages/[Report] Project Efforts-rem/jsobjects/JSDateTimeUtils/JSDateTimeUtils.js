export default {
	currentYear () {
		return new Date().getFullYear();
	},
	currentMonth () {
		return new Date().getMonth();
	},
	getWeekNumber() {
		var date = this.getStartDate();
		const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
		const pastDaysOfYear = (date - firstDayOfYear) / 86400000 + 1;

		// Calculate ISO week number
		const weekNumber = Math.ceil((pastDaysOfYear + firstDayOfYear.getDay()) / 7);

		SelectedWeek.setValue(weekNumber);
		SelectedYear.setValue(date.getFullYear());
		this.calculateWeek();
		return weekNumber;
	},
	getWeekNumber2() {
		var date = this.getStartDate();
		const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
		const pastDaysOfYear = (date - firstDayOfYear) / 86400000 + 1;

		// Calculate ISO week number
		const weekNumber = Math.ceil((pastDaysOfYear + firstDayOfYear.getDay()) / 7);

		return weekNumber;
	},
	getStartDate() {
		return new Date(SelectedYear.value, SelectedMonth.value-1, 1);
	},
	getEndDate() {
		return new Date(SelectedYear.value, SelectedMonth.value, 1);
	},
	getEndOfWeek(date) {
    const dayOfWeek = date.getDay(); // 0 (Sunday) to 6 (Saturday)
    const daysUntilEndOfWeek = 1 - dayOfWeek; // Days until Sunday
		
		var e = new Date(date);

    // Set date to end of the current week
    e.setDate(date.getDate() + daysUntilEndOfWeek);

    return e;
  }, getStartOfWeek(date) {
    const dayOfWeek = date.getDay(); // 0 (Sunday) to 6 (Saturday)
    const daysUntilEndOfWeek = 1 - dayOfWeek; // Days until Sunday
		var e = new Date(date);
    // Set date to end of the current week
    e.setDate(date.getDate() + daysUntilEndOfWeek);
    return e;
  }, getEndOfCurrentWeek() {
		return this.formatDate(this.getEndOfWeek(new Date()));
	},
	formatDate(date) {
		return date.toISOString().split('T')[0];
	},
	calculateWeek() {
		var d =new Date(SelectedYear.value, SelectedMonth.value-1, 1);
		Week1Picker.setValue(d);
		Week2Picker.setValue(this.getStartOfWeek(new Date(SelectedYear.value, SelectedMonth.value-1, 8)));
		Week3Picker.setValue(this.getStartOfWeek(new Date(SelectedYear.value, SelectedMonth.value-1, 15)));
		Week4Picker.setValue(this.getStartOfWeek(new Date(SelectedYear.value, SelectedMonth.value-1, 22)));
		Week5Picker.setValue(this.getStartOfWeek(new Date(SelectedYear.value, SelectedMonth.value-1, 29)));


	}
}