var sched;
$.get("https://spark.kentdenver.org/schedule_widget/", function(data) {
  sched = data;
});
console.log(sched);
