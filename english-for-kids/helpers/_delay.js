export default function _delay(func, time) {
    setTimeout(() => {
        func();
    }, time);
};