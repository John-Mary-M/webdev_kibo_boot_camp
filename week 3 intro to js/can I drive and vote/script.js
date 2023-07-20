const countryDriveLimit = {
        'ng': 16,
        'gh': 16,
        'ke': 16,
        'us': 21,
    }
    
    const countryVoteLimit = {
        'ng': 18,
        'gh': 18,
        'ke': 18,
        'us': 21,
    }
    
    /**
     * canIDriveAndVote - A function that checks if a person can legally drive and vote based on their age.
     * @param {Object} person - a person to check
     * @param {number} person.age - the person's age
     * @param {string} person.country - a string representing the country ('gh', 'ke', 'ng', or 'us')
     * @returns {Boolean} if person with a particular age at a particular country can drive and vote 
    */
    
    function canIDriveAndVote(person) {
        // access the country and age properties from the person object, 
        // seperate them in variables for readability
       const country = person.country;
       const age = person.age;

       // check if the country exists in both country drive limit and country vote limit
       // if the country exist retrieve the driving and voting age limits for that country
       if (countryDriveLimit.hasOwnProperty(country) && countryVoteLimit.hasOwnProperty(country)) {
        const driveLimit = countryDriveLimit[country];
        const voteLimit = countryDriveLimit[country];

        // compare age with the driving and vote limits. if age is equal or greater than limit then true
        if (age >= driveLimit && age >= voteLimit) {
                return true;
        } else {
                return false;
        }
        // Otherwise country doesnt exist in bot countrydrive limit and countryVoteLimit
       } else {
        return false;
       }
    }

// my test code
const resultElement = document.getElementById("result");
const person = {
  age: 18,
  country: "ng"
};

// invoking the function
const result = canIDriveAndVote(person);

// displaying results
resultElement.innerText = "The result is: " + result;