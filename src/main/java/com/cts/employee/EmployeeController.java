package com.cts.employee;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EmployeeController {

	@RequestMapping("/EmployeeApplication")
	public String index() {
		return "Hello, all API tests were successful";
	}

}
