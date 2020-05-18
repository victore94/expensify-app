import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test('should remove an expense', () => {
    const action = removeExpense({ id: '123 abc' })
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE'
        , id: '123 abc'
    })
})


test('should edit an expense', () => {
    const action = editExpense('123 abc', { note: 'test' })
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123 abc',
        updates: { note: 'test' }
    })
})

test('should setup add expense action object with provided values', () => {
    const expenseData = {
        description: 'rent',
        note: 'this months rent',
        amount: 1500,
        createdAt: 1000
    }
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})

test('should return defaults of add expense', () => {
    const expenseData = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
    }
    const action = addExpense()
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})