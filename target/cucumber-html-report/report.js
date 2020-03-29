$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("employee.feature");
formatter.feature({
  "line": 1,
  "name": "check Login and Logout status and fetch Employee Details with GET method",
  "description": "",
  "id": "check-login-and-logout-status-and-fetch-employee-details-with-get-method",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Fetch Employee details by their employee name",
  "description": "",
  "id": "check-login-and-logout-status-and-fetch-employee-details-with-get-method;fetch-employee-details-by-their-employee-name",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I declare the URI for fetching employee details",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "employee name \"Ramesh\" is passed as path variable and hit the service",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the status code should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "validate the actual response with the expected response",
  "keyword": "Then "
});
formatter.match({
  "location": "EmployeeStepdefs.I_declare_the_URI_for_fetching_employee_details()"
});
formatter.result({
  "duration": 692902154,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ramesh",
      "offset": 15
    }
  ],
  "location": "EmployeeStepdefs.employee_name_is_passed_as_path_variable_and_hit_the_service(String)"
});
formatter.result({
  "duration": 1733147077,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 26
    }
  ],
  "location": "EmployeeStepdefs.the_status_code_should_be(int)"
});
formatter.result({
  "duration": 2540718,
  "status": "passed"
});
formatter.match({
  "location": "EmployeeStepdefs.validate_the_actual_response_with_the_expected_response()"
});
formatter.result({
  "duration": 415868307,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Check the status of login",
  "description": "",
  "id": "check-login-and-logout-status-and-fetch-employee-details-with-get-method;check-the-status-of-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "I declare the URI for login",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I add employee name as \"Employee\" and password as \"Pass123\" as query params to the URI and hit the service",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "the status code should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I add employee name as \"Supervisor\" and password as \"Pass123\" as query params to the URI and hit the service",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "the status code should be 400",
  "keyword": "Then "
});
formatter.match({
  "location": "EmployeeStepdefs.I_declare_the_URI_for_login()"
});
formatter.result({
  "duration": 31179,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Employee",
      "offset": 24
    },
    {
      "val": "Pass123",
      "offset": 51
    }
  ],
  "location": "EmployeeStepdefs.i_add_employee_name_as_and_password_as_as_query_params_to_the_URI_and_hit_the_service(String,String)"
});
formatter.result({
  "duration": 100257641,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 26
    }
  ],
  "location": "EmployeeStepdefs.the_status_code_should_be(int)"
});
formatter.result({
  "duration": 222359,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Supervisor",
      "offset": 24
    },
    {
      "val": "Pass123",
      "offset": 53
    }
  ],
  "location": "EmployeeStepdefs.i_add_employee_name_as_and_password_as_as_query_params_to_the_URI_and_hit_the_service(String,String)"
});
formatter.result({
  "duration": 101846974,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 26
    }
  ],
  "location": "EmployeeStepdefs.the_status_code_should_be(int)"
});
formatter.result({
  "duration": 251487,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Check the status of logout",
  "description": "",
  "id": "check-login-and-logout-status-and-fetch-employee-details-with-get-method;check-the-status-of-logout",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "hit the API for logout",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "the status code should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "check for logout message",
  "keyword": "Then "
});
formatter.match({
  "location": "EmployeeStepdefs.hit_the_API_for_logout()"
});
formatter.result({
  "duration": 107502359,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 26
    }
  ],
  "location": "EmployeeStepdefs.the_status_code_should_be(int)"
});
formatter.result({
  "duration": 194462,
  "status": "passed"
});
formatter.match({
  "location": "EmployeeStepdefs.Then_check_for_logout_message()"
});
formatter.result({
  "duration": 1155692,
  "status": "passed"
});
formatter.uri("employeePost.feature");
formatter.feature({
  "line": 1,
  "name": "Employee POST related operations",
  "description": "",
  "id": "employee-post-related-operations",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Create Employee details using POST method",
  "description": "",
  "id": "employee-post-related-operations;create-employee-details-using-post-method",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "URI is declared for creating employee details",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "creating a body of the request to POST",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the API call is made with the request body",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the status code should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "phone number and email field of the employee should be validated",
  "rows": [
    {
      "cells": [
        "Mobile",
        "Email"
      ],
      "line": 10
    },
    {
      "cells": [
        "9548754766",
        "ramesh@cts.com"
      ],
      "line": 11
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "EmployeeStepdefs.uri_is_declared_for_creating_employee_details()"
});
formatter.result({
  "duration": 70154,
  "status": "passed"
});
formatter.match({
  "location": "EmployeeStepdefs.creating_a_body_of_the_request_to_POST()"
});
formatter.result({
  "duration": 14219897,
  "status": "passed"
});
formatter.match({
  "location": "EmployeeStepdefs.the_API_call_is_made_with_the_request_body()"
});
formatter.result({
  "duration": 144861949,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 26
    }
  ],
  "location": "EmployeeStepdefs.the_status_code_should_be(int)"
});
formatter.result({
  "duration": 197334,
  "status": "passed"
});
formatter.match({
  "location": "EmployeeStepdefs.phone_number_and_email_field_of_the_employee_should_be_validated(DataTable)"
});
formatter.result({
  "duration": 36173128,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "create List of Employee details using POST method",
  "description": "",
  "id": "employee-post-related-operations;create-list-of-employee-details-using-post-method",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "URI is declared for creating employee details",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "creating a list of employee request body to POST",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "the API call is made with the list request body",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "the status code should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "the employee names list should be validated",
  "keyword": "Then "
});
formatter.match({
  "location": "EmployeeStepdefs.uri_is_declared_for_creating_employee_details()"
});
formatter.result({
  "duration": 42256,
  "status": "passed"
});
formatter.match({
  "location": "EmployeeStepdefs.creating_a_list_of_employee_request_body_to_POST()"
});
formatter.result({
  "duration": 2178461,
  "status": "passed"
});
formatter.match({
  "location": "EmployeeStepdefs.the_API_call_is_made_with_the_list_request_body()"
});
formatter.result({
  "duration": 72345436,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 26
    }
  ],
  "location": "EmployeeStepdefs.the_status_code_should_be(int)"
});
formatter.result({
  "duration": 106666,
  "status": "passed"
});
formatter.match({
  "location": "EmployeeStepdefs.the_employee_names_list_should_be_validated()"
});
formatter.result({
  "duration": 10123077,
  "status": "passed"
});
formatter.uri("employeeUpdate.feature");
formatter.feature({
  "line": 1,
  "name": "Update and delete employee operations",
  "description": "",
  "id": "update-and-delete-employee-operations",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Update Employee details using PUT method",
  "description": "",
  "id": "update-and-delete-employee-operations;update-employee-details-using-put-method",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I declare the URI",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the request body is formed for put operation",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the API call is made with the employee name \"Suresh\" to get updated",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the status code should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "employee name should be updated",
  "keyword": "Then "
});
formatter.match({
  "location": "EmployeeStepdefs.I_declare_the_URI()"
});
formatter.result({
  "duration": 38975,
  "status": "passed"
});
formatter.match({
  "location": "EmployeeStepdefs.the_request_body_is_formed_for_put_operation()"
});
formatter.result({
  "duration": 1511795,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Suresh",
      "offset": 45
    }
  ],
  "location": "EmployeeStepdefs.the_API_call_is_made_with_the_employee_name_to_get_updated(String)"
});
formatter.result({
  "duration": 77991384,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 26
    }
  ],
  "location": "EmployeeStepdefs.the_status_code_should_be(int)"
});
formatter.result({
  "duration": 95179,
  "status": "passed"
});
formatter.match({
  "location": "EmployeeStepdefs.employee_name_should_be_updated()"
});
formatter.result({
  "duration": 17227897,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Delete an Employee details using Delete method",
  "description": "",
  "id": "update-and-delete-employee-operations;delete-an-employee-details-using-delete-method",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "I declare the URI",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "the API call is made with the employee name \"Azar\" for deletion",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "the status code should be 400",
  "keyword": "Then "
});
formatter.match({
  "location": "EmployeeStepdefs.I_declare_the_URI()"
});
formatter.result({
  "duration": 30359,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Azar",
      "offset": 45
    }
  ],
  "location": "EmployeeStepdefs.the_API_call_is_made_with_the_employee_name_for_deletion(String)"
});
formatter.result({
  "duration": 99490051,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 26
    }
  ],
  "location": "EmployeeStepdefs.the_status_code_should_be(int)"
});
formatter.result({
  "duration": 193641,
  "status": "passed"
});
});