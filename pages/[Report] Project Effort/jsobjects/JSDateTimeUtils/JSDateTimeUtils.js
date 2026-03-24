export default {
	currentYear () {
		return new Date().getFullYear();
	},
	currentMonth () {
		return new Date().getMonth();
	},
	getFirstWeekOfCurrentMonth() {
		const today = new Date();
		const year = today.getFullYear();
		const month = today.getMonth();

		// Get the first day of the month
		const firstDayOfMonth = new Date(year, month, 1);
		// Calculate the week number of the first week in the current month
		return this.getWeekNumberFromDate(firstDayOfMonth);
	}, 
	getWeekNumberFromDate(date) {
		const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
		const pastDaysOfYear = (date - firstDayOfYear) / 86400000 + 1;

		// Calculate ISO week number
		const weekNumber = Math.ceil((pastDaysOfYear + firstDayOfYear.getDay()) / 7);

		return weekNumber;
	},
	getStartDateOfWeekId(year, week) {
		// Get the first day of the year
		const firstDayOfYear = new Date(year, 0, 1);
		// Calculate the day of the week (0 is Sunday, 6 is Saturday)
		const dayOfWeek = firstDayOfYear.getDay();
		// Calculate the start date of the first ISO week (first Monday of the year)
		const daysUntilFirstMonday = (dayOfWeek <= 4 ? 1 - dayOfWeek : 8 - dayOfWeek);
		const firstMonday = new Date(firstDayOfYear);
		firstMonday.setDate(firstDayOfYear.getDate() + daysUntilFirstMonday);

		// Calculate the start date of the desired week
		const startOfWeek = new Date(firstMonday);
		startOfWeek.setDate(firstMonday.getDate() + (week - 1) * 7);

		return startOfWeek;
	},
	getWeekNumber() {
		var date = this.getStartDate();
		return this.getWeekNumberFrom1970(date);
	},
	getWeekNumber2() {
		var date = this.getStartDate();
		const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
		const pastDaysOfYear = (date - firstDayOfYear) / 86400000 + 1;

		// Calculate ISO week number
		const weekNumber = Math.ceil((pastDaysOfYear + firstDayOfYear.getDay()) / 7);

		return weekNumber;
	},
		
	getWeekNumberFrom1970(date) {
    const epochStart = new Date(Date.UTC(1970, 0, -2)); // 1970-01-01 at UTC
    const millisecondsPerWeek = 7 * 24 * 60 * 60 * 1000; // Milliseconds in a week

    // Calculate the difference in milliseconds
    const diffInMilliseconds = date - epochStart;

    // Convert to week number (whole weeks since 1970-01-01)
    const weekNumber = Math.floor(diffInMilliseconds / millisecondsPerWeek) + 1;

    return weekNumber;
  },
	
	getStartDate() {
		return this.getStartDateOfWeekId(SelectedYear.value, SelectedWeek.value);
	},
	getEndDate() {
		var startDate = this.getStartDate();
		var endDate = new Date(startDate);
		endDate.setDate(startDate.getDate() + 7 * 5); // 5 weeks later
		return endDate;
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
	getNextWeekDate(date) {
		var newDate = new Date(date);
		newDate.setDate(date.getDate() + 7);
		return newDate;
	}
}