# Password Strength Analyzer

I built this project while learning JavaScript and basic cybersecurity concepts.

The application checks whether a password follows common security recommendations such as minimum length, uppercase letters, numbers, and special characters. Based on these checks, it provides a simple strength rating.

## Features

- Password strength analysis
- Checks for minimum length
- Checks for uppercase letters
- Checks for numbers
- Checks for special characters
- Displays Weak, Medium, or Strong ratings

## Technologies Used

- HTML
- CSS
- JavaScript

## What I Learned

Through this project, I learned:

- Basic DOM manipulation in JavaScript
- Event handling using buttons and user input
- Regular expressions (Regex)
- Password security best practices
- Building interactive web applications

## How the Strength Rating Works

The password is checked against four criteria:

- At least 8 characters long
- Contains an uppercase letter
- Contains a number
- Contains a special character

Each satisfied condition increases the score.

### Example

| Password | Rating |
|-----------|---------|
| abc | Weak |
| Albert123 | Medium |
| AlBert@12345 | Strong |

## Author

Albert Martine
