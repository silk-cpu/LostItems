package it.sebastianmay.libackend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import it.sebastianmay.libackend.entities.LostItem;

public interface LostItemsRepository extends JpaRepository<LostItem,Long>{

}
