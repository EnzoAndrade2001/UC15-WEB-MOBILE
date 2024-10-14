
const errorMessage = document.getElementById("error-message");

function clearError() {
    errorMessage.textContent= '';
};

function showError(message) {
    errorMessage.textContent = message;
}

export { clearError, showError };

