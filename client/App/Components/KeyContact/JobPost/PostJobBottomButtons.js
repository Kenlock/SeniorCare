import React from 'react'

import { View } from 'react-native'
import { Button } from 'react-native-elements'
import { connect } from 'react-redux'

import { bottomButtons } from '../../Styles/PostJob/PostJobGeneralStyles'

const mapStateToProps = state => {
	const { formPosition, overviewPosition, completedSections } = state.postJob.position
	return {
		formPosition: formPosition,
		overviewPosition: overviewPosition,
		completedSections: completedSections,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onPositionUpdate: (value) => dispatch({
			type: 'CHANGEFORMPOSITION',
			payload: value
		}),
		onOverviewUpdate: (value) => dispatch({
			type: 'CHANGEOVERVIEWPOSITION',
			payload: value
		}),
		onCompletedSectionsUpdate: value => dispatch({
			type: 'CHANGECOMPLETEDSECTIONS',
			payload: value
		})
	}
}

const PostJobBottomButtons = props => {
	const { storeReduxFunction, storeReduxData, handleSubmit, errors, touched, lastPosition } = props

	const handleFormPosition = directionForward => {
		if (directionForward) {
			handleSubmit()

			if (Object.keys(errors).length === 0 && Object.keys(touched).length !== 0 || storeReduxData !== '') {
				storeReduxFunction(storeReduxData)
				
				if (props.formPosition === lastPosition ) {
					if (!props.completedSections.includes(props.overviewPosition)) {
						props.completedSections.push(props.overviewPosition)
						props.onOverviewUpdate(++props.overviewPosition)
					} 
					props.navigation.navigate('Overview')
				} else {
					props.onPositionUpdate(++props.formPosition)
				}
			}
		} else {
			storeReduxFunction(storeReduxData)
			if (props.formPosition !== 0) {
				props.onPositionUpdate(--props.formPosition)
			} else {
				if (props.overviewPosition === 2) {
					props.navigation.navigate('SeniorDetails')
				} else {
					props.navigation.navigate('Overview')
				}
			}
		}
	}

	return (
		<View style={bottomButtons.buttonContainer}>
			<Button
				title="Back"
				containerStyle={bottomButtons.backContainer}
				buttonStyle={bottomButtons.backButton}
				titleStyle={bottomButtons.backButtonText}
				onPress={() => handleFormPosition(false)}
				/>
			<Button
				title="Next"
				containerStyle={bottomButtons.nextContainer}
				buttonStyle={bottomButtons.nextButton}
				onPress={() => handleFormPosition(true)}
			/>
		</View>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(PostJobBottomButtons)