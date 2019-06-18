import React from 'react'

import { Text, TextInput, View } from 'react-native'		

import { Formik } from 'formik'
import { connect } from 'react-redux'

import { createSeniorProfile } from '../../../Styles/PostJob/SeniorDetailsStyles'

import PostJobBottomButtons from '../PostJobBottomButtons'

const mapStateToProps = state => {
	return {
		seniorMedicalCondition: state.seniorMedicalCondition
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onSeniorMedicalConditionUpdate: (value) => dispatch({
			type: 'SENIORMEDICALCONDITON',
			payload: value
		})
	}
}

const SeniorMedicalCondition = props => {
	const { setFormPosition } = props

	const initialFormValues = {
		medicalCondition: '',
	}

	return (		
		<Formik
			initialValues={initialFormValues}
			onSubmit={async (values, { setSubmitting }) => {
				try {
					console.log(values)
				} catch(err) {
					throw err
				}
				setSubmitting(false)
			}}
		>
			{formikProps => {
				const {
					values,
					touched,
					errors,
					dirty,
					isSubmitting,
					handleChange,
					handleBlur,
					handleSubmit,
					handleReset,
					setFieldValue,
				} = formikProps

				return (
					<View style={createSeniorProfile.mainContainer}>
						<Text style={createSeniorProfile.question}>
							Are there any medical conditions to be aware of?
						</Text>
						<View style={createSeniorProfile.multilineTextBox}>
							<TextInput
								value={values.medicalCondition}
								onChangeText={handleChange('medicalCondition')}
								placeholder='Tell us about any medical conditions that we need to be aware of.'
								editable={true}
								multiline={true}
								numberOfLines={4}
								style={createSeniorProfile.multilineTextArea}
							/>
						</View>
						<PostJobBottomButtons
							navigation={props.navigation}
							setFormPosition={setFormPosition}
							storeReduxData={values.medicalCondition}
							storeReduxFunction={props.onSeniorMedicalConditionUpdate}
						/>
						</View>
				)
			}}
		</Formik>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(SeniorMedicalCondition)