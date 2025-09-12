# Weather Now 🌤️

A modern, responsive weather application built with React, TypeScript, and Vite. Get real-time weather information for any city around the world with a clean and intuitive interface.

## ✨ Features

- **🔍 City Search**: Search for weather information by city name
- **🌡️ Current Weather**: Display current temperature, wind speed, and weather conditions
- **🗺️ Location Info**: Shows city name and country
- **📱 Responsive Design**: Works seamlessly on desktop and mobile devices
- **⚡ Fast Loading**: Built with Vite for optimal performance
- **🎨 Clean UI**: Modern and user-friendly interface

## 🚀 Tech Stack

- **Frontend**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: CSS with Tailwind-like utility classes
- **Weather API**: Open-Meteo (free, no API key required)
- **Geocoding**: Open-Meteo Geocoding API

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/weather-now.git
   cd weather-now
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## 🛠️ Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint for code linting

## 🌐 API

This application uses the free [Open-Meteo API](https://open-meteo.com/) which provides:

- **Weather Data**: Current weather conditions including temperature, wind speed, and weather codes
- **Geocoding**: Convert city names to coordinates for weather lookup
- **No API Key Required**: Completely free to use without registration

## 📁 Project Structure

```
weather-now/
├── src/
│   ├── api/
│   │   └── weather.ts          # Weather API functions
│   ├── components/
│   │   ├── SearchBar.tsx       # City search input component
│   │   └── WeatherCard.tsx     # Weather display component
│   ├── App.tsx                 # Main application component
│   ├── App.css                 # Application styles
│   ├── main.tsx                # Application entry point
│   └── index.css               # Global styles
├── public/                     # Static assets
├── package.json               # Dependencies and scripts
├── tsconfig.json              # TypeScript configuration
├── vite.config.ts             # Vite configuration
└── README.md                  # Project documentation
```

## 🎯 Usage

1. Enter a city name in the search bar
2. Click "Search" or press Enter
3. View the current weather information including:
   - Current temperature in Celsius
   - Wind speed in km/h
   - Weather conditions
   - Location name and country
   - Last updated time

## 🔧 Development

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Setup for Development

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Submit a pull request

### Code Style

This project uses ESLint for code linting. Run `npm run lint` to check for any style issues.

## 🚀 Deployment

To build the application for production:

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment to any static hosting service like Netlify, Vercel, or GitHub Pages.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help, please [open an issue](https://github.com/yourusername/weather-now/issues) on GitHub.
