package it.sebastianmay.libackend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import it.sebastianmay.libackend.dto.LostItemDto;
import it.sebastianmay.libackend.dto.LostItemDtoUpdater;
import it.sebastianmay.libackend.entities.LostItem;
import it.sebastianmay.libackend.mapper.LostItemMapper;
import it.sebastianmay.libackend.repositories.LostItemsRepository;
import jakarta.validation.Valid;

@RestController
@CrossOrigin
public class LostItemController {
	
	private final LostItemsRepository lostItemsRepository;
	
	public LostItemController(LostItemsRepository lostItemsRepository) {
		this.lostItemsRepository=lostItemsRepository;
	}
	
	@GetMapping("/lost_items")
	private ResponseEntity<List<LostItem>> getAll(){
		List<LostItem> ls=lostItemsRepository.findAll();
		return ResponseEntity.status(HttpStatus.OK).body(ls);
	}
	
	@GetMapping("/lost_items/{id}")
	private ResponseEntity<?> getById(@PathVariable long id) {
		Optional<LostItem> li=lostItemsRepository.findById(id);
		if(li==null) {
			return ResponseEntity.status(HttpStatus.OK).body("id non trovato");
		}
		return ResponseEntity.status(HttpStatus.OK).body(li);
	}
	
	
	@PostMapping("/lost_items")
	private ResponseEntity<?> store(@Valid @RequestBody LostItemDto lostItemDto){
		
		LostItem lostItem=LostItemMapper.DtoToEntity(lostItemDto);
		System.out.println(lostItem);
		if(lostItem.getFound_date()=="") {
			lostItem.setFound_date(null);
		}
		LostItem insertedLostItem=lostItemsRepository.save(lostItem);
		
		return ResponseEntity.status(HttpStatus.CREATED).body(insertedLostItem);
	}
	
	@DeleteMapping("/lost_items/{id}")
	public ResponseEntity<?> removebyid(@PathVariable long id){
		Optional<LostItem> ls = lostItemsRepository.findById(id);
		if(ls.isEmpty()) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("elemento non trovato");
		}else {
			this.lostItemsRepository.deleteById(id);
		}
		return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
	}
	
	@PutMapping("/lost_items/{id}")
	public ResponseEntity<?> updateTable(
			@PathVariable Long id,
			@Valid @RequestBody LostItemDtoUpdater lostItemsDto,
			BindingResult result
	){
		System.out.println(result.toString());
		Optional<LostItem> ls=this.lostItemsRepository.findById(id);
		if(ls.isEmpty())
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("item non trovato");
		
		LostItem ls2=LostItemMapper.DtoToEntity(lostItemsDto);
		LostItem ls3=ls.get();
		
		System.out.println(ls2.isFound());
		
		if(ls2.isFound() != ls3.isFound())
			ls3.setFound(ls2.isFound());
		
		if(ls2.getLocation()!=null)
			ls3.setLocation(ls2.getLocation());
		
		if(ls2.getDescription()!=null)
			ls3.setDescription(ls2.getDescription());
		
		if(ls2.getFound_date()!=null)
			ls3.setFound_date(ls2.getFound_date());
		
		if(ls2.getFound_location()!=null)
			ls3.setFound_location(ls2.getFound_location());
		
		if(ls2.getLost_date()!=null)
			ls3.setLost_date(ls2.getLost_date());
		
		if(ls2.getName()!=null)
			ls3.setName(ls2.getName());
		
		if(ls2.getNote()!=null)
			ls3.setNote(ls2.getNote());
		
		System.out.println();
		System.out.println(ls3);
		System.out.println();
		LostItem itemInserted=this.lostItemsRepository.save(ls3);
		
		
		return ResponseEntity.status(HttpStatus.OK).body(itemInserted);
	}
}
