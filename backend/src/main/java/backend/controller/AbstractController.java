package backend.controller;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.google.common.collect.Lists;

import backend.interfaces.IController;
import backend.interfaces.IRepository;

public abstract class AbstractController<T, S> implements IController<T, S> {
	private static final Logger logger = LoggerFactory.getLogger(AbstractController.class);

	@Autowired
	private IRepository<T, S> repository;

	@Override
	public ResponseEntity<List<T>> getAll() {
		List<T> list = Lists.newArrayList(repository.findAll());
		return new ResponseEntity<>(list, HttpStatus.OK);
	}

	@Override
	public ResponseEntity<T> getById(@PathVariable("id") S id) {
		T t = null;
		Optional<T> value = repository.findById(id);
		if (value.isPresent()) {
			t = value.get();
		}
		return new ResponseEntity<>(t, HttpStatus.OK);
	}

	@Override
	public ResponseEntity<T> add(@PathVariable("id") S id, @RequestBody T t) {
		boolean flag = repository.existsById(id);
		T u;

		if (flag) {
			return new ResponseEntity<>(HttpStatus.CONFLICT);
		} else {
			u = repository.save(t);
		}

		return new ResponseEntity<>(u, HttpStatus.OK);
	}

	@Override
	public ResponseEntity<T> update(@RequestBody T t) {
		T u = repository.save(t);
		return new ResponseEntity<>(u, HttpStatus.OK);
	}

	@Override
	public ResponseEntity<T> delete(@PathVariable("id") S id) {
		T t = null;
		Optional<T> value = repository.findById(id);
		if (value.isPresent()) {
			t = value.get();
			repository.delete(t);
		}
		return new ResponseEntity<>(t, HttpStatus.OK);
	}

}
