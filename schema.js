const Joi = require("joi");

module.exports.userSchema = Joi.object({
    user: Joi.object({
        // 1. MARKS CUSTOM MESSAGES
        marks: Joi.number().required().min(70).messages({
            "number.min": "Admission Rejected: Marks must be 70 or above.",
            "any.required": "Marks are required to process admission.",
            "number.base": "Marks must be a valid number."
        }),


             // 3. IS_PASS CUSTOM MESSAGES
        is_pass: Joi.string().required().valid("passed").messages({
            "any.only": "Admission Rejected: Entry test must be passed.",
            "any.required": "Entry test status is required."
        }),


        
        // 2. AGE CUSTOM MESSAGES
        age: Joi.number().required().min(18).max(24).messages({
            "number.min": "Admission Rejected: Minimum age requirement is 18 years.",
            "number.max": "Admission Rejected: Age must not exceed 24 years.",
            "any.required": "Age is required to check eligibility.",
            "number.base": "Age must be a valid number."
        })
        
   
    }).required()
});