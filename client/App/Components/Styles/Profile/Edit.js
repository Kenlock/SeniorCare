import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#eef5fb'
  },
  Profile: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 25,
  },
  ProfileName: {
    fontSize: 20,
    padding: 15,
    fontWeight: '600',
  },
  ProfileButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderBottomColor: '#eee',
    borderColor: '#fff',
    borderStyle: 'solid',
    marginRight: 20,
    marginLeft: 20,
  },
  ProfileButtonForgot: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderBottomColor: '#eee',
    borderColor: '#fff',
    borderStyle: 'solid',
    marginRight: 20,
    marginLeft: 20,
  },
  ProfileButtonText: {
    fontSize: 16,
    padding: 15,
  },
  ProfileButtonIcon: {
    fontSize: 16,
    padding: 15,
    color: '#3F7DFB'
  },
  input: {
      flex: 1,
      fontSize: 16,
      width: '100%',
      padding: 5,
      marginTop: 5,
      marginBottom: 5,
      borderWidth: 1,
      color: '#A3A3A3',
      borderBottomColor: '#A3A3A3',
      borderColor: '#fff',
      borderStyle: 'solid',
    },
    inputNumber: {
      flex: 1,
      fontSize: 16,
      width: '100%',
      padding: 5,
      marginTop: 5,
      marginRight: 20,
      marginBottom: 5,
      borderWidth: 1,
      color: '#A3A3A3',
      borderBottomColor: '#A3A3A3',
      borderColor: '#fff',
      borderStyle: 'solid',
    },
  submitButton: {
      borderWidth: 1,
      borderRadius: 75,
      width: 150,
      backgroundColor: '#244392',
      borderColor: '#244392',
      borderStyle: 'solid',
      padding: 5,
      margin: 10,
      justifyContent: 'center',
    },
    buttonText: {
        flex: 1,
        justifyContent: 'center',
        fontSize: 18,
        color: '#FFF',
        textAlign: 'center',
      },
  switchContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  numberInputsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
  },
})

export default styles