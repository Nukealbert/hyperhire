import Profile from './components/Profile';
import Nav from './components/Nav';
import { PaperProvider } from 'react-native-paper';
export default function App() {
  return (
    <PaperProvider>
      <Nav />
      <Profile />
      
    </PaperProvider>
      
      
      
    
  );
}


