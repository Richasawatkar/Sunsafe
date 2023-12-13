// Import required modules
import express from "express";
import axios from "axios";

// Create an Express application
const app = express();
const port = 3000;

// Middleware to serve static files from the 'public' directory
app.use(express.static("public"));

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Define a route for the root path that renders the 'index.ejs' template
app.get("/", (req, res) => {
    res.render("index.ejs");
});

// Define a route for handling the form submission
app.post("/submit", async (req, res) => {
    try {
        // Extract location and skin type from the form data
        const location = req.body.loc;
        const skin = req.body.skin;
        console.log(location);
        console.log(skin);

        // Check if a location is provided
        if (!location) {
            res.render("index.ejs", { error: "Please enter a location." });
            return;
        }

        // Make a request to MapQuest API to get the latitude and longitude of the location
        const response = await axios.get(
            `https://www.mapquestapi.com/geocoding/v1/address?key=PpnJ9YQRSjE1YclU5Mg7ssdA3PuQFF6d&location=${encodeURIComponent(location)}`
        );
        const res1 = response.data;
        const lat = res1.results[0].locations[0].latLng.lat;
        const lng = res1.results[0].locations[0].latLng.lng;
        console.log(lat);
        console.log(lng);

        // Make a request to OpenUV API to get UV data based on location
        const response2 = await axios.get("https://api.openuv.io/api/v1/uv", {
            headers: { 'x-access-token': 'openuv-9fbc5lrlps9q7lg-io' },
            params: {
                lat: lat,
                lng: lng,
                alt: 100,
                dt: ""
            }
        });
        const res2 = response2.data;

        // Extract safe exposure time from the response
        const safeExposureTime = res2.result.safe_exposure_time[`st${skin}`];
        const hours=safeExposureTime/60;
        const hour=Math.trunc(hours);

        // Render the 'index2.ejs' template and pass necessary data
        res.render("index2.ejs", {
            uv: res2.result.uv,
            uv_max: res2.result.uv_max,
            oz: res2.result.ozone,
            skinType: skin,
            safeExposureTime: safeExposureTime,
            hours: hour,
            error: null  // Add this line to define the error variable
        });
    } catch (error) {
        // Render an error template if an exception occurs
        res.render("index2.ejs", { error: JSON.stringify(error.message) });
    }
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
