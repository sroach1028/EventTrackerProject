# EventTrackerProject

A Spring REST program created by Shaun Roach at Skill Distillery, CO

## Description

This program uses RESTful web services that allow clients to retrieve and manage 'extinction' data stored on a server. The program communicates with a MySQL database that contains data related to known animal extinctions. The clients communicate via URI routes and Http Methods making up the following REST Endpoints:

* GET api/extinctions/{id}        

-------find and display the Extinction event corresponding to the given id
* GET api/extinctions               

-------find and display all Extinction events in the database
* GET api/extinctions/search/{keyword}        

-------find and display any Extinction event where the name or area contains the given keyword
* POST api/extinctions            

-------create and persist an Extinction event from a given JSON representation
* PUT api/extinctions/{id}        

-------update the Extinction event corresponding to the given id with a provided JSON representation
* DELETE api/extinctions/{id}     

-------delete Extinction even corresponding to the given id

The front-end is an application that allows a user to query the MySql database for information about various 'Animal Extinctions' throughout history. The application allows for full CRUD operations.  

## Technologies

Spring REST services, Spring Boot, Angular, Java, VS-Code, JSON, Eclipse, Git, GitHub, Postman, MySql, MySqlWorkbench, Atom, HTML, CSS

## Lessons Learned

MySQL has many reserved words. Spring Data JPA does not mitigate the conflict that occurs when the programmer uses a reserved word as a table property name. Instead, any INSERT performed by the JpaRepository will result in a SQL Syntax error, because the naming conflict is not properly resolved. To avoid this conflict when using Spring REST services, I will be very careful not to make use of any MySQL reserved words in my tables.
