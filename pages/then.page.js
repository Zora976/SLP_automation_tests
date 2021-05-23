


class ThenPage {
    /**
     * define selectors using getter methods
     */
    checkIfConditionExist(conditionPage)
    {
        expect(conditionPage).toBeExisting();
    };

    toHaveTextExisting(conditionPage, message)
    {
        expect(conditionPage).toHaveTextContaining(message);
    };
}

module.exports = new ThenPage();
