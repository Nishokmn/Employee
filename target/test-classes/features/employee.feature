Feature: check Login and Logout status and fetch Employee Details with GET method
  
 
 Scenario: Fetch Employee details by their employee name
   
   Given I declare the URI for fetching employee details
   And employee name "Ramesh" is passed as path variable and hit the service
   Then the status code should be 200
   Then validate the actual response with the expected response
 
  Scenario: Check the status of login
  
   Given I declare the URI for login
   And I add employee name as "Employee" and password as "Pass123" as query params to the URI and hit the service 
   Then the status code should be 200
   And I add employee name as "Supervisor" and password as "Pass123" as query params to the URI and hit the service 
   Then the status code should be 400
   
  Scenario: Check the status of logout 
  
   Given hit the API for logout
   Then the status code should be 200
   Then check for logout message
   
   
   
     
   
    
     