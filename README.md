People API (Node + MongoDB)

ENV:
 - MONGO_URI (optional, defaults to mongodb://localhost:27017/people_db)

Install:

 *  npm install

Run:
 *   npm start

 *   # or for dev
  
 *   npm run dev

API:

   *  GET    /person
  
  *   POST   /person    (body: { name, age, gender, mobile })
  
  *  PUT    /person/:id
  
  *  DELETE /person/:id
