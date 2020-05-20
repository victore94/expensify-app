import React from 'react'
import { shallow } from 'enzyme'
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('correctly render expense summary with 1 expense ', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235} />)
    expect(wrapper).toMatchSnapshot()
})

test('correctly render expense summary with multiple expensed ', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={2352134987} />)
    expect(wrapper).toMatchSnapshot()
})