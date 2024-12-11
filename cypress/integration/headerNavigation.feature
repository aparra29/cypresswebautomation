Feature: Header Navigation Links and Functionality

  @navigation @smoke @regression
  Scenario Outline: Navigate through header menu items
    Given I am on the homepage
    When I click on the "<menuItem>" header link
    Then I should be redirected to the correct "<pageTitle>" page

    Examples:
      | menuItem   | pageTitle    |
      | Home       | PRODUCT STORE|
      | Contact    | New message  |
      | About us   | About us     |
      | Cart       | Cart         |

  @navigation @regression
  Scenario: Verify all header links are clickable and responsive
    Given I am on the homepage
    When I attempt to click all header links
    Then all links should be clickable

  @navigation @sanity
  Scenario: Validate header logo redirection
    Given I am on a different page
    When I click on the website logo
    Then I should be redirected to the homepage
