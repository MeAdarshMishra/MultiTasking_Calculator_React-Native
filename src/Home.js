import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
export default class Home extends React.Component {

    static navigationOptions = {
        title: 'Home',
    };

    render() {

        const { navigate } = this.props.navigation;

        return (
            <View style={styles.fixToText}>
        <Button
          title="BMI Calculator"
          color="purple"
          onPress={() => navigate('Profile')}
        />
        <Button
          title="Calculator"
          color="olive"
          
          onPress={() => navigate('Calculator')}
        />
      </View>
        );

    }

}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    justifyContent: 'bottom',
    marginHorizontal: 100,
    
    
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    justifyContent:'center',
    margin:100,
    
  },
  
});
