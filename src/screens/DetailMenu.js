import React, { Component } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

class DetailMenu extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>

                <View>
                    {/* detail makanan */}
                    <Text style={styles.h2top}>Detail Makanan</Text>
                    {/* end detail makanan */}

                    {/* gambar */}
                    <Image
                        style={styles.imageStyle}
                        source={{ uri: 'https://blogpictures.99.co/makanan-khas-indonesia-header.png' }} />
                    {/* end gambar */}
                </View>

                <View>
                    {/* penjelasan */}
                    <Text style={styles.h2}>Penjelasan :</Text>
                    {/* end penjelasan */}

                    {/* paragraph  */}
                    <Text style={{
                        marginLeft: 30,
                        marginRight: 25
                    }}>Food is the necessity of life. It provides nutrition, sustenance and growth to human body. Food can be classified into cereals, pulses, nuts and oilseeds, vegetable, fruits, milk and milk products and flesh food. Food comprises protein, facts, carbohydrates, vitamins, minerals salts and water.{"\n"}</Text>
                    {/* end paragraph  */}
                </View>

                {/* bahan bahan */}
                <View style={{ marginBottom: 15 }}>
                    <Text style={styles.h2}>Bahan - bahan :</Text>
                    <TextInput style={styles.textInput} editable={false}
                        placeholder="Bahan 1" />
                    <TextInput style={styles.textInput} editable={false}
                        placeholder="Bahan 2" />
                    <Text style={styles.h2}>Resep :</Text>
                    <TextInput style={styles.textInput} editable={false}
                        placeholder="Bahan 1" />
                    <TextInput style={styles.textInput} editable={false}
                        placeholder="Bahan 2" />
                </View>
                {/* end bahan bahan */}

                {/* button */}
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Cart')}
                        style={styles.buttonStyle1}>
                        <Text style={styles.buttonTitle}>Pesan</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonStyle2}>
                        <Text style={styles.buttonTitle}>Tambah ke Cart</Text>
                    </TouchableOpacity>
                </View>
                {/* end button */}

            </ScrollView>
        )
    }
}

export default DetailMenu

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 60
    },
    h2: {
        color: "#43a845",
        fontSize: 16,
        marginLeft: 30,
        fontWeight: "bold",
    },
    h2top: {
        color: "#0688c9",
        fontSize: 16,
        marginLeft: 30,
        fontWeight: "bold",
    },
    textInput: {
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
    buttonStyle1: {
        backgroundColor: '#00345e',
        width: 100,
        height: 48,
        marginLeft: 30,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonStyle2: {
        backgroundColor: '#00345e',
        width: 180,
        height: 48,
        marginLeft: 20,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center'
    },
    imageStyle: {
        width: 300,
        height: 200,
        marginLeft: 30,
        marginRight: 25,
        marginTop: 10,
        marginBottom: 10,
    }

})
