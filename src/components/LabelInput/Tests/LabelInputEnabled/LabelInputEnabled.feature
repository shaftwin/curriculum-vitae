Feature: LabelInputEnabled

  Background: Component well mounted
    Given LabelInput component is rendered
    And Required elements are mounted
    And Undesirable elements are not mounted

  Scenario: Default LabelInput with some parameters 
    And The filled style is applied
    And The input has the right value

  Scenario: LabelInput should allow to write text
    And The default style is applied
    When The input is cleared and filled
    Then LabelInput value should be XXX
    And The filled style should be applied

  Scenario: LabelInput without params and data
    And The default style is applied
    Then LabelInput value should be empty

  Scenario: LabelInput is hovered
    And The default style is applied 
    When Hover event is fired
    Then The hover style should be applied

  Scenario: LabelInput is focused
    And The default style is applied 
    When LabelInput is focused
    Then The focus style should be applied
