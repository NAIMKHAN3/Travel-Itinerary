# Live Link : https://travel-itinerary-alpha.vercel.app

- Token format Bearer
  example (Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c)

Auth (user) Route

- register example
  {
  "name":" ali hasan",
  "email":" alihasan@gmai.com",
  "password": "ali hasan",
  "address": "dhaka",
  "phoneNumber": "0185478544"
  }

- https://travel-itinerary-alpha.vercel.app/api/v1/auth/register (post)
- https://travel-itinerary-alpha.vercel.app/api/v1/auth/login (post)

Itinerary Route

- example date create
  {
  "name": "Ali Hasan",
  "city": "Dhaka",
  "country": "Dhaka",
  "startDate": "2023-01-20T00:00:00.000Z"",
  "endDate": "2023-01-20T00:00:00.000Z",
  "activities": ["Dhaka Tour"]
  }

- https://travel-itinerary-alpha.vercel.app/api/v1/itinerary/create-itinerary (post)
- https://travel-itinerary-alpha.vercel.app/api/v1/itinerary/update-itinerary/:id (put)
- https://travel-itinerary-alpha.vercel.app/api/v1/itinerary/get-itinerarys (get)
- https://travel-itinerary-alpha.vercel.app/api/v1/itinerary/get-itinerary-by-id/:id (get)
- https://travel-itinerary-alpha.vercel.app/api/v1/itinerary/delete-itinerary/:id (delete)

Transportations Route
- example date create
  {
  "itinerary": "6ff9e00a853aa6757d9d8173",
  "mode": "bus",
  "operator": "Hanif Express",
  "depertureCity": "Dhaka",
  "arrivalCity": "khulna",
  "depertureTime": "2023-01-20T00:00:00.000Z"",
  "arrivalTime": "2023-01-20T00:00:00.000Z"
  }

- https://travel-itinerary-alpha.vercel.app/api/v1/tranportations/create-transportations (get)
- https://travel-itinerary-alpha.vercel.app/api/v1/tranportations/update-transportations/:id (put)
- https://travel-itinerary-alpha.vercel.app/api/v1/tranportations/get-transportations-by-user (get)
- https://travel-itinerary-alpha.vercel.app/api/v1/tranportations/get-transportations-by-id/:id (get)
- https://travel-itinerary-alpha.vercel.app/api/v1/tranportations/delete-transportations/:id (delete)

Accommodation Route
{
  "transportations": "6ff9e00a853aa6757d9d8173",
  "resortName": "Aventure Resort",
  "resortAddress": "Dhaka",
  "checkInTime": "2023-01-20T00:00:00.000Z"",
  "checkOutTime": "2023-01-20T00:00:00.000Z"
  }

- https://travel-itinerary-alpha.vercel.app/api/v1/accommodation/create-accommodation (post)
- https://travel-itinerary-alpha.vercel.app/api/v1/accommodation/get-accommodations-by-user (get)
- https://travel-itinerary-alpha.vercel.app/api/v1/accommodation/get-accommodation-by-id/:id (get)
- https://travel-itinerary-alpha.vercel.app/api/v1/accommodation/update-accommodation/:id (put)
- https://travel-itinerary-alpha.vercel.app/api/v1/accommodation/delete-accommodation/:id (delete)

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