Feature: Callable feature

  Scenario Outline: Callable scenario
    * def globalVariable = '<val>'

    @second
    Examples:
      | val                 |
      | Second global token |

    @third
    Examples:
      | val                |
      | Third global token |
