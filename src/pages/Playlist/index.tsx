import React, { useEffect, useState } from 'react';
import { AsyncStorage, Image, View, Text, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import PlaylistHeader from '../../components/PlaylistHeader';

import artist01 from '../../../assets/artist01.png';
import artist02 from '../../../assets/artist02.png';
import artist03 from '../../../assets/artist03.png';
import artist04 from '../../../assets/artist04.png';

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

  },
  {
    id: '03',
    name: 'Lúcio Bomfim',
    imagem: artist03,
    music: 'Laranjas e bananas'
  },
  {
    id: '04',
    name: 'MC Fulano',
    imagem: artist04,
    music: 'Sem saída part. 3'

  },
]

import musicIcon from '../../../assets/music-icon.png'
import ArtistItem from '../../components/ArtistItem';

const Playlist: React.FC = () => {
  const [imageUri, setImageUri] = useState<string>();
  const { navigate } = useNavigation();

  function handleNavigateToShare() {
    navigate('Share')
  }

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('image')
      if (value !== null) {
        setImageUri(value)
      }
    } catch (e) {
      console.error(e.message)
    }
  }

  return (
    <ScrollView style={{ backgroundColor: '#331832', padding: 20, flex: 1 }}>
      <PlaylistHeader />

      <View style={{ alignItems: 'center', marginTop: 20 }}>
        <Image source={{ uri: imageUri }} style={{ width: 305, height: 195, borderRadius: 8 }} />

        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', width: '80%' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={musicIcon} />
            <Text style={{ paddingVertical: 20, marginHorizontal: 15, fontFamily: 'Poppins_500Medium', color: '#FFF', fontSize: 18 }}>Amigos e muito sol</Text>
          </View>

          <View style={{ marginLeft: 45 }}>
            <Feather name="share-2" size={24} color="white" />
          </View>
        </View>

        <View style={{ width: '90%' }}>
          {
            artists.map(artist => (
              <RectButton key={artist.id} onPress={handleNavigateToShare}>
                <ArtistItem name={artist.music} image={artist.imagem} music={artist.music} />
              </RectButton>
            ))
          }
        </View>

      </View>
    </ScrollView>
  );
}

export default Playlist;