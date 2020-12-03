# passwordgen.github.io

<body>

<h1>
# Password Generator
</h1>

The link to the webpage is:
<a href="https://suziestephen.github.io/hw2.github.io/"> Password Generator </a>


<b>Usage:</b>
Below is a screenshot of the final result with the generated password based on input criteria

![screenshot_generator](https://user-images.githubusercontent.com/74234842/100995489-f1f55900-35ab-11eb-8a4f-34ec45b6a431.png)

<b> My Process</b>
1. First I needed to figure out the variables 
2. Then I included all the characters the generator would use to make the passwords as I researched this and was told I would need to include all of these characters
3. Then I added the event listener so when they clicked the Generate Password button it would run the functions
4. Then I wrote out the function that would generate the password but I needed to create all the conditions for the user to be prompted based on the brief
  > Length - needed to be between 8 and 128 characters
  > Prompts to include: letters, numbers, characters - user must say yes to at least one of these or else they will get an error message
5. Then I wrote out all the circumstances for whichever options they might select. I know this was not the most succient code to do this but this was the way I could make sure I had a solution for every selection scenario (1 selection, 2 selections, 3 selections & 4 selections from prompts)
6. Then I wrote out the code to actually randomly generate the items based on the length selection
7. Then I needed to figure out how to get the generator to produce a solution and put the password value into the text box
  


<b>Our Brief:</b>
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security


<b>Requirements of the Generator:</b>

GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page


</body>
