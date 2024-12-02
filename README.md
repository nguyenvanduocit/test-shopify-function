# Shopify App with Functions

This is a Shopify app project that includes custom functions and extensions. The app is built using Shopify's App Framework and includes both frontend and backend components.

## Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn
- Shopify CLI
- ngrok for local development

## Project Structure

```
├── extensions/      # Shopify app extensions
├── frontend/        # Frontend React application
├── node_modules/    # Project dependencies
├── .env            # Environment variables
├── package.json    # Project configuration and dependencies
└── shopify.app.toml # Shopify app configuration
```

## Setup Instructions

1. Install dependencies:
```shell
npm install
```

2. Start the development server:
```shell
# Start ngrok tunnel
ngrok http 3000

# Start the development server with your ngrok URL
# Replace the URL with your ngrok URL
shopify app dev --tunnel-url=https://your-ngrok-url.ngrok-free.app
```

## Development

The app uses the following technologies:
- Shopify App Framework
- Shopify Functions for custom backend logic

### Available Commands

```shell
# Start development server
shopify app dev

# Deploy to Shopify
shopify app deploy
```

## Security

For security concerns, please refer to SECURITY.md in the root directory.

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the terms specified in the LICENSE file.