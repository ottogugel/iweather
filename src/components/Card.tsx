import React from "react";
import {
  View,
  ScrollView,
  ImageBackground,
  Text,
  Image,
} from "react-native";
export function Card() {
  return (
      <ScrollView className="flex-1 pt-8 pb-10 px-2">
        <View className="bg-gray-800 px-3 mb-2 rounded-xl">
          <ImageBackground
            style={{
              height: 304,
              paddingVertical: 25,
              paddingHorizontal: 21,
              marginTop: 12,
            }}
          >
            <Text className="text-white text-base mb-2">Porto Alegre, RS</Text>
            <Text className="text-white text-xs mb-28">              Segunda-feira, 15 de maio de 2023
            </Text>
            <View className="flex-row">
              <View className="flex-1 self-start mt-2 mr-1">
                <Text className="text-white text-5xl mb-4">28ºc</Text>
                <Text className="text-white text-base mb-2">26ºc / 32ºc</Text>
                <Text className="text-white text-sm">Poucas nuvens</Text>
              </View>
              <View className="w-24 self-start">
                <Text className="text-white">Imagem</Text>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View
          style={{
            height: 310,
            marginBottom: 8,
          }}
        >
          <View
            style={{
              backgroundColor: "#16161E",
              borderRadius: 12,
              paddingTop: 4,
              paddingBottom: 23,
              paddingHorizontal: 16,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: 16,
                paddingHorizontal: 7,
              }}
            >
              <Image
                source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                resizeMode={"stretch"}
                style={{
                  width: 11,
                  height: 22,
                  marginRight: 18,
                }}
              />
              <Text
                style={{
                  color: "#BEBED4",
                  fontSize: 14,
                }}
              >
                {"Sensação térmica"}
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
                {"26ºc"}
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
              <Text
                style={{
                  color: "#BEBED4",
                  fontSize: 14,
                }}
              >
                {"Probabilidade de chuva"}
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
                {"0%"}
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
              <Text
                style={{
                  color: "#BEBED4",
                  fontSize: 14,
                  flex: 1,
                }}
              >
                {"Velocidade do vento"}
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
              <Text
                style={{
                  color: "#BEBED4",
                  fontSize: 14,
                }}
              >
                {"Umidade do ar"}
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
                {"40%"}
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
              <Text
                style={{
                  color: "#BEBED4",
                  fontSize: 14,
                }}
              >
                {"Índice UV"}
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
                {"5"}
              </Text>
            </View>
          </View>
          <Text
            style={{
              color: "#F9F9F9",
              marginTop: -152,
              marginHorizontal: 18,
            }}
          >
            {"8 km/h"}
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "#16161E",
            borderRadius: 12,
            paddingVertical: 30,
            paddingHorizontal: 32,
          }}
        >
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
  );
};
