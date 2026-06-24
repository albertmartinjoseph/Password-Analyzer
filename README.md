# Password Security Analyzer

A web-based Password Security Analyzer built with HTML, CSS, and JavaScript.

The application evaluates password strength using multiple security checks, calculates password entropy, and verifies whether a password has appeared in known data breaches using the Have I Been Pwned (HIBP) Passwords API.

## Features

* Password strength analysis
* Minimum length validation
* Uppercase letter detection
* Number detection
* Special character detection
* Password entropy calculation
* Security risk assessment
* Real-world breach detection using the Have I Been Pwned API
* Instant feedback and security recommendations

## How It Works

The analyzer evaluates passwords using several criteria:

### Complexity Checks

* At least 8 characters long
* Contains uppercase letters
* Contains numbers
* Contains special characters

### Entropy Calculation

The application estimates password entropy based on character variety and password length.

### Breach Detection

Passwords are checked against the Have I Been Pwned Passwords database using the k-Anonymity model.

This approach protects user privacy because:

* The password itself is never transmitted.
* Only the first 5 characters of the SHA-1 hash are sent.
* The full comparison is performed locally in the browser.

### Security Risk Assessment

The application combines complexity checks, entropy calculations, and breach detection results to provide a security risk assessment.

## Technologies Used

* HTML
* CSS
* JavaScript
* Fetch API
* Web Crypto API (SHA-1 Hashing)
* Have I Been Pwned Passwords API

## What I Learned

Through this project, I learned:

* DOM Manipulation
* Event Handling
* Regular Expressions (Regex)
* Asynchronous JavaScript (Async/Await)
* API Integration
* Password Security Best Practices
* SHA-1 Hashing
* k-Anonymity Privacy Model
* Browser-based Security Analysis

## Example Output

Password: password

* Strength: Weak
* Entropy: 37.60 bits
* Security Risk: Critical
* Found in millions of known breaches

Password: AlBert@12345

* Strength: Strong
* High entropy score
* Not found in known breaches
* Lower security risk

## Future Improvements

* Password generation
* Strength score visualization
* Additional pattern detection
* Dark mode support

## Author

Albert Martine
