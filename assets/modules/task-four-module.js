export const declension = (number, forms) => {
    const cases = [2, 0, 1, 1, 1, 2];
    return number + ' ' + forms[
        number % 100 > 4 && number % 100 < 20 ? 2 : cases[Math.min(number % 10, 5)]
    ];
};
