import { useState } from 'react'
import ThemeProvider, { useTheme } from './components/ThemeProvider'
import Button from './components/Button'
import Text from './components/Text'
import Card from './components/Card'
import Link from './components/Link'
import Badge from './components/Badge'
import Input from './components/Input'
import Avatar from './components/Avatar'
import Header from './components/Header'
import Modal from './components/Modal'
import './styles/global.css'

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  
  return (
    <Button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      variant="secondary"
    >
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </Button>
  );
}

function ComponentShowcase() {
  const [inputValue, setInputValue] = useState('');
  
  return (
    <div>
      <Header 
        logo="Neo-Brutalist"
        navItems={[
          { label: 'Home', href: '#', active: true },
          { label: 'Components', href: '#' },
          { label: 'Documentation', href: '#' },
          { label: 'GitHub', href: '#' },
        ]}
        sticky
      />
      
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '32px' }}>
        <Text variant="heading1" style={{ marginBottom: '32px' }}>Neo-Brutalist Design System</Text>
        
        <Card style={{ marginBottom: '32px' }}>
          <Text variant="heading3" style={{ marginBottom: '16px' }}>Theme</Text>
          <ThemeSwitcher />
        </Card>
      
      <Card style={{ marginBottom: '32px' }}>
        <Text variant="heading3" style={{ marginBottom: '16px' }}>Typography</Text>
        <Text variant="heading1">Heading 1</Text>
        <Text variant="heading2">Heading 2</Text>
        <Text variant="heading3">Heading 3</Text>
        <Text variant="heading4">Heading 4</Text>
        <Text variant="body">This is body text. The quick brown fox jumps over the lazy dog.</Text>
        <Text variant="small">This is small text. The quick brown fox jumps over the lazy dog.</Text>
      </Card>
      
      <Card style={{ marginBottom: '32px' }}>
        <Text variant="heading3" style={{ marginBottom: '16px' }}>Buttons</Text>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '16px' }}>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
        </div>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <Button size="small">Small</Button>
          <Button>Medium</Button>
          <Button size="large">Large</Button>
        </div>
      </Card>
      
      <Card style={{ marginBottom: '32px' }}>
        <Text variant="heading3" style={{ marginBottom: '16px' }}>Links</Text>
        <div style={{ display: 'flex', gap: '16px', flexDirection: 'column' }}>
          <Link href="#" variant="default">Default Link</Link>
          <Link href="#" variant="underlined">Underlined Link</Link>
          <Link href="#" variant="button">Button Link</Link>
        </div>
      </Card>
      
      <Card style={{ marginBottom: '32px' }}>
        <Text variant="heading3" style={{ marginBottom: '16px' }}>Badges</Text>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <Badge variant="primary">Primary</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="error">Error</Badge>
        </div>
      </Card>
      
      <Card style={{ marginBottom: '32px' }}>
        <Text variant="heading3" style={{ marginBottom: '16px' }}>Inputs</Text>
        <Input 
          label="Username" 
          placeholder="Enter your username"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={{ marginBottom: '16px' }}
        />
        <Input 
          label="Password" 
          type="password"
          placeholder="Enter your password"
          style={{ marginBottom: '16px' }}
        />
        <Input 
          label="Email" 
          placeholder="Enter your email"
          error="Please enter a valid email address"
        />
      </Card>
      
      <Card style={{ marginBottom: '32px' }}>
        <Text variant="heading3" style={{ marginBottom: '16px' }}>Avatars</Text>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Avatar size="small" fallback="JD" />
          <Avatar fallback="JS" />
          <Avatar size="large" fallback="AB" />
          <Avatar size="xl" fallback="US" />
        </div>
      </Card>
      
      <Card style={{ marginBottom: '32px' }}>
        <Text variant="heading3" style={{ marginBottom: '16px' }}>Modal</Text>
        <Modal
          trigger={<Button>Open Modal</Button>}
          title="Neo-Brutalist Modal"
          description="This is a modal component with neo-brutalist styling."
        >
          <div>
            <Text variant="body">This is the content of the modal.</Text>
            <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
              <Button variant="outline">Cancel</Button>
              <Button>Confirm</Button>
            </div>
          </div>
        </Modal>
      </Card>
    </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ComponentShowcase />
    </ThemeProvider>
  )
}

export default App