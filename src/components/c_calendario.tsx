import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Calendar } from 'react-native-calendars';

const CalendarComponent: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState<string>('');

    const onDayPress = (day: { dateString: string }) => {
        setSelectedDate(day.dateString);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Calendário</Text>

            <Calendar
                current={new Date().toISOString().split('T')[0]}
                onDayPress={onDayPress}
                markedDates={{
                    [selectedDate]: {
                        selected: true,
                        selectedColor: 'blue',
                        selectedTextColor: 'white',
                    },
                }}
            />

            {selectedDate ? (
                <Text style={styles.selectedDateText}>
                    Você selecionou a data: {selectedDate}
                </Text>
            ) : (
                <Text style={styles.selectedDateText}>
                    Nenhuma data selecionada.
                </Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    header: {
        fontSize: 24,
        marginBottom: 16,
    },
    selectedDateText: {
        marginTop: 20,
        fontSize: 18,
        color: 'gray',
    },
});

export default CalendarComponent;
