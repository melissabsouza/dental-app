import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import HeaderWithMenu from '../../components/headerMenu';

const Faq= () => {
    return (
        <View>
            <HeaderWithMenu />
            <View>
                <Text style={styles.faqTitle}>FAQ - Perguntas Frequentes</Text>
            </View>
            <ScrollView style={styles.scrollMargin}>
                
                    <View>
                        <Text style={styles.titleStyle}>1. Como posso entrar em contato com o atendimento ao cliente?</Text>
                        <Text style={styles.textStyle}>Atualmente, não oferecemos um canal de atendimento. A página de chat para atendimento prioritário está em desenvolvimento e será disponibilizada em breve. Pedimos desculpas pela inconveniência e agradecemos pela sua compreensão.</Text>
                        <Text style={styles.textStyle}>Para suporte urgente, você pode entrar em contato conosco pelo número 234-5678</Text>
                        <Text style={styles.titleStyle}>2. Onde posso ajustar minhas configurações de conta?</Text>
                        <Text style={styles.textStyle}>A seção de Configurações está sendo aprimorada e, por enquanto, não está disponível. Estamos trabalhando para implementá-la o mais rápido possível. Enquanto isso, se precisar de qualquer ajuste na sua conta, por favor, entre em contato conosco através do número 234-5678.</Text>
                        <Text style={styles.titleStyle}>3. Como posso criar uma conta no aplicativo?</Text>
                        <Text style={styles.textStyle}>Para criar uma conta, basta clicar no botão "Cadastrar" localizado na página inicial e seguir as instruções para preencher seus dados. Caso já tenha uma conta, utilize o botão "Entrar" para acessar.</Text>
                        <Text style={styles.titleStyle}>4. O aplicativo está em manutenção?</Text>
                        <Text style={styles.textStyle}>O site está em funcionamento, mas estamos implementando melhorias contínuas. Isso pode resultar em algumas páginas ou recursos temporariamente indisponíveis. Estamos fazendo o nosso melhor para garantir que a experiência do usuário seja a melhor possível.</Text>
                    </View>
                </ScrollView>
        </View>
    )
}

export default Faq

const styles = StyleSheet.create({
    faqTitle: {
        fontFamily: 'NotoSans_Condensed',
        fontWeight: 500,
        fontSize: 24,
        lineHeight: 29,
        color: '#0066FF',
        marginTop: 19,
        marginLeft: 38
    },
    textStyle: {
        fontFamily: 'NotoSans_Regular',
        fontWeight: 500,
        fontSize: 16,
        lineHeight: 29,
        color: '#666666',
    },
    textStyle2: {
        fontFamily: 'NotoSans_Regular',
        fontWeight: 800,
        fontSize: 16,
        lineHeight: 29,
        color: '#666666',
    },
    titleStyle: {
        fontFamily: 'NotoSans_Regular',
        fontWeight: 800,
        fontSize: 20,
        lineHeight: 29,
        color: '#666666',
    },
    textView: {
        marginLeft: 38
    },
    scrollMargin:{
        margin: 20,
        paddingBottom: 40
    }
})