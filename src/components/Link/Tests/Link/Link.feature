Feature: Link

  Background: Component well mounted
    Given Link is mounted
    And Required elements are mounted

  Scenario: Default link
    And Link should have the default style

  Scenario: Link hovered
    When Link is hovered
    Then Link should have the hover style

  Scenario: Link clicked 
    When Click event is fired
    Then Link should have the visited style
    And The user should be redirected to the right page
