Feature: Search
  In order find relevant content
  As a customer
  I want to be able to search

  Scenario: Search for apples
    Given I am on the home page
    When I fill in "Search" with "app"
    And I complete "apple"
    And I press "Go"
    Then I should see the following results:
      | Fruit |
      | Cider |
      | Mac   |
