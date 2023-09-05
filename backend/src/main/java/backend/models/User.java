package backend.models;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "user")
@Getter
@Setter
public class User implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;

	private String username;

	private String password;

	@Column(name = "first_name")
	private String firstName;

	@Column(name = "last_name")
	private String lastName;

	private String gender;

	@Column(name = "date_of_birth")
	private String dateOfBirth;

	private String email;

	private String country;

	private String city;

	private String state;

	private String address;

	@Column(name = "zip_code")
	private String zipCode;

	private String phone;
	@Column(name = "created_at")
	private String createdAt;

	@Column(name = "ip_address")
	private String ipAddress;

	@Column(name = "mac_address")
	private String macAddress;

	private String avatar;

}
