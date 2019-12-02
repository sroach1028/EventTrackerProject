# EventTrackerProject

## Description

This program uses RESTful web services that allow clients to retrieve and manage 'extinction' data stored on a server. The clients communicate via URI routes and Http Methods making up the following REST Endpoints:

* GET api/extinctions/{id}        
-------find and display the Extinction even corresponding to the given id
* POST api/extinctions            
-------create and persist an Extinction event from a given JSON representation
* PUT api/extinctions/{id}        
-------update the Extinction event corresponding to the given id with a provided JSON representation
* DELETE api/extinctions/{id}     
-------delete Extinction even corresponding to the given id

## Technologies

Spring REST services, Spring Boot, JSON, Java, Eclipse, Git, GitHub, Postman, MySql, MySqlWorkbench, Atom

## Lessons Learned

MySQL has many reserved words. Spring Data JPA does not mitigate the conflict that occurs when the programmer uses a reserved word as a table property name. Instead, any INSERT performed by the JpaRepository will result in a SQL Syntax error, because the naming conflict is not properly resolved. To avoid this conflict when using Spring REST services, I will be very careful not to make use of any MySQL reserved words in my tables.
