Feature: Button Clickable

  Scenario: Button clicked should fire the callBack method
    Given Button is clickable
    When Button is clicked
    Then Button callback should be called once

  