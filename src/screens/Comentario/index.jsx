import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';

export const Comentario = ({ navigation }) => {
  const [estrelas, setEstrelas] = useState(0);
  const [comentario, setComentario] = useState('');
  const [mensagemEnviada, setMensagemEnviada] = useState(false);

  const handleEnviarComentario = () => {
    if (estrelas === 0 || comentario === '') {
      Alert.alert('Avaliação e Comentário são obrigatórios.');
    } else {
      Alert.alert('Avaliação enviada', `Estrelas: ${estrelas}\nComentário: ${comentario}`);
      setMensagemEnviada(true);

    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ padding: 20 }}>Escolha quantas estrelas o filme merece:</Text>

      <View style={{ flexDirection: 'row', paddingBottom: 20 }}>
        {[1, 2, 3, 4, 5].map((star) => (
          <TouchableOpacity
            key={star}
            onPress={() => setEstrelas(star)}
            style={{ padding: 10, backgroundColor: estrelas >= star ? 'yellow' : 'white' }}
          >
            <Text>{'\u2605'}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TextInput
        style={{ borderWidth: 1, padding: 10, width: 200, marginVertical: 10 }}
        multiline
        numberOfLines={4}
        placeholder="Digite seu comentário..."
        value={comentario}
        onChangeText={(text) => setComentario(text)}
      />

      <TouchableOpacity
        onPress={handleEnviarComentario}
        style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5 }}
      >
        <Text style={{ color: 'white' }}>Enviar Comentário</Text>
      </TouchableOpacity>

      {mensagemEnviada && (
        <Text style={{ marginTop: 10, color: 'green' }}>Comentário enviado com sucesso!</Text>
      )}
    </View>
  );
};
