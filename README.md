# password-generator

The application generates a random password based on user criteria.

The user gets to select the length of the password (from 8 to 128 characters, including 8 and 128).

They also get to choose which character sets to include.  They can choose only one character set up to all four.  The character sets are

* uppercase letters
* lowercase letters
* numbers
* special characters

When the user clicks the "Generate Password" button the selections are presented.

For length of password, there are a set of validation rules to determine that the user enters something or nothing, that they choose an integer instead of a string, and whether the password is of the appropriate, specified length.

## Original Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

## Screenshots

The following image shows the web application's appearance and functionality:

* Interface
![Interface](https://user-images.githubusercontent.com/94584327/150044821-166e5fb7-e952-4429-981f-9a3e04e7a56b.png)

* Password Length Prompt
![passwordLengthPrompt](https://user-images.githubusercontent.com/94584327/150045005-5973bdaf-20ab-4b46-b5c9-0c222f1eb5e8.png)

* Character Prompt Example
![characterPrompt](https://user-images.githubusercontent.com/94584327/150045202-8bdb6196-c6cc-4411-b01f-62960397005a.png)

# Website
https://downerdm.github.io/password-generator/
