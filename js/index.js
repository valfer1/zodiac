function zodiac(month,day) {
  month = document.getElementById("month").value;
  day = document.getElementById("day").value;
  if (month == 3 && day >= 24 || month == 4 && day <= 21) {
    text="Aries";
  } else if (month == 4 && day >= 22 || month == 5 && day <= 21) {
    text="Taurus";
  } else if (month == 5 && day >= 22 || month == 6 && day <= 21) {
    text= "Gemini";
  } else if (month == 6 && day >= 22 || month == 7 && day <= 21) {
    text= "Cancer";
  } else if (month == 7 && day >= 22 || month == 8 && day <= 22) {
    text= "Leo";
  } else if (month == 8 && day >= 23 || month == 9 && day <= 21) {
    text= "Virgo";
  } else if (month == 9 && day >= 22 || month == 10 && day <= 21) {
    text= "Libra";
  } else if (month == 10 && day >= 22 || month == 11 && day <= 22) {
    text= "Escorpio";
  } else if (month == 11 && day >= 23 || month == 12 && day <= 21) {
    text= "Sagittarius";
  } else if (month == 12 && day >= 22 || month == 1 && day <= 21) {
    text= "Capricornus";
  } else if (month == 1 && day >= 22 || month == 2 && day <= 21) {
    text= "Aquarius";
  } else if (month == 2 && day >= 22 || month == 3 && day <= 23) {
    text= "Pisces";
  }
  document.getElementById("result").innerHTML = text ;
}