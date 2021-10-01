function addingEventListener() {
  const input = document.getElementById("input");
  function alerted() {
    alert("IT'S A TRAPP!!");
  }
  input.addEventListener("click", addingEventListener);
}
