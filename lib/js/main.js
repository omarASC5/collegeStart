results = {
    NYU : {
        unitID : "193900",
        name : "New York University",
        city : "New York",
        state : "NY",
        website : "www.nyu.edu",
        OPEID : "00278500",
        control : "Private not-for-profit",
        level : "Four or more years",
        institution : "Degree-granting, primarily baccalaureate or above",
        
        awardLevel : {
            lessThanOneYear: "Less than one year certificate",
            associate : "Associate's degree",
            bachelor : "Bachelor's degree",
            postBaccaluareate : "Postbaccalaureate certificate",
            master : "Master's degree",
            postMaster : "Post-master's certificate",
            researchDoctor : "Doctor's degree - research/scholarship",
            proDoctor : "Doctor's degree - professional practice",
            otherDoctor : "Doctor's degree - other"
        },
        calender : "Semester",
        religiousAffiliation : "N/A",
        campus : "Large"
    },
    MIT : {
        unitID : "166683",
        name : "Massachusetts Institute of Technology",
        city : "Cambridge",
        website : "web.mit.edu/",
        OPEID : "00217800",
        control : "Private not-for-profit",
        level : "Four or more years",
        institution : "Degree-granting, primarily baccalaureate or above",
        
        awardLevel : {
            bachelor : "Bachelor's degree",
            master : "Master's degree",
            researchDoctor : "Doctor's degree - research/scholarship"
        },
        religiousAffiliation : "N/A",
        calender : "Four-one-four plan",
        campus : "Midsize"
    },

};

console.log(results);


// https://api.data.gov/ed/collegescorecard/v1/schools/?api_key=ivvSMgQJGoCFO0eIWgjSWDI2qmmu2alQNzwcsW02