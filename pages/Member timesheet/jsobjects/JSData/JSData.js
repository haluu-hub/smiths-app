export default {
	copyRows () {
		data_table.selectedRows.forEach(row => {storeValue("row", row).then(()=>CustomInsert.run().then(()=>SelectQuery.run()))});
  },
	copyRows2 () {
		data_table.selectedRows.forEach(row =>
		   CustomInsert2.run({note:row.note,
member_id:row.member_id,
project_id:row.project_id,
timesheet_type_id:row.timesheet_type_id,
working_date:CopyDatePicker.formattedDate,
estimated_hours:row.estimated_hours,
actual_hours:row.actual_hours,
amount:row.amount,
week_id:row.week_id}));
 }
}