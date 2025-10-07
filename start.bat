@echo off
echo ===============================================
echo    3S Tech Inc. Website - Quick Start
echo ===============================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Node.js is not installed!
    echo.
    echo Please install Node.js from: https://nodejs.org/
    echo Download the LTS version for Windows.
    echo.
    echo After installation, run this script again.
    pause
    exit /b 1
)

REM Check if npm is installed
where npm >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] npm is not installed!
    echo npm should come with Node.js. Please reinstall Node.js.
    pause
    exit /b 1
)

echo [OK] Node.js and npm are installed
node --version
npm --version
echo.

REM Check if node_modules exists
if not exist "node_modules" (
    echo [INFO] Dependencies not found. Installing...
    echo This may take 1-2 minutes...
    echo.
    call npm install
    if %errorlevel% neq 0 (
        echo.
        echo [ERROR] Installation failed!
        echo Please check your internet connection and try again.
        pause
        exit /b 1
    )
    echo.
    echo [OK] Dependencies installed successfully!
    echo.
) else (
    echo [OK] Dependencies already installed
    echo.
)

echo ===============================================
echo    Starting Development Server...
echo ===============================================
echo.
echo The website will open at: http://localhost:5173
echo.
echo Press Ctrl+C to stop the server
echo.

REM Start the development server
call npm run dev

pause

