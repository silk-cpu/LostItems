package it.sebastianmay.libackend.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter @Setter @NoArgsConstructor @AllArgsConstructor @ToString
public class LostItemDtoUpdater {
	private String name;
	
	private String description;
	
	private String lost_date;
	
	private String location;
	
	private boolean found;
	
	private String found_date;
	
	private String found_location;
	
	private String note;

}

