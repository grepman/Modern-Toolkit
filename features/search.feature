Feature: Google Search
  In order to expolre Zombie functionality
  As a capybara and zombie user
  I want to see the if it works on Google search page


Scenario: View home page
  Given I am on "/"
  When I fill in "q" with "London"
  Then I should be on "/"
