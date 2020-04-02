 


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
 



 --------------

INSERT INTO `exchanging_books`.`data_user` (`Name_user`, `email_user`, `mobile`, `social_media`, `id_univer`, `id_college`, `id_department`, `pass_user`, `con_pass`) VALUES ('omar', 'omar@gmail.com', '08798765434', 'omaromar', '1', '8', '49', 'eee', 'eee');






INSERT INTO `exchanging_books`.`books` (`NameBook`, `NameAuthor`, `version_date`, `id_univer`, `id_college`, `id_department`, `donation`, `exchange`, `sale`, `name_book_exchange`, `price`, `nagotiable`, `img`, `id_user`) VALUES ('calculus 1', 'ahmad', '3/20', '1', '8', '49', '1', '0', '0', '0', '0', '0', '11', '1');


SELECT * FROM exchanging_books.books;
SELECT * FROM exchanging_books.college;
SELECT * FROM exchanging_books.college_unvier;
SELECT * FROM exchanging_books.data_user;
SELECT * FROM exchanging_books.department;
SELECT * FROM exchanging_books.login_user;
SELECT * FROM exchanging_books.unviersities;

SELECT b.img, b.NameBook, b.price, b.collage, u.Name_user FROM
exchanging_books.books AS b, exchanging_books.data_user AS u 
where b.sale = 1;



SELECT b.NameBook , b.NameAuthor , b.version_date , b.id_univer , b.donation ,B.donation_text, b.exchange , b.sale , b.name_book_exchange , b.price ,b.nagotiable ,
b.img , b.id_user, u.name , d.Name_user , d.email_user , d.mobile , d.id_univer FROM 
exchanging_books.books as b , exchanging_books.unviersities as u ,
exchanging_books.data_user as d 
where b.id_univer = u.id and b.id_user =d.id ;




-- SELECT b.NameBook , b.NameAuthor , b.version_date , b.id_univer , b.donation ,b.exchange , b.sale , b.name_book_exchange , b.price ,b.nagotiable ,
-- b.img , b.id_user, u.name , d.Name_user , d.email_user , d.mobile , d.id_univer FROM 
-- exchanging_books.books as b , exchanging_books.unviersities as u ,
-- exchanging_books.data_user as d 
-- where b.id_univer = u.id and b.id_user =d.id ;




ALTER TABLE `exchanging_books`.`books` 
CHANGE COLUMN `donation` `donation` TINYINT(2) NULL DEFAULT NULL ;

ALTER TABLE `exchanging_books`.`books` 
CHANGE COLUMN `donation` `donation` TINYINT(1) NULL DEFAULT NULL ;

select column(s),
If ( column(s) = 1, ‘Passed’, ‘Failed’) as column_name
from table_name
where column(s) = value(s)
order by column(s);


ALTER TABLE `exchanging_books`.`books` 
CHANGE COLUMN `exchange` `exchange` TINYINT(1) NULL DEFAULT NULL ,
CHANGE COLUMN `sale` `sale` TINYINT(1) NULL DEFAULT NULL ,
CHANGE COLUMN `nagotiable` `nagotiable` TINYINT(1) NULL DEFAULT NULL ,
ADD COLUMN `saleable` TINYINT(1) NULL AFTER `id_user`,
ADD COLUMN `bookscol` VARCHAR(45) NULL AFTER `saleable`;



ALTER TABLE `exchanging_books`.`books` 
DROP COLUMN `bookscol`,
DROP COLUMN `donation_text`,
CHANGE COLUMN `saleable` `saleable` TINYINT(1) NULL DEFAULT NULL AFTER `name_book_exchange`;


DELETE FROM `exchanging_books`.`books` WHERE `id`='3';
DELETE FROM `exchanging_books`.`books` WHERE `id`='16';
INSERT INTO `exchanging_books`.`books` (`id`, `NameBook`, `NameAuthor`, `version_date`, `id_univer`, `id_college`, `id_department`, `donation`, `exchange`, `sale`, `name_book_exchange`, `saleable`, `price`, `nagotiable`, `img`, `id_user`) VALUES ('16', 'Aribic', 'Ahmad', '12\\3', '9', '11', '34', '0', '1', '0', 'e almany', '1', '13', '1', 'gdsfdhdfs', '1');
