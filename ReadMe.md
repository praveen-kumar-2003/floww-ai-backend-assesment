# Financial Records API

This is a simple RESTful API for managing personal financial transactions such as income and expenses.

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/praveen-kumar-2003/floww-ai-backend-assesment.git
   ```

2. Install dependencies:

   ```bash
   cd PERSONAL EXPANCES
   npm install
   ```

3. Run the server:
   ```bash
   npm start
   ```

## API Endpoints

### 1. Add Transaction

**POST** `/transactions`

**Request Body**:

```json
{
  "type": "income",
  "category": "Salary",
  "amount": 1000,
  "date": "2024-10-22",
  "description": "Monthly salary payment"
}
```
