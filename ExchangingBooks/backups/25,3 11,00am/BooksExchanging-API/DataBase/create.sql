    CREATE DATABASE exchanging_books;
    use exchanging_books ;
    CREATE TABLE unviersities (
        id int NOT NULL AUTO_INCREMENT,
        name varchar(255),
        code varchar(255),
        PRIMARY KEY (id)
    );

    CREATE TABLE college (
        id int NOT NULL AUTO_INCREMENT,
        name varchar(255),
        code varchar(255),
        PRIMARY KEY (id)
    );


    CREATE TABLE department (
        id int NOT NULL AUTO_INCREMENT,
        name varchar(255),
        code varchar(255),
        id_college int , 
        PRIMARY KEY (id) ,
    FOREIGN KEY (id_college) REFERENCES college(id)
    );




    CREATE TABLE college_unvier (
    id_college int , 
    id_univer int , 
    FOREIGN KEY (id_univer) REFERENCES unviersities(id),
    FOREIGN KEY (id_college) REFERENCES college(id)
    );



    create TABLE data_user (
        id  int NOT NULL AUTO_INCREMENT,
        Name_user VARCHAR(225),
        email_user VARCHAR(225),
        mobile  VARCHAR(225),
        social_media  VARCHAR(225),
        id_univer int ,
        id_college int ,
        id_department int ,
        pass_user VARCHAR(225) ,
        con_pass VARCHAR(225) ,
        FOREIGN KEY (id_univer) REFERENCES unviersities(id),
        FOREIGN KEY (id_college) REFERENCES college(id),
        FOREIGN KEY (id_department) REFERENCES department(id),
        PRIMARY KEY (id) 
    );



    create table books (
        id int NOT NULL AUTO_INCREMENT,
        NameBook VARCHAR (225),
        NameAuthor VARCHAR(225),
        version_date VARCHAR(225),
        id_univer int ,
        id_college int ,
        id_department int ,
        
        donation int ,
        exchange int ,
        sale int ,
        name_book_exchange TEXT ,
        price VARCHAR(225) ,
        nagotiable int ,
        donation_text VARCHAR(225),
        img VARCHAR(225),
        id_user int ,
        FOREIGN KEY (id_univer) REFERENCES unviersities(id),
        FOREIGN KEY (id_college) REFERENCES college(id),
        FOREIGN KEY (id_department) REFERENCES department(id),
        FOREIGN KEY (id_user) REFERENCES data_user(id),
        PRIMARY KEY (id) 
    );




    create table  login_user(
        id int NOT NULL AUTO_INCREMENT,
        email_address VARCHAR(225),
        password_user VARCHAR(225),
        id_data_user int ,
        FOREIGN KEY (id_data_user) REFERENCES data_user(id),
        PRIMARY KEY (id) 
        );


    INSERT INTO `exchanging_books`.`unviersities` (`name`) VALUES ('Al al-Bayt University');
    INSERT INTO `exchanging_books`.`unviersities` (`name`) VALUES ('The University of Jordan');
    INSERT INTO `exchanging_books`.`unviersities` (`name`) VALUES ('Yarmouk University');
    INSERT INTO `exchanging_books`.`unviersities` (`name`) VALUES ('The Hashemite University');
    INSERT INTO `exchanging_books`.`unviersities` (`name`) VALUES ('Middle East University');

    INSERT INTO `exchanging_books`.`unviersities` (`name`) VALUES ('Al-Isra University');
    INSERT INTO `exchanging_books`.`unviersities` (`name`) VALUES (' Al-Balqa Applied University');
    INSERT INTO `exchanging_books`.`unviersities` (`name`) VALUES ('Jordan University of Science and Technology');
    INSERT INTO `exchanging_books`.`unviersities` (`name`) VALUES (' Al Hussein Bin Talal University');
    INSERT INTO `exchanging_books`.`unviersities` (`name`) VALUES ('Mutah');

    INSERT INTO `exchanging_books`.`unviersities` (`name`) VALUES ('Tafila Technical University');
    INSERT INTO `exchanging_books`.`unviersities` (`name`) VALUES ('German Jordanian University');
    INSERT INTO `exchanging_books`.`unviersities` (`name`) VALUES ('Al-Ahliyya Amman University');
    INSERT INTO `exchanging_books`.`unviersities` (`name`) VALUES ('Al-Zaytoonah University of Jordan');
    INSERT INTO `exchanging_books`.`unviersities` (`name`) VALUES ('Philadelphia University');
    
    INSERT INTO `exchanging_books`.`unviersities` (`name`) VALUES ('Princess Sumaya University for Technology');
    INSERT INTO `exchanging_books`.`unviersities` (`name`) VALUES ('University of Petra');
    INSERT INTO `exchanging_books`.`unviersities` (`name`) VALUES ('Applied Science Private University');
    INSERT INTO `exchanging_books`.`unviersities` (`name`) VALUES ('Jerash University');
    INSERT INTO `exchanging_books`.`unviersities` (`name`) VALUES ('Zarqa University');
   
    INSERT INTO `exchanging_books`.`unviersities` (`name`) VALUES ('Irbid National University');
    INSERT INTO `exchanging_books`.`unviersities` (`name`) VALUES ('Ajloun National Private University');
    INSERT INTO `exchanging_books`.`unviersities` (`name`) VALUES ('Amman Arab University');
    INSERT INTO `exchanging_books`.`unviersities` (`name`) VALUES ('American University of Madaba');
    INSERT INTO `exchanging_books`.`unviersities` (`name`) VALUES ('Jadara University');
   
    INSERT INTO `exchanging_books`.`unviersities` (`name`) VALUES ('Aqaba University of Technology');
    INSERT INTO `exchanging_books`.`unviersities` (`name`) VALUES ('Al Hussein Technical University');







