package it.sebastianmay.libackend.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter @Setter @NoArgsConstructor @AllArgsConstructor @ToString

@Entity
@Table(name="lost_items")
public class LostItem {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	@Column
	private String name;
	@Column
	private String description;
	@Column
	private String lost_date;
	@Column
	private String location;
	@Column
	private boolean found;
	@Column
	private String found_date;
	@Column
	private String found_location;
	@Column
	private String note;

}

