import { useState } from "react";
import { Text, View, Button } from "react-native";
import Calc from "./Calc";

function Modal (){
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
    <Button
        title={openModal ? 'Fechar Modal (deixar false)' : 'Abrir Modal (deixar true)'}
        onPress={() => setOpenModal(!openModal)}
      />

      {
        openModal ? (
          <View>
            <Text>Modal Aberto = (true)</Text>

            <Calc 
              num={+ 1}
              title="Adicionar +1"
            />
          </View>
        ) : (
          <View>
            <Text>Modal Fechado (false)</Text>
            
            <Calc 
              num={- 1}
              title="Adicionar -1"
            />
          </View>
        )
      }
    </>
  )
}
export default Modal;