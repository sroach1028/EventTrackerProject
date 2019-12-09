package com.skilldistillery.eventtracker.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.skilldistillery.eventtracker.entities.Extinction;

public interface ExtinctionRepository extends JpaRepository<Extinction, Integer> {

	Extinction findByName(String name);

	List<Extinction> findByNameLikeOrAreaLike(String name, String area);
	
	List<Extinction> findByAnimalClassLike(String animalClass);
}
