import { Text, View, StyleSheet, Image, ScrollView, Button  } from 'react-native';

function TelaInicio() {
    return (
        <View style={{ flex: 1}}>
            <View style={estilos.cabecalho}>
                <Image
                    source={ require('../assets/imagens/borboleta.jpg') }
                    style={ estilos.foto}
                />

                <Text style={estilos.nome}>Camila Fernandes</Text>
            </View>

            <ScrollView>
                <Text style={estilos.biografia}>
                Não é só programar, mas planejar, criar interfaces intuitivas e garantir que tudo funcione bem.
                Ver um projeto sair do papel e ajudar pessoas ou empresas é, para mim, a parte mais gratificante.</Text>

                

            <Text>HABILIDADE:Fazer unhas, é incrível, pois une criatividade, cuidado e atenção aos detalhes. Além de embelezar,
                ela transmite confiança e autoestima para quem recebe o serviço.</Text>



            <Text>EXPERIÊNCIAS: Cozinhar é mais do que preparar alimentos; é transformar ingredientes em experiências únicas. 
                É uma oportunidade de criar, experimentar sabores diferentes e expressar criatividade.
                Além disso, cozinhar permite se conectar com pessoas, compartilhar momentos especiais 
                e sentir satisfação ao ver alguém apreciando o que você fez.

                </Text>
            </ScrollView>

            <Button title="Sair" onPress={() => {}} />
        </View>
    );
}

const estilos = StyleSheet.create({
    cabecalho: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#FFC0Cb',
        padding: 10,
        marginBottom: 10,
    },
    nome: {
        color: 'black',
        fontSize: 36,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    foto: {
        width: 90,
        height: 60,
    },
    biografia: {    
        fontSize: 24,
        padding: 10,
    }
});

export default TelaInicio;