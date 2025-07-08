module.exports = async ({ quickAddApi }) => {
    return await quickAddApi.inputPrompt("Enter or paste seed text to expand:");
};