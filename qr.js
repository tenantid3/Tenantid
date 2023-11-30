function renderQuestion(question, index) {
    let html = `<label for="question${index}">${question.text}</label>`;
    
    if (question.type === 'multiple-choice') {
        html += `
            <input type="radio" name="answer${index}" value="option1">
            <label for="option1">Yes</label>
            <input type="radio" name="answer${index}" value="option2">
            <label for="option2">No</label>
        `;
    } else {
        html += `<input type="text" id="answer${index}" placeholder="Enter your answer">`;
    }
    return html;
}
