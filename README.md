# Sorting Visualizer

Sorting Visualizer is a web application built with React and TypeScript that visually demonstrates how various sorting algorithms work. It provides an interactive and educational experience for understanding sorting techniques.

## Features

- Visualize popular sorting algorithms like Bubble Sort, Merge Sort, Quick Sort, etc.
- Adjustable speed and array size.
- Step-by-step visualization of sorting processes.
- Built with modern tools like Vite, React, and TypeScript.

## Folder Structure

The project structure is organized as follows:

```
sortingVisualizer/
├── public/                # Static assets
├── src/                   # Source code
│   ├── algorithms/        # Sorting algorithm implementations
│   ├── components/        # React components
│   ├── styles/            # CSS/SCSS files
│   ├── utils/             # Utility functions
│   ├── App.tsx            # Main application component
│   ├── main.tsx           # Entry point for the application
│   └── vite-env.d.ts      # TypeScript environment declarations
├── .eslintrc.cjs          # ESLint configuration
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite configuration
├── package.json           # Project dependencies and scripts
└── README.md              # Project documentation
```

## Getting Started

Follow these steps to set up and run the project locally:

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/sorting-visualizer.git
   cd sorting-visualizer
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Application

Start the development server:
```bash
npm run dev
# or
yarn dev
```

Open your browser and navigate to `http://localhost:5173` to view the application.

### Building for Production

To build the application for production:
```bash
npm run build
# or
yarn build
```

The production-ready files will be in the `dist/` directory.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to improve the project.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

This site is deploy at [sorting visulaizer](https://aesthetic-sorting-visualizer.netlify.app)