package com.skilldistillery.eventtracker.serivices;

import java.util.List;

import com.skilldistillery.eventtracker.entities.Extinction;

public interface ExtinctionService {

	Extinction findById(int id);

	Extinction addExtinction(Extinction extinction);
	
	boolean deleteById(int it);

	Extinction updateById(Extinction extinction, Integer id);

	List<Extinction> findAll();
	
	Extinction findByName(String name);

	List<Extinction> findByKeyword(String keyword);
}
