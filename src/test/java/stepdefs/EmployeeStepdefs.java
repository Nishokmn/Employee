package stepdefs;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.List;
import java.util.Map;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.junit.Assert;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.RestAssured;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.response.ResponseBody;
import io.restassured.specification.RequestSpecification;

public class EmployeeStepdefs {
	private Response response;
	private RequestSpecification request;
	JSONParser parser = new JSONParser();

	@Given("I declare the URI for login")
	public void I_declare_the_URI_for_login() {
		RestAssured.baseURI = "http://localhost:8079/employee";
	}

	@And("^I add employee name as \"([^\"]*)\" and password as \"([^\"]*)\" as query params to the URI and hit the service$")
	public void i_add_employee_name_as_and_password_as_as_query_params_to_the_URI_and_hit_the_service(
			String employeeName, String password) {
		try {
			response = RestAssured.given().when().queryParam("employeename", employeeName)
					.queryParam("password", password).get("/login");

		} catch (Exception e) {
			e.printStackTrace();
		}

	}

	@Given("hit the API for logout")
	public void hit_the_API_for_logout() {

		RestAssured.baseURI = "http://localhost:8079/employee";
		response = RestAssured.given().when().get("/logout");
	}

	@Then("check for logout message")
	public void Then_check_for_logout_message() {
		String jsonString = response.asString();
		Assert.assertEquals(jsonString.contains("Logout Succesful"), true);
	}

	@Given("I declare the URI for fetching employee details")
	public void I_declare_the_URI_for_fetching_employee_details() {
		RestAssured.baseURI = "http://localhost:8079/employee";
	}

	@Given("^employee name \"([^\"]*)\" is passed as path variable and hit the service$")
	public void employee_name_is_passed_as_path_variable_and_hit_the_service(String employeeName) {
		try {
			response = RestAssured.given().pathParam("employeeName", employeeName).when().get("/{employeeName}");
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@Then("^validate the actual response with the expected response$")
	public void validate_the_actual_response_with_the_expected_response() throws Throwable {

		ResponseBody body = response.getBody();
		String responseBodyStringValue = body.asString();

		/* For checking key is present or not */

		Assert.assertTrue(responseBodyStringValue.contains("employeename"));
		Assert.assertTrue(responseBodyStringValue.contains("id"));
		Assert.assertTrue(responseBodyStringValue.contains("lastName"));
		Assert.assertTrue(responseBodyStringValue.contains("email"));
		Assert.assertTrue(responseBodyStringValue.contains("password"));
		Assert.assertTrue(responseBodyStringValue.contains("phone"));
		Assert.assertTrue(responseBodyStringValue.contains("employeeStatus"));

		JsonPath jsonPathEvaluator = response.jsonPath();
		String firstName = jsonPathEvaluator.get("firstName");
		int id = jsonPathEvaluator.get("id");
		String employeename = jsonPathEvaluator.get("employeename");
		String lastName = jsonPathEvaluator.get("lastName");
		String email = jsonPathEvaluator.get("email");
		String password = jsonPathEvaluator.get("password");
		String phone = jsonPathEvaluator.get("phone");
		int employeeStatus = jsonPathEvaluator.get("employeeStatus");

		/* For checking value corresponding to each key */
		Assert.assertTrue(firstName.equalsIgnoreCase("Ramesh"));
		Assert.assertTrue("Id check", id == 56248);
		Assert.assertTrue(employeename.equalsIgnoreCase("Ramesh Kumar"));
		Assert.assertTrue(lastName.equalsIgnoreCase("Kumar"));
		Assert.assertTrue(email.equalsIgnoreCase("ramesh@cts.com"));
		Assert.assertTrue(password.equalsIgnoreCase("Pass123"));
		Assert.assertTrue(phone.equalsIgnoreCase("9548754766"));
		Assert.assertTrue("Employee status check", employeeStatus == 1);

	}

	@Given("^I declare the URI$")
	public void I_declare_the_URI() {
		RestAssured.baseURI = "http://localhost:8079/employee/";
	}

	@Given("^the request body is formed for put operation$")
	public void the_request_body_is_formed_for_put_operation()
			throws FileNotFoundException, IOException, ParseException {
		JSONObject jsonObject = (JSONObject) parser.parse(new FileReader("src/test/java/jsonObjects/employee.json"));
		request = RestAssured.given();
		request.body(jsonObject.toJSONString());
	}

	@When("^the API call is made with the employee name \"([^\"]*)\" to get updated$")
	public void the_API_call_is_made_with_the_employee_name_to_get_updated(String employeeName) {
		response = request.put(employeeName);

	}

	@Then("^employee name should be updated$")
	public void employee_name_should_be_updated() {
		String name = response.jsonPath().get("employeename");
		Assert.assertEquals(name, "Suresh");
	}

	@Given("^the API call is made with the employee name \"([^\"]*)\" for deletion$")
	public void the_API_call_is_made_with_the_employee_name_for_deletion(String employeeName) {
		request = RestAssured.given();
		request.header("Content-Type", "application/json");
		response = request.delete(employeeName);
	}

	@Then("^the status code should be (\\d+)$")
	public void the_status_code_should_be(int statusCode) {
		System.out.println("Statuscode " + statusCode);
		Assert.assertEquals(response.getStatusCode(), statusCode);
	}

	@Given("^creating a list of employee request body to POST$")
	public void creating_a_list_of_employee_request_body_to_POST()
			throws FileNotFoundException, IOException, ParseException {

		JSONArray jsonarray = (JSONArray) parser.parse(new FileReader("src/test/java/jsonObjects/EmployeeList.json"));
		request = RestAssured.given();
		request.body(jsonarray.toJSONString());
	}

	@When("^the API call is made with the list request body$")
	public void the_API_call_is_made_with_the_list_request_body() {
		response = request.post("/employee/createWithList");
	}

	@Then("^the employee names list should be validated$")
	public void the_employee_names_list_should_be_validated() {
		JsonPath jsonPathValidator = response.jsonPath();
		List<String> allEmployeeIDs = jsonPathValidator.getList("employeename");
		Assert.assertEquals(allEmployeeIDs.contains("Ramesh kumar"), true);
		Assert.assertEquals(allEmployeeIDs.contains("Mukesh kumar"), true);
	}

	@Given("^URI is declared for creating employee details$")
	public void uri_is_declared_for_creating_employee_details() {
		RestAssured.baseURI = "http://localhost:8079";

	}

	@Given("^creating a body of the request to POST$")
	public void creating_a_body_of_the_request_to_POST() throws Throwable {
		JSONObject jsonObject = (JSONObject) parser
				.parse(new FileReader("src/test/java/jsonObjects/employee.json"));
		request = RestAssured.given();
		request.body(jsonObject.toJSONString());

	}

	@When("^the API call is made with the request body$")
	public void the_API_call_is_made_with_the_request_body() throws Throwable {
		response = request.post("/employee");
	}

	@Then("^phone number and email field of the employee should be validated$")
	public void phone_number_and_email_field_of_the_employee_should_be_validated(DataTable table) {
		for (Map<String, String> data : table.asMaps(String.class, String.class)) {
			Assert.assertEquals(data.get("Mobile"), response.jsonPath().get("phone"));
			Assert.assertEquals(data.get("Email"), response.jsonPath().get("email"));
		}
	}

}