function calculateNextPeriod() {
  // Get the user's input for the start date and cycle length
  let startDate = new Date(document.getElementById("startDate").value);
  let cycleLength = parseInt(document.getElementById("cycleLength").value);

  // Calculate the next expected period date based on the start date and cycle length
  let nextPeriod = new Date(startDate.getTime());
  nextPeriod.setDate(nextPeriod.getDate() + cycleLength);

  // Display the next expected period date
  document.getElementById("nextPeriodDisplay").innerHTML = "Your next period is expected on: " + nextPeriod.toDateString();
}
