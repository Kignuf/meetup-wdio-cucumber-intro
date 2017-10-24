Feature: Login

Scenario: Correct credentials
Given I open the url "login"
When  I submit "tomsmith" / "SuperSecretPassword!" credentials
Then  I expect element "h4*=Welcome to the Secure Area." to be visible

Scenario: Login with wrong credentials
	Given I open the url "login"
	When  I submit "tomsmith" / "wrongpwd" credentials
	Then  I expect element "h4*=Welcome to the Secure Area." to not be visible
	
