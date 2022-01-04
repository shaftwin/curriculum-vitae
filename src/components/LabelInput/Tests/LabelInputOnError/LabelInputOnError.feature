Feature: LabelInputOnError
    
    Background: Component well mounted
      Given LabelInput component is rendered
      And Required elements are mounted

    Scenario: Default LabelInput on error without message
      And Undesirable elements are not mounted 
      And LabelInput should have the error style
    
    Scenario: LabelInput throw error with message
      And LabelInput should have the error style
