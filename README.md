# OneDrive File Explorer

This React app allows you to explore your OneDrive files and folders seamlessly. With a simple login using your Outlook account, you can view and interact with your OneDrive content in a user-friendly interface.

## Features

- **Login with Outlook**: Securely authenticate with your Outlook account to access your OneDrive.
- **File/Folder Navigation**: Browse through your OneDrive folders and files with ease.
- **File Details**: View comprehensive information about your files, including name, author, creation time, last updated time, and a list of users with whom the file is shared.
- **Download and Open Files**: Conveniently download files or open them online directly from the app.

## Getting Started

To get started with the OneDrive File Explorer, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/gitSambhal/onedrive-file-exprorer
```

Navigate to the project directory:

```bash
cd onedrive-file-explorer
```

Create `.env` file
```bash
npm run env:generate
```
Update the `.env` file if required.

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The app will be running at http://localhost:5173.

## Building for Production

To build the app for production, run:

```bash
npm run build
```

This will create an optimized build in the `dist` directory.
