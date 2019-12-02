package com.skilldistillery.eventtracker.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.eventtracker.entities.Extinction;

public interface ExtinctionRepository extends JpaRepository<Extinction, Integer> {

	Extinction findByName(String name);

	List<Extinction> findByNameLikeOrAreaLike(String name, String area);

}
