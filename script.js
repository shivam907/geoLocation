const latt = document.getElementById("lat-t");
const lont = document.getElementById("lon-t");
const latd = document.getElementById("lat-d");
const lond = document.getElementById("lon-d");

function getLocation() {
  // console.log();
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
    // Write code here.
  } else {
    x.textContent = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  fetch(
    `https://us1.locationiq.com/v1/reverse?key=pk.7dde9b3bb52d01c5d20352be5b9cfac9&lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.address.city) {
        latt.textContent = "City: ";
        latd.textContent = data.address.city;
      } else if (data.address.village) {
        latt.textContent = "Village: ";
        latd.textContent = data.address.village;
      }

      lont.textContent = " State: ";
      lond.textContent = data.address.state;
    });
}
