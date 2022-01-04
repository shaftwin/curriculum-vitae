Feature: LabelInputDisabled

Background: Component well mounted
      Given LabelInput component is rendered
      And Required elements are mounted
      And Undesirable elements are not mounted 
      And The disable style is applied

Scenario: Disabled LabelInput should not allow to fill text
      And LabelInput is disable
      And The value of the cursor should be not allowed

Scenario: Disabled LabelInput with value in props 
      And LabelInput value should be equal to XXX

      