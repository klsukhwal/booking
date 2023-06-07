<!DOCTYPE html>
<html>
<head>
    <title>Flight Booking Site</title>
    <link rel="stylesheet" href="styles.css">
    <script src="script.js"></script>
</head>
<body>
    <header>
        <div class="logo">
            <h1>Sukhwal Airlines</h1>
        </div>
        <div class="login-button">
            <button onclick="openRegistration()">Register</button>
        </div>
    </header>

    <section class="flight-booking">
        <h2>Flight Booking</h2>
        <form>
            <div class="form-group">
                <label for="origin">Origin:</label>
                <input type="text" id="origin" name="origin" placeholder="Enter origin">
            </div>
            <div class="form-group">
                <label for="destination">Destination:</label>
                <input type="text" id="destination" name="destination" placeholder="Enter destination">
            </div>
            <div class="form-group">
                <label for="departure-date">Departure Date:</label>
                <input type="date" id="departure-date" name="departure-date" placeholder="Select departure date">
            </div>
            <div class="form-group">
                <label for="return-date">Return Date:</label>
                <input type="date" id="return-date" name="return-date" placeholder="Select return date">
            </div>
            <div class="form-group">
                <label for="passengers">Passengers:</label>
                <input type="number" id="passengers" name="passengers" value="1">
            </div>
            <div class="form-group">
                <label for="trip-type">Trip Type:</label>
                <select id="trip-type" name="trip-type">
                    <option value="one-way">One Way</option>
                    <option value="return">Return Journey</option>
                </select>
            </div>
            <button type="submit">Search Flights</button>
        </form>
    </section>

    <footer>
        <p>&copy; 2023 Sukhwal Airlines. All rights reserved.</p>
    </footer>

    <div class="overlay" id="registration-overlay">
        <div class="registration-form">
            <h2>Registration</h2>
            <form action="register.php" method="POST">
                <div class="form-group">
                    <label for="username">Username:</label>
                    <input type="text" id="username" name="username" required>
                </div>
                <div class="form-group">
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" required>
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>
                </div>
                <button type="submit">Register</button>
            </form>
            <p>Already have an account? <a href="login.php">Login here</a>.</p>
        </div>
    </div>

    <script>
        function openRegistration() {
            document.getElementById("registration-overlay").style.display = "block";
        }
    </script>
</body>
</html>
