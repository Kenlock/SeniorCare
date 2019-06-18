import React from 'react'

import { Text, View } from 'react-native'
import { Input } from 'react-native-elements'

import { createSeniorProfile } from '../../../Styles/PostJob/SeniorDetailsStyles'

export default SeniorUploadAvatar = props => {
	// const { values } = props

	return (
		<View style={createSeniorProfile.mainContainer}>
			<Text style={createSeniorProfile.question}>
				{/* Please add a picture of {values.seniorName}. */}
				Please add a picture of (insert senior name)
			</Text>
			<Text>
				Adding a picture helps complete your profile and increases your chances to be viewed.
			</Text>
		</View>
	)
}