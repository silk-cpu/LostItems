package it.sebastianmay.libackend.mapper;

import it.sebastianmay.libackend.dto.LostItemDto;
import it.sebastianmay.libackend.dto.LostItemDtoUpdater;
import it.sebastianmay.libackend.entities.LostItem;

public class LostItemMapper {
public static LostItem DtoToEntity(LostItemDto lostItemDto) {
		
		LostItem tat= new LostItem();
		tat.setName(lostItemDto.getName());	
		tat.setDescription(lostItemDto.getDescription());
		tat.setFound(lostItemDto.isFound());
		tat.setFound_date(lostItemDto.getFound_date());
		tat.setFound_location(lostItemDto.getFound_location());
		tat.setLocation(lostItemDto.getLocation());
		tat.setLost_date(lostItemDto.getLost_date());
		tat.setNote(lostItemDto.getNote());
		
		return tat;
	}
	
	public static LostItem DtoToEntity(LostItemDtoUpdater lostItemDto) {
		
		LostItem tat= new LostItem();
		tat.setName(lostItemDto.getName());	
		tat.setDescription(lostItemDto.getDescription());
		tat.setFound(lostItemDto.isFound());
		tat.setFound_date(lostItemDto.getFound_date());
		tat.setFound_location(lostItemDto.getFound_location());
		tat.setLocation(lostItemDto.getLocation());
		tat.setLost_date(lostItemDto.getLost_date());
		tat.setNote(lostItemDto.getNote());
		
		return tat;
	}
	

}
