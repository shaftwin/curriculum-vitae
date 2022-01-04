Feature: IconButton

  Scenario: IconButton has icon and the icon is at the left by default
    Given Using the default iconLocation
    Then The icon should exist
    And The icon should be at the left

  Scenario: IconButton has icon at the right
    Given iconLocation set to right
    Then The icon should exist
    And The icon is at should be at the right

  