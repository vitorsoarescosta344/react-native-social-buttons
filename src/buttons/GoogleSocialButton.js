import React from "react";
import { Text, TouchableOpacity, StyleSheet, Image, Dimensions } from "react-native";

const styles = StyleSheet.create({
  googleStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    //borderWidth: 0.5,
    borderColor: "#fff",
    height: 45,
    width: Dimensions.get('window').width * 0.8,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginVertical: 20
  },
  imageIconStyle: {
    padding: 10,
    marginLeft: 15,
    height: 25,
    width: 25,
    resizeMode: "stretch",
  },
  textStyle: {
    color: "#000",
    fontWeight: "400",
    marginLeft: 20,
    marginRight: 20,
    fontSize: 18
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
            : "Continue with Google"}
        </Text>
      </TouchableOpacity>
    );
  }
}
