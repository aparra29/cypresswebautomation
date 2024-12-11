Feature: Featured Items Carousel Functionality

  @carousel @smoke @regression
  Scenario: Verify carousel navigation buttons work correctly
    Given I am on the homepage
    When I click the next carousel button
    Then the carousel should advance to the next slide

  @carousel @regression
  Scenario: Verify carousel auto-sliding functionality
    Given I am on the homepage
    When I wait for carousel auto-slide
    Then the carousel should change slides automatically

  @carousel @regression
  Scenario: Verify previous navigation button
    Given I am on the homepage
    When I click the previous carousel button
    Then the carousel should move to the previous slide
