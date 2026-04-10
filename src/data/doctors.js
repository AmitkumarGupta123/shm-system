const doctors = [

/* CARDIOLOGY */

{
name:"Dr. Amit Sharma",
qualification:"MBBS, MD Cardiology",
department:"Cardiology (हृदय रोग विभाग)",
room:"101",
floor:"1st Floor Block A",
time:"9:00 AM - 1:00 PM"
},

{
name:"Dr. Muskan Gupta",
qualification:"MBBS, DM Cardiology",
department:"Cardiology (हृदय रोग विभाग)",
room:"102",
floor:"1st Floor Block A",
time:"10:00 AM - 3:00 PM"
},

{
name:"Dr. Chanda Gupta",
qualification:"MBBS, MD Cardiology",
department:"Cardiology (हृदय रोग विभाग)",
room:"103",
floor:"1st Floor Block A",
time:"11:00 AM - 4:00 PM"
},

/* NEUROLOGY */

{
name:"Dr. Neha Verma",
qualification:"MBBS, DM Neurology",
department:"Neurology (न्यूरोलॉजी विभाग)",
room:"201",
floor:"2nd Floor Block B",
time:"10:00 AM - 2:00 PM"
},

{
name:"Dr. Imran Khan",
qualification:"MBBS, MD Neurology",
department:"Neurology (न्यूरोलॉजी विभाग)",
room:"202",
floor:"2nd Floor Block B",
time:"12:00 PM - 5:00 PM"
},

{
name:"Dr. Kavita Sharma",
qualification:"MBBS, DM Neurology",
department:"Neurology (न्यूरोलॉजी विभाग)",
room:"203",
floor:"2nd Floor Block B",
time:"9:00 AM - 1:00 PM"
},

/* ORTHOPEDIC */

{
name:"Dr. Rahul Singh",
qualification:"MBBS, MS Orthopedic",
department:"Orthopedic (हड्डी रोग विभाग)",
room:"301",
floor:"3rd Floor Block C",
time:"9:00 AM - 3:00 PM"
},

{
name:"Dr. Arjun Mehta",
qualification:"MBBS, MS Orthopedic",
department:"Orthopedic (हड्डी रोग विभाग)",
room:"302",
floor:"3rd Floor Block C",
time:"11:00 AM - 4:00 PM"
},

{
name:"Dr. Sandeep Yadav",
qualification:"MBBS, MS Orthopedic",
department:"Orthopedic (हड्डी रोग विभाग)",
room:"303",
floor:"3rd Floor Block C",
time:"10:00 AM - 2:00 PM"
},

/* PEDIATRICS */

{
name:"Dr. Priya Gupta",
qualification:"MBBS, MD Pediatrics",
department:"Pediatrics (बाल रोग विभाग)",
room:"110",
floor:"1st Floor Block B",
time:"10:00 AM - 2:00 PM"
},

{
name:"Dr. Sunita Sharma",
qualification:"MBBS, MD Pediatrics",
department:"Pediatrics (बाल रोग विभाग)",
room:"111",
floor:"1st Floor Block B",
time:"11:00 AM - 3:00 PM"
},

{
name:"Dr. Raj Patel",
qualification:"MBBS, MD Pediatrics",
department:"Pediatrics (बाल रोग विभाग)",
room:"112",
floor:"1st Floor Block B",
time:"9:00 AM - 12:00 PM"
},

/* DERMATOLOGY */

{
name:"Dr. Anjali Kapoor",
qualification:"MBBS, MD Dermatology",
department:"Dermatology (त्वचा रोग विभाग)",
room:"210",
floor:"2nd Floor Block A",
time:"11:00 AM - 4:00 PM"
},

{
name:"Dr. Nisha Arora",
qualification:"MBBS, MD Dermatology",
department:"Dermatology (त्वचा रोग विभाग)",
room:"211",
floor:"2nd Floor Block A",
time:"10:00 AM - 2:00 PM"
},

/* GYNECOLOGY */

{
name:"Dr. Kavita Singh",
qualification:"MBBS, MS Gynecology",
department:"Gynecology (स्त्री रोग विभाग)",
room:"320",
floor:"3rd Floor Block B",
time:"9:00 AM - 1:00 PM"
},

{
name:"Dr. Pooja Kapoor",
qualification:"MBBS, MS Gynecology",
department:"Gynecology (स्त्री रोग विभाग)",
room:"321",
floor:"3rd Floor Block B",
time:"11:00 AM - 4:00 PM"
},

/* ENT */

{
name:"Dr. Rohit Sharma",
qualification:"MBBS, MS ENT",
department:"ENT (कान नाक गला विभाग)",
room:"130",
floor:"1st Floor Block C",
time:"10:00 AM - 5:00 PM"
},

{
name:"Dr. Aman Gupta",
qualification:"MBBS, MS ENT",
department:"ENT (कान नाक गला विभाग)",
room:"131",
floor:"1st Floor Block C",
time:"9:00 AM - 1:00 PM"
},

/* RADIOLOGY */

{
name:"Dr. Vikram Patel",
qualification:"MBBS, MD Radiology",
department:"Radiology (रेडियोलॉजी विभाग)",
room:"410",
floor:"4th Floor Block A",
time:"9:00 AM - 2:00 PM"
},

{
name:"Dr. Deepak Sharma",
qualification:"MBBS, MD Radiology",
department:"Radiology (रेडियोलॉजी विभाग)",
room:"411",
floor:"4th Floor Block A",
time:"12:00 PM - 4:00 PM"
},

/* ONCOLOGY */

{
name:"Dr. Manish Kapoor",
qualification:"MBBS, DM Oncology",
department:"Oncology (कैंसर विभाग)",
room:"420",
floor:"4th Floor Block B",
time:"11:00 AM - 3:00 PM"
},

{
name:"Dr. Rekha Singh",
qualification:"MBBS, DM Oncology",
department:"Oncology (कैंसर विभाग)",
room:"421",
floor:"4th Floor Block B",
time:"10:00 AM - 2:00 PM"
},

/* OPHTHALMOLOGY */

{
name:"Dr. Anil Kumar",
qualification:"MBBS, MS Ophthalmology",
department:"Ophthalmology (नेत्र रोग विभाग)",
room:"140",
floor:"1st Floor Block F",
time:"9:00 AM - 1:00 PM"
},

{
name:"Dr. Sneha Agarwal",
qualification:"MBBS, MS Ophthalmology",
department:"Ophthalmology (नेत्र रोग विभाग)",
room:"141",
floor:"1st Floor Block F",
time:"11:00 AM - 3:00 PM"
},

/* GENERAL MEDICINE */

{
name:"Dr. Vivek Mishra",
qualification:"MBBS, MD General Medicine",
department:"General Medicine (सामान्य चिकित्सा विभाग)",
room:"150",
floor:"1st Floor Block D",
time:"9:00 AM - 2:00 PM"
},

{
name:"Dr. Pankaj Verma",
qualification:"MBBS, MD General Medicine",
department:"General Medicine (सामान्य चिकित्सा विभाग)",
room:"151",
floor:"1st Floor Block D",
time:"12:00 PM - 5:00 PM"
},

/* PSYCHIATRY */

{
name:"Dr. Alok Singh",
qualification:"MBBS, MD Psychiatry",
department:"Psychiatry (मनोचिकित्सा विभाग)",
room:"160",
floor:"1st Floor Block E",
time:"10:00 AM - 2:00 PM"
},

{
name:"Dr. Ritu Saxena",
qualification:"MBBS, MD Psychiatry",
department:"Psychiatry (मनोचिकित्सा विभाग)",
room:"161",
floor:"1st Floor Block E",
time:"1:00 PM - 5:00 PM"
},

/* UROLOGY */

{
name:"Dr. Ajay Thakur",
qualification:"MBBS, MS Urology",
department:"Urology (मूत्र रोग विभाग)",
room:"330",
floor:"3rd Floor Block D",
time:"9:00 AM - 1:00 PM"
},

{
name:"Dr. Suresh Patel",
qualification:"MBBS, MS Urology",
department:"Urology (मूत्र रोग विभाग)",
room:"331",
floor:"3rd Floor Block D",
time:"12:00 PM - 4:00 PM"
},

/* GASTROENTEROLOGY */

{
name:"Dr. Nitin Sharma",
qualification:"MBBS, DM Gastroenterology",
department:"Gastroenterology (पाचन तंत्र विभाग)",
room:"220",
floor:"2nd Floor Block E",
time:"10:00 AM - 3:00 PM"
},

{
name:"Dr. Meena Gupta",
qualification:"MBBS, DM Gastroenterology",
department:"Gastroenterology (पाचन तंत्र विभाग)",
room:"221",
floor:"2nd Floor Block E",
time:"11:00 AM - 4:00 PM"
}

]

export default doctors