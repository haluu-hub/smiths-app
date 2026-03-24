export default {
	myVar1: [],
	myVar2: {},
	getEndOfWeek(date) {
    const dayOfWeek = date.getDay(); // 0 (Sunday) to 6 (Saturday)
    const daysUntilEndOfWeek = 7 - dayOfWeek; // Days until Sunday
		
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
  }, 
	getEndOfCurrentWeek() {
		return this.getEndOfWeek(new Date());
	}, 
	getStartOfCurrentWeek() {
		return this.getStartOfWeek(new Date());
	},
	getFromDate() {
    const date = new Date(FromDatePicker.formattedDate?FromDatePicker.formattedDate: "2000-01-01");
    date.setUTCHours(0, 0, 0, 0);
    return date.toISOString();
	},
	getToDate() {
    const date = new Date(ToDatePicker.formattedDate? ToDatePicker.formattedDate : "3000-01-01");
    date.setUTCHours(0, 0, 0, 0);
    return date.toISOString();
	},
}