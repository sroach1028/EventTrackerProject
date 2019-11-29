package com.skilldistillery.eventtracker.entities;

import static org.junit.jupiter.api.Assertions.*;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class ExtinctionTest {

	private static EntityManagerFactory emf;
	private EntityManager em;
	private Extinction extinction;
	
	@BeforeAll
	static void setUpBeforeClass() throws Exception {
	emf	= Persistence.createEntityManagerFactory("EventPU");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();
	}

	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		extinction = em.find(Extinction.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		extinction = null;
		em.close();
	}

	@Test
	void test() {
		assertEquals("Mammal", extinction.getAnimalClass());
		assertEquals("BC", extinction.getEra().name());
	}

}
