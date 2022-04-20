import React from 'react';

import { View } from 'react-native';

import { List, Card, Appbar, IconButton, Colors, Title, Paragraph, Avatar } from 'react-native-paper'

import styles from '../styles/TelaA.json';

export default function TelaA(props) {
    return (
        <>
        <View style={styles.container}>
            <View>
            <Appbar style={styles.bottom}>
                <Appbar.Action
                    icon="circle"
                    onPress={() => console.log('Pressed delete')}
                    />
                <Appbar.Content
                style={styles['bottom .text']}
                    title="Your Company"/>
                <Appbar.Action
                    icon="calendar"
                    onPress={() => console.log('Pressed archive')}
                    />
                    <Appbar.Action
                    icon="inbox"
                    onPress={() => console.log('Pressed delete')}
                    />
            </Appbar>
            </View>
            <View>
                <Card style={styles.card}>
                    <Card.Content>
                        <View style={styles.horizontal}>
                            <Card.Title
                                style={styles.bugbox}
                                left={(props) => <Avatar.Icon {...props} icon="bug" style={styles.icon}/>}  
                            />
                            <Paragraph style={[styles.text,styles.horizontalcleaning]}>Cleaning * 03:10</Paragraph>
                            <Paragraph style={styles.text}>in 16 minutos and 28 seconds</Paragraph>
                        </View>
                       <Title>Kitchen Area</Title>
                        <Paragraph>Cleaning of oven, grill, tabletop and floor</Paragraph>
                    </Card.Content>
                </Card>
                <Card style={styles.card}>
                    <Card.Content>
                        <View style={styles.horizontal}>
                            <Card.Title
                                style={styles.bugbox}
                                left={(props) => <Avatar.Icon {...props} icon="bug" style={styles.icon}/>}  
                            />
                            <Paragraph style={[styles.text,styles.horizontalcleaning]}>Cleaning * 03:10</Paragraph>
                            <Paragraph style={styles.text}>in 16 minutos and 28 seconds</Paragraph>
                        </View>
                       <Title>Kitchen Area</Title>
                        <Paragraph>Cleaning of oven, grill, tabletop and floor</Paragraph>
                    </Card.Content>
                </Card>
                <Card style={styles.card}>
                    <Card.Content>
                        <View style={styles.horizontal}>
                            <Card.Title
                                style={styles.bugbox}
                                left={(props) => <Avatar.Icon {...props} icon="bug" style={styles.icon}/>}  
                            />
                            <Paragraph style={[styles.text,styles.horizontalcleaning]}>Cleaning * 03:10</Paragraph>
                            <Paragraph style={styles.text}>in 16 minutos and 28 seconds</Paragraph>
                        </View>
                       <Title>Kitchen Area</Title>
                        <Paragraph>Cleaning of oven, grill, tabletop and floor</Paragraph>
                    </Card.Content>
                </Card>
                <Card style={styles.card}>
                    <Card.Content>
                        <View style={styles.horizontal}>
                            <Card.Title
                                style={styles.bugbox}
                                left={(props) => <Avatar.Icon {...props} icon="bug" style={styles.icon}/>}  
                            />
                            <Paragraph style={[styles.text,styles.horizontalcleaning]}>Cleaning * 03:10</Paragraph>
                            <Paragraph style={styles.text}>in 16 minutos and 28 seconds</Paragraph>
                        </View>
                       <Title>Kitchen Area</Title>
                        <Paragraph>Cleaning of oven, grill, tabletop and floor</Paragraph>
                    </Card.Content>
                </Card>
            </View>
            <View>
                <IconButton
                    style={styles.button}
                    icon="camera"
                    color={Colors.red500}
                    size={20}
                    onPress={() => console.log('Pressed')}
                />
            </View>
        </View>
        </>
    );
}
