
import axios from "axios";
import { useState } from "react";
import { Text , Box, Button, Center } from "native-base";

function ConsultaOf() {
  const [dados, setDados] = useState('');

  const fetchDados = async () => {
    try {
      const response = await axios.get('http://192.168.11.7:9096/api/status');
      setDados(response.data.message);
      console.log(response.data.message);
    } catch (error) {
      
    }
  }  
  
  return (
       <Center>
            <Text>Consulta Of</Text>

            <Button
              onPress={fetchDados}
              bg={'#333456'}
              w={'2/5'}
            >
            Consultar of

            </Button>
            <Text>Dados da api: {dados}</Text>
       </Center>
    );
}
export default ConsultaOf;