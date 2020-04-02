 


  SELECT  u.id  ,  u.name, c.name  , d.name 
FROM exchanging_books.unviersities as u 
left  JOIN  exchanging_books.college_unvier as us
 ON  u.id = us.id_univer 
 left join  exchanging_books.college as c 
 on   c.id = us.id_college 
 left join  exchanging_books.department as d 
 on    d.id_college =c.id ; 



 SELECT  u.id  ,  u.name, c.name  , d.name  , b.NameBook , b.NameAuthor
FROM exchanging_books.unviersities as u 
left  JOIN  exchanging_books.college_unvier as us
 ON  u.id = us.id_univer 
 left join  exchanging_books.college as c 
 on   c.id = us.id_college 
 left join  exchanging_books.department as d 
 on    d.id_college =c.id 
 right join exchanging_books.books as b 
 on  b.id_department=b.id ;




 SELECT  u.id  ,  u.name, c.name  , d.name  , b.NameBook , b.NameAuthor  , p.Name_user
FROM exchanging_books.unviersities as u 
left  JOIN  exchanging_books.college_unvier as us
 ON  u.id = us.id_univer 
 left join  exchanging_books.college as c 
 on   c.id = us.id_college 
 left join  exchanging_books.department as d 
 on    d.id_college =c.id 
 right join exchanging_books.books as b 
 on  b.id_department=d.id and b.id_univer=u.id and b.id_college=c.id 
 right join exchanging_books.data_user as p 
 on p.id = b.id_user;
 