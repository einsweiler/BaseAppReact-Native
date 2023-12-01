import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Dados from '../screens/Dados';
import Pcp from '../screens/Pcp';
import ConsultaOf from '../screens/ConsultaOf';


const { Navigator, Screen } = createStackNavigator();

function AppRoutes() {
  return (
    <Navigator>
      <Screen name="Home" component={Home}/>
      <Screen name="Dados" component={Dados}/>
      <Screen name="Pcp" component={Pcp}/>
      <Screen name="ConsultaOf" component={ConsultaOf}/>
    </Navigator>
  )
}

export default AppRoutes;