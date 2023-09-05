package backend.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import backend.models.User;

@Controller
@RequestMapping(path = "/user")
public class UserController extends AbstractController<User, Integer> {

	private static final Logger logger = LoggerFactory.getLogger(UserController.class);

	@GetMapping(path = "/{id}")
	@Override
	public ResponseEntity<User> getById(@PathVariable Integer id) {
		return super.getById(id);
	}

	@GetMapping()
	@Override
	public ResponseEntity<List<User>> getAll() {
		return super.getAll();
	}

	@PostMapping()
	@Override
	public ResponseEntity<User> add(@PathVariable Integer id, @RequestBody User user) {
		return super.add(id, user);
	}

	@PutMapping()
	@Override
	public ResponseEntity<User> update(@RequestBody User user) {
		return super.update(user);
	}

	@DeleteMapping(path = "/{id}")
	@Override
	public ResponseEntity<User> delete(@PathVariable Integer id) {
		return super.delete(id);
	}
}
