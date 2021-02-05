package com.ts1.dao;

import java.util.Properties;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

public class SendMail {

	public static void main(String[] args) {
		
		final String username = "username@gmail.com";
		final String password = "password";
		
		Properties props = new Properties();
		props.setProperty("mail.smtp.auth", "true");
		props.setProperty("mail.smtp.starttls.enable", "true");
		props.setProperty("mail.smtp.host", "smtp.gmail.com");
		props.setProperty("mail.smtp.port", "567");
		
		Session session = Session.getInstance(props,
				new javax.mail.Authenticator() {
					protected PasswordAuthentication getPasswordAuthentication() {
						return new PasswordAuthentication(username, password);
					}
		});
		
		try {
			Session.getDefaultInstance(props);
			Message message = new MimeMessage(session);
			message.setFrom(new InternetAddress("vegetablemart@gmail.com"));
			message.setRecipients(Message.RecipientType.TO, InternetAddress.parse("bommakantimunni@gmail.com"));
			message.setSubject("Test");
			message.setText("Hello");
			
			Transport.send(message);
			System.out.println("msg sent");
		}
		catch(MessagingException e) {
			throw new RuntimeException(e);
		}
		
	}

}
