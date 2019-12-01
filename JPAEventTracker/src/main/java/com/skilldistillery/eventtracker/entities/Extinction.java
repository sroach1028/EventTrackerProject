package com.skilldistillery.eventtracker.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Extinction {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private String name;

	@Column(name = "animal_class")
	private String animalClass;

	private String year;

	private String era;

	private String range;

	public int getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAnimalClass() {
		return animalClass;
	}

	public void setAnimalClass(String animalClass) {
		this.animalClass = animalClass;
	}

	public String getYear() {
		return year;
	}

	public void setYear(String year) {
		this.year = year;
	}

	public String getEra() {
		return era;
	}

	public void setEra(String era) {
		this.era = era;
	}

	public String getRange() {
		return range;
	}

	public void setRange(String range) {
		this.range = range;
	}

	@Override
	public String toString() {
		return "Extinction [id=" + id + ", name=" + name + ", animalClass=" + animalClass + ", year=" + year + ", era="
				+ era + ", range=" + range + "]";
	}

	public Extinction() {
	}
}
