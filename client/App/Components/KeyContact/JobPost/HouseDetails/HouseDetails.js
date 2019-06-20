import React from 'react'
import { ScrollView, Text, View } from 'react-native' 

import { Formik } from 'formik'
import { connect } from 'react-redux'

import { backgroundStyles } from '../../../Styles/GeneralStyles'

import PostJobTop from '../PostJobTop'
import PostJobBottomButtons from '../PostJobBottomButtons'
import Cannabis from './Cannabis'
import Pets from './Pets'
import CigSmoke from './CigSmoke'

const mapStateToProps = state => {
	const { cigSmoking, pets, cannabis } = state.postJob.houseDetails
	return {
		cigSmoking: cigSmoking,
		pets: pets,
		cannabis: cannabis,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onHouseDetailsUpdate: (value) => dispatch({
			type: 'HOUSEDETAILS',
			payload: value
		}),
	}
}

const HouseDetails = props => {

	const initialFormValues = {
		cigSmoking: props.cigSmoking,
		pets: props.pets,
		cannabis: props.cannabis,
	}

	return (
		<ScrollView style={backgroundStyles.background}>
			<PostJobTop
				title='House Details'
				currentPosition={1}
				stepCount={1}
			/>

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
						<View>
							<CigSmoke
								values={values}
								setFieldValue={setFieldValue}
							/>

							<Pets
								values={values}
								setFieldValue={setFieldValue}
							/>

							<Cannabis
								values={values}
								setFieldValue={setFieldValue}
							/>
							<PostJobBottomButtons
								navigation={props.navigation}
								storeReduxData={values}
								storeReduxFunction={props.onHouseDetailsUpdate}
								handleSubmit={handleSubmit}
								errors={errors}
								touched={touched}
								lastPosition={1}
							/>
						</View>
					)
				}}
			</Formik>

		</ScrollView>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(HouseDetails)