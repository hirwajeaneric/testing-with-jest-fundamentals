test("mock implementation on a basic function", () => {
    const mock = jest.fn(x => 42 + x);
    expect(mock(1)).toBe(43);
    expect(mock).toHaveBeenCalledWith(1);
})

test('Spying on a mothod of an object', () => {
    const video = {
        play() {
            return true;
        }
    };
    
    const spy = jest.spyOn(video, 'play');
    video.play();

    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
})