# Weather Now 🌤️

A Modern, Responsive Weather Application Built with React, TypeScript and Vite. Get Real-time Weather Information for any City Around the World with a Clean and Intuitive Interface.

## ✨ Features

- **🔍 City Search**: Search for Weather Information by City Name
- **🌡️ Current Weather**: Display Current Temperature, Wind Speed and Weather Conditions
- **🗺️ Location Info**: Shows City Name and Country
- **📱 Responsive Design**: Works Seamlessly on Desktop and Mobile Devices
- **⚡ Fast Loading**: Built with Vite for Optimal Performance
- **🎨 Glassmorphism UI**: Beautiful Dynamic Gradients and Modern Translucent Cards
- **✨ Dynamic Icons**: Features Engaging Loading Animations and Lucide Icons

## 🚀 Tech Stack

- **Frontend**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v3
- **Icons**: Lucide React
- **Weather API**: Open-Meteo (free, no API key required)
- **Geocoding**: Open-Meteo Geocoding API

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/AyushHL/weather-now.git
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

- `npm run dev` - Start the Development Server
- `npm run build` - Build the Application for Production
- `npm run preview` - Preview the Production Build Locally
- `npm run lint` - Run ESLint for Code Linting

## 🌐 API

This Application uses the Free [Open-Meteo API](https://open-meteo.com/) which Provides:

- **Weather Data**: Current Weather Conditions including Temperature, Wind Speed and Weather Codes
- **Geocoding**: Convert City Names to Coordinates for Weather Lookup
- **No API Key Required**: Completely Free to Use without Registration

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

1. Enter a City Name in the Search Bar
2. Click "Search" or Press Enter
3. View the Current Weather Information Including:
   - Current Temperature in Celsius
   - Wind Speed in km/h
   - Weather Conditions
   - Location Name and Country
   - Last Updated Time

## 🔧 Development

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Setup for Development

1. Fork the Repository
2. Create a New Branch: `git checkout -b feature/your-feature-name`
3. Make your Changes and Commit them: `git commit -m 'Add some feature'`
4. Push to the Branch: `git push origin feature/your-feature-name`
5. Submit a Pull Request

### Code Style

This Project uses ESLint for Code Linting. Run `npm run lint` to Check for any Style Issues.

## 🚀 Deployment

To Build the Application for Production:

```bash
npm run build
```

The Built Files will be in the `dist` Directory, Ready for Deployment to any Static Hosting Service like Netlify, Vercel or GitHub Pages.

## 📝 License

This Project is Open Source and Available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are Welcome! Please Feel Free to Submit a Pull Request.

## 📞 Support

If you have any Questions or Need Help, Please [open an issue](https://github.com/AyushHL/weather-now/issues) on GitHub.
