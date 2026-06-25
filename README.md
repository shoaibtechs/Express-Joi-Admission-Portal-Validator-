# Express & Joi - Admission Portal Validator

A robust Node.js/Express backend implementation for an admission portal, featuring strict schema validation using Joi and asynchronous error handling middleware.

## Features
* **Schema Validation:** Server-side body validation using `Joi` to enforce strict constraints on user data (marks, passing status, age).
* **Robust Error Handling:** Custom `ExpressError` class coupled with a `wrapAsync` utility to capture synchronous and asynchronous execution failures cleanly.
* **Persistent Storage:** MongoDB integration via Mongoose to store incoming validated data securely.

## Tech Stack
* **Runtime Environment:** Node.js
* **Backend Framework:** Express.js
* **Database Object Modeling (ODM):** Mongoose / MongoDB
* **Data Validation:** Joi

---

## Directory Layout
```text
├── Models/
│   └── user.js         # Mongoose User model & Schema definitions
├── utils/
│   └── wrapAsync.js    # Async error handling wrapper middleware
├── views/
│   └── user.ejs        # Front-end admission form
├── app.js              # Core application logic & Express server routing
├── schema.js           # Joi validation rules
└── ExpressError.js     # Custom extended Error class