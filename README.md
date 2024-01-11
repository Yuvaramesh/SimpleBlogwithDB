# **Simple Blog with DB** 

 **It is a Simple Website connected with the Database.**
 **It is a three tire Web Application.**
 **Simple Blog with Database.**

A minimalistic blog application with database support to manage and display blog posts.

**Description:**

The provided code represents a simple Express.js server for a project named "simpleblogwithdb." This server interacts with a MySQL database to perform basic CRUD (Create, Read, Update, Delete) operations related to house price data. Here's a breakdown of the key components:

1. **Dependencies:**
   - `express`: A popular Node.js web application framework.
   - `body-parser`: Middleware for parsing incoming request bodies.
   - `cors`: Middleware to enable Cross-Origin Resource Sharing.
   - `mysql`: MySQL database driver for Node.js.

2. **Server Setup:**
   - The server is set to run on port `3010`.

3. **Database Connection:**
   - Connects to a MySQL database named "ipsample" with the provided credentials (localhost, root, Prakash@1234).

4. **Routes:**
   - **POST `/userdata`:**
     - Endpoint to handle incoming POST requests for adding user data to the "houseprice" table.
     - Expects JSON data in the request body with properties: `name`, `room`, and `sqfeet`.
     - Generates a random price and inserts the data into the database.

   - **GET `/userdata`:**
     - Endpoint to retrieve all data from the "houseprice" table.
     - Responds with a JSON array containing the retrieved data.

   - **DELETE `/userdata/:id`:**
     - Endpoint to handle DELETE requests for deleting a specific entry from the "houseprice" table based on the provided `id` parameter.

   - **GET `/check`:**
     - A simple test endpoint that logs "HI successful" when accessed.

5. **Server Start:**
   - The server listens on the specified port (3010) and logs the port number once it's successfully started.

**Ensure that the MySQL database and table ("houseprice") are properly set up for the code to function as expected. Additionally, make sure to handle sensitive information like database credentials securely in a production environment.**

## **HTML Description:**

1. **Document Structure:**
   - Standard HTML5 document structure.
   - Charset and viewport meta tags for proper rendering.

2. **Styling:**
   - External CSS file linked for styling (`style.css`).

3. **Background Animation:**
   - Animated background with a class `background-animation`.

4. **Bubble Container:**
   - Container (`bubble-container`) with multiple div elements representing bubbles.

5. **Form Elements:**
   - User input form with various fields.
   - Dropdowns for "Posted By," "RERA Registered," "Ready to Move," "Resale," and "Location."
   - Numeric input for "Number of Rooms" and "Square Footage."

6. **Location Options:**
   - Dropdown options for various locations.

7. **Buttons:**
   - "Predict" button triggering a JavaScript function (`prediction()`).
   - "Show Data" link navigating to `viewtable.html`.

8. **Result Paragraph:**
   - Placeholder paragraph with ID `result` for displaying prediction results.

9. **Script Tags:**
   - Link to the project's main JavaScript file (`main.js`).
   - External script tag for Axios library (`axios.min.js`).

10. **JavaScript Interaction:**
    - JavaScript functions for prediction (`prediction()`).
    - Usage of Axios library for asynchronous HTTP requests.

11. **Hyperlinks:**
    - External link to the style.css file.
    - External link to the Axios library.

**Ensure all linked files (CSS, JS, and libraries) are correctly referenced and available in the project directory.**


