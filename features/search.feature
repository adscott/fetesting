Feature: Search
  In order find relevant content
  As a customer
  I want to be able to search

  Scenario: Search for networks
    Given I am on the home page
    When I fill in "Search" with "netw"
    And I complete "networks"
    And I press "Go"
    Then I should see the following results:
      | Vodafone |
      | Telstra  |
      | Optus    |
