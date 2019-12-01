package com.skilldistillery.eventtracker.repositories;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.skilldistillery.eventtracker.entities.Extinction;

@RunWith(SpringRunner.class)
@SpringBootTest
public class ExtinctionRepoTests {

	@Autowired
	ExtinctionRepository repo;
	
	@Test
	void test_repo_findById() {
		Optional<Extinction> opt = repo.findById(1);
		if (opt.isPresent()) {
			Extinction ext = opt.get();
			assertEquals("Mammal", ext.getAnimalClass());
		}
	}
}
