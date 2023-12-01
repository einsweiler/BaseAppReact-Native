import { useState } from "react";
import { Button, Text, View } from "react-native";

interface CalcProps {
  title: string;
  num: number;
}

function Calc({ title, num }: CalcProps) {
  const [calcular, setcalcular] = useState(0)

  return (
    <View>
      <Text>valor : {calcular}</Text>
      <Button 
        title={title}
        onPress={() => setcalcular(num)}
      />
    </View>
  );
}

export default Calc;