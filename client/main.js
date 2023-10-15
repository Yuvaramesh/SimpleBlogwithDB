const posted = document.querySelector("#posted");
const rooms = document.querySelector("#rooms");
const foot = document.querySelector("#foot");
function calculateHousePrice() {
  // Get the input values
  var numRooms = parseInt(document.getElementById("rooms").value);
  var squareFootage = parseInt(document.getElementById("foot").value);
  // Perform your calculations here
  var basePricePerRoom = 5000; // Adjust this value based on your calculation logic
  var pricePerSquareFoot = 200; // Adjust this value based on your calculation logic

  var housePrice =
    basePricePerRoom * numRooms + pricePerSquareFoot * squareFootage;

  // Display the calculated house price
  var resultElement = document.getElementById("result");
  resultElement.textContent =
    "The Prediction Price of your House is: Rs." + housePrice;
}
const prediction = async () => {
  let val = await axios.post(
    "http://127.0.0.1:3010/userdata",
    {
      name: `${posted.value}`,
      room: `${rooms.value}`,
      sqfeet: `${foot.value}`,
    },
    {
      withCredentials: true,
    }
  );
  // alert("Form submitted!");
  // const val = await axios.get("http://127.0.0.1:3010/check"
};
