/** @type {import('next').NextConfig} */
const path = require('path');
const fs = require('fs');

// Read the .env file manually
const envPath = path.join(__dirname, 'docker/dev/.env');
const envConfig = fs.readFileSync(envPath, 'utf8')
  .split('\n')
  .filter(Boolean)
  .reduce((acc, line) => {
    const [key, value] = line.split('=');
    if (key && value) {
      acc[key.trim()] = value.trim();
    }
    return acc;
  }, {});

const nextConfig = {
  env: {
    NEXT_PUBLIC_APP_DOMAIN: envConfig.NEXT_PUBLIC_APP_DOMAIN || 'https://your-domain.com',
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY: envConfig.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '6LcFIiArAAAAAJGf0NK2hn2GMdSsofWtAp9QVrBj'
  }
}

module.exports = nextConfig 