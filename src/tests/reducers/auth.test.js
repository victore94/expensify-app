import authReducer from '../../reducers/auth'


test('should set uid ', () => {
    const action = { type: 'LOGIN', uid: 'abc123' }
    const state = authReducer(undefined, action)
    expect(state.uid).toBe('abc123')
})

test('should clear uid', () => {
    const action = { type: 'LOGOUT' }
    const state = authReducer({ uid: 'anything' }, action)
    expect(state).toEqual({})
})

