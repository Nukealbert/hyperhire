import Profile from './components/Profile';
import Nav from './components/Nav';
import { PaperProvider } from 'react-native-paper';
import Content from './components/Content';
import ImageSection from './components/ImageSection';
import Bottom from './components/Bottom';
export default function App() {
  return (
    <PaperProvider>
      <Nav />
      <Profile >
      
      </Profile>
      <Content />
      <ImageSection />
      <Bottom />
      
      
    </PaperProvider>
      
      
      
    
  );
}


