const schoolOne = {
    "nodeName": "MVHS",
    "location": "Highlands Ranch",
    "active": true,
    "mentorMembers": [
      {
        "name": "Marry",
        "age": 29,
        "field": [
            "Biology"
        ],
        "workBio": "I graduated from xyz with a masters in Biology. I soon after got a job in a lab.",
        "isactive": true
      },
      {
        "name": "Bob",
        "age": 39,
        "field": [
            "Engineering",
            "Cars"
        ],
        "workBio": "I graduated from xyz with a masters in engineering. I soon after got a job in a lab.",
        "isactive": true
      },
      {
        "name": "Padjen",
        "age": 34,
        "field": [
            "Computer Science"
        ],
        "workBio": "I graduated from xyz with a masters in Computer Science. I soon after got a job in a lab.",
        "isactive": true
      },
      {
        "name": "Badjen",
        "age": 34,
        "field": [
            "Computer Science"
        ],
        "workBio": "I graduated from xyz with a masters in Computer Science. I soon after got a job in a lab.",
        "isactive": false
      },
    ],
    "studentMembers": [
        {
          "name": "Cath Hill",
          "age": 15,
          "Intrest": [
            "Biology"
          ],
          "isactive": true
        },
        {
          "name": "Will Jobs",
          "age": 14,
          "Intrest": [
            "Engineering",
            "Cars"
          ],
          "isactive": true
        },
        {
          "name": "Zero Ji",
          "age": 16,
          "Intrest": [
            "Computer Science",
            "Biology"
          ],
          "isactive": true
        }
    ]
};

var mentorPool = {

};
var mentorMatch = {

};
schoolOne.studentMembers.forEach(studentElm => {
    mentorPool[studentElm.name] = {};
     schoolOne.mentorMembers.forEach(mentorElm => {
        if (mentorElm.isactive) {
            mentorPool[studentElm.name][mentorElm.name] = 0;
            studentElm.Intrest.forEach(studentIntrest => {
                mentorElm.field.forEach( mentorField => {
                    if(mentorField == studentIntrest){
                        mentorPool[studentElm.name][mentorElm.name] += 1;
                    }
                });
            });
        }
    });
});
console.log(mentorPool);
Object.keys(mentorPool).forEach(student => {
    mentorMatch[student] = [];
    var value = Object.values(mentorPool[student]);
    console.log(value)
    var max = 0;
    value.forEach(val => {
        if (max < val) {max = val};
    })
    console.log(max)
    Object.keys(mentorPool[student]).forEach(mentor => {
        // console.log("Mentor is");
        // console.log(mentor);
        if (mentorPool[student][mentor] == max){
            mentorMatch[student].push(mentor);
        }
    });

});
console.log(mentorMatch);