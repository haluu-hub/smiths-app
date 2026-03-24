export default {
	refresh () {
		SystemEffectiveness.run();
		ReportUserProductivity.run();
		ReportDocumentCountByUser.run();
		ReportDocumentCountByProject.run();
		ReworkReport.run();
	},
	convertToChart(data) {
	return Object.entries(data[0]).map(([key, value]) => ({
  	x: key,
  	y: value
	}));
	},
	getSystemEffectivenessData() {
		return this.convertToChart(SystemEffectiveness.data);
	},
	getReworkReportData() {
		return this.convertToChart(ReworkReport.data);
	}
}