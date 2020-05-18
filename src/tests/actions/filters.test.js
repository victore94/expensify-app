import { setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate } from '../../actions/filters'
import moment from 'moment'

test('should generate set start date', () => {
    const action = setStartDate(moment(0))
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
})

test('should generate set end date', () => {
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
})

test('should filter the text', () => {
    const action = setTextFilter('test')
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'test'
    })
})

test('should filter the text with default', () => {

    const action = setTextFilter()

    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})

test('generate action object for sortByAmount', () => {
    const action = sortByAmount();
    expect(action).toEqual(
        { type: "SORT_BY_AMOUNT" }
    )
})

test('generate action object for sortByDate', () => {
    const action = sortByDate();
    expect(action).toEqual(
        { type: "SORT_BY_DATE" }
    )
})