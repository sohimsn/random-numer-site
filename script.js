function generate() {
  const min = parseInt(document.getElementById("min").value);
  const max = parseInt(document.getElementById("max").value);

  if (isNaN(min) || isNaN(max)) {
    document.getElementById("result").innerText = "Enter numbers!";
    return;
  }

  const result = Math.floor(Math.random() * (max - min + 1)) + min;
  document.getElementById("result").innerText = "Result: " + result;
}