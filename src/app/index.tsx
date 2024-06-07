import { Image, Text, TouchableOpacity, View, FlatList } from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";

import { Background } from "../components/Background";
import { Input } from "../components/Input";

import Logo from "../assets/logo.png";


interface City {
  id: number;
  nome: string;
}

export default function Home() {

  const [query, setQuery] = useState('')
  const [allCities, setAllCities] = useState<City[]>([])
  const [filteredCities, setFilteredCities] = useState<City[]>([]);
  const [isInputFocused, setInputFocused] = useState(false);

  useEffect(() => {
    // Fetch all cities from IBGE API once when the component mounts
    const fetchAllCities = async () => {
      try {
        const response = await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/municipios')
        setAllCities(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAllCities();
  }, []);

  const fetchCities = async (nome: string) => {
    setQuery(nome);
    if (nome.length > 4) {
      // Começar a buscar após digitar 3 caracteres
      const filtered = allCities.filter((city) =>
        city.nome.toLowerCase().includes(nome.toLowerCase())
      );
      setFilteredCities(filtered);
    } else {
      setFilteredCities([]); // Limpar resultado da consulta.
    }
  };

  return (
    <Background>
      <Image source={Logo} className="top-10 left-28" />
      <View className="flex items-center justify-center mt-60">
        <Text>
          <Text className="text-2xl text-zinc-50">Welcome to</Text>
          <Text className="text-2xl text-bluelight-100"> TypeWeather</Text>
        </Text>
        <Text className="text-sm text-gray-200 mt-1">
          Choose a location to see the weather forecast
        </Text>
      </View>
      <View className="flex items-center mt-8">
        <Input
          value={query}
          onChangeText={fetchCities}
          onFocus={() => setInputFocused(true)}
          onBlur={() => setInputFocused(false)}
        />
      </View>
      {isInputFocused && (
      <View className="bg-bluedark-100 w-80 h-52 left-14 top-2 rounded-lg">
        <FlatList
          data={filteredCities}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                setQuery(item.nome);
                setInputFocused(false);
              }}
            >
              <Text className="text-white text-sm ml-3 mt-2 underline">
                {item.nome}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
      )}
    </Background>
  );
}