Feature: Google HomePage to explore zombie
  In order to expolre Zombie functionality
  As a capybara and zombie user
  I want to see the if it works on Google search page


Scenario: View home page
  Given I am on "/"
  Then I should see "Sign In"
  And I should see "Google"
