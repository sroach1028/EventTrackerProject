package com.skilldistillery.eventtracker.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.eventtracker.entities.Extinction;
import com.skilldistillery.eventtracker.serivices.ExtinctionService;

@RestController
@RequestMapping("api")
@CrossOrigin({"*", "http://localhost:4209"})
public class ExtinctionController {

	@Autowired
	private ExtinctionService svc;
	
	@GetMapping("extinctions/{id}")
	public Extinction findById(@PathVariable Integer id, HttpServletResponse resp) {
		Extinction ext = svc.findById(id);
		if(ext == null) {
			resp.setStatus(404);
		}
		return ext;
	}
	
	@GetMapping("extinctions")
	public List<Extinction> findAll(HttpServletResponse resp) {
		List<Extinction> extList = svc.findAll();
		if (extList.isEmpty()) {
			resp.setStatus(404);
		}
		return extList;
	}
	
//	@GetMapping("extinctions/search/{name}")
//	public Extinction findByName(@PathVariable String name, HttpServletResponse resp) {
//		Extinction ext = svc.findByName(name);
//		if (ext == null) {
//			resp.setStatus(404);
//		}
//		return ext;
//	}
	
	@GetMapping("extinctions/search/{keyword}")
	public List<Extinction> findByKeyword(@PathVariable String keyword, HttpServletResponse resp) {
		List<Extinction> extList = svc.findByKeyword(keyword);
		if (extList.isEmpty()) {
			resp.setStatus(404);
		}
		return extList;
	}
	
	@GetMapping("extinctions/avg/{animalClass}")
	public Integer getAvgByAnimalClass(@PathVariable String animalClass, HttpServletResponse resp) {
		Integer classAvg = svc.findAvgByAnimalClass(animalClass);
		if (classAvg > 0) {
			resp.setStatus(200);
		}
		if (classAvg == 0.0) {
			resp.setStatus(404);
		}
		return classAvg;
	}
	
	
	
	@PostMapping("extinctions")
	public Extinction addExtinction(@RequestBody Extinction extinction, HttpServletRequest req, HttpServletResponse resp) {
		try {
			extinction = svc.addExtinction(extinction);
			resp.setStatus(201);
			StringBuffer url = req.getRequestURL();
			url.append("/").append(extinction.getId());
			resp.addHeader("Location", url.toString());
		} catch (Exception e) {
			e.printStackTrace();
			resp.setStatus(400);
			return null;
		}
		return extinction;
	}
	@DeleteMapping("extinctions/{id}")
	public void deleteById(@PathVariable Integer id, HttpServletRequest req, HttpServletResponse resp) {
		boolean deleted = false;
		try {
			deleted = svc.deleteById(id);
			if (deleted == true)
			resp.setStatus(200);
			else
				resp.setStatus(404);
		} catch (Exception e) {
			e.printStackTrace();
			resp.setStatus(400);
		}
	}
	@PutMapping("extinctions/{id}")
	public Extinction updateById(@RequestBody Extinction extinction, @PathVariable Integer id, HttpServletRequest req, HttpServletResponse resp) {
		try {
			extinction = svc.updateById(extinction, id);
			if (extinction == null) {
				resp.setStatus(404);
			}
			else
			resp.setStatus(200);
			return extinction;
		} catch (Exception e) {
			e.printStackTrace();
			resp.setStatus(400);
			return null;
		}
		
	}
}
