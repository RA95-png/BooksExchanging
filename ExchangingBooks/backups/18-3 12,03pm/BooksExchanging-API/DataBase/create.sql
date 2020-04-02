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




    CREATE TABLE quality(
        id int NOT NULL AUTO_INCREMENT,
        donation int ,
        exchange int ,
        sale int ,
        name_book_exchange TEXT ,
        price VARCHAR(225) ,
        nagotiable int ,
        PRIMARY KEY (id) 
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
        id_quality int ,
        img VARCHAR(225),
        id_user int ,
        FOREIGN KEY (id_univer) REFERENCES unviersities(id),
        FOREIGN KEY (id_college) REFERENCES college(id),
        FOREIGN KEY (id_department) REFERENCES department(id),
        FOREIGN KEY (id_quality) REFERENCES quality(id),
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


---------------------university
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

-----------------College
INSERT INTO `exchanging_books`.`college` (`name`) VALUES ('Medicine');
INSERT INTO `exchanging_books`.`college` (`name`) VALUES ('Engineering');
INSERT INTO `exchanging_books`.`college` (`name`) VALUES ('Pharmacy');
INSERT INTO `exchanging_books`.`college` (`name`) VALUES ('Dentistry');
INSERT INTO `exchanging_books`.`college` (`name`) VALUES ('IT');

INSERT INTO `exchanging_books`.`college` (`name`) VALUES ('Veterinary Medicine');
INSERT INTO `exchanging_books`.`college` (`name`) VALUES ('Nursing');
INSERT INTO `exchanging_books`.`college` (`name`) VALUES ('Science & Arts');
INSERT INTO `exchanging_books`.`college` (`name`) VALUES ('Applied Medical Sciences');
INSERT INTO `exchanging_books`.`college` (`name`) VALUES ('Architecture and Design');

INSERT INTO `exchanging_books`.`college` (`name`) VALUES ('Science ');
INSERT INTO `exchanging_books`.`college` (`name`) VALUES ('Arts & Languages');
INSERT INTO `exchanging_books`.`college` (`name`) VALUES ('Sharia');
INSERT INTO `exchanging_books`.`college` (`name`) VALUES ('Faculty of Economics');
INSERT INTO `exchanging_books`.`college` (`name`) VALUES ('Educational Sciences');

INSERT INTO `exchanging_books`.`college` (`name`) VALUES ('Physical Education');
INSERT INTO `exchanging_books`.`college` (`name`) VALUES ('Law');
INSERT INTO `exchanging_books`.`college` (`name`) VALUES ('Agriculture');
INSERT INTO `exchanging_books`.`college` (`name`) VALUES ('Tourism and Hotel Management');
INSERT INTO `exchanging_books`.`college` (`name`) VALUES ('Mass Communication');


----------------department---------------------------------------

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



INSERT INTO `exchanging_books`.`department` (`id`, `name`, `id_college`) VALUES ('28', 'Medicinal Chemistry and Pharmacognosy', '3');
INSERT INTO `exchanging_books`.`department` (`id`, `name`, `id_college`) VALUES ('29', 'Pharmaceutical Technology', '3');
INSERT INTO `exchanging_books`.`department` (`id`, `name`, `id_college`) VALUES ('30', 'Conservative Dentistry', '4');
INSERT INTO `exchanging_books`.`department` (`id`, `name`, `id_college`) VALUES ('31', 'Oral Medicine and Oral Surgery', '4');
INSERT INTO `exchanging_books`.`department` (`id`, `name`, `id_college`) VALUES ('32', 'Preventive Dentistry', '4');
INSERT INTO `exchanging_books`.`department` (`id`, `name`, `id_college`) VALUES ('33', 'Prosthodontics', '4');
INSERT INTO `exchanging_books`.`department` (`id`, `name`, `id_college`) VALUES ('34', 'Computer Science', '5');
INSERT INTO `exchanging_books`.`department` (`id`, `name`, `id_college`) VALUES ('35', 'Computer Informations Systems', '5');
INSERT INTO `exchanging_books`.`department` (`id`, `name`, `id_college`) VALUES ('36', 'Software Engineering', '5');
INSERT INTO `exchanging_books`.`department` (`id`, `name`, `id_college`) VALUES ('37', 'Network Engineering and Security', '5');
INSERT INTO `exchanging_books`.`department` (`id`, `name`, `id_college`) VALUES ('38', 'Veterinary Medicine', '6');
INSERT INTO `exchanging_books`.`department` (`id`, `name`, `id_college`) VALUES ('39', 'Basic Medical Veterinary Sciences', '6');
INSERT INTO `exchanging_books`.`department` (`id`, `name`, `id_college`) VALUES ('40', 'Clinical Veterinary Medical Sciences', '6');
INSERT INTO `exchanging_books`.`department` (`id`, `name`, `id_college`) VALUES ('41', 'Veterinary Pathology and Public Health', '6');
INSERT INTO `exchanging_books`.`department` (`id`, `name`, `id_college`) VALUES ('42', 'Adult Health Nursing', '7');
INSERT INTO `exchanging_books`.`department` (`id`, `name`, `id_college`) VALUES ('43', 'Nursing', '7');
INSERT INTO `exchanging_books`.`department` (`id`, `name`, `id_college`) VALUES ('44', 'Maternal and Child Health Nursing', '7');
INSERT INTO `exchanging_books`.`department` (`id`, `name`, `id_college`) VALUES ('45', 'Community and Mental Health Nursing', '7');
INSERT INTO `exchanging_books`.`department` (`id`, `name`, `id_college`) VALUES ('46', 'Midwifery', '7');
INSERT INTO `exchanging_books`.`department` (`id`, `name`, `id_college`) VALUES ('47', 'Biology', '8');
INSERT INTO `exchanging_books`.`department` (`id`, `name`, `id_college`) VALUES ('48', 'Chemistry', '8');
INSERT INTO `exchanging_books`.`department` (`id`, `name`, `id_college`) VALUES ('49', 'Mathematics', '8');
INSERT INTO `exchanging_books`.`department` (`id`, `name`, `id_college`) VALUES ('50', 'Geology', '8');
INSERT INTO `exchanging_books`.`department` (`id`, `name`, `id_college`) VALUES ('51', 'English language and linguistics', '8');
INSERT INTO `exchanging_books`.`department` (`id`, `name`, `id_college`) VALUES ('52', 'Biotechnology and Genetic Eng', '8');
INSERT INTO `exchanging_books`.`department` (`id`, `name`, `id_college`) VALUES ('53', 'Forensic science', '8');
INSERT INTO `exchanging_books`.`department` (`id`, `name`, `id_college`) VALUES ('54', 'Biology', '11');
INSERT INTO `exchanging_books`.`department` (`id`, `name`, `id_college`) VALUES ('55', 'Chemistry', '11');
INSERT INTO `exchanging_books`.`department` (`id`, `name`, `id_college`) VALUES ('56', 'Mathematics', '11');
INSERT INTO `exchanging_books`.`department` (`id`, `name`, `id_college`) VALUES ('57', 'Geology', '11');
INSERT INTO `exchanging_books`.`department` (`id`, `name`, `id_college`) VALUES ('58', 'Arabic Language and Literature', '12');
INSERT INTO `exchanging_books`.`department` (`id`, `name`, `id_college`) VALUES ('59', 'Philosophy', '12');
INSERT INTO `exchanging_books`.`department` (`id`, `name`, `id_college`) VALUES ('60', 'History', '12');
INSERT INTO `exchanging_books`.`department` (`id`, `name`, `id_college`) VALUES ('61', 'Sociology', '12');
INSERT INTO `exchanging_books`.`department` (`id`, `name`, `id_college`) VALUES ('62', 'Geography', '12');
INSERT INTO `exchanging_books`.`department` (`id`, `name`, `id_college`) VALUES ('63', 'Psychology', '12');
INSERT INTO `exchanging_books`.`department` (`id`, `name`, `id_college`) VALUES ('64', 'Social Work', '12');
INSERT INTO `exchanging_books`.`department` (`id`, `name`, `id_college`) VALUES ('65', 'Asian Languages', '12');
INSERT INTO `exchanging_books`.`department` (`id`, `name`, `id_college`) VALUES ('66', 'European Languages', '12');
INSERT INTO `exchanging_books`.`department` (`id`, `name`, `id_college`) VALUES ('67', 'French Language and Literature', '12');
INSERT INTO `exchanging_books`.`department` (`id`, `name`, `id_college`) VALUES ('68', 'English Language and Literature', '12');
INSERT INTO `exchanging_books`.`department` (`id`, `name`, `id_college`) VALUES ('69', 'Islamic Banks', '13');
INSERT INTO `exchanging_books`.`department` (`id`, `name`, `id_college`) VALUES ('70', 'Islamic Jurisprudence and its Foundation', '13');
INSERT INTO `exchanging_books`.`department` (`id`, `name`, `id_college`) VALUES ('71', 'Foundations of Religion', '13');
INSERT INTO `exchanging_books`.`department` (`id`, `name`, `id_college`) VALUES ('72', 'Islam in the contemporary world', '13');
INSERT INTO `exchanging_books`.`department` (`id`, `name`, `id_college`) VALUES ('73', 'Business', '14');
INSERT INTO `exchanging_books`.`department` (`id`, `name`, `id_college`) VALUES ('74', 'MIS', '14');
INSERT INTO `exchanging_books`.`department` (`id`, `name`, `id_college`) VALUES ('75', 'Accounting', '14');
INSERT INTO `exchanging_books`.`department` (`id`, `name`, `id_college`) VALUES ('76', 'Management and Insurance', '14');
INSERT INTO `exchanging_books`.`department` (`id`, `name`, `id_college`) VALUES ('77', 'Finance and Banking', '14');
INSERT INTO `exchanging_books`.`department` (`id`, `name`, `id_college`) VALUES ('78', 'Economics of Finance and Business', '14');
INSERT INTO `exchanging_books`.`department` (`id`, `name`, `id_college`) VALUES ('79', 'Educational Psychology', '15');
INSERT INTO `exchanging_books`.`department` (`id`, `name`, `id_college`) VALUES ('80', 'Educational Leadership and Foundations', '15');
INSERT INTO `exchanging_books`.`department` (`id`, `name`, `id_college`) VALUES ('81', 'Counseling and Special Education', '15');
INSERT INTO `exchanging_books`.`department` (`id`, `name`, `id_college`) VALUES ('82', 'Library and Information', '15');
INSERT INTO `exchanging_books`.`department` (`id`, `name`, `id_college`) VALUES ('83', 'Curriculum and Instruction', '15');
INSERT INTO `exchanging_books`.`department` (`id`, `name`, `id_college`) VALUES ('84', 'Managment and Coahing', '16');
INSERT INTO `exchanging_books`.`department` (`id`, `name`, `id_college`) VALUES ('85', 'Supervision and Teaching', '16');
INSERT INTO `exchanging_books`.`department` (`id`, `name`, `id_college`) VALUES ('86', 'Physical Education and sport', '16');
INSERT INTO `exchanging_books`.`department` (`id`, `name`, `id_college`) VALUES ('87', 'Animal Production', '18');
INSERT INTO `exchanging_books`.`department` (`id`, `name`, `id_college`) VALUES ('88', 'Natural Resources and Environment', '18');
INSERT INTO `exchanging_books`.`department` (`id`, `name`, `id_college`) VALUES ('89', 'Nutrition and Food Technology', '18');
INSERT INTO `exchanging_books`.`department` (`id`, `name`, `id_college`) VALUES ('90', 'Department of Plant Production', '18');


 ---------------end
 
