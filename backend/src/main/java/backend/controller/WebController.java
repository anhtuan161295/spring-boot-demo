package backend.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class WebController {

	private static final Logger logger = LoggerFactory.getLogger(WebController.class);

	@GetMapping("/")
	public String home() {
		return "index.html";
	}

//	@GetMapping("/index")
//	public String index() {
//		return "index";
//	}
//
//	@GetMapping("/error")
//	public String error() {
//		return "error";
//	}
//
//	@GetMapping("/login")
//	public String login() {
//		return "login";
//	}


}
