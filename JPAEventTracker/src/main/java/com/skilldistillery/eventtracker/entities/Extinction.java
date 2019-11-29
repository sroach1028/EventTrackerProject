package com.skilldistillery.eventtracker.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
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

	@Enumerated(EnumType.STRING)
	private Era era;
	private String range;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
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
	public Era getEra() {
		return era;
	}
	public void setEra(Era era) {
		this.era = era;
	}
	public String getRange() {
		return range;
	}
	public void setRange(String range) {
		this.range = range;
	}
	
	public Extinction(String name, String animalClass, String year, Era era, String range) {
		super();
		this.name = name;
		this.animalClass = animalClass;
		this.year = year;
		this.era = era;
		this.range = range;
	}
	public Extinction() {
		super();
	}
	@Override
	public String toString() {
		return "Extinction [id=" + id + ", name=" + name + ", animalClass=" + animalClass + ", year=" + year + ", era="
				+ era + ", range=" + range + "]";
	}
	
}
