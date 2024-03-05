const form = document.querySelector("form") as HTMLFormElement;
const customer = document.querySelector("#name") as HTMLInputElement;
const age = document.querySelectorAll(
  `[name="age"]`
) as NodeListOf<HTMLInputElement>;
const healthStatus = document.querySelectorAll(
  `[name="status"]`
) as NodeListOf<HTMLInputElement>;
const googHabits = document.querySelectorAll(
  `[name="goodHabit"]`
) as NodeListOf<HTMLInputElement>;
const badHabits = document.querySelectorAll(
  `[name="badHabit"]`
) as NodeListOf<HTMLInputElement>;

const riskscore = document.querySelector("#riskscore") as HTMLInputElement;

const riskscoreCal = () => {
  let customerName: string = customer.value;
  let ageResult: string = "";
  let healthStatusResult: string[] = [];
  let goodHabitResult: string[] = [];
  let badHabitResult: string[] = [];
  let score: number | string = 500;

  //calculating riskscore for age
  age.forEach((item) => {
    if (item.checked) {
      ageResult = item.id;
    }
  });

  switch (ageResult) {
    case "age1":
      score;
      break;
    case "age2":
      score *= 1.1;
      break;
    case "age3":
      score *= 1.3;
      break;
    case "age4":
      score *= 1.6;
      break;
    case "age5":
      score *= 2;
      break;
    case "age6":
      score *= 2.5;
      break;
    case "age7":
      score *= 3.1;
      break;
  }

  //calculating riskscore for health status
  healthStatus.forEach((disease) => {
    if (disease.checked) {
      healthStatusResult.push(disease.value);
    }
  });
  if (healthStatusResult.length > 0) {
    score *= 1 + healthStatusResult.length / 100;
  }

  //calculating riskscore for good habits
  googHabits.forEach((goodHabit) => {
    if (goodHabit.checked) {
      goodHabitResult.push(goodHabit.value);
    }
  });
  if (goodHabitResult.length > 0) {
    score *= 1 - (goodHabitResult.length * 5) / 100;
  }

  //calculating riskscore for bad habits
  badHabits.forEach((badHabit) => {
    if (badHabit.checked) {
      badHabitResult.push(badHabit.value);
    }
  });
  if (badHabitResult.length > 0) {
    score *= 1 + (badHabitResult.length * 5) / 100;
  }

  if (typeof score === "number") {
    riskscore.textContent = score.toFixed(2); // No error
  } else {
    riskscore.textContent = score; // Handle the case where score is a string
  }
};

form.addEventListener("input", riskscoreCal);
