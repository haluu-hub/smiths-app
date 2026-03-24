export default {
	SelectedProjectsonOptionChange () {
		storeValue('selectedProjects', SelectedProjects.selectedOptionValues);
	},
	SelectedMembersonOptionChange () {
		storeValue('selectedMembers', SelectedMembers.selectedOptionValues);
	},
	getColor(pl1, at1) {
		return at1 > pl1? 'pink' : 'lightcyan';
	}
}