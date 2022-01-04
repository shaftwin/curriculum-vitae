Feature: LabelCheckBoxEnabled

  Background: Component well mounted
    Given LabelCheckbox component is rendered
    And Required elements are mounted
    And Undesirable elements are not mounted
    And The default style is applied

  Scenario: LabelCheckBox should allow to check
    When Click event is fired
    Then LabelCheckBox should be checked
    When Click event is fired again
    Then LabelCheckBox should be unchecked
  
  Scenario: CheckBox label can be a custom component

  Scenario: LabelCheckBox is hovered 
    When Hover event is fired
    Then The hover style should be applied

