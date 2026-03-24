export default {
	SelectedDepartmentsonOptionChange () {
		storeValue('selectedDepartments', SelectedDepartments.selectedOptionValues);
	},
	getColor(pl1, at1) {
		return at1 > pl1? 'pink' : 'lightcyan';
	}
}