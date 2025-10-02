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
                Olá, meu nome é Camila Fernandes, tenho 16 anos e moro na cidade de Rubiácea. {"\n"}

            Sou uma pessoa alegre, gentil e divertida. Gosto de assistir filmes, séries e animes, jogar free fire e ir ao shopping com minha
            fámilia. {"\n"}

            Sou uma auxiliar de agendamentos em um salão de design de sobrancelhas. {"\n"}

            Faço um curso de Desenvolvimento de Sistemas. {"\n"}

            Minha comida favorita é fricassê. {"\n"}

            Amo ver paisagens e brincar com gatinhos. {"\n"}

            Sonho em presentear a minha mãe com uma casa nova e ver toda minha familia feliz. {"\n"}

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