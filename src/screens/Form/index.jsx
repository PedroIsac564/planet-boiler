import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";

import styles from "./styles";
import Title from "../../components/Title";

import planetsRepository from "../../models/planet/PlanetRepository";
import Planet from "../../models/planet/Planet";

export default function Form({ route }) {
  let { planet, edit } = route.params;

  const [name, setName] = useState("");
  const [dominationData, setDominationData] = useState("");
  const [color1, setColor1] = useState("");
  const [color2, setColor2] = useState("");
  const [population, setPopulation] = useState("");
  const [location, setLocation] = useState("");
  const [rulerPlanet, setRulerPlanet] = useState("");
  const [x, setX] = useState("");
  const [y, setY] = useState("");
  const [z, setZ] = useState("");
  const [isUpdate, setIsUpdate] = useState(edit);
  const navigation = useNavigation();

  useEffect(() => {
    if (edit) {
      setName(planet.name);
      setDominationData(planet.dominationData);
      setColor1(planet.color1);
      setColor2(planet.color2);
      setPopulation(planet.population);
      setLocation(planet.location);
      setRulerPlanet(planet.rulerPlanet);
      setX(planet.x);
      setY(planet.y);
      setZ(planet.z);
      setIsUpdate(true);
    } else {
      clearInputs();
    }
  }, [planet, edit]);

  const handlePlanetAction = () => {
    if (isUpdate) {
      planetsRepository.update(
        planet.id,
        name,
        dominationData,
        color1,
        color2,
        population,
        location,
        rulerPlanet,
        x,
        y,
        z
      );
      clearInputs();
    } else {
      const newPlanet = new Planet(
        name,
        dominationData,
        color1,
        color2,
        population,
        location,
        rulerPlanet,
        x,
        y,
        z
      );
      planetsRepository.add(newPlanet);
      clearInputs();
    }
    navigation.navigate("Users");
  };

  const clearInputs = () => {
    setIsUpdate(false);
    edit = false;
    setName("");
    setDominationData("");
    setColor1("");
    setColor2("");
    setPopulation("");
    setLocation("");
    setRulerPlanet("");
    setX("");
    setY("");
    setZ("");
  };

  return (
    <View style={styles.container}>
      <Title title={isUpdate ? "Editar Planeta" : "Novo Planeta"} />
      <TextInput
        placeholder="Digite o nome do Planeta"
        style={styles.planetInput}
        onChangeText={setName}
        value={name}
      />
      <TextInput
        placeholder="Digite a data de dominação do Planeta. ex: ano 1098"
        style={styles.planetInput}
        onChangeText={setDominationData}
        value={dominationData}
      />
      <TextInput
        placeholder="Digite a cor primária do Planeta"
        style={styles.planetInput}
        onChangeText={setColor1}
        value={color1}
      />
        <TextInput
            placeholder="Digite a cor secundária do Planeta"
            style={styles.planetInput}
            onChangeText={setColor2}
            value={color2}
        />
        <TextInput
            placeholder="Digite a população do Planeta"
            style={styles.planetInput}
            onChangeText={setPopulation}
            value={population}
        />
        <TextInput
            placeholder="Digite a localização do Planeta"
            style={styles.planetInput}
            onChangeText={setLocation}
            value={location}
        />
        <TextInput
            placeholder="Digite o Planeta Regente"
            style={styles.planetInput}
            onChangeText={setRulerPlanet}
            value={rulerPlanet}
        />
        <TextInput
            placeholder="Digite a coordenada X"
            style={styles.planetInput}
            onChangeText={setX}
            value={x}
        />
        <TextInput
            placeholder="Digite a coordenada Y"
            style={styles.planetInput}
            onChangeText={setY}
            value={y}
        />
        <TextInput
            placeholder="Digite a coordenada Z"
            style={styles.planetInput}
            onChangeText={setZ}
            value={z}
        />

      <TouchableOpacity style={styles.button} onPress={handleUserAction}>
        <Text>{isUpdate ? "Salvar Alterações" : "Criar Planeta"}</Text>
      </TouchableOpacity>

      {isUpdate && (
        <TouchableOpacity style={styles.button} onPress={clearInputs}>
          <Text>Cancelar Edição</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
