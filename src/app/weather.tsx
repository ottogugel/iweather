import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, StyleSheet, ScrollView, ImageBackground, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";
import axios from "axios";
import { Background } from "../components/Background";
import { BackButton } from "../components/BackButton";

const API_KEY = "39bc4ec94c59372925e033f62645f527";

type WeatherData = {
  name: string;
  main: {
    temp: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
    feels_like: number;
  };
  weather: {
    description: string;
  }[];
  wind: {
    speed: number;
  };
};

export default function WeatherScreen() {
  const { city } = useLocalSearchParams();
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=pt`
        );
        setWeather(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (!weather) {
    return (
      <View style={styles.container}>
        <Text>Erro ao carregar dados do clima</Text>
      </View>
    );
  }

  return (
    <Background>
      <ScrollView className="flex-1 pt-8" showsVerticalScrollIndicator={false}>
        <View className="bg-gray-800 px-3 mb-2 rounded-xl">
          <BackButton />
          <ImageBackground
            style={{
              height: 304,
              paddingVertical: 25,
              paddingHorizontal: 21,
              marginTop: 12,
            }}
          >
            <Text className="text-white text-base mb-2 font-bold">
              {weather.name}
            </Text>
            <Text className="text-white text-xs mb-28">
              Segunda-feira, 15 de maio de 2023
            </Text>
            <View className="flex-row">
              <View className="flex-1 self-start mt-2 mr-1">
                <Text className="text-white text-5xl mb-4 font-extrabold">
                  {weather.main.temp}ºc
                </Text>
                <Text className="text-white text-base mb-2 font-bold">
                  {weather.main.temp_min}ºc / {weather.main.temp_max}ºc
                </Text>
                <Text className="text-white text-sm">
                  {weather.weather[0].description}
                </Text>
              </View>
              <View className="w-24 self-start">
                <Text className="text-white">Imagem</Text>
              </View>
            </View>
          </ImageBackground>
        </View>
        {/* DETAILS */}
        <View className="mb-2 h-80">
          <View className="rounded-xl pt-1 pb-6 px-4 bg-gray-800">
            <View className="flex-row items-center py-4 px-2">
              <Image
                source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                resizeMode={"stretch"}
                style={{
                  width: 11,
                  height: 22,
                  marginRight: 18,
                }}
              />
              <Text className="text-sm text-grayt-200 font-bold">
                Feels Like
              </Text>
              <View className="flex-1 self-stretch" />
              <Text className="text-white text-base">
                {weather.main.feels_like}ºc
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: 17,
                paddingHorizontal: 3,
              }}
            >
              <Image
                source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                resizeMode={"stretch"}
                style={{
                  width: 19,
                  height: 21,
                  marginRight: 15,
                }}
              />
              <Text className="text-grayt-200 text-sm font-bold">
                Rainfall
              </Text>
              <View
                style={{
                  flex: 1,
                  alignSelf: "stretch",
                }}
              ></View>
              <Text
                style={{
                  color: "#F9F9F9",
                  fontSize: 16,
                }}
              >
                0%
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: 21,
                paddingHorizontal: 2,
              }}
            >
              <Image
                source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                resizeMode={"stretch"}
                style={{
                  width: 20,
                  height: 16,
                  marginRight: 14,
                }}
              />
              <Text className="text-grayt-200 text-sm font-bold">
                Wind speed
              </Text>
              <View
                style={{
                  flex: 1,
                  alignSelf: "stretch",
                }}
              ></View>
              <Text
                style={{
                  color: "#F9F9F9",
                  fontSize: 16,
                }}
              >
                {weather.wind.speed} km/h
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: 16,
                paddingHorizontal: 4,
                marginBottom: 18,
              }}
            >
              <Image
                source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                resizeMode={"stretch"}
                style={{
                  width: 16,
                  height: 20,
                  marginRight: 17,
                }}
              />
              <Text className="text-grayt-200 text-sm font-bold">
                Humidity
              </Text>
              <View
                style={{
                  flex: 1,
                  alignSelf: "stretch",
                }}
              ></View>
              <Text
                style={{
                  color: "#F9F9F9",
                  fontSize: 16,
                }}
              >
                {weather.main.humidity}%
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                resizeMode={"stretch"}
                style={{
                  width: 19,
                  height: 19,
                  marginRight: 15,
                }}
              />
              <Text className="text-grayt-200 text-sm font-bold">UV Index</Text>
              <View
                style={{
                  flex: 1,
                  alignSelf: "stretch",
                }}
              ></View>
              <Text
                style={{
                  color: "#F9F9F9",
                  fontSize: 16,
                }}
              >
                5
              </Text>
            </View>
          </View>
        </View>
        {/* NEXT DAY CARD */}
        <View className="bg-gray-800 px-7 py-8 rounded-xl">
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 17,
            }}
          >
            <Text
              style={{
                color: "#BEBED4",
                fontSize: 14,
              }}
            >
              {"Ter"}
            </Text>
            <Text
              style={{
                color: "#BEBED4",
                fontSize: 14,
              }}
            >
              {"Qua"}
            </Text>
            <Text
              style={{
                color: "#BEBED4",
                fontSize: 14,
              }}
            >
              {"Qui"}
            </Text>
            <Text
              style={{
                color: "#BEBED4",
                fontSize: 14,
              }}
            >
              {"Sex"}
            </Text>
            <Text
              style={{
                color: "#BEBED4",
                fontSize: 14,
              }}
            >
              {"Sab"}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 16,
            }}
          >
            <View
              style={{
                width: 30,
                marginRight: 37,
              }}
            >
              <View
                style={{
                  marginBottom: 1,
                }}
              >
                <View style={{}}>
                  <Image
                    source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                    resizeMode={"stretch"}
                    style={{
                      height: 18,
                    }}
                  />
                  <Image
                    source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                    resizeMode={"stretch"}
                    style={{
                      position: "absolute",
                      top: -8,
                      right: -4,
                      width: 20,
                      height: 12,
                    }}
                  />
                  <Image
                    source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                    resizeMode={"stretch"}
                    style={{
                      position: "absolute",
                      bottom: -11,
                      right: 5,
                      width: 7,
                      height: 11,
                    }}
                  />
                </View>
                <Image
                  source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                  resizeMode={"stretch"}
                  style={{
                    position: "absolute",
                    top: -4,
                    left: 5,
                    width: 6,
                    height: 4,
                  }}
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginHorizontal: 5,
                }}
              >
                <View
                  style={{
                    width: 3,
                    height: 4,
                    backgroundColor: "#507CB1",
                    shadowColor: "#FFFFFF33",
                    shadowOpacity: 0.2,
                    shadowOffset: {
                      width: 0,
                      height: 9,
                    },
                    shadowRadius: 3,
                    elevation: 3,
                  }}
                ></View>
                <View
                  style={{
                    width: 3,
                    height: 4,
                    backgroundColor: "#507CB1",
                    shadowColor: "#FFFFFF33",
                    shadowOpacity: 0.2,
                    shadowOffset: {
                      width: 0,
                      height: 9,
                    },
                    shadowRadius: 3,
                    elevation: 3,
                  }}
                ></View>
              </View>
              <View
                style={{
                  width: 3,
                  height: 4,
                  backgroundColor: "#507CB1",
                  marginHorizontal: 9,
                  shadowColor: "#FFFFFF33",
                  shadowOpacity: 0.2,
                  shadowOffset: {
                    width: 0,
                    height: 9,
                  },
                  shadowRadius: 3,
                  elevation: 3,
                }}
              ></View>
            </View>
            <View
              style={{
                width: 30,
                marginRight: 43,
              }}
            >
              <View
                style={{
                  marginBottom: 2,
                }}
              >
                <View style={{}}>
                  <Image
                    source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                    resizeMode={"stretch"}
                    style={{
                      height: 18,
                    }}
                  />
                  <Image
                    source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                    resizeMode={"stretch"}
                    style={{
                      position: "absolute",
                      top: -8,
                      right: -4,
                      width: 20,
                      height: 12,
                    }}
                  />
                </View>
                <Image
                  source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                  resizeMode={"stretch"}
                  style={{
                    position: "absolute",
                    top: -4,
                    left: 5,
                    width: 6,
                    height: 4,
                  }}
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginHorizontal: 7,
                }}
              >
                <View
                  style={{
                    width: 3,
                    height: 4,
                    backgroundColor: "#507CB1",
                    shadowColor: "#FFFFFF33",
                    shadowOpacity: 0.2,
                    shadowOffset: {
                      width: 0,
                      height: 9,
                    },
                    shadowRadius: 3,
                    elevation: 3,
                  }}
                ></View>
                <View
                  style={{
                    width: 3,
                    height: 4,
                    backgroundColor: "#507CB1",
                    shadowColor: "#FFFFFF33",
                    shadowOpacity: 0.2,
                    shadowOffset: {
                      width: 0,
                      height: 9,
                    },
                    shadowRadius: 3,
                    elevation: 3,
                  }}
                ></View>
                <View
                  style={{
                    width: 3,
                    height: 4,
                    backgroundColor: "#507CB1",
                    shadowColor: "#FFFFFF33",
                    shadowOpacity: 0.2,
                    shadowOffset: {
                      width: 0,
                      height: 9,
                    },
                    shadowRadius: 3,
                    elevation: 3,
                  }}
                ></View>
              </View>
            </View>
            <View
              style={{
                width: 28,
                marginRight: 33,
              }}
            >
              <View style={{}}>
                <Image
                  source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                  resizeMode={"stretch"}
                  style={{
                    height: 29,
                  }}
                />
                <Image
                  source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                  resizeMode={"stretch"}
                  style={{
                    position: "absolute",
                    bottom: -2,
                    left: -14,
                    width: 28,
                    height: 16,
                  }}
                />
              </View>
              <Image
                source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                resizeMode={"stretch"}
                style={{
                  position: "absolute",
                  top: 0,
                  right: -8,
                  width: 19,
                  height: 11,
                }}
              />
            </View>
            <View
              style={{
                width: 30,
                marginRight: 40,
              }}
            >
              <View style={{}}>
                <Image
                  source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                  resizeMode={"stretch"}
                  style={{
                    height: 18,
                  }}
                />
                <Image
                  source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                  resizeMode={"stretch"}
                  style={{
                    position: "absolute",
                    top: -8,
                    right: -4,
                    width: 20,
                    height: 12,
                  }}
                />
              </View>
              <Image
                source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                resizeMode={"stretch"}
                style={{
                  position: "absolute",
                  top: -4,
                  left: 5,
                  width: 6,
                  height: 4,
                }}
              />
            </View>
            <Image
              source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
              resizeMode={"stretch"}
              style={{
                width: 28,
                height: 29,
              }}
            />
            <View
              style={{
                position: "absolute",
                bottom: 7,
                left: 4,
                width: 23,
                height: 3,
                backgroundColor: "#FFEC8D",
                borderRadius: 54,
              }}
            ></View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 6,
            }}
          >
            <Text
              style={{
                color: "#F9F9F9",
                fontSize: 14,
              }}
            >
              {"32ºc"}
            </Text>
            <Text
              style={{
                color: "#F9F9F9",
                fontSize: 14,
              }}
            >
              {"32ºc"}
            </Text>
            <Text
              style={{
                color: "#F9F9F9",
                fontSize: 14,
              }}
            >
              {"32ºc"}
            </Text>
            <Text
              style={{
                color: "#F9F9F9",
                fontSize: 14,
              }}
            >
              {"32ºc"}
            </Text>
            <Text
              style={{
                color: "#F9F9F9",
                fontSize: 14,
              }}
            >
              {"32ºc"}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "#7E7E97",
                fontSize: 14,
              }}
            >
              {"26ºc "}
            </Text>
            <Text
              style={{
                color: "#7E7E97",
                fontSize: 14,
              }}
            >
              {"26ºc "}
            </Text>
            <Text
              style={{
                color: "#7E7E97",
                fontSize: 14,
              }}
            >
              {"26ºc "}
            </Text>
            <Text
              style={{
                color: "#7E7E97",
                fontSize: 14,
              }}
            >
              {"26ºc "}
            </Text>
            <Text
              style={{
                color: "#7E7E97",
                fontSize: 14,
              }}
            >
              {"26ºc "}
            </Text>
          </View>
        </View>
      </ScrollView>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
});
