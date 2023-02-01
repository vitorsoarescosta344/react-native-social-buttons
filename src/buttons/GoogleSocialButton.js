import React from "react";
import { Text, TouchableOpacity, StyleSheet, Image } from "react-native";

const styles = StyleSheet.create({
  googleStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    //borderWidth: 0.5,
    borderColor: "#fff",
    height: 40,
    width: 220,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  imageIconStyle: {
    padding: 10,
    marginLeft: 15,
    height: 25,
    width: 25,
    resizeMode: "stretch",
  },
  textStyle: {
    color: "rgba(0,0,0,0.5)",
    fontWeight: "600",
    marginLeft: 15,
    marginRight: 20,
  },
});

export class GoogleSocialButton extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={{ ...styles.googleStyle, ...this.props.buttonViewStyle }}
        onPress={this.props.onPress}
      >
        <Image
          source={require("../images/google.png")}
          style={{ ...styles.imageIconStyle, ...this.props.logoStyle }}
        />
        <Text style={{ ...styles.textStyle, ...this.props.textStyle }}>
          {this.props.buttonText
            ? this.props.buttonText
            : "Sign in with Google"}
        </Text>
      </TouchableOpacity>
    );
  }
}
