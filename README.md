# CyGen Frontend

This is the React + Vite dashboard application for CyGen. It provides a user interface to display real-time sensor data like Battery, Speed, Voltage, and Power Flow.

## Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher is recommended)
- [npm](https://www.npmjs.com/)

## Installation

Navigate to the `frontend` directory and install the dependencies:

```bash
cd frontend
npm install
```

## Running the Application

### Development Mode

To start the Vite development server with Hot Module Replacement (HMR), run:

```bash
npm run dev
```

The application will typically be accessible at `http://localhost:5173`. Make sure the [backend](../backend/README.md) is running for real-time WebSocket data to connect properly.

### Building for Production

To create an optimized production build, run:

```bash
npm run build
```

This will output the compiled application into the `dist` folder.

## Key Technologies Used

- **React 19**: Component-based user interface.
- **Vite**: Ultra-fast development server and bundler.
- **Tailwind CSS 4**: Utility-first CSS framework for rapid styling.
- **React Router DOM**: Client-side routing.
- **ws**: WebSocket support for real-time communication.
- **React Icons**: Icon library.
