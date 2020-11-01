import React, { useState } from 'react';
import { View, Text, Image, ScrollView, Modal, TouchableHighlight } from 'react-native';
import { Feather } from '@expo/vector-icons'

import Header from '../../components/Header';

import style from './styles';

import artist01 from '../../../assets/artist01.png';
import artist02 from '../../../assets/artist02.png';
import artist03 from '../../../assets/artist03.png';
import artist04 from '../../../assets/artist04.png';
import artist05 from '../../../assets/artist05.png';
import tina from '../../../assets/tina.png';
import luiza from '../../../assets/luiza.png';
import maju from '../../../assets/maju.png';
import carolina from '../../../assets/carolina.png';
import pedrinho from '../../../assets/pedrinho.png';
import ArtistItem from '../../components/ArtistItem';
import FriendItem from '../../components/FriendItem';
import { RectButton } from 'react-native-gesture-handler';

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

    }, {
        id: '03',
        name: 'Lúcio Bomfim',
        imagem: artist03,
        music: 'Laranjas e bananas'
    }, {
        id: '04',
        name: 'MC Fulano',
        imagem: artist04,
        music: 'Sem saída part. 3'

    }, {
        id: '05',
        name: 'Beatriz Santos',
        imagem: artist05,
        music: 'Nas mãos dele'
    },
]

const friends = [
    {
        id: '01',
        name: '@tina',
        imagem: tina,
    },
    {
        id: '02',
        name: '@luluiza',
        imagem: luiza,
    }, {
        id: '03',
        name: '@majuu',
        imagem: maju,
    }, {
        id: '04',
        name: '@carlinha',
        imagem: carolina,
    }, {
        id: '05',
        name: '@pedrinho',
        imagem: pedrinho,
    },
]

const Room: React.FC = () => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <ScrollView style={{ backgroundColor: '#331832' }}>
            <View style={{ padding: 20 }}>
                <Header style={{ display: 'none' }} />

                <View style={{ marginVertical: 30, marginBottom: 5 }}>
                    <Text style={{ fontFamily: 'Poppins_600SemiBold', fontSize: 26, color: '#FFF', marginBottom: 5 }}>AMIGOS DA TINA</Text>
                    <View style={{ borderWidth: 1, borderColor: '#8c07a1', borderRadius: 15 }} />
                </View>
            </View>

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ width: '100%', paddingLeft: 20 }}>
                <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                    {
                        friends.map(friend => (
                            <FriendItem key={friend.id} name={friend.name} image={friend.imagem} />
                        ))
                    }
                </View>
            </ScrollView>

            <View style={{ padding: 20 }}>
                {
                    artists.map(artist => (
                        <ArtistItem key={artist.id} name={artist.music} image={artist.imagem} music={artist.music} />
                    ))
                }
            </View>

            <RectButton
                style={{
                    paddingHorizontal: 20,
                    paddingVertical: 8,
                    backgroundColor: '#485DC9',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    borderRadius: 8,
                    position: 'absolute',
                    bottom: 50,
                    right: 20
                }}
                onPress={() => {
                    setModalVisible(true);
                }}>
                <Text style={{ marginRight: 5, fontFamily: 'Poppins_500Medium', fontSize: 14, color: '#FFF' }}>Pular faixa</Text>
                <Feather name="chevrons-right" color="#FFF" size={20} />
            </RectButton>

            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
            >
                <View style={style.centeredView}>
                    <View style={style.modalView}>

                        <TouchableHighlight underlayColor='transparent'  onPress={() => {setModalVisible(!modalVisible)}}>
                            <Feather name="x" color="#000" size={26} style={{ alignSelf: 'flex-end' }}/>
                        </TouchableHighlight>

                        <Text style={style.modalText}>Tina iniciou uma votação</Text>
                        <Text style={{ ...style.modalText, color: '#fff', fontSize: 18 }}>Deseja pular essa faixa?</Text>

                        <ArtistItem name={artists[0].name} music={artists[0].music} image={artists[0].imagem} soundwaveStyle={{ display: 'none' }} nameStyle={{ color: '#333' }} />

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 30 }}>
                            <TouchableHighlight style={{ borderWidth: 2, borderColor: '#8C07A1', paddingVertical: 20, paddingHorizontal: 38, borderRadius: 8 }}>
                                <Text style={{ color: '#8C07A1', fontFamily: 'Poppins_500Medium', fontSize: 16 }}>NÃO</Text>
                            </TouchableHighlight>

                            <TouchableHighlight style={{ backgroundColor: '#8C07A1', paddingVertical: 24, paddingHorizontal: 42, borderRadius: 8 }}>
                                <Text style={{ color: '#FFF', fontFamily: 'Poppins_500Medium', fontSize: 16 }}>SIM</Text>
                            </TouchableHighlight>
                        </View>

                    </View>
                </View>
            </Modal>
        </ScrollView>
    );
}

export default Room;