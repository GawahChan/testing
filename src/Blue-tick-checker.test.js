import playerHasBlueTick from './Blue-tick-checker.js';

//unroll the test
[{
    title:'returns false if no data is provided',
    userData: undefined,
    expected: false
}, {
    title:'returns false if current task is <24 but has avatar',
    userData: { currentTask: 23, hasAvatar: true },
    expected: false

}, {
    title: 'returns false if current task is >= 24 but doesn\'t have avatar',
    userData: { currentTask: 24, hasAvatar: false},
    expected: false
}, {
    title:'returns false if current task is <24 and player doesn\'t have any avatar',
    userData: { currentTask: 23, hasAvatar: false },
    expected: false
}, {
    title:'returns true if player completed task 24 and has avatar',
    userData: { currentTask: 24, hasAvatar: true},
    expected: true
}].forEach(({ title, userData, expected }) => {
    it(title, () => {
        expect(playerHasBlueTick(userData)).toBe(expected)
    });
})





// it('returns false if no data is provided', () => {
//     expect(playerHasBlueTick()).toBe(false);
// });

// it('returns false if current task is < 24', () => {
//     let userData = {
//         currentTask: 23
//     };
//     expect(playerHasBlueTick(userData)).toBe(false);
// });

// it('returns false if player doesn\'t have any avatar', () => {
//     let userData = {
//         hasAvatar: false
//     }
//     expect(playerHasBlueTick(userData)).toBe(false);
// });

// it('returns true if player completed task 24 and has avatar', () => {
//     let userData = {
//         currentTask: 24,
//         hasAvatar: true
//     };
//     expect(playerHasBlueTick(userData)).toBe(true);
// })