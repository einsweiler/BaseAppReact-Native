import { Text, View, Button } from "react-native";
import { useNavigation } from '@react-navigation/native';

function Home() {
  const navigation = useNavigation();

  const handleNavigateToDados = () => {
    navigation.navigate('Dados' as never)
  }
  const handleNavigateToPcp = () => {
    navigation.navigate('Pcp' as never)
  }
  const handleNavigateToConsultaOf = () => {
    navigation.navigate('ConsultaOf' as never)
  }

  return (
    <View>
      <Text>Tela Home.</Text>
      <Button
        title="Ir para Dados"
        onPress={handleNavigateToDados}
      />
      <Text></Text>

      <Button
        title="Ir para PCP"
        onPress={handleNavigateToPcp}
      />

      <Text></Text>

      <Button
        title="Ir para Consultar Of"
        onPress={handleNavigateToConsultaOf}
      />
    </View>

  );
}

export default Home;



