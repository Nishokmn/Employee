Feature: Update and delete employee operations

Scenario: Update Employee details using PUT method

Given I declare the URI
And the request body is formed for put operation 
When the API call is made with the employee name "Suresh" to get updated
Then the status code should be 200
Then employee name should be updated  

Scenario: Delete an Employee details using Delete method

Given I declare the URI
And the API call is made with the employee name "Azar" for deletion
Then the status code should be 400
 
