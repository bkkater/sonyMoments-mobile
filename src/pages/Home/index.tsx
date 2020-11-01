import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';

import Header from '../../components/Header';

// import { Container } from './styles';

import playlist from '../../../assets/playlist.png';
import playlist02 from '../../../assets/playlist02.png';
import artist01 from '../../../assets/artist01.png';
import artist02 from '../../../assets/artist02.png';
import artist03 from '../../../assets/artist03.png';
import artist04 from '../../../assets/artist04.png';
import artist05 from '../../../assets/artist05.png';
import ArtistItem from '../../components/ArtistItem';

const artists = [
  {
    id: '01',
    name: 'Angela Maria',
    imagem: artist01,
    music: 'A alegria de viver'
  },
  {
    id: '02',
    name: 'Os Paulos',
    imagem: artist02,
    music: 'Não dá mais'

  },  {
    id: '03',
    name: 'Lúcio Bomfim',
    imagem: artist03,
    music: 'Laranjas e bananas'
  },  {
    id: '04',
    name: 'MC Fulano',
    imagem: artist04,
    music: 'Sem saída part. 3'

  },  {
    id: '05',
    name: 'Beatriz Santos',
    imagem: artist05,
    music: 'Nas mãos dele'
  },
]

const Home: React.FC = () => {
  return (
    <ScrollView style={{ backgroundColor: '#331832', padding: 20, flex: 1 }}>
      <Header />

      <View style={{ marginVertical: 30 }}>
        <Text style={{ fontFamily: 'Poppins_600SemiBold', fontSize: 26, color: '#FFF', marginBottom: 5 }}>Olá, Tina</Text>
        <View style={{ borderWidth: 1, borderColor: '#8c07a1', borderRadius: 15 }} />
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Text style={{ fontFamily: 'Poppins_500Medium', fontSize: 16, color: '#FFF' }}>Suas playlists</Text>
        <Feather name="chevron-right" size={24} color="white" />
      </View>

      <View style={{alignItems: 'center', marginTop: 15}}>
        <Image source={playlist} />
        <Image source={playlist02} style={{ marginTop: 15}}/>
      </View>

      <View style={{ borderWidth: 1, borderColor: '#8c07a1', borderRadius: 15, marginVertical: 25}} />

      <Text style={{ fontFamily: 'Poppins_500Medium', fontSize: 16, color: '#FFF', marginBottom: 25}}>Artistas mais tocados</Text>

      {
        artists.map(artist => (
          <ArtistItem key={artist.id} name={artist.music} image={artist.imagem} music={artist.music}/>
        ))
      }

    </ScrollView>
  );
}

export default Home;