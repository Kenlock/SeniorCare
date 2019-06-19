
import { connect } from 'react-redux'
import React, {useState} from 'react'
import { View, Text, TextInput } from 'react-native'
import { ButtonGroup } from 'react-native-elements'
import {Calendar, CalendarList, Agenda} from 'react-native-calendars'

const mapStateToProps = state => {
  return {
    startDate: state.startDate,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onStartDateUpdate: (day) => dispatch({type: 'STARTDATE', payload: day.dateString}),
  }
}

const BasicInformationCalendar = (props) => {

  const [calendarButtonIndex, setCalendarButtonIndex] = useState(0)
  const [dateSelected, setMarkedDates] = useState({})

  const updateIndex = (selectedIndex) => {
    setCalendarButtonIndex(selectedIndex)
  }

  const handleDayPress = (day) => {
    // console.log('day: ', day.dateString)
    //dateString = day.dateString
    // console.log('dateString', dateString)
    //setMarkedDates({day: dateString})
    // setMarkedDates([...markedDates, dateString])
    setMarkedDates({[day.dateString]:{selected: true, color: 'blue'}})
    console.log('marked dates', dateSelected)
    //props.onStartDateUpdate(day)
  }

  // '2019-06-24': {startingDay: true, color: 'gray'},
  // '2019-06-25': {color: 'gray'},
  // '2019-06-26': {endingDay: true, color: 'blue'}}}

  return (
    <View>
      {/* {Reactotron.log('hello rendering world')} */}
      <ButtonGroup
        onPress={updateIndex}
        selectedIndex={calendarButtonIndex}
        buttons={['Start date ' + props.startDate, 'End Date']}
        // containerStyle={{height: 100}}
      />
      <Calendar
        // Initially visible month. Default = Date()
        // current={'2012-03-01'}
        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
        // minDate={'2019-05-10'}
        // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
        // maxDate={'2012-05-30'}
        // Handler which gets executed on day press. Default = undefined
        // onDayPress={(day) => { submitStartDate(day.dateString) }}
        // onDayPress={(day) => props.onStartDateUpdate(day) }
        onDayPress={(day) => handleDayPress(day) }
        // Handler which gets executed on day long press. Default = undefined
        onDayLongPress={(day) => props.onStartDateUpdate(day) }
        // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
        monthFormat={'MMMM yyyy'}
        // Handler which gets executed when visible month changes in calendar. Default = undefined
        onMonthChange={(month) => { console.log('month changed', month) }}
        // Hide month navigation arrows. Default = false
        hideArrows={true}
        // Replace default arrows with custom ones (direction can be 'left' or 'right')
        renderArrow={(direction) => (<Arrow />)}
        // Do not show days of other months in month page. Default = false
        hideExtraDays={true}
        // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
        // day from another month that is visible in calendar page. Default = false
        disableMonthChange={true}
        // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
        firstDay={1}
        // Hide day names. Default = false
        hideDayNames={true}
        // Show week numbers to the left. Default = false
        showWeekNumbers={true}
        // Handler which gets executed when press arrow icon left. It receive a callback can go back month
        onPressArrowLeft={substractMonth => substractMonth()}
        // Handler which gets executed when press arrow icon left. It receive a callback can go next month
        onPressArrowRight={addMonth => addMonth()}
        markingType={'period'}
        // markedDates={{
        //   '2019-06-24': {startingDay: true, color: 'gray'},
        //   '2019-06-25': {color: 'gray'},
        //   '2019-06-26': {endingDay: true, color: 'blue'}}}
        markedDates={dateSelected}
        />
        <Text>Redux state: {props.startDate}</Text>
      </View>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(BasicInformationCalendar)