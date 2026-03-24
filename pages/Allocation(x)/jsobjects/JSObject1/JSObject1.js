export default {
	myVar1: [],
	myVar2: {},
	calculateWeeklyAllocation(data) {
  const weeks = {};

  data.forEach(allocation => {
    const start = new Date(allocation.allocation_start);
    const end = new Date(allocation.allocation_end);
    const weeklyEffort = allocation.allocation_percentage / 100;

    let currentDate = new Date(start);

    while (currentDate <= end) {
      // Calculate the week number for the current date
      const weekStart = new Date(currentDate);
      weekStart.setDate(currentDate.getDate() - currentDate.getDay()); // Start of the week (Sunday)

      const weekKey = `${weekStart.getFullYear()}-W${Math.ceil((weekStart.getDate() + 1) / 7)}`;

      // Initialize the week if not present
      if (!weeks[weekKey]) {
        weeks[weekKey] = {};
      }

      // Initialize the project if not present
      if (!weeks[weekKey][allocation.project_id]) {
        weeks[weekKey][allocation.project_id] = {
          project_name: allocation.project_name,
          members: {}
        };
      }

      // Initialize the member if not present
      if (!weeks[weekKey][allocation.project_id].members[allocation.member_id]) {
        weeks[weekKey][allocation.project_id].members[allocation.member_id] = {
          full_name: allocation.full_name,
          effort: 0
        };
      }

      // Add the weekly effort
      weeks[weekKey][allocation.project_id].members[allocation.member_id].effort += weeklyEffort;

      // Move to the next week
      currentDate.setDate(currentDate.getDate() + 7);
    }
  });

  return weeks;
 },
	myFun2 () {
		//return SelectQuery.data;
		return this.calculateWeeklyAllocation(SelectQuery.data);
	}
}