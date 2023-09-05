package backend.models;

public enum Status {

	OFFLINE(0),
	ONLINE(1);

	private int status;

	Status(int status) {
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}
}
