export default {
	myVar1: [],
	myVar2: {},
	getTommorow() {
		const today = new Date();
		const tomorrow = new Date(today);
		tomorrow.setDate(today.getDate() + 1);
		return tomorrow;
	},
	today() {
		return moment().toISOString().split('T')[0];
	}
}