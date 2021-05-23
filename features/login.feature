Feature: The SLP Login

  Scenario Outline: As a user, I want to login to SLP 

    Given I am on the login page
    When I login with <username> and <password>
    Then I should see Partner menu saying <message>

    Examples:
      | username            | password       | message |
      | joxzorica@gmail.com | Password12345@ | Partner |
      
