function toggleReturnDate() {
  var tripType = document.querySelector('input[name="trip"]:checked').value;
  var returnDateGroup = document.getElementById("return-date-group");

  if (tripType === "round-trip") {
    returnDateGroup.style.display = "block";
  } else {
    returnDateGroup.style.display = "none";
  }
}

function openRegistration() {
  document.getElementById("registration-overlay").style.display = "block";
}

// Airport suggestion

function toggleReturnDate() {
  var tripType = document.querySelector('input[name="trip"]:checked').value;
  var returnDateGroup = document.getElementById("return-date-group");

  if (tripType === "round-trip") {
    returnDateGroup.style.display = "block";
  } else {
    returnDateGroup.style.display = "none";
  }
}

function openRegistration() {
  document.getElementById("registration-overlay").style.display = "block";
}

const airportSuggestions = [
  "New York JFK",
  "Los Angeles LAX",
  "London Heathrow",
  "Tokyo Narita",
  // Add more airport names here...
];

function showSuggestions(input) {
  const suggestionList = input.nextElementSibling;
  suggestionList.innerHTML = "";

  const inputValue = input.value.trim().toUpperCase();

  if (inputValue.length > 0) {
    const filteredSuggestions = airportSuggestions.filter(suggestion =>
      suggestion.toUpperCase().startsWith(inputValue)
    );

    const maxSuggestions = 4;

    for (let i = 0; i < Math.min(filteredSuggestions.length, maxSuggestions); i++) {
      const suggestion = filteredSuggestions[i];
      const listItem = document.createElement("li");
      listItem.textContent = suggestion;
      listItem.addEventListener("click", function() {
        input.value = suggestion;
        suggestionList.innerHTML = "";
      });
      suggestionList.appendChild(listItem);
    }

    suggestionList.style.display = "block";
  } else {
    suggestionList.style.display = "none";
  }
}

function hideSuggestions() {
  const suggestionLists = document.getElementsByClassName("suggestion-list");
  for (let i = 0; i < suggestionLists.length; i++) {
    suggestionLists[i].style.display = "none";
  }
}

function searchFlights(event) {
  event.preventDefault();

  // Retrieve form data
  const origin = document.getElementById("origin").value;
  const destination = document.getElementById("destination").value;
  const departureDate = document.getElementById("departure-date").value;
  const returnDate = document.getElementById("return-date").value;
  const passengers = document.getElementById("passengers").value;

  // Perform flight search or submit the form to the server
  // Add your implementation here
}

document.getElementById("loginForm").addEventListener("submit", registerUser);

function registerUser(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const email = document.getElementById("email").value;

  // Make a POST request to the server to save the login information
  fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username, password, email })
  })
  .then(response => response.json())
  .then(data => {
    console.log("User registered successfully", data);
    // Optionally, you can redirect the user to a success page
    // window.location.href = "/success.html";
  })
  .catch(error => {
    console.error("Error registering user", error);
    // Handle the error appropriately (e.g., display an error message)
  });
}

