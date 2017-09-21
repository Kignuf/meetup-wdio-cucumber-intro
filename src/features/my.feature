Feature: Login

Scenario: Correct credentials
Given I open the url "login"
When  I submit "tomsmith" / "SuperSecretPassword!" credentials
Then  I expect element "h4*=Welcome to the Secure Area." to be visible