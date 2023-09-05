package backend.websockets.controller;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.stereotype.Controller;

import backend.websockets.model.ChatMessage;


@Controller
public class ChatController {

	@MessageMapping("/chat.sendMessage")
	@SendTo("/topic/public")
	public ChatMessage sendMessage(@Payload ChatMessage chatMessage) {
		return chatMessage;
	}

	@MessageMapping("/chat.addUser")
	@SendTo("/topic/public")
	public ChatMessage addUser(@Payload ChatMessage chatMessage, SimpMessageHeaderAccessor headerAccessor) {
		// Add username in web socket session
		headerAccessor.getSessionAttributes().put("username", chatMessage.getSender());
		return chatMessage;
	}

	@MessageMapping("/chat.updateUser")
	@SendTo("/topic/public")
	public ChatMessage updateUser(@Payload ChatMessage chatMessage) {
		return chatMessage;
	}

	@MessageMapping("/chat.deleteUser")
	@SendTo("/topic/public")
	public ChatMessage deleteUser(@Payload ChatMessage chatMessage) {
		return chatMessage;
	}

}