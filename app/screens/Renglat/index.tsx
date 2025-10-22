import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Renglat = () => {
  return (
    <View style={styles.container}>
      <Text>Renglat</Text>
    </View>
  )
}

export default Renglat

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})