import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Modal, Animated, StatusBar, SafeAreaView} from 'react-native';
import dataMusicQuiz from '../data/QuizMusicTasks';
import {COLORS, SIZES} from '../styles';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const QuizesPageThird = () => {
    
    const allQuestions = dataMusicQuiz;
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
    const [correctOption, setCorrectOption] = useState(null);
    const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
    const [score, setScore] = useState(0);
    const [showNextButton, setShowNextButton] = useState(false);
    const [showScoreModal, setShowScoreModal] = useState(false);

    const valiateAnswer = (selectedOption) => {
        let correct_option = allQuestions[currentQuestionIndex]['correct_option'];
        setCurrentOptionSelected(selectedOption);
        setCorrectOption(correct_option); 
        setIsOptionsDisabled(true);
        if(selectedOption == correct_option){
            //set score
            setScore(score+1)
        }
        //Show Next Button
        setShowNextButton(true)
    }
    const handleNext = () => {
        if(currentQuestionIndex==allQuestions.length-1){
            //last Question
            //Show Score Modal
            setShowScoreModal(true)
        }else {
            setCurrentQuestionIndex(currentQuestionIndex+1);
            setCurrentOptionSelected(null);
            setCorrectOption(null);
            setIsOptionsDisabled(false);
            setShowNextButton(false);
        }
        Animated.timing(progress, {
            toValue: currentQuestionIndex+1,
            duration: 1000,
            useNativeDriver: false
        }).start();
    }

    const retryQuiz = () => {
        setShowScoreModal(false);

        setCurrentQuestionIndex(0);
        setScore(0);

        setCurrentOptionSelected(null);
        setCorrectOption(null);
        setIsOptionsDisabled(false);
        setShowNextButton(false);
        Animated.timing(progress, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: false
        }).start();
    }

    const renderQuestion = () => {
        return(
        <View style={{marginVertical: 40}}>
            <View style={styles.questionsIndex}>
                {/* Question Counter*/}
                <Text style={styles.questionsIndexStyleOne}>{currentQuestionIndex + 1}/</Text>
                <Text style={styles.questionsIndexStyleTwo}>{allQuestions.length}</Text>
            </View>

            {/* Question */}
            <Text style={styles.QuestionText}>{allQuestions[currentQuestionIndex]?.question}</Text>
        </View>
        )
    }

    const renderOptions = () => {
        return(
        <View>
            {
                allQuestions[currentQuestionIndex]?.option.map(option => (
                    <TouchableOpacity
                    onPress={() => valiateAnswer(option)}
                    disabled={isOptionsDisabled}
                    key={option}
                    style={{borderWidth: 3, 
                        borderColor: option==correctOption 
                        ? COLORS.success
                        : option==currentOptionSelected 
                        ? COLORS.error 
                        : COLORS.secondary+'40',
                        backgroundColor: option==correctOption 
                        ? COLORS.success +'20'
                        : option==currentOptionSelected 
                        ? COLORS.error +'20'
                        : COLORS.secondary+'20',
                        height: 60, borderRadius: 20,
                        flexDirection: 'row',
                        alignItems: 'center', justifyContent: 'space-between',
                        paddingHorizontal: 20,
                        marginVertical: 10}}
                    >
                        <Text>{option}</Text>

                        {/* Show Chceck Or Cross Icon based on correct answer*/}
                        {
                            option == correctOption ? (
                                <View>
                                    <Icon name="check" style={{
                                        color: 'white',
                                        fontSize: 20
                                    }}/>
                                </View>
                            ): option == currentOptionSelected ?
                            (
                                <View>
                                    <Icon name="close" />
                                </View>
                            ): null
                        }
                    </TouchableOpacity>
                ))
            }
        </View>
        )
    }

    const renderNextButton = () => {
        if(showNextButton){
            return (
                <TouchableOpacity 
                onPress={handleNext}
                style={styles.buttonNext}>
                    <Text style={{fontSize: 16}}>Następne</Text>
                </TouchableOpacity>
            )
        }else{
            return null;
        }
    }

    const [progress, setProgress] = useState(new Animated.Value(0));
    const progressAnim = progress.interpolate({
        inputRange: [0, allQuestions.length],
        outputRange: ['0%', '100%']
    })
    const renderProgressBar = () => {
        return(
            <View style={{
                width: '100%',
                height: 20,
                borderRadius: 20,
                backgroundColor: '#00000020',

            }}>
                <Animated.View style={[{
                    height: 20,
                    borderRadius: 20,
                    backgroundColor: COLORS.accent
                },{
                    width: progressAnim
                }]}>

                </Animated.View>

            </View>
        )
    }

    return (
        <SafeAreaView style={{
            flex: 1
        }}>
        <StatusBar barStyle="light-content" backgroundColor={COLORS.primary}> </StatusBar>
        <View style={styles.container}>

            {/* Progrss Bar */}
            {renderProgressBar()}
            {/* Question */}
            {renderQuestion()}

            {/* Options */}
            {renderOptions()}

            {/* Next Button */}
            {renderNextButton()}

            {/* Score Modal */}
            <Modal
               animationType="slide"
               transparent={true}
               visible={showScoreModal}
               >

                <View style={styles.modalView}>
                    <View style={styles.modalViewLine}>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>{score > (allQuestions.length/2) ? 'Gratulacje!' : 'Ups!'}</Text>
                    <View style={styles.questionResults}>
                        <Text style={{
                                   fontSize: 18,
                                   color: score> (allQuestions.length/2) ? COLORS.success : COLORS.error
                               }}>{score}</Text>
                        <Text style={{fontSize: 18}}>/{allQuestions.length}</Text>
                    </View>
                    {/* Retry Quiz button */}
                    <TouchableOpacity onPress={retryQuiz} style={styles.retryButton}>
                        <Text>Zagraj raz jeszcze</Text>
                    </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
        </SafeAreaView>
    );
}

export default QuizesPageThird;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        bottom: 0,
        right: 0,
        left: 0,
        top: 50,
    },
    questionsIndex: {
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    questionsIndexStyleOne: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
    },
    questionsIndexStyleTwo: {
        color: 'black',
        fontSize: 16,
    },
    buttonsStyle: {
        borderWidth: 3,
        borderColor: 'grey',
        backgroundColor: 'lightgrey',
        height: 60,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginVertical: 10,
    },
    QuestionText: {
        fontSize: 20,
    },
    buttonNext: {
        marginTop: 20,
        width: 350,
        backgroundColor: 'lightblue',
        padding: 20,
        borderRadius: 10,
        alignSelf: 'center',
        alignItems: 'center',
    },
    modalView: {
        flex: 1,
        backgroundColor: 'lightyellow',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalViewLine: {
        backgroundColor: 'grey',
        width: '90%',
        borderRadius: 20,
        padding: 20,
        alignItems: 'center'
    },
    questionResults: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginVertical: 20,
    },
    retryButton: {
        backgroundColor: 'lightblue',
        padding: 20,
        width: '100%',
        borderRadius: 20
    },
});