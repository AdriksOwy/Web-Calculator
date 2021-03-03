// function numberadd(event) {
//   var targ = event.target || event.srcElement;
//   document.getElementById("displayercalc").value += targ.textContent || targ.innerText;
// }

const numberadd = (event) => {
  const displayer = event.target || event.srcElement;
  document.getElementById("displayercalc").value += displayer.textContent || displayer.innerText;
}