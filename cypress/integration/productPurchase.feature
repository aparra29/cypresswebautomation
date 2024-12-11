Feature: Product Selection, Purchase, and Cart Management

  @purchase @smoke @regression
  Scenario Outline: Select product from different categories
    Given I am on the homepage
    When I select the "<category>" category
    And I choose a "<productName>" product
    And I add the product to cart
    Then the cart should display the selected product

    Examples:
      | category  | productName        |
      | Laptops   | MacBook air        |
      | Phones    | Samsung galaxy s6  |
      | Monitors  | Apple monitor 24   |

  @purchase @regression
  Scenario: Complete a full product purchase workflow
    Given I have added multiple products to cart
      | Category  | Product           |
      | Laptops   | MacBook air       |
      | Phones    | Nokia lumia 1520  |
    When I proceed to checkout
    And I fill in purchase details
      | Field        | Value             |
      | Name         | John Doe          |
      | Country      | United States     |
      | City         | New York          |
      | Credit Card  | 1234567890123456  |
      | Month        | 11                |
      | Year         | 2025              |
    And I confirm the purchase
    Then a purchase confirmation should be displayed
    And the cart should be empty

  @purchase @sanity
  Scenario: Remove product from cart
    Given I have added a product to cart
    When I remove the product from cart
    Then the cart should be empty
