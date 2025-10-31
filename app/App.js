import { AWESOME_API_KEY } from '@env';
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { PickerItem } from '../src/components/Picker';
import { api } from '../src/services/api';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [moedas, setMoedas] = useState([]);
  const [moedaSelecionada, setMoedaSelecionada] = useState(null);

  useEffect(() => {
    async function loadMoedas(retryCount = 0) {
      try {
        const response = await api.get("all", {
          params: {
            token: AWESOME_API_KEY
          }
        })
        let arrayMoedas = [];
        Object.keys(response.data).map((key) => {
        arrayMoedas.push({
          key: key,
          label: key,
          value: key,
        })
      })

      setMoedas(arrayMoedas)
      setMoedaSelecionada(arrayMoedas[0].key)
      setLoading(false)

      } catch (error) {
        console.error("Erro ao carregar moedas:", error.message);
    }

      
    }

    loadMoedas();
  }, []);

  if(loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',  backgroundColor: '#1D1D33' }}>
        <ActivityIndicator color="#FFF" size="large"/>
      </View>
    )
  }

 return (
   <View style={styles.container}>
      <View style={styles.areaMoeda}>
        <Text style={styles.titulo}>Selecione sua moeda</Text>
        <PickerItem 
          moedas={moedas}
          moedaSelecionada={moedaSelecionada}
          onChange={(moeda) => setMoedaSelecionada(moeda)}
        />
      </View>
       
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1D1D33',
      paddingTop: 40,
      alignItems: 'center'
    },
    areaMoeda: {
      backgroundColor: '#F9F9F9',
      width: '90%',
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
      padding: 8
    },
    titulo: {
      fontSize: 16,
      color: '#000',
      fontWeight: '500',
      paddingLeft: 5, 
      paddingTop: 5
    }
})