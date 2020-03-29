Feature: Employee POST related operations

Scenario: Create Employee details using POST method

  Given URI is declared for creating employee details
  And creating a body of the request to POST 
  When the API call is made with the request body
  Then the status code should be 200
  Then phone number and email field of the employee should be validated
  |Mobile		|Email		   |
  |9548754766   |ramesh@cts.com|
  
 Scenario: create List of Employee details using POST method
 
   Given URI is declared for creating employee details
   And creating a list of employee request body to POST
   When the API call is made with the list request body
   Then the status code should be 200
   Then the employee names list should be validated