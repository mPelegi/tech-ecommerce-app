
import { 
  useFonts,
  Raleway_400Regular,
  Raleway_600SemiBold,
  Raleway_700Bold,
  Raleway_900Black
} from '@expo-google-fonts/raleway';
import Routes from "./src/routes/index";

export default function App() {
  useFonts({
    Raleway_400Regular,
    Raleway_600SemiBold,
    Raleway_700Bold,
    Raleway_900Black
  });

  return (
    <Routes />
  );
}
