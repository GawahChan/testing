import playerHasBlueTick from './Blue-tick-checker.js';

it('just testing', () => {
    expect(true).toBe(true);
});

it('returns false if no data is provided', () => {
    expect(playerHasBlueTick()).toBe(false);
});

it('returns false if current task is < 24', () => {
    let userData = {
        currentTask: 23
    };
    expect(playerHasBlueTick(userData)).toBe(false);
});

it('returns false if player doesn\'t have any avatar', () => {
    let userData = {
        haveAvatar: false
    }
    expect(playerHasBlueTick(userData)).toBe(false);
});

it('returns true if player completed task 24 and has avatar', () => {
    let userData = {
        currentTask: 24,
        haveAvatar: true
    };
    expect(playerHasBlueTick(userData)).toBe(true);
})