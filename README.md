# AI Currency Advisor

A Node.js app that provides real-time forex rates and AI-powered currency insights.

## Features
- Fetches live exchange rates
- AI-generated forex advice
- Simple web interface

## Installation

```bash
git clone https://github.com/yourusername/ai-currency-advisor.git
cd ai-currency-advisor
npm install
```

## Usage

Start the server:
```bash
node server.js
```
Visit [http://localhost:5000](http://localhost:5000) in your browser.

## API Endpoints

- `GET /forex-insight?base=USD`  
  Returns exchange rates and AI advice for the base currency.

## Folder Structure

- `/routes` - Express route handlers
- `/services` - Business logic (forex, AI)
- `/public` - Frontend files

## Dependencies

- express
- node-cron
- dotenv

## License

MIT

## Contributing

Pull requests welcome!
