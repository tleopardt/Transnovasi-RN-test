import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Beranda = () => {
  return (
    <View style={styles.container}>
      <Text>Beranda</Text>
    </View>
  )
}

export default Beranda

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})