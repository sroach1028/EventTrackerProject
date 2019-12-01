package com.skilldistillery.eventtracker.serivices;

import com.skilldistillery.eventtracker.entities.Extinction;

public interface ExtinctionService {

	Extinction findById(int id);

	Extinction addExtinction(Extinction extinction);
	boolean deleteById(int it);

	Extinction updateById(Extinction extinction, Integer id);
}
