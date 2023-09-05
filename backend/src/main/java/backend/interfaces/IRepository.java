package backend.interfaces;

import org.springframework.data.repository.CrudRepository;

public interface IRepository<T, S> extends CrudRepository<T, S> {
}
