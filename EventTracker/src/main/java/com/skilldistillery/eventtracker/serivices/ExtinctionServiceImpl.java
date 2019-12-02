package com.skilldistillery.eventtracker.serivices;

import java.util.List;
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
		return repo.saveAndFlush(extinction);
	}

	@Override
	public boolean deleteById(int id) {
		Optional<Extinction> opt = repo.findById(id);
		if (opt.isPresent()) {
			repo.deleteById(id);
			return true;
		}
		else
			return false;
	}

	@Override
	public Extinction updateById(Extinction extinction, Integer id) {
		Optional<Extinction> opt = repo.findById(id);
		if (opt.isPresent()) {
			Extinction ext = opt.get();
			ext.setAnimalClass(extinction.getAnimalClass());
			ext.setName(extinction.getName());
			ext.setYear(extinction.getYear());
			ext.setArea(extinction.getArea());
			ext.setEra(extinction.getEra());
			repo.saveAndFlush(ext);
			return ext;
		}
		return null;
	}

	@Override
	public List<Extinction> findAll() {
		return repo.findAll();
	}

	@Override
	public Extinction findByName(String name) {
		return repo.findByName(name);
	}
	
	@Override 
	public List<Extinction> findByKeyword(String keyword){
		keyword = "%"+keyword+"%";
		return repo.findByNameLikeOrAreaLike(keyword, keyword);
	}
}
