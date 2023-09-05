package backend.interfaces;

import java.util.List;

public interface IService<T, S> {

	List<T> getAll();

	T getById(S id);

	T add(T t);

	T update(T t);

	void delete(T t);

	void deleteById(S id);

	int count();

	boolean existsById(S id);


}
