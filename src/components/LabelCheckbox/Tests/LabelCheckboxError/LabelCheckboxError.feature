Feature: LabelCheckboxError

	Background: Component well mounted
		Given LabelCheckBox component is rendered
		And Required elements are mounted
		And Undesirable elements are not mounted
		And The error style is applied

	Scenario: CheckBox throw error without message
		
	Scenario: CheckBox throw error with message