INSERT INTO `exchanging_books`.`college` (`name`) VALUES ('Medicine');
INSERT INTO `exchanging_books`.`college` (`name`) VALUES ('Engineering');
INSERT INTO `exchanging_books`.`college` (`name`) VALUES ('Pharmacy');
INSERT INTO `exchanging_books`.`college` (`name`) VALUES ('Dentistry');
INSERT INTO `exchanging_books`.`college` (`name`) VALUES ('IT');

INSERT INTO `exchanging_books`.`college` (`name`) VALUES ('Veterinary Medicine');
INSERT INTO `exchanging_books`.`college` (`name`) VALUES ('Nursing');
INSERT INTO `exchanging_books`.`college` (`name`) VALUES ('Science');
INSERT INTO `exchanging_books`.`college` (`name`) VALUES ('Science & Arts');
INSERT INTO `exchanging_books`.`college` (`name`) VALUES ('Applied Medical Sciences');

INSERT INTO `exchanging_books`.`college` (`name`) VALUES ('Architecture and Design');
INSERT INTO `exchanging_books`.`college` (`name`) VALUES ('Arts & Languages');
INSERT INTO `exchanging_books`.`college` (`name`) VALUES ('Sharia');
INSERT INTO `exchanging_books`.`college` (`name`) VALUES ('Faculty of Economics');
INSERT INTO `exchanging_books`.`college` (`name`) VALUES ('Educational Sciences');

INSERT INTO `exchanging_books`.`college` (`name`) VALUES ('Physical Education');
INSERT INTO `exchanging_books`.`college` (`name`) VALUES ('Law');
INSERT INTO `exchanging_books`.`college` (`name`) VALUES ('Agriculture');
INSERT INTO `exchanging_books`.`college` (`name`) VALUES ('Tourism and Hotel Management');
INSERT INTO `exchanging_books`.`college` (`name`) VALUES ('Mass Communication');







INSERT INTO `exchanging_books`.`department` (`name`, `id_college`) VALUES ('Anatomy', '1');
INSERT INTO `exchanging_books`.`department` (`name`, `id_college`) VALUES ('Anesthesia and Recovery', '1');
INSERT INTO `exchanging_books`.`department` (`name`, `id_college`) VALUES ('Diagnostic Radiology and Nuclear Medicine', '1');
INSERT INTO `exchanging_books`.`department` (`name`, `id_college`) VALUES ('Accident and Emergency Medicine', '1');
INSERT INTO `exchanging_books`.`department` (`name`, `id_college`) VALUES ('Legal Medicine, Toxicology and Forensic Medicine', '1');

INSERT INTO `exchanging_books`.`department` (`name`, `id_college`) VALUES ('General Surgery and Urology', '1');
INSERT INTO `exchanging_books`.`department` (`name`, `id_college`) VALUES ('Health Management and Policy', '1');
INSERT INTO `exchanging_books`.`department` (`name`, `id_college`) VALUES ('Internal Medicine', '1');
INSERT INTO `exchanging_books`.`department` (`name`, `id_college`) VALUES ('Neuroscience', '1');
INSERT INTO `exchanging_books`.`department` (`name`, `id_college`) VALUES ('Obstetrics and Gynecology', '1');

INSERT INTO `exchanging_books`.`department` (`name`, `id_college`) VALUES ('Pathology and Microbiology', '1');
INSERT INTO `exchanging_books`.`department` (`name`, `id_college`) VALUES ('Pediatrics and Neonatology', '1');
INSERT INTO `exchanging_books`.`department` (`name`, `id_college`) VALUES ('Pharmacology', '1');
INSERT INTO `exchanging_books`.`department` (`name`, `id_college`) VALUES ('Physiology and Biochemistry', '1');
INSERT INTO `exchanging_books`.`department` (`name`, `id_college`) VALUES ('Public Health and Community Medicine', '1');

INSERT INTO `exchanging_books`.`department` (`name`, `id_college`) VALUES ('Special Surgery', '1');
INSERT INTO `exchanging_books`.`department` (`name`, `id_college`) VALUES ('Aerospace Engineering', '2');
INSERT INTO `exchanging_books`.`department` (`name`, `id_college`) VALUES ('Civil engineering', '2');
INSERT INTO `exchanging_books`.`department` (`name`, `id_college`) VALUES ('Electrical engineering', '2');
INSERT INTO `exchanging_books`.`department` (`name`, `id_college`) VALUES ('Mechanical engineering', '2');
















INSERT INTO `exchanging_books`.`department` (`name`, `id_college`) VALUES ('Interdisciplinary engineering', '2');
INSERT INTO `exchanging_books`.`department` (`name`, `id_college`) VALUES ('Marine engineering', '2');
INSERT INTO `exchanging_books`.`department` (`name`, `id_college`) VALUES ('Chemical engineering', '2');
INSERT INTO `exchanging_books`.`department` (`name`, `id_college`) VALUES ('Computer Engineering', '2');
INSERT INTO `exchanging_books`.`department` (`name`, `id_college`) VALUES ('Nuclear Engineering', '2');

INSERT INTO `exchanging_books`.`department` (`name`, `id_college`) VALUES ('Aeronautical Engineering', '2');
INSERT INTO `exchanging_books`.`department` (`name`, `id_college`) VALUES ('Clinical Pharmacy', '3');
















INSERT INTO `exchanging_books`.`department` (`name`, `id_college`) VALUES ('Medicinal Chemistry and Pharmacognosy', '3');
INSERT INTO `exchanging_books`.`department` (`name`, `id_college`) VALUES ('Pharmaceutical Technology', '3');
INSERT INTO `exchanging_books`.`department` (`name`, `id_college`) VALUES ('Conservative Dentistry', '4');
INSERT INTO `exchanging_books`.`department` (`name`, `id_college`) VALUES ('Oral Medicine and Oral Surgery', '4');
INSERT INTO `exchanging_books`.`department` (`name`, `id_college`) VALUES ('Preventive Dentistry', '4');
INSERT INTO `exchanging_books`.`department` (`name`, `id_college`) VALUES ('Prosthodontics', '4');
INSERT INTO `exchanging_books`.`department` (`name`, `id_college`) VALUES ('Computer Science', '5');
INSERT INTO `exchanging_books`.`department` (`name`, `id_college`) VALUES ('Computer Informations Systems', '5');
INSERT INTO `exchanging_books`.`department` (`name`, `id_college`) VALUES ('Software Engineering', '5');
INSERT INTO `exchanging_books`.`department` (`name`, `id_college`) VALUES ('Network Engineering and Security', '5');
INSERT INTO `exchanging_books`.`department` (`name`, `id_college`) VALUES ('Veterinary Medicine', '6');
INSERT INTO `exchanging_books`.`department` (`name`, `id_college`) VALUES ('Basic Medical Veterinary Sciences', '6');
INSERT INTO `exchanging_books`.`department` (`name`, `id_college`) VALUES ('Clinical Veterinary Medical Sciences', '6');
INSERT INTO `exchanging_books`.`department` (`name`, `id_college`) VALUES ('Veterinary Pathology and Public Health', '6');
INSERT INTO `exchanging_books`.`department` (`name`, `id_college`) VALUES ('Adult Health Nursing', '7');
INSERT INTO `exchanging_books`.`department` (`name`, `id_college`) VALUES ('Nursing', '7');
INSERT INTO `exchanging_books`.`department` (`name`, `id_college`) VALUES ('Maternal and Child Health Nursing', '7');
INSERT INTO `exchanging_books`.`department` (`name`, `id_college`) VALUES ('Community and Mental Health Nursing', '7');
INSERT INTO `exchanging_books`.`department` (`name`, `id_college`) VALUES ('Midwifery', '7');
















INSERT INTO `exchanging_books`.`department` (`name`, `id_college`) VALUES ('Biology', '8');
INSERT INTO `exchanging_books`.`department` (`name`, `id_college`) VALUES ('Chemistry', '8');
INSERT INTO `exchanging_books`.`department` (`name`, `id_college`) VALUES ('Mathematics', '8');
INSERT INTO `exchanging_books`.`department` (`name`, `id_college`) VALUES ('Geology', '8');



INSERT INTO `exchanging_books`.`department` (`name`, `id_college`) VALUES ('Biology', '9');
INSERT INTO `exchanging_books`.`department` (`name`, `id_college`) VALUES ('Chemistry', '9');
INSERT INTO `exchanging_books`.`department` (`name`, `id_college`) VALUES ('Mathematics', '9');
INSERT INTO `exchanging_books`.`department` (`name`, `id_college`) VALUES ('Geology', '9');
INSERT INTO `exchanging_books`.`department` (`name`, `id_college`) VALUES ('English language and linguistics', '9');
INSERT INTO `exchanging_books`.`department` (`name`, `id_college`) VALUES ('Biotechnology and Genetic Eng', '9');
INSERT INTO `exchanging_books`.`department` (`name`, `id_college`) VALUES ('Forensic science', '9');




INSERT INTO `exchanging_books`.`department` (`name`, `id_college`) VALUES ('Arabic Language and Literature', '12');
INSERT INTO `exchanging_books`.`department` (`name`, `id_college`) VALUES ('Philosophy', '12');
INSERT INTO `exchanging_books`.`department` (`name`, `id_college`) VALUES ('History', '12');
INSERT INTO `exchanging_books`.`department` (`name`, `id_college`) VALUES ('Sociology', '12');
INSERT INTO `exchanging_books`.`department` (`name`, `id_college`) VALUES ('Geography', '12');

INSERT INTO `exchanging_books`.`department` (`name`, `id_college`) VALUES ('Psychology', '12');
INSERT INTO `exchanging_books`.`department` (`name`, `id_college`) VALUES ('Social Work', '12');
INSERT INTO `exchanging_books`.`department` (`name`, `id_college`) VALUES ('Asian Languages', '12');
INSERT INTO `exchanging_books`.`department` (`name`, `id_college`) VALUES ('European Languages', '12');
INSERT INTO `exchanging_books`.`department` (`name`, `id_college`) VALUES ('French Language and Literature', '12');

INSERT INTO `exchanging_books`.`department` (`name`, `id_college`) VALUES ('English Language and Literature', '12');
INSERT INTO `exchanging_books`.`department` (`name`, `id_college`) VALUES ('Islamic Banks', '13');
INSERT INTO `exchanging_books`.`department` (`name`, `id_college`) VALUES ('Islamic Jurisprudence and its Foundation', '13');
INSERT INTO `exchanging_books`.`department` (`name`, `id_college`) VALUES ('Foundations of Religion', '13');
INSERT INTO `exchanging_books`.`department` (`name`, `id_college`) VALUES ('Islam in the contemporary world', '13');

INSERT INTO `exchanging_books`.`department` (`name`, `id_college`) VALUES ('Business', '14');
INSERT INTO `exchanging_books`.`department` (`name`, `id_college`) VALUES ('MIS', '14');
INSERT INTO `exchanging_books`.`department` (`name`, `id_college`) VALUES ('Accounting', '14');
INSERT INTO `exchanging_books`.`department` (`name`, `id_college`) VALUES ('Management and Insurance', '14');

