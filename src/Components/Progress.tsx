import React, { useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

interface props {
	totalSteps: number
  content: React.JSX.Element[]
}

const Progress = ({totalSteps, content} : props) => {
	const [step, setStep] = useState<number>(1)
  const styles = StyleSheet.create({
    container: {
      // flex: 1,
      // paddingTop: 100,
      alignItems: 'center',
      backgroundColor: 'transparent',
    },
    indicatorContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginBottom: 20,
    },
    stepContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    stepIndicator: {
      width: 35,
      height: 35,
      borderRadius: 20,
      borderWidth: 2,
      borderColor: '#E7E7E7',
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
    },
    activeStep: {
      borderColor: 'pink',
      backgroundColor: 'pink',
    },
    stepText: {
      color: '#E7E7E7',
      fontWeight: 'bold',
      fontSize: 16,
    },
    activeStepText: {
      color: 'white',
    },
    line: {
      width: 20,
      height: 2,
      backgroundColor: '#E7E7E7',
      marginHorizontal: 10,
    },
    activeLine: {
      backgroundColor: 'pink',
    },
    contentContainer: {
      // flex: 1,
      // justifyContent: 'center',
      width: "100%",
      // padding: 10px,
      alignItems: 'center',
    },
    buttonContainer: {
      flexDirection: 'row',
      marginBottom: 20,
    },
    button: {
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 20,
    },
    backButton: {
      backgroundColor: '#E7E7E7',
      marginRight: 10,
    },
    backButtonText: {
      color: 'gray',
      fontWeight: 'bold',
    },
    nextButton: {
      backgroundColor: 'pink',
    },
    nextButtonText: {
      color: 'white',
      fontWeight: 'bold',
    },
  });

  const handleNext = () =>{
    setStep(prevStep => Math.min(prevStep+1, totalSteps))
  }

  const handlePrevious = () => {
    setStep(prevStep => Math.max(prevStep -1, 1))
  }

  const renderStepIndicator = () => {
    const indicators = []
    for(let i : number = 1; i <= totalSteps; i++ )
    {
      indicators.push(
        <View key={i} style={styles.stepContainer}>
          <View style={[styles.stepIndicator, i <= step && styles.activeStep]}>
            <Text style={[styles.stepText, i <= step && styles.activeStepText]}>{i}</Text>
          </View>
          {i < totalSteps && <View style={[styles.line, i < step && styles.activeLine]} />}
        </View>
      )
    }
    return <View style={styles.indicatorContainer}>{indicators}</View>;
  }

  return (
	<div>
	    <View style={styles.container}>
      {renderStepIndicator()}

      <View style={styles.contentContainer}>
        {
          // eslint-disable-next-line array-callback-return
          content.map((item, index) =>{
            if(step === index+1)
              return <div className='signup-form'>{item}</div>
          })
        }
      </View>
      <View style={styles.buttonContainer}>
        {step > 1 && (
          <TouchableOpacity onPress={handlePrevious} style={[styles.button, styles.backButton]}>
            <Text style={styles.backButtonText}>Back</Text>
          </TouchableOpacity>
        )}
        {step < totalSteps ? (
          <TouchableOpacity onPress={handleNext} style={[styles.button, styles.nextButton]}>
            <Text style={styles.nextButtonText}>Next</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => alert('Done!')} style={[styles.button, styles.nextButton]}>
            <Text style={styles.nextButtonText}>Done</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
	</div>
  )
}

export default Progress
