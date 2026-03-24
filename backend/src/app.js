import express from 'express';
import cors from 'cors';
import demoRequestRoutes from './routes/demoRequestRoutes.js';

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS Configuration
const corsOptions = {
  origin: function (origin, callback) {
    const isDev = (process.env.NODE_ENV || 'development') !== 'production';
    
    // Production: Only allow origins from ALLOWED_ORIGINS env variable
    if (!isDev) {
      const allowedOrigins = process.env.ALLOWED_ORIGINS 
        ? process.env.ALLOWED_ORIGINS.split(',').map(o => o.trim())
        : [];
      
      console.log(`CORS Check (Production) - Origin: ${origin || 'no origin'}`);
      
      if (!origin) {
        // Reject requests with no origin in production (server-to-server calls should use API keys)
        console.log('CORS rejected: no origin in production');
        callback(new Error('Not allowed by CORS'));
        return;
      }
      
      if (allowedOrigins.includes(origin)) {
        console.log('CORS allowed');
        callback(null, true);
      } else {
        console.log('CORS rejected: origin not in ALLOWED_ORIGINS');
        callback(new Error('Not allowed by CORS'));
      }
      return;
    }
    
    // Development: Allow localhost/127.0.0.1 and local network IPs on any port
    const isLocalhost = typeof origin === 'string' && 
      (/^https?:\/\/localhost:\d+$/.test(origin) || 
       /^https?:\/\/127\.0\.0\.1:\d+$/.test(origin) ||
       /^https?:\/\/192\.168\.\d+\.\d+:\d+$/.test(origin) ||
       /^https?:\/\/172\.\d+\.\d+\.\d+:\d+$/.test(origin) ||
       /^https?:\/\/10\.\d+\.\d+\.\d+:\d+$/.test(origin));
    
    console.log(`CORS Check (Development) - Origin: ${origin || 'no origin'}`);
    
    // Allow requests with no origin (Postman, curl, etc.) or localhost/local network in development
    if (!origin || isLocalhost) {
      console.log('CORS allowed');
      callback(null, true);
    } else {
      console.log('CORS rejected');
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

// Preflight requests
app.options('*', cors(corsOptions));

// Health check endpoint
app.get('/api/health', (req, res) => {
  console.log('Health check requested');
  res.status(200).json({
    success: true,
    message: 'Server is running',
    timestamp: new Date().toISOString(),
  });
});

// Routes
app.use('/api/demo-request', demoRequestRoutes);

// 404 handler
app.use((req, res) => {
  console.log(`404 Not Found: ${req.method} ${req.path}`);
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(`Error: ${err.message}`);

  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal server error',
  });
});

export default app;
