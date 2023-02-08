import 'react-native-url-polyfill/auto'
import { useState, useEffect } from 'react'
import { supabase } from './helpers/supabaseClient'
import { StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';

import Login from './components/Login'
import Account from './components/Account'
import Tabs from './navigation/Tabs'

export default function App() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <View style={styles.container}>
      {session && session.user ? 
        <NavigationContainer>
          <Tabs />
        </NavigationContainer> : 
        <Login />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
  }
})
