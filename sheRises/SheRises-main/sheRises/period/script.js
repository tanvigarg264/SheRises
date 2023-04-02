function calculateAndSuggest() {
  // Get the user's input for the start date and cycle length
  let startDate = new Date(document.getElementById("startDate").value);
  let cycleLength = parseInt(document.getElementById("cycleLength").value);

  // Add the constraint of input date not less than a month ago
  const currentDate = new Date();
  const oneMonthAgo = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, currentDate.getDate());
  if (startDate < oneMonthAgo) {
    alert("Error: The start date should not be less than a month ago.");
    return;
  }

  // Calculate the next expected period date based on the start date and cycle length
  let nextPeriod = new Date(startDate.getTime());
  nextPeriod.setDate(nextPeriod.getDate() + cycleLength);

  // Calculate the current day of the menstrual cycle
  const today = new Date();
  const daysPassed = Math.floor((today - startDate) / (24 * 60 * 60 * 1000)) + 1;
  const currentDay = daysPassed % cycleLength;

  // Determine the menstrual cycle phase based on the current day
  let phase;
  if (currentDay <= 5) {
    phase = "Menstruation";
  } else if (currentDay <= 14) {
    phase = "Follicular";
  } else if (currentDay <= 21) {
    phase = "Ovulatory";
  } else {
    phase = "Luteal";
  }

  // Suggest self-care tips based on the menstrual cycle phase
  let tips;
  if (phase === "Menstruation") {
    tips = "Get plenty of rest, stay hydrated, use heating pads for cramps, and consider taking pain relief medication.";
  } else if (phase === "Follicular") {
    tips = "Focus on eating a healthy diet, exercising regularly, and getting enough sleep.";
  } else if (phase === "Ovulatory") {
    tips = "Try to reduce stress, focus on self-care activities, and consider using ovulation predictor kits if trying to conceive.";
  } else {
    tips = "Stay hydrated, reduce caffeine intake, and practice stress-reducing activities such as yoga or meditation.";
  }

  // Display the next expected period date, menstrual cycle phase, and self-care tips
  document.getElementById("nextPeriodDisplay").innerHTML = "Your next period is expected on: " + nextPeriod.toDateString();
  document.getElementById("phaseDisplay").innerHTML = "You are currently in the " + phase + " phase of your menstrual cycle.";
  document.getElementById("tipsDisplay").innerHTML = "Self-care tips: " + tips;
}
