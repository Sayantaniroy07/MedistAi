const doctors = [
  
//   CARDIOLOGIST
    {
        id: 1,
        name: "Dr. Priyanker Mondal",
        specialty: "Cardiologist",
         rating: "4.8 (116)",
        location: "Anadaloke Multispeciality Hospital, Sevoke Rd, Ward 44, Dasrath Pally, 2nd Mile, Siliguri, West Bengal 734001",
        contact: "+91 07980977504",
        qualifications: "MBBS, MD - General Medicine, DM - Cardiology",
        experience: "10+ years",
        about: "Dr. Mondal is a well-regarded Interventional Cardiologist practicing at Anandaloke Multispeciality Hospital. His core medical interests focus on complex coronary angioplasty, structural heart interventions, and endovascular procedures for conditions like aortic aneurysms. He is actively involved in local cardiac care programs and is a member of the Cardiological Society of India (CSI)."
    },
    {
        id: 2,
        name: "Dr. Avishek Bagchi",
        specialty: "Cardiologist",
         rating: "4.8 (336)",
        location: "National Highway 31, inside Uttorayon Township, behind City center, Matigara, Siliguri, West Bengal 734010",
        contact: "+91 08240604093",
        qualifications: "MBBS, MD - General Medicine, DM - Cardiology",
        experience: "8+ years",
        about: "Dr. Bagchi is a skilled Cardiologist with a strong background in diagnosing and treating various heart conditions. He is known for his patient-centered approach and commitment to providing the highest standard of care."
    },
    {
        id: 3,
        name: "Dr. Diwakar Bista",
        specialty: "Cardiologist",
         rating: "4.8 (823)",
        location: "Ward No.43, near Nirman Vidya Jyoti Sr. Sec. School, Ward 43, Dasrath Pally, Bhanu Nagar, Siliguri, West Bengal 734001",
        contact: "+91 09093988988",
        qualifications: "MBBS, MD - General Medicine, DM - Cardiology",
        experience: "12+ years",
        about: "Dr. Bista is a renowned Cardiologist with extensive experience in managing complex cardiovascular cases. His expertise lies in preventive cardiology and advanced interventional procedures."
    },
    {
        id: 4,
        name: "Dr. Swapan Kumar Saha",
        specialty: "Cardiologist",
         rating: "5.0 (65)",
        location: "2ND Floor, 2F, &2G, SKS Heart Care, Dwarika RN Agarwal, Signature compex, Burdwan Rd, Siliguri, West Bengal 734005",
        contact: "+91 07548032598",
        qualifications: "MBBS, MD - General Medicine, DM - Cardiology",
        experience: "15+ years",
        about: "Dr. Saha is a senior accomplished Interventional Cardiologist associated with Manipal Hospital Siliguri and SKS Heart Care. Over his extensive career, he has written multiple research contributions regarding geriatric cardiology and myocardial infarction care. His primary clinical interests include angiography, pacemaker device implantations, peripheral vascular therapies, and advanced chronic heart failure and hypertension management.."
    },
    {
        id: 5,
        name: "Dr. R. Saha",
        specialty: "Cardiologist",
         rating: "4.9 (1332)",
        location: "Bengal Medical Stores, Hill Cart Rd, beside Hotel Vinayak Building, near Sevoke More, Ward 6, Siliguri, West Bengal 734001",
        contact: "+91 07479019695",
        qualifications: "MBBS, MD - General Medicine, DM - Cardiology",
        experience: "10+ years",
        about: "Dr. R. Saha functions as a highly experienced Senior Multi-Specialty Physician. Operating out of Bengal Medical Stores near Sevoke More, he does not rely on advanced online booking infrastructures. His primary focus rests on managing multisystem issues through OPD clinic management—specifically addressing general internal medicine fields that bridge Cardiology, Diabetes care, and Respiratory/Chest complications to prevent unnecessary hospitalizations"
    },
    // Gynaecologist
    {
        id: 6,
        name: "Dr Shraddha Tripathi",
        specialty: "GYNOCOLOGIST",
        location: "WARD NO-42, 8/13/41/2/15 PBR TOWER(BASEMENT SEVOKE ROAD, Near, Don Bosco Rd, More, Siliguri, West Bengal 734001",
         rating: "4.9 (564)",
        contact: "+9193826 37905",
        qualifications: "MBBS, DNB in Obstetrics & Gynecology from the National Board of Examinations",
        experience: "20 years",
        about: "Dr. Tripathi is a highly accomplished Gynecologist, Obstetrician, and Senior IVF Consultant who currently practices at Birla Fertility & IVF on Sevoke Road. She has extensive training bridging advanced reproductive medicine and general gynecology. Her core clinical focus includes female and male infertility evaluations, fertility preservation, normal and high-risk pregnancy care, and reproductive hormonal disorders such as Polycystic Ovary Syndrome (PCOS)."
    },
    {
        id: 7,
        name: "Dr. Kajal Kumari",
        specialty: "Gynaecologist",
        location: "Ward No.10, Shanti Nursing Home, near International Market, Mahakal Pally, Janta Nagar, Siliguri, West Bengal 734001",
         rating: "4.8 (167)",
        contact: "+91 09382260038",
        qualifications: "MBBS, DNB in Obstetrics & Gynecology ",
        experience: "9+ years",
        about: "Dr. Kumari operates primarily out of Shanti Nursing Home (Mahakal Pally) and Arogyam Healthcare. She is locally well-regarded for providing attentive maternal care, routine pregnancy tracking, and infertility consultations. Her clinical portfolio ranges from regular obstetric supervision to specialized interventions like laparoscopic surgeries, hormonal therapies, and gynecological cancer screenings."
    },
    {
        id: 8,
        name: "Dr. Pronomita Ghosh",
        specialty: "Gynaecologist",
        location: "Siliguri United Day Care, Bata Galli, Hill Cart Rd, Siliguri, West Bengal 734001",
         rating: "4.9 (383)",
        contact: "03532535504",
        qualifications: "MBBS, FMAS Specially trained in Laparoscopic Tubal Sterilization at the Goran Grosskopf Family Clinic, Pune",
        experience: "18+ years",
        about: "Dr. Ghosh practices at Pampearl Hospitals, Siliguri United Day Care, and the Siliguri Neuro Centre. She is highly specialized in advanced laparoscopic interventions, high-risk pregnancy monitoring, menstrual disorders, abortion management, and ovarian cyst treatments. She holds active professional memberships with medical bodies like FOGSI, IMA, IAGE, and ISAR."
    },
    {
        id: 9,
        name: "Dr. Monika Agarwal",
        specialty: "Gynecologist",
        location: "Manokamna Hospital Iskcon Mandir Road, Sevoke Rd, Siliguri, West Bengal 734001",
         rating: "4.8 (538)",
        contact: "+91 08918333029",
        qualifications: "MBBS",
        experience: "8+ years",
        about: "Dr. Agarwal serves as the Chief Executive Officer (CEO) and Head Consultant at Manokamna Hospital on ISKCON Mandir Road, Sevoke Road. Recognized as a leading pregnancy care specialist in North Bengal, she focuses heavily on managing high-risk pregnancies, performing precise minimally invasive surgeries (such as hysteroscopy, myomectomy, hysterectomy, and ovarian cyst removal), and addressing polycystic ovary syndrome (PCOS) and female infertility."
    },
    {
        id: 10,
        name: "Dr. Sumit Kumar Das",
        specialty: "Gynecologist",
        location: "Ward No. 11, Rajani Bagan, Mukherjee Hospital, ward number 11, rajani bagan, Hill Cart Rd, Hakim Para, Siliguri, West Bengal 734001",
         rating: "5.0 (187)",
        contact: "+91 09002733921",
        qualifications: "MBBS, MS in Obstetrics & Gynecology",
        experience: "8+ years",
        about: "Dr. Das is a trusted consultant practicing at Mukherjee Hospital (Rajani Bagan). He has handled numerous complex medical cases and is widely recognized by patients for his compassionate bedside manner and round-the-clock emergency support. His clinical practice encompasses comprehensive prenatal care, high-risk pregnancy management, adolescent gynecology, fertility treatments, and minimally invasive pelvic surgeries."
    },
    // Orthopaedic
    {
        id: 11,
        name: "Dr. Amlan Jyoti Roy",
        specialty: "Orthopaedic",
        location: "AROGYA HEALTH CARE, Court More Main Rd, Ward 18, Subhas Pally, Siliguri, West Bengal 734001",
        contact: "+91 09475211118",
         rating: "4.7 (241)",
        qualifications: "MBBS, MS - Orthopaedics",
        experience: "8+ years",
        about: "Dr. Roy is a skilled Orthopaedic surgeon with a commitment to delivering personalized care for musculoskeletal conditions."
    },
    {
        id: 12,
        name: "Dr. Abhishek Agarwal",
        specialty: "Orthopaedic",
        location: "Dalmia Dharamsala, $517/1,$ Jamuna Lal Bajaj Rd, near Rams Paradise, Ward 9, Khalpara, Siliguri, West Bengal 734005",
        contact: "+91 08001000452",
         rating: "4.9 (861)",
        qualifications: "MBBS, MS - Orthopaedics",
        experience: "10+ years",
        about: "Dr. Agarwal is a dedicated Orthopaedic surgeon with a focus on providing comprehensive care for musculoskeletal conditions."
    },
    {
        id: 13,
        name: "Dr Sandeep Roy",
        specialty: "Orthopaedic",
        location: "Sunrise Nursing Home, Ward Number 13, Punjabi Para, Siliguri, West Bengal 734001",
        contact: "+91 07365020021",
         rating: "5.0 (188)",
         qualifications: "MBBS, MS - Orthopaedics",
        experience: "12+ years",
        about: "Dr. Roy is a skilled Orthopaedic surgeon with a commitment to delivering personalized care for musculoskeletal conditions."  

    },
    {
        id: 14,
        name: "Dr. Archishman Das",
        specialty: "Orthopaedic",
        location: "SH12A, Ward 32, Tinbatti More, Siliguri, West Bengal 734005",
        contact: "+91 09800817777",
         rating: "4.9(270)",
        qualifications: "MBBS, MS - Orthopaedics",
        experience: "10+ years",
        about: "Dr. Das is a skilled Orthopaedic surgeon with a commitment to delivering personalized care for musculoskeletal conditions."
    },
    {
        id: 15,
        name: "Dr. Washif Rashid",
        specialty: "Orthopaedic",
        location: "Star hospital, Ward 32, Tinbatti More, Siliguri, West Bengal 734007",
        contact: "+91 06295452145",
         rating: "5.0 (297)",
        qualifications: "MBBS, MS - Orthopaedics",
        experience: "12+ years",
        about: "Dr. Rashid is a dedicated Orthopaedic surgeon with a focus on providing comprehensive care for musculoskeletal conditions."
    },
    {
        id: 16,
        name: "Dr. Somsubhra Pal",
        specialty: "Orthopaedic",
        location: "Basu's Clinic, Nandalal Basu Sarani, College Para, Hakim Para, Siliguri, West Bengal 734001",
        contact: "+91 09679130516",
         rating: "5.0 (15)",
        qualifications: "MBBS, MS - Orthopaedics",
        experience: "12+ years",
        about: "Dr. Pal is a skilled Orthopaedic surgeon with a commitment to delivering personalized care for musculoskeletal conditions."
    },
    // Dermatologist
    {
        id: 17,
        name: "Dr. Anisha Najeeb",
        specialty: "DERMATOLOGIST",
        location: "Capital one building, Burdwan Rd, near Shivam palace, Ward 5, Mahananda Para, Siliguri, West Bengal 734005",
        contact: "+91 08945826858",
         rating: "4.6 (288)",
        qualifications: "MBBS",
        experience: "10+ years",
        about: "Dr. Najeeb is a highly skilled and compassionate dermatologist based in Siliguri, practicing at her own state-of-the-art facility, Skinworld (Burdwan Road), and as a consultant at Mahabir's Doctor Hub (Hill Cart Road). She specializes heavily in clinical dermatology, minor dermatosurgeries (such as mole excision, punch biopsy, and skin tag removal), and advanced aesthetic/cosmetology treatments including laser hair reduction."
    },
    {
        id: 18,
        name: "Dr. Swarnali",
        specialty: "DERMATOLOGIST",
        location: "ground floor, Galaxy House, bus stand, Sevoke Rd, beside PC mittal, Ward 43, Siliguri, West Bengal 734010",
        contact: "+91 07004745048",
         rating: "4.7 (441)",
        qualifications: "MBBS, MD - General Medicine, DM - Cardiology",  
        experience: "10+ years",
        about: "Dr. Swarnali operates out of Dr. Swarnalis Skin & Aesthetics Studio (Galaxy House, Sevoke Road) and is additionally attached to Anandaloke Hospital & Neurosciences Centre. Her clinical practice balances general dermatology—such as managing chronic skin rashes and medical skin conditions—with modern cosmetic treatments, including microneedling for severe acne scar reductions, chemical peeling, and laser therapies."
    },
    {
        id: 19,
        name: "Dr Aditi Dey",
        specialty: "DERMATOLOGIST",
        location: "BALANCED SKIN CLINIC, Haren Mukherjee Rd, beside Medimall, opposite Bhutia Market, Ward 12, Hakim Para, Siliguri, West Bengal 734001",
        contact: "+91 07501484048",
         rating: "4.6 (54)",
        qualifications: "MBBS, MD / Diploma in Dermatology",
        experience: "Active practicing consultant with established clinical experience in North Bengal",
        about: "Dr. Dey leads the Balanced Skin Clinic located at Hakimpara (opposite Bhutia Market, Haren Mukherjee Road). She is highly praised by local patients for her structured diagnostic approach, clear therapeutic communication, and friendly staff. Her clinic focuses on delivering individualized medical treatments for persistent skin issues, cosmetic enhancements, and general dermatological concerns for patients of all ages."
    },
    {
        id: 20,
        name: "Dr. Amit Kumar Agarwal",
        specialty: "DERMATOLOGIST",
        location: "Sanjeevani Apartment, Station Feeder Rd, New Milanpally, Saktigarh, Siliguri, West Bengal 734005",
        contact: "09832229559",
         rating: "4.1 (221)",
        qualifications: "MBBS, Post-Graduate Diploma in Dermatology, Venereology and Leprosy (DDVL)",
        experience: "20+ years",
        about: "Dr. AgarwalDr is one of Siliguri's most established senior cosmetic dermatologists and dermatosurgeons. is a dedicated Dermatologist with a focus on providing comprehensive care for skin conditions."
    },
    {
        id: 21,
        name: "Dr Priya Rajbansh Mohpal",
        specialty: "DERMATOLOGIST",
        location: "Dr Mohpal's Nursing Home Pvt Ltd, Meghnad Saha Sarani, Ward 2, Pradhan Nagar, Siliguri, West Bengal 734003",
        contact: "+91 09113364923",
         rating: "4.5 (94)",
        qualifications: "MBBS, MD in Dermatology, Venereology & Leprosy (Skin and VD)",  
        experience: "10+ years",
        about: "Dr. Mohpal is registered with the West Bengal Medical Council and is a skilled Dermatologist with a commitment to delivering personalized care for skin conditions."
    },
    {
        id: 22,
        name: "Dr. Shainee Datta",
        specialty: "DERMATOLOGIST",
        location: "10, Haren Mukherjee Rd, opp. of gst bhawan, Ward 12, Hakim Para, Siliguri, West Bengal 734001",
        contact: "+91 07002383615",
         rating: "4.9(39)",
        qualifications: "MBBS, MD in Dermatology, Venereology & Leprosy",
        experience: "10+ years",
        about: "Dr. Datta is a skilled Dermatologist with a commitment to delivering personalized care for skin conditions.She specializes in managing hair-fall disorders (like Alopecia Areata), anti-aging therapies, botulinum toxins, surgical skin tag/wart removals, and advanced hyperpigmentation treatments."
    },
    // Neurologist
    {
        id: 23,
        name: "Dr. Surendra K. Gupta",
        specialty: "NEUROLOGIST",
        location: "Heritage hospital, C/O, Burdwan Rd, Ward 5, Mahananda Para, Siliguri, West Bengal 734005",
        contact: "+91 07566200161",
         rating: "4.9 (261)",
        qualifications: "MBBS",
        experience: "10+ years",
        about: "Dr. Gupta is a highly experienced Neurologist with a focus on diagnosing and treating complex neurological disorders. He is known for his patient-centered approach and commitment to providing the highest standard of care."
    },
    {
        id: 24,
        name: "Dr. Joydeep Dey",
        specialty: "NEUROLOGIST",
        location: "Rudraksh More & Near, Rudraksh Superspeciality Care, Harasundar High school, Matigara, Siliguri, West Bengal 734010",
        contact: "+91 09735142868",
         rating: "4.7 (376)",
        qualifications: "MBBS" ,
        experience: "10+ years",
        about: "Dr. Dey is a skilled Neurologist with a commitment to delivering personalized care for neurological conditions."
    },
    {
        id: 25,
        name: "Dr Vishram Pandey",
        specialty: "NEUROLOGIST",
        location: "first floor, Paradise tower, Burdwan Rd, near sarda motors, Ward 6, Siliguri, West Bengal 734001",
        contact: "+91 09145022500",
         rating: "4.9 (204)",
        qualifications: "MBBS", 
        experience: "10+ years",
        about: "Dr. Pandey is a dedicated Neurologist with a focus on providing comprehensive care for neurological conditions."
    },
    {
        id: 26,
        name: "Dr. Sridhar Rathod",
        specialty: "NEUROLOGIST",
        location: "Mukherjee Hospital, Rajni Bagan, Roard, C/O, Hill Cart Rd, Siliguri, West Bengal 734001",
        contact: "+91 07893802963",
         rating: "4.9 (179)",
        qualifications: "MBBS", 
        experience: "10+ years",
        about: "Dr. Rathod is a skilled Neurologist with a commitment to delivering personalized care for neurological conditions."
    },
    {
        id: 27,
        name: "Dr. Harish Kumar Ojha",
        specialty: "NEUROLOGIST",
        location: "Neurosurgeon Chamber, Kins Hospital, Sevoke More, Hill Cart Rd, beside Gayaram Building, Ward 6, Mahananda Para, Siliguri, West Bengal 734001",
        contact: "+91 7005686765",
         rating: "4.9 (67)",
        qualifications: "MBBS",
        experience: "10+ years",
        about: "Dr. Ojha is a dedicated Neurologist with a focus on providing comprehensive care for neurological conditions."
    },
    {
        id: 28,
        name: "Dr Parag Agrawal",
        specialty: "NEUROLOGIST",
        location: "Jalan Medihut More, opp. Siliguri District Hospital, court, Ward 18, Hakim Para, Siliguri, West Bengal 734001",
        contact: "+91 08373049877",
         rating: "4.6 (26)",
        qualifications: "MBBS",
        experience: "10+ years",
        about: "Dr. Agrawal is a skilled Neurologist with a commitment to delivering personalized care for neurological conditions."
    },
    // Dentist
    {
        id: 29,
        name: "Dr Padma Prasanna Kumar",
        specialty: "DENTIST",
        location: "Children park, beside Electricity Office, Ward 17, Hakim Para, Siliguri, West Bengal 734001",
        contact: "+91 09434240680",
         rating: "4.8 (566)",
        qualifications: "BDS, MDS - Oral and Maxillofacial Surgery",
        experience: "15+ years",
        about: "Dr. Kumar operates the Siliguri Dental Clinic located at Hakimpara near Baghajatin Park. Known for carrying a highly approachable demeanor, his clinic specializes in general family dental health, offering routine scaling, restorative fillings, painless crown installations."
    },
    {
        id: 30,
        name: "Dr. Debolina Chowdhury",
        specialty: "DENTIST",
        location: "Sachin Saurav Apartment, Ashutosh Mukherjee Rd, College Para, Old Matigara, Siliguri, West Bengal 734001",
        contact: "+91 07811824391",
         rating: "5.0 (14)",
        qualifications: "BDS, MDS in Conservative Dentistry & Endodontics",
        experience: "10+ years",
        about: "Dr. Chowdhury is highly celebrated as one of Siliguri’s top Root Canal Treatment (RCT) specialists. She founded GBM Healthmart Dental and is known for delivering world-class, painless dentistry. Her clinical workflow features advanced rotary endodontics, smile design aesthetics, cosmetic veneers, and surgical implant rehabilitations."
    },
    {
        id: 31,
        name: "Dr. S S Sushant",
        specialty: "DENTIST",
        location: "Sevoke Rd, near Burger King & Zudio, behind Payel Cinema Hall, Ward 44, Dasrath Pally, Bhanu Nagar, Siliguri, West Bengal 734001",
        contact: "+91 08900283002",
         rating: "4.9 (258)",
        qualifications: "BDS,MDS in Oral & Maxillofacial Surgery from Sharda University",
        experience: "10+ years",
        about: "Dr. Sushant is the chief surgeon and founder of Face & Teeth Dental Clinic on Sevoke Road. He heavily focuses on single-sitting root canals, dental implants, cosmetic/aesthetic full-mouth rehabilitations, painless third-molar (wisdom tooth) extractions, and corrective maxillofacial structural jaw surgeries."
    },
    {
        id: 32,
        name: "Dr. Kaustav Bhowmik",
        specialty: "DENTIST",
        location: "1st Floor, Nazrul Sarani, near Maya Sanyal Nursing home, beside Hotel Sunhill Portico, Ashram Para, Hakim Para, Siliguri, West Bengal 734001",
        contact: "+91 08101331107",
         rating: "4.9 (1648)",
        qualifications: "BDS from KGF College, FAGE from Manipal Academy of Higher Education",
        experience: "10+ years",
        about: "Dr. Bhowmik is a Cosmetic Dentist and the director of Star Dental Clinic (Ashram Para). He is widely recognized for hosting a highly advanced digital clinic infrastructure. Beyond regular practice, he is known across North Bengal for his extensive social welfare camps, distributing free dental services across tea garden communities in the Dooars region."
    },
    {
        id: 33,
        name: "Dr. Bindal",
        specialty: "DENTIST",
        location: "ground floor, Dwarika Pearl, 2, Pranami Mandir Rd, near Kejriwal nursing, Ward 13, Punjabi Para, Siliguri, West Bengal 734001",
        contact: "+91 09339565450",
         rating: "4.9 (133)",
        qualifications: "BDS",
        experience: "10+ years",
        about: "Dr. Bindal is a skilled Dentist with a commitment to delivering personalized care for dental and oral health conditions.The clinic is highly recommended by locals for providing a gentle environment for dental procedures like painless wisdom tooth extractions, structural orthodontic alignment, and specialized laser dentistry."
    },
    {
        id: 34,
        name: "Dr Abhishek Gupta",
        specialty: "DENTIST",
        location: "Panitanki More, Buddhadeb, Sarat Bose Rd, beside: Agniraj Gas, Ashram Para, Near Pani Tanki More (Clock Tower), Siliguri, West Bengal 734005",
        contact: "+91 07906077326",
         rating: "5.0 (136)",
        qualifications: "BDS, MDS ",
        experience: "10+ years",
        about: "Dr. Gupta heads the Pearl Dental & Implant Centre situated near Panitanki More. Given his post-graduate mastery in prosthodontics, he focuses heavily on structural facial rehabilitation, creating perfectly customized comfortable dentures, advanced crown fixes, and high-precision dental implant placements."
    },
    // ENT Specialist
    {
        id: 35,
        name: "Dr Neelakshi",
        specialty: "ENT SPECIALIST",
        location: "Yuvaan Hospital - Top Neuro Spine Surgery & ENT Care in Siliguri, Medical More, Kawakhari, Siliguri, West Bengal 734012",
        contact: "+91 083920 96244",
         rating: "5.0 (44)",
        qualifications: "MBBS, MS - ENT",
        experience: "10+ years",
        about: "Dr. Neelakshi is a skilled ENT Specialist with a commitment to delivering personalized care for ear, nose, and throat conditions."
    },
    {
        id: 36,
        name: "Dr Nayak",
        specialty: "ENT SPECIALIST",
        location: "Sevoke Rd, near Vishal Cinema Hall, 2nd Mile, Dasrath Pally, Bhanu Nagar, Siliguri, West Bengal 734001",
        contact: "+91 353 254 8890",
         rating: "3.7 (176)",
        qualifications: "MBBS, MS - ENT",
        experience: "10+ years",
        about: "Dr. Nayak is a dedicated ENT Specialist with a focus on providing comprehensive care for ear, nose, and throat conditions."
    },
    {
        id: 37,
        name: "Dr DIWAKER BISTA",
        specialty: "ENT SPECIALIST",
        location: "C/o Magnus Multi Specilaity Hospital & Cardiac Centre Ward No.43, near Nirman Vidya Jyoti Sr. Sec. School, Ward 43, Upper Bhanu Nagar, Dasrath Pally, Siliguri, West Bengal 734001",
        contact: "+91 09749932413",
         rating: "4.9 (720)",
        qualifications: "MBBS, MS - ENT",
        experience: "10+ years",
        about: "Dr. Bista is a skilled ENT Specialist with a commitment to delivering personalized care for ear, nose, and throat conditions.He is highly acclaimed across North Bengal for achieving the national 'Best Thesis Award' during his clinical post-graduation. His mastery is anchored in conducting scarless ear microsurgeries, laser-assisted throat surgeries, thyroid/parathyroid oncological excisions, and comprehensive vertigo management frameworks."
    },
    {
        id: 38,
        name: "Dr. Richard Narjinary",
        specialty: "ENT SPECIALIST",
        location: "MEDIMART, opp. siliguri district hospital, Ward 18, Hakim Para, Siliguri, West Bengal 734001",
        contact: "+91 09434137999",
         rating: "4.8 (59)",
        qualifications: "MBBS, MS - ENT",
        experience: "10+ years",
        about: "Dr. Narjinary is a dedicated ENT Specialist with a focus on providing comprehensive care for ear, nose, and throat conditions."
    },
    {
        id: 39,
        name: "Dr. Vijay Prasad Bania",
        specialty: "ENT SPECIALIST",
        location: "2nd Floor, Shop no. 26, Dhwani Hearing and Speech Clinic, PBR Towers, Sevoke Rd, near Don Bosco Road, Ward 42, More, Siliguri, West Bengal 734001",
        contact: "+91 08016714803",
         rating: "4.9 (209)",
        qualifications: "MBBS, MS - ENT",
        experience: "20+ years",
        about: "Dr. Bania is a skilled ENT Specialist with a commitment to delivering personalized care for ear, nose, and throat conditions.He is highly sought after for specialized neuro-otology (treating chronic balance, tinnitus, and vertigo), coblation surgery, and Obstructive Sleep Apnea (OSA) surgical charting."
    },
    // PSYCHIATRIST
    {
        id: 40,
        name: "Dr Twishampati Naskar",
        specialty: "PSYCHIATRIST",
        location: "Mind Scan, opposite Bhutia Market, Ward 12, Hakim Para, Siliguri, West Bengal 734001",
        contact: "+91 89458 81982",
         rating: "4.9 (149)",
        qualifications: "MBBS, MD - Psychiatry",
        experience: "10+ years",
        about: "Dr. Naskar is a skilled Psychiatrist with a commitment to delivering personalized care for mental health conditions."
    },
    
    {
        id: 41,
        name: "Dr. Sudeshna Mukherjee",
        specialty: "PSYCHIATRIST",
        location: "Ground Floor, Rajani Centre, Healthy Mind Clinic, Ward No. 11, Hill Cart Rd, near Mukherjee Hospital, Siliguri, West Bengal 734001",
        contact: "+91 93828 95361",
         rating: "4.9 (39)",
        qualifications: "MBBS, MD - Psychiatry",
        experience: "10+ years",
        about: "Dr. Mukherjee is a dedicated Psychiatrist with a focus on providing comprehensive care for mental health conditions."
    },
    {
        id: 42,
        name: "Dr. Madhuri Sarkar",
        specialty: "PSYCHIATRIST",
        location: "1st Floor, Anima Health Care, Sushil Niwas, $2/29,$ Nandalal Basu Sarani, near Children's Park, College Para, Hakim Para, Siliguri, West Bengal 734001",
        contact: "+91 09907765490",
         rating: "4.8 (152)",
        qualifications: "MBBS, MD - Psychiatry",
        experience: "10+ years",
        about: "Dr. Sarkar is a skilled Psychiatrist with a commitment to delivering personalized care for mental health conditions."
    },
    {
        id: 43,
        name: "Dr. Arunava Datta",
        specialty: "PSYCHIATRIST",
        location: "Pratik Medico, Hill Cart Rd, opposite Howrah Petrol Pump, Ward 10, Janta Nagar, Sil+91 iguri, West Bengal 734001",
        contact: "+91 09734811188",
         rating: "4.7 (288)",
        qualifications: "MBBS, MD - Psychiatry",
        experience: "10+ years",
        about: "Dr. Datta is a dedicated Psychiatrist with a focus on providing comprehensive care for mental health conditions."
    },
    {
        id: 44,
        name: "Dr Ragini Singhania",
        specialty: "PSYCHIATRIST",
        location: "Aashna Medical, MN Sarani, below Jupiter MRI centre, Ward 2, Pradhan Nagar, Siliguri, West Bengal 734003",
        contact: "+91 09401001445",
         rating: "4.9 (13)",
        qualifications: "MBBS, MD - Psychiatry",
        experience: "10+ years",
        about: "Dr. Singhania is a skilled Psychiatrist with a commitment to delivering personalized care for mental health conditions."
    },
    // PEDIATRICIAN
    {
        id: 45,
        name: "Dr. Sanjeet Kumar Tiwari",
        specialty: "PEDIATRICIAN",
        location: "Basu's Clinic, Nandalal Basu Sarani, College Para, Hakim Para, Siliguri, West Bengal 734001",
        contact: "+91 07074150543",
         rating: "4.9 (69)",
        qualifications: "MBBS, MD - Pediatrics",
        experience: "10+ years",
        about: "Dr. Tiwari is a dedicated Pediatrician with a focus on providing comprehensive care for children's health conditions."
    },
    {
        id: 46,
        name: "Dr Prince Parakh",
        specialty: "PEDIATRICIAN",
        location: "JHANKAR MORE, PC69+597 Rishi Bhavan, Burdwan Rd, Ward 7, Mahananda Para, Siliguri, West Bengal 734005",
        contact: "+91 09800002764",
         rating: "4.2 (210)",
        qualifications: "MBBS, MD - Pediatrics",
        experience: "10+ years",
        about: "Dr. Parakh is a skilled Pediatrician with a commitment to delivering personalized care for children's health conditions."
    },
    {
        id: 47,
        name: "Dr. Sreemayee Kundu",
        specialty: "PEDIATRICIAN",
        location: "Aakash Hospital 55, Nazrul Sarani, Ward 15, Hakim Para, Siliguri, West Bengal 734001",
        contact: "+91 07019701705",
         rating: "5.0 (115)",
        qualifications: "MBBS, MD - Pediatrics",
        experience: "10+ years",
        about: "Dr. Kundu is a dedicated Pediatrician with a focus on providing comprehensive care for children's health conditions."
    },
    {
        id: 48,
        name: "Dr Praneet Kumar",
        specialty: "PEDIATRICIAN",
        location: "Ward number 5, Heritage Hospital, C/O, Burdwan Rd, Ward 5, Mahananda Para, Siliguri, West Bengal 734005",
        contact: "+91 09695199268",
         rating: "4.8 (27)",
        qualifications: "MBBS, MD - Pediatrics",
        experience: "10+ years",
        about: "Dr. Kumar is a dedicated Pediatrician with a focus on providing comprehensive care for children's health conditions."
    },
    {
        id: 49,
        name: "Dr Madhu Lata Pandey",
        specialty: "PEDIATRICIAN",
        location: "Dr. Nayak Nursing Home, Sevoke Rd, near Vishal Cinema Hall, 2nd Mile, Dasrath Pally, Bhanu Nagar, Siliguri, West Bengal 734001",
        contact: "+91 08145374302",
         rating: "5.0 (98)",
        qualifications: "MBBS, MD - Pediatrics",
        experience: "10+ years",
        about: "Dr. Pandey is a dedicated Pediatrician with a focus on providing comprehensive care for children's health conditions."
    },
    {
        id: 50,
        name: "Dr. Rajyashree Chamaria",
        specialty: "PEDIATRICIAN",
        location: "2nd floor, Caring Hands Children's Clinic, Metro Heights, Sevoke Rd, Ward 43, Siliguri, West Bengal 734001",
        contact: "+91 08116242946",
         rating: "4.9 (115)",
        qualifications: "MBBS, MD - Pediatrics",
        experience: "10+ years",
        about: "Dr. Chamaria is a dedicated Pediatrician with a focus on providing comprehensive care for children's health conditions."
    },
    {
        id: 51,
        name: "Dr. Aritra Ray",
        specialty: "PEDIATRICIAN",
        location: "Dedicated to the Health of, Pampearl Hospital, Burdwan Rd, opposite Goriyo Math, near Jalpai More, Ward 31, Saktigarh, Siliguri, West Bengal 734005",
        contact: "+91 09641632917",
         rating: "4.8 (50)",
        qualifications: "MBBS, MD - Pediatrics",
        experience: "10+ years",
        about: "Dr. Ray is a dedicated Pediatrician with a focus on providing comprehensive care for children's health conditions."
    },
    // GENERAL PHYSICIAN
    {
        id: 52,
        name: "Dr.Kuntal Banerjee",
        specialty: "GENERAL PHYSICIAN",
        location: "Anupam Apartment, Lenin Sarani, near Dadabhai More, Ward 29, Deshbandhu Para, Siliguri, West Bengal 734004",
        contact: "+91 09933162558",
         rating: "4.8 (258)",
        qualifications: "MBBS, MD - General Medicine",
        experience: "10+ years",
        about: "Dr. Banerjee is a skilled General Physician with a commitment to delivering personalized care for various health conditions."
    },
    {
        id: 53,
        name: "Dr. Naveen Agarwal",
        specialty: "GENERAL PHYSICIAN",
        location: "1st Floor, MANOKAMNA Hospital Buidling Iskcon Mandir Road, Sevoke Rd, Siliguri, West Bengal 734001",
        contact: "+91 08918239620",
         rating: "4.9 (352)",
        qualifications: "MBBS, MD - General Medicine",
        experience: "10+ years",
        about: "Dr. Agarwal is a skilled General Physician with a commitment to delivering personalized care for various health conditions."
    },
    {
        id: 54,
        name: "Dr. Aniruddha Ghosh",
        specialty: "GENERAL PHYSICIAN",
        location: "children's park, beside BBS Mediscanners, Ward 17, Chikitsha, Hakim Para, Siliguri, West Bengal 734001",
        contact: "+91 09832062206",
         rating: "4.8 (106)",
        qualifications: "MBBS, MD - General Medicine",
        experience: "10+ years",
        about: "Dr. Ghosh is a skilled General Physician with a commitment to delivering personalized care for various health conditions."
    },
    {
        id: 55,
        name: "Dr Pasang L Sherpa",
        specialty: "GENERAL PHYSICIAN",
        location: "Magnus Multi-speciality Hospital and Cardiac Centre, Upper Bhanu Nagar, Dasrath Pally, Bhanu Nagar, Siliguri, West Bengal 734001",
        contact: "+91 08116699456",
         rating: "5.0 (300)",
        qualifications: "MBBS, MD - General Medicine",
        experience: "10+ years",
        about: "Dr. Sherpa is a skilled General Physician with a commitment to delivering personalized care for various health conditions."
    },
    {
        id: 56,
        name: "Dr. Umesh Bansal",
        specialty: "GENERAL PHYSICIAN",
        location: "beside pateshwari school, Jyoti Nagar, Bankim Nagar, Siliguri, West Bengal 734001",
        contact: "+91 09609291555",
         rating: "4.9 (83)",
        qualifications: "MBBS, MD - General Medicine",
        experience: "10+ years",
        about: "Dr. Bansal is a skilled General Physician with a commitment to delivering personalized care for various health conditions."
    },
    // urology
    {
        id: 57,
        name: "Dr. Soumish Sengupta",
        specialty: "UROLOGY",
        location: "1st Floor, Kins Health, Golden Height's Building, Jhankar more, Burdwan Rd, Siliguri, West Bengal 734005",
        contact: "+91 08001966421",
         rating: "4.9 (153)",
        qualifications: "MBBS, MD - Urology",
        experience: "10+ years",
        about: "Dr. Sengupta is a skilled Urologist with a commitment to delivering personalized care for various urological conditions."
    },
    {
        id: 58,
        name: "Dr. Anup Biswas",
        specialty: "UROLOGY",
        location: "Anandalok Multispeciality hospital, Sevoke Rd, opposite Acropolis Mall, Ward 44, 2nd Mile, Bhanu Nagar, Siliguri, West Bengal 734001",
        contact: "+91 07908682632",
         rating: "4.9 (194)",
        qualifications: "MBBS, MD - Urology",
        experience: "10+ years",
        about: "Dr. Biswas is a skilled Urologist with a commitment to delivering personalized care for various urological conditions."
    },
    {
        id: 59,
        name: "Dr Samarth Agarwal",
        specialty: "UROLOGY",
        location: "2nd Mile, PARESH NAGAR, Anandaloke Hospital, C/o, Sevoke Rd, Ward 44, Dasrath Pally, Bhanu Nagar, Siliguri, West Bengal 734001",
        contact: "+91 09242412697",
         rating: "4.7 (135)",
        qualifications: "MBBS, MD - Urology",
        experience: "10+ years",
        about: "Dr. Agarwal is a skilled Urologist with a commitment to delivering personalized care for various urological conditions."
    },
    {
        id: 60,
        name: "Dr Partha Pratim Deb",
        specialty: "UROLOGY",
        location: "Basu's Clinic, Nandalal Basu Sarani, College Para, Hakim Para, Siliguri, West Bengal 734001",
        contact: "08910586504",
         rating: "5.0 (9)",
        qualifications: "MBBS, MD - Urology",
        experience: "10+ years",
        about: "Dr. Deb is a skilled Urologist with a commitment to delivering personalized care for various urological conditions."
    },
    // GASTROENTEROLOGY 
    {
        id: 61,
        name: "Dr. Pinakee Sunder Kar",
        specialty: "GASTROENTEROLOGY",
        location: "Meghnad sarani, Ward 2, Pradhan Nagar, Siliguri, West Bengal 734003",
        contact: "+91 08293883889",
         rating: "4.7 (782)",
        qualifications: "MBBS, MD - Gastroenterology",
        experience: "10+ years",
        about: "Dr. Kar is a skilled Gastroenterologist with a commitment to delivering personalized care for various gastrointestinal conditions."
    },
    {
        id: 62,
        name: "Dr. Vinit Khemka",
        specialty: "GASTROENTEROLOGY",
        location: "Khemka's Clinic Sevoke Road Metro Heights, Sevoke Rd, Siliguri, West Bengal 734001",
        contact: "+91 07319461049",
         rating: "4.7 (1544)",
        qualifications: "MBBS, MD - Gastroenterology",
        experience: "10+ years",
        about: "Dr. Khemka is a skilled Gastroenterologist with a commitment to delivering personalized care for various gastrointestinal conditions."
    },
    {
        id: 63,
        name: "Dr. Manish Mishra",
        specialty: "GASTROENTEROLOGY",
        location: "Star Hospital, Ward 32, Asian Highway2, Tinbatti More, Siliguri, West Bengal 736005",
        contact: "+91 09064639270",
         rating: "4.1 (95)",
        qualifications: "MBBS, MD - Gastroenterology",
        experience: "10+ years",
        about: "Dr. Mishra is a skilled Gastroenterologist with a commitment to delivering personalized care for various gastrointestinal conditions."
    },
    {
        id: 64,
        name: "Dr. Adi Rakesh Kumar",
        specialty: "GASTROENTEROLOGY",
        location: "Yashoda Hospitals, 53, Meghnad Saha Sarani, near Mother Teresa Statue, and Shidheshary Kali Temple, Ward 2, Pradhan Nagar, Siliguri, West Bengal 734003",
        contact: "+91 08065906238",
         rating: "5.0 (4)",
        qualifications: "MBBS, MD - Gastroenterology",
        experience: "10+ years",
        about: "Dr. Kumar is a skilled Gastroenterologist with a commitment to delivering personalized care for various gastrointestinal conditions."
    },
    // oncology
    {
        id: 65,
        name: "Dr. John J. Sinha and Dr. Deepali Sinh",
        specialty: "ONCOLOGY",
        location: "4th Floor F-Block, City Centre, Office Unit, F-0403, Uttorayon Twp, Matigara, Siliguri, West Bengal 734010",
        contact: "+91 092390 17770",
         rating: "4.9 (15)",
        qualifications: "MBBS, MD - Oncology",
        experience: "10+ years",
        about: "Dr. Sinha and Dr. Sinh are skilled Oncologists with a commitment to delivering personalized care for various cancer conditions."
    },
    {
        id: 66,
        name: "Dr. Manish Goswami",
        specialty: "ONCOLOGY",
        location: "3rd floor, Building 2nd, City Garden, City ENT Center, Sevoke Rd, Ward 13, Punjabi Para, Siliguri, West Bengal 734001",
        contact: "+91 07043091453",
         rating: "5.0 (127)",
        qualifications: "MBBS, MD - Oncology",
        experience: "10+ years",
        about: "Dr. Goswami is a skilled Oncologist with a commitment to delivering personalized care for various cancer conditions."
    },
    {
        id: 67,
        name: "Dr. Vishal Mukherjee",
        specialty: "ONCOLOGY",
        location: "more near Airview, Hill Cart Rd, Ward 4, Mahananda Para, Siliguri, West Bengal 734001",
        contact: "+91 08062747710",
         rating: "5.0 (26)",
        qualifications: "MBBS, MD - Oncology",
        experience: "10+ years",
        about: "Dr. Mukherjee is a skilled Oncologist with a commitment to delivering personalized care for various cancer conditions."
    },
    {
        id: 68,
        name: "DR ARKOPROVO HALDER",
        specialty: "ONCOLOGY",
        location: "Balaji Healthcare P.C, Mittal Bus Terminus, 2nd Mile, Sevoke Rd, Ward 43, Siliguri, West Bengal 734001",
        contact: "+91 09433138375",
         rating: "4.6 (20)",
        qualifications: "MBBS, MD - Oncology", 
        experience: "10+ years",
        about: "Dr. Halder is a skilled Oncologist with a commitment to delivering personalized care for various cancer conditions."
    },
    // PULMONOLOGIST
    {
        id: 69,
        name: "Dr Siddhartha Biswas",
        specialty: "PULMONOLOGIST",
        location: "Court More Main Rd, beside Jalan Medihut, Ward 18, Hakim Para, Siliguri, West Bengal 734001",
        contact: "+91 8787667890",
         rating: "4.9 (135)",
        qualifications: "MBBS, MD - Pulmonology",
        experience: "10+ years",
        about: "Dr. Biswas is a skilled Pulmonologist with a commitment to delivering personalized care for various respiratory conditions."
    },
    {
        id: 70,
        name: "Dr. Sujit Gupta",
        specialty: "PULMONOLOGIST",
        location: "Heritage Hospital, 46N, Burdwan Rd, Ward 5, Mahananda Para, Siliguri, West Bengal 734005",
        contact: "+91 07477791878",
         rating: "5.0 (170)",
        qualifications: "MBBS, MD - Pulmonology",
        experience: "10+ years",
        about: "Dr. Gupta is a skilled Pulmonologist with a commitment to delivering personalized care for various respiratory conditions."
    },
    {
        id: 71,
        name: "Dr Rajesh Agarwal",
        specialty: "PULMONOLOGIST",
        location: "Shanti nursing home Uday shankar sarani, Sevoke Rd, beside International Market, Siliguri, West Bengal 734001",
        contact: "+91 9435281758",
         rating: "5.0 (169)",
        qualifications: "MBBS, MD - Pulmonology",
        experience: "10+ years",
        about: "Dr. Agarwal is a skilled Pulmonologist with a commitment to delivering personalized care for various respiratory conditions."
    },
    {
        id: 72,
        name: "Dr. Sayar Mridha",
        specialty: "PULMONOLOGIST",
        location: "Sevoke Rd, opposite Aakashvani, Ward 43, Dasrath Pally, Bhanu Nagar, Siliguri, West Bengal 734001",
        contact: "+91 08240398011" ,
         rating: "4.8 (61)",
        qualifications: "MBBS, MD - Pulmonology",
        experience: "10+ years",
        about: "Dr. Mridha is a skilled Pulmonologist with a commitment to delivering personalized care for various respiratory conditions."
    },
    {
        id: 73,
        name: "Dr. Aiyush Jain",
        specialty: "PULMONOLOGIST",
        location: "Truck Terminus, Maharaja Agrasen Hospital, Fulbari, Siliguri, West Bengal 734015",
        contact: "+91 09129466503",
         rating: "4.7 (25)",
        qualifications: "MBBS, MD - Pulmonology",
        experience: "10+ years",
        about: "Dr. Jain is a skilled Pulmonologist with a commitment to delivering personalized care for various respiratory conditions."
    }
]
  export default doctors;