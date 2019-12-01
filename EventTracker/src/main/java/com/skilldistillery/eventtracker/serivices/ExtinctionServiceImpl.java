package com.skilldistillery.eventtracker.serivices;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.skilldistillery.eventtracker.entities.Extinction;
import com.skilldistillery.eventtracker.repositories.ExtinctionRepository;

@Transactional
@Service
public class ExtinctionServiceImpl implements ExtinctionService {
	
	@Autowired
	private ExtinctionRepository repo;
	
	@Override
	public Extinction findById(int id) {
		Optional<Extinction> opt = repo.findById(id);
		if (opt.isPresent()) {
			Extinction ext = opt.get();
			return ext;
		}
		else
			return null;
	}
	
	@Override
	public Extinction addExtinction(Extinction extinction) {
		Extinction ext1 = new Extinction();
		ext1.setName("Mastadon");
		repo.saveAndFlush(ext1);
		return ext1;
	}

	@Override
	public boolean deleteById(int id) {
		repo.deleteById(id);
		if (repo.existsById(id)) {
			return false;
		}
		return true;
	}
}
