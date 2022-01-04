Feature: LabelCheckBoxDisabled

    Background: Component well mounted
      Given LabelCheckBox component is rendered
      And Required elements are mounted
      And Undesirable elements are not mounted
      And LabelCheckbox has the disabled style

    Scenario: Disabled LabelCheckbox should not allow to check
      When Click event is fired on Checkbox
      Then The checkbox is still not checked

    Scenario: Disabled LabelCheckbox with value set to true
      And Checkbox is checked