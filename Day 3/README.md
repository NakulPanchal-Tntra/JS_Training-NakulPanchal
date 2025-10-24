# Dynamic Form with JSON Display & Theme Toggle

## Features Implemented in JavaScript

### 1️. Form Validation

- Real-time validation for each input.
- example:

  ```js
  document
    .getElementById("name")
    .addEventListener("input", (e) => validateName(e.target.value));
  ```

- Rules include:

  - Name (text)

    - Name is required.
    - min 2 characters are allowed.
    - max 50 characters are allowed.

  - Email (email)

    - Please enter a valid email address. ex: john.doe@example.com
    - Email is required.

  - Age (number)
    - Age is required.
    - Only numbers are allowed.
    - Age must be a number between 1 and 120.
  - Date of Birth (date)

    - Date of Birth is required.
    - cannot be in the future.

  - Gender (radio button: Male, Female, Other)

    - Please select your gender.

  - Hobbies (multiselect checkboxes: Reading, Traveling, Coding, Music)

    - Please select at least one hobby.

  - Country (dropdown)
    - Please select a country.

- Error messages are displayed dynamically below each input using `textContent`.

- Add evenet listener on form submit button.
- Get the element value by element id which specified in html and storing into constant.
- Create an constant isValid and call every validation function by giving elements value as an argument.
- If valid than create an object of all values.
- Push the values inside the data array, set into local storage, and display in the display box after click.
- Reset the form

### 2. Theme Toggle

- Theme toggle button with theme class and onclick `themetoggle()` call event.
- In the toggle function get the body element.
- apply `.clasList` , `.toggle` function to add and toggle dark theme class on body whcih is in css file.
- also change theme button style and text content.

### 3. When the script executes there are certain line of code which gets data from localstore and stores in the theme variable and data array to keep data and preference up to date.
