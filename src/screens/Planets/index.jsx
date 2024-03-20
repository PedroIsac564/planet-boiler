import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

import styles from "./styles";
import Title from "../../components/Title";
import TouchButton from "../../components/TouchButton";
import { planet } from "../../data/Planets";

import Planet from "../../models/planet/Planet";
import PlanetsRepository from "../../models/planet/PlanetRepository";
import { useNavigation } from "@react-navigation/native";

const planetsList = new PlanetsRepository();

let planetId = 1; // Inicia o ID do planeta

export default function Planets() {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [dominationData, setDominationData] = useState("");
  const [color1, setColor1] = useState("");
  const [color2, setColor2] = useState("");
  const [population, setPopulation] = useState("");
  const [galaxy, setGalaxy] = useState("");
  const [solarSistem, setSolarSistem] = useState("");
  const [rulerPlanet, setRulerPlanet] = useState("");
  const [x, setX] = useState("");
  const [y, setY] = useState("");
  const [z, setZ] = useState("");

  const [allPlanets, setAllPlanets] = useState([]);

  const createPlanet = () => {
    const newPlanet = new Planet(
      planetId++,
      name,
      dominationData,
      color1,
      color2,
      parseInt(population) || 0,
      galaxy,
      solarSistem,
      x,
      y,
      z,
      rulerPlanet
    ); // Incrementa o ID após o uso

    planetsList.add(newPlanet);
    setAllPlanets(planetsList.getAll());

    clearInputs();

    return newPlanet;
  };

  const clearInputs = () => {
    setName("");
    setDominationData("");
    setColor1("");
    setColor2("");
    setPopulation;
    setGalaxy("");
    setSolarSistem("");
    setX("");
    setY("");
    setZ("");
    setRulerPlanet("");
  };

  return (
    <View style={styles.container}>
      <Title title="Planets" />

      <View>
        <TextInput
          placeholder="Digite o nome do planeta"
          style={styles.planetInput}
          onChangeText={setName}
          value={name}
        />
        <TextInput
          placeholder="Digite a data da dominação dele 😈"
          style={styles.planetInput}
          onChangeText={setDominationData}
          value={dominationData}
        />
        <TextInput
          placeholder="Digite a cor primaria do planeta"
          style={styles.planetInput}
          onChangeText={setColor1}
          value={color1}
        />
        <TextInput
          placeholder="Digite a cor secundaria do planeta"
          style={styles.planetInput}
          onChangeText={setColor2}
          value={color2}
        />
        <TextInput
          placeholder="Digite a população "
          style={styles.planetInput}
          onChangeText={(text) => setPopulation(text)}
          value={population}
          keyboardType="numeric"
        />
        <Text>Localização</Text>
        <TextInput
          placeholder="Digite a galaxia"
          style={styles.planetInput}
          onChangeText={setGalaxy}
          value={galaxy}
        />
        <TextInput
          placeholder="Digite o sistema solar que habita"
          style={styles.planetInput}
          onChangeText={setSolarSistem}
          value={solarSistem}
        />
        <Text>Digite as cordenadas:</Text>
        <TextInput
          placeholder="X"
          style={styles.planetInput}
          onChangeText={setX}
          value={x}
        />
        <TextInput
          placeholder="Y"
          style={styles.planetInput}
          onChangeText={setY}
          value={y}
        />
        <TextInput
          placeholder="Z"
          style={styles.planetInput}
          onChangeText={setZ}
          value={z}
        />

        <TouchableOpacity style={styles.button} onPress={createPlanet}>
          <Text>Criar Plameta</Text>
        </TouchableOpacity>
      </View>

      <View>
        {allPlanets.length > 0 ? (
          allPlanets.map((planet) => (
            <TouchableOpacity
              key={planet.id}
              onPress={() => navigation.navigate("Planets", { data: planet })}
            >
              <Text>{planet.name}</Text>
            </TouchableOpacity>
          ))
        ) : (
          <Text>Não há usuários cadastrados</Text>
        )}
      </View>

      <TouchButton route="Category" title="Go to Category" />
      <TouchButton route="Profile" title="Go to Profile" data={planet} />
    </View>
  );
}
