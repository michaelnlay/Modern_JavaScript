const d = new Date(2022, 4, 10, 8, 0, 0);
const month = d.getMonth();
const hour = d.getHours();

switch (
  month //switch is normally use with immediate value and is great for multiple if statements
) {
  case 1:
    console.log("It is January");
    break;

  case 2:
    console.log("It is feb");
    break;

  case 3:
    console.log("It is march");
    break;
  default:
    console.log("It is not jan, feb or march");
}

switch (true) {
  case hour < 12:
    console.log("Good morning");
    break;
  case hour < 18:
    console.log("Good afternon");
    break;

    default:
        console.log('Good night');
}