INSERT INTO `exchanging_books`.`department` (`name`, `id_college`) VALUES ('Finance and Banking', '14');
INSERT INTO `exchanging_books`.`department` (`name`, `id_college`) VALUES ('Economics of Finance and Business', '14');
INSERT INTO `exchanging_books`.`department` (`name`, `id_college`) VALUES ('Educational Psychology', '15');
INSERT INTO `exchanging_books`.`department` (`name`, `id_college`) VALUES ('Educational Leadership and Foundations', '15');

INSERT INTO `exchanging_books`.`department` (`name`, `id_college`) VALUES ('Counseling and Special Education', '15');
INSERT INTO `exchanging_books`.`department` (`name`, `id_college`) VALUES ('Library and Information', '15');
INSERT INTO `exchanging_books`.`department` (`name`, `id_college`) VALUES ('Curriculum and Instruction', '15');
INSERT INTO `exchanging_books`.`department` (`name`, `id_college`) VALUES ('Managment and Coahing', '16');

INSERT INTO `exchanging_books`.`department` (`name`, `id_college`) VALUES ('Supervision and Teaching', '16');
INSERT INTO `exchanging_books`.`department` (`name`, `id_college`) VALUES ('Physical Education and sport', '16');
INSERT INTO `exchanging_books`.`department` (`name`, `id_college`) VALUES ('Animal Production', '18');
INSERT INTO `exchanging_books`.`department` (`name`, `id_college`) VALUES ('Natural Resources and Environment', '18');
INSERT INTO `exchanging_books`.`department` (`name`, `id_college`) VALUES ('Nutrition and Food Technology', '18');
INSERT INTO `exchanging_books`.`department` (`name`, `id_college`) VALUES ('Department of Plant Production', '18');


 








 
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(1,8);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(2,8);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(3,8);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(4,8);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(5,8);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(6,8);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(7,8);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(9,8);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(10,8);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(11,8);



INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(2,1);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(5,1);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(7,1);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(8,1);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(12,1);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(13,1);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(14,1);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(15,1);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(16,1);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(17,1);


INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(1,2);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(2,2);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(3,2);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(4,2);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(5,2);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(6,2);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(7,2);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(8,2);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(10,2);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(11,2);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(12,2);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(13,2);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(14,2);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(15,2);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(16,2);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(17,2);




INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(1,3);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(2,3);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(3,3);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(5,3);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(7,3);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(8,3);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(12,3);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(13,3);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(14,3);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(15,3);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(16,3);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(17,3);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(19,3);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(20,3);







INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(1,4);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(2,4);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(3,4);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(4,4);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(5,4);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(6,4);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(7,4);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(9,4);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(10,4);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(11,4);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(12,4);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(13,4);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(14,4);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(15,4);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(16,4);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(19,4);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(20,4);






INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(2,5);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(3,5);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(5,5);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(6,5);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(7,5);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(9,5);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(10,5);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(11,5);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(12,5);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(13,5);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(14,5);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(15,5);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(16,5);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(17,5);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(19,5);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(20,5);



INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(2,6);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(3,6);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(5,6);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(6,6);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(7,6);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(9,6);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(10,6);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(11,6);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(12,6);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(13,6);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(14,6);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(15,6);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(16,6);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(17,6);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(19,6);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(20,6);





INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(2,7);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(3,7);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(5,7);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(6,7);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(7,7);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(9,7);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(10,7);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(11,7);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(12,7);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(13,7);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(14,7);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(15,7);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(16,7);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(17,7);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(19,7);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(20,7);





INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(2,9);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(3,9);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(5,9);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(6,9);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(7,7);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(9,9);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(10,9);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(11,9);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(12,9);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(13,9);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(14,9);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(15,9);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(16,9);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(17,9);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(19,9);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(20,9);



INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(2,10);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(3,10);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(5,10);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(6,10);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(7,10);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(9,10);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(10,10);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(11,10);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(12,10);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(13,10);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(14,10);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(15,10);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(16,10);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(17,10);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(19,10);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(20,10);



INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(2,11);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(3,11);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(5,11);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(6,11);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(7,11);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(9,11);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(10,11);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(11,11);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(12,11);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(13,11);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(14,11);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(15,11);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(16,11);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(17,11);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(19,11);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(20,11);






INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(2,12);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(3,12);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(5,12);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(6,12);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(7,12);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(9,12);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(10,12);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(11,12);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(12,12);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(13,12);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(14,12);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(15,12);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(16,12);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(17,12);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(19,12);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(20,12);


INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(2,13);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(3,13);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(5,13);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(6,13);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(7,13);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(9,13);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(10,13);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(11,13);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(12,13);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(13,13);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(14,13);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(15,13);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(16,13);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(17,13);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(19,13);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(20,13);



INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(2,14);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(3,14);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(5,14);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(6,14);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(7,14);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(9,14);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(10,14);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(11,14);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(12,14);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(13,14);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(14,14);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(15,14);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(16,14);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(17,14);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(19,14);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(20,14);


INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(2,15);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(3,15);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(5,15);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(6,15);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(7,15);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(9,15);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(10,15);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(11,15);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(12,15);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(13,15);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(14,15);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(15,15);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(16,15);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(17,15);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(19,15);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(20,15);




INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(2,16);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(3,16);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(5,16);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(6,16);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(7,16);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(9,16);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(10,16);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(11,16);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(12,16);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(13,16);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(14,16);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(15,16);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(16,16);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(17,16);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(19,16);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(20,16);


INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(2,17);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(3,17);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(5,17);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(6,17);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(7,17);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(9,17);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(10,17);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(11,17);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(12,17);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(13,17);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(14,17);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(15,17);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(16,17);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(17,17);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(19,17);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(20,17);




INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(2,18);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(3,18);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(5,18);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(6,18);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(7,18);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(9,18);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(10,18);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(11,18);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(12,18);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(13,18);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(14,18);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(15,18);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(16,18);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(17,18);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(19,18);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(20,18);





INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(2,19);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(3,19);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(5,19);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(6,19);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(7,19);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(9,19);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(10,19);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(11,19);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(12,19);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(13,19);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(14,19);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(15,19);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(16,19);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(17,19);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(19,19);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(20,19);




INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(2,20);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(3,20);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(5,20);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(6,20);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(7,20);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(9,20);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(10,20);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(11,20);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(12,20);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(13,20);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(14,20);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(15,20);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(16,20);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(17,20);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(19,20);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(20,20);

INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(2,21);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(3,21);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(5,21);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(6,21);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(7,21);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(9,21);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(10,21);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(11,21);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(12,21);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(13,21);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(14,21);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(15,21);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(16,21);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(17,21);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(19,21);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(20,21);






INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(2,22);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(3,22);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(5,22);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(6,22);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(7,22);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(9,22);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(10,22);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(11,22);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(12,22);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(13,22);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(14,22);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(15,22);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(16,22);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(17,22);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(19,22);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(20,22);





INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(2,23);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(3,23);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(5,23);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(6,23);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(7,23);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(9,23);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(10,23);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(11,23);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(12,23);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(13,23);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(14,23);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(15,23);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(16,23);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(17,23);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(19,23);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(20,23);





INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(2,24);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(3,24);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(5,24);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(6,24);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(7,24);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(9,24);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(10,24);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(11,24);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(12,24);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(13,24);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(14,24);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(15,24);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(16,24);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(17,24);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(19,24);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(20,24);




INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(2,25);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(3,25);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(5,25);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(6,25);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(7,25);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(9,25);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(10,25);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(11,25);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(12,25);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(13,25);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(14,25);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(15,25);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(16,25);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(17,25);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(19,25);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(20,25);





INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(2,26);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(3,26);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(5,26);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(6,26);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(7,26);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(9,26);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(10,26);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(11,26);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(12,26);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(13,26);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(14,26);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(15,26);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(16,26);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(17,26);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(19,26);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(20,26);




INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(2,27);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(3,27);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(5,27);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(6,27);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(7,27);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(9,27);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(10,27);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(11,27);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(12,27);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(13,27);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(14,27);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(15,27);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(16,27);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(17,27);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(19,27);
INSERT INTO `exchanging_books`.`college_unvier` (id_college,id_univer) value(20,27);








