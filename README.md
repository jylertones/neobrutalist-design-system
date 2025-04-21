# Neo-Brutalist Design System

A modern React component library styled in the Neo-Brutalist design trend with Vanilla Extract.

## Features

- 🎨 Neo-Brutalist design aesthetic
- 🌙 Light and dark theme support
- 🧩 Modular component architecture
- 📚 Comprehensive Storybook documentation
- 🧰 Built with TypeScript for type safety
- 🔍 Zero-runtime CSS with Vanilla Extract
- 📱 Responsive design

## Getting Started

### Installation

```bash
npm install neobrutalist-design-system
```

### Usage

```jsx
import { ThemeProvider, Button, Text } from 'neobrutalist-design-system';

function App() {
  return (
    <ThemeProvider>
      <Text variant="heading1">Hello Neo-Brutalism</Text>
      <Button>Click Me</Button>
    </ThemeProvider>
  );
}
```

## Available Components

- **ThemeProvider** - Manages light/dark theme
- **Text** - Typography component
- **Button** - Interactive button component
- **Link** - Hyperlink component
- **Card** - Container component
- **Badge** - Label component
- **Avatar** - User profile component
- **Input** - Form input component
- **Header** - Page header component
- **Navigation** - Navigation menu
- **Modal/Dialog** - Overlay dialog
- **Toast** - Notification component
- **Tooltip** - Contextual helper
- **Icon** - Icon component
- **Combobox** - Advanced dropdown
- **Disclosure/Accordion** - Expandable section

## Development

### Setup

```bash
# Clone the repository
git clone <repository-url>

# Install dependencies
npm install

# Start the development server
npm run dev

# Start Storybook
npm run storybook
```

### Building

```bash
# Build the library
npm run build

# Build Storybook documentation
npm run build-storybook
```

## Design Principles

Neo-Brutalist design is characterized by:

- Bold, thick borders
- High contrast colors
- Exaggerated drop shadows
- Raw, unpolished aesthetic
- Simple geometric shapes
- Playful typography
- Minimal effects and transitions

## License

MIT