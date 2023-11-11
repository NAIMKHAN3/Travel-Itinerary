# Live Link : https://travel-itinerary-alpha.vercel.app

- Token format Bearer
  example (Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c)

* All route access only authenticate user without register and login.
* All route include bearer token (must)
Auth (user) Route

- register example
  {
  "name":"ali hasan",
  "email":"alihasan@gmai.com",
  "password": "ali hasan",
  "address": "dhaka",
  "phoneNumber": "0185478544"
  }

- register-route =  https://travel-itinerary-alpha.vercel.app/api/v1/auth/register (post)
- login-route = https://travel-itinerary-alpha.vercel.app/api/v1/auth/login (post)

Itinerary Route

- example date create
  {
  "name": "Ali Hasan",
  "city": "Dhaka",
  "country": "Dhaka",
  "startDate": "2023-01-20T00:00:00.000Z",
  "endDate": "2023-01-20T00:00:00.000Z",
  "activities": ["Dhaka Tour"]
  }

- crete-itinerary-route = https://travel-itinerary-alpha.vercel.app/api/v1/itinerary/create-itinerary (post)
- update-itinerary-route https://travel-itinerary-alpha.vercel.app/api/v1/itinerary/update-itinerary/:id (put)
- get-itinerary-route = https://travel-itinerary-alpha.vercel.app/api/v1/itinerary/get-itinerarys (get)
- get-itinerary-by-id-route = https://travel-itinerary-alpha.vercel.app/api/v1/itinerary/get-itinerary-by-id/:id (get)
- delete-itinerary-route = https://travel-itinerary-alpha.vercel.app/api/v1/itinerary/delete-itinerary/:id (delete)

Transportations Route
- example date create
  {
  "itinerary": "6ff9e00a853aa6757d9d8173",
  "mode": "bus",
  "operator": "Hanif Express",
  "depertureCity": "Dhaka",
  "arrivalCity": "khulna",
  "depertureTime": "2023-01-20T00:00:00.000Z",
  "arrivalTime": "2023-01-20T00:00:00.000Z"
  }

- create-transportations-route = https://travel-itinerary-alpha.vercel.app/api/v1/transportations/create-transportations (post)
- update-transportations-route = https://travel-itinerary-alpha.vercel.app/api/v1/transportations/update-transportations/:id (put)
- get-transportations-by-user-route = https://travel-itinerary-alpha.vercel.app/api/v1/transportations/get-transportations-by-user (get)
- get-transportations-route = https://travel-itinerary-alpha.vercel.app/api/v1/transportations/get-transportations-by-id/:id (get)
- delete-transportations-route = https://travel-itinerary-alpha.vercel.app/api/v1/transportations/delete-transportations/:id (delete)

Accommodation Route
{
  "transportations": "6ff9e00a853aa6757d9d8173",
  "resortName": "Aventure Resort",
  "resortAddress": "Dhaka",
  "checkInTime": "2023-01-20T00:00:00.000Z",
  "checkOutTime": "2023-01-20T00:00:00.000Z"
  }

- create-accommodation-route = https://travel-itinerary-alpha.vercel.app/api/v1/accommodation/create-accommodation (post)
- get-accommondation-by-user-route = https://travel-itinerary-alpha.vercel.app/api/v1/accommodation/get-accommodations-by-user (get)
- get-accommondation-by-id-route = https://travel-itinerary-alpha.vercel.app/api/v1/accommodation/get-accommodation-by-id/:id (get)
- update-accommondation-route = https://travel-itinerary-alpha.vercel.app/api/v1/accommodation/update-accommodation/:id (put)
- delete-accommondation-route = https://travel-itinerary-alpha.vercel.app/api/v1/accommodation/delete-accommodation/:id (delete)

Technology Uses

- Express.js
- Mongoose
- TypeScript
- express-validation
- jsonwebtoken
- bcrypt
- husky
- lint-staged
- prettier
- eslint-config-prettier


# Getting Started

.env format
- NODE_ENV = development
- MONGODB_URL = database-url
- PORT = 8000
- AUTH_TOKEN = secret-key
- AUTH_TOKEN_EXPIRES_IN = secret-key date (15d)
- REFRESH_TOKEN = secret-key
- REFRESH_TOKEN_EXPIRES_IN = secret-key date (30d)

Clone this repo

```
git clone "Repo Link"
```

Change directory to Travel-Itinerary

```
cd Travel-Itinerary
```

Install the dependencies

```
npm install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:8000](http://localhost:8000) with your browser to see the result.