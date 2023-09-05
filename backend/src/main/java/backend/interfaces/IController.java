package backend.interfaces;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

public interface IController<T, S> {

	ResponseEntity<T> getById(@PathVariable("id") S id);

	ResponseEntity<List<T>> getAll();

	ResponseEntity<T> add(@PathVariable("id") S id, @RequestBody T t);

	ResponseEntity<T> update(@RequestBody T user);

	ResponseEntity<T> delete(@PathVariable("id") S id);
}
