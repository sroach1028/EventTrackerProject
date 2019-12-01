package com.skilldistillery.eventtracker.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.eventtracker.entities.Extinction;

public interface ExtinctionRepository extends JpaRepository<Extinction, Integer> {

}
