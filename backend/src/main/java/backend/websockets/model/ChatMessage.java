package backend.websockets.model;


import backend.models.User;

public class ChatMessage {
	private MessageType type;
	private User user;
	private String sender;

	public enum MessageType {
		CREATE, UPDATE, DELETE
	}

	public MessageType getType() {
		return type;
	}

	public void setType(MessageType type) {
		this.type = type;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public String getSender() {
		return sender;
	}

	public void setSender(String sender) {
		this.sender = sender;
	}
}