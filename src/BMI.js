import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ImageBackground
} from "react-native";

export default class App extends React.Component {
  state = {
    height: 0,
    weight: 0,
    resultNumber: 0,
    resultText: ""
  };

  handleCalculate = () => {
    let imc = (this.state.weight * 703) / this.state.height ** 2;
    this.setState({
      resultNumber: imc.toFixed(2)
    });

    if (imc < 18.5) {
      this.setState({ resultText: "Underweight" });
    } else if (imc > 18.5 && imc < 25) {
      this.setState({ resultText: "Normal Weight" });
    } else if (imc >= 25 && imc < 30) {
      this.setState({ resultText: "Overweight" });
    } else {
      this.setState({ resultText: "Obesity" });
    }
  };

  render() {
    return (
      
      <ImageBackground
        source={require("../background.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={styles.container}>
          <Text
            style={{
              color: "#FFCB1F",
              justifyContent: "center",
              alignSelf: "center",
              marginTop: 30,
              fontSize: 15
            }}
          >
            <Text style = {{marginHorizontal: 5, color: 'green', fontWeight: 'bold', fontSize: 30}}>BMI Calculator</Text>
          </Text>
          <View style={styles.intro}> 
            <TextInput
              placeholder="Height"
              keyboardType="numeric"
              style={styles.input}
              onChangeText={height => {
                this.setState({ height });
              }}
            />
            <TextInput
              placeholder="Weight"
              keyboardType="numeric"
              style={styles.input}
              onChangeText={weight => {
                this.setState({ weight });
              }}
            />
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={this.handleCalculate}
          >
            <Text style={styles.buttonText}>Calculate </Text>
          </TouchableOpacity>
          <Text style={styles.result}>{this.state.resultNumber}</Text>
          <Text style={[styles.result, { fontSize: 35 }]}>
            {this.state.resultText}
          </Text>
        </View>
      </ImageBackground>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  intro: {
    flexDirection: "row"
  },
  input: {
    height: 80,
    textAlign: "center",
    width: "50%",
    fontSize: 50,
    marginTop: 24,
    color: "green"
  },
  button: {
    backgroundColor: "#1D1D1B"
  },
  buttonText: {
    alignSelf: "center",
    padding: 30,
    fontSize: 25,
    color: "green",
    fontWeight: "bold"
  },
  result: {
    alignSelf: "center",
    color: "green",
    fontSize: 65,
    padding: 15
  }
});
