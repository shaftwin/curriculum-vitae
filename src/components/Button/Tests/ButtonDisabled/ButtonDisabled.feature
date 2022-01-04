Feature: Button Disabled

  Scenario: Button clicked should not fire callBack method
    Given Button is disabled
    When Button is clicked
    Then Button callback should not be called

  