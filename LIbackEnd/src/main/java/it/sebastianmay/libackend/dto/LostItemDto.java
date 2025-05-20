package it.sebastianmay.libackend.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter @AllArgsConstructor @NoArgsConstructor
public class LostItemDto {
	
	@NotBlank(message="campo non valido")
	private String name;
	
	@NotBlank(message="campo non valido")
	private String description;
	
	@NotBlank(message="campo non valido")
	private String lost_date;
	
	@NotBlank(message="campo non valido")
	private String location;
	
	private boolean found;
	
	private String found_date;
	
	private String found_location;
	
	private String note;
}
