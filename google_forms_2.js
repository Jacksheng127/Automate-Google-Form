// Description: This script is used to submit responses to a Google Form programmatically.
// Way 2: Select the questions by title

function submitFormResponses() {
    // Replace with your actual Form ID
    const form = FormApp.openById("YOUR FORM ID");

    // Define the responses for each question
    const genderOptions = ["Male", "Female"];
    const courseOptions = ["SE", "CSN", "MM", "AI", "IS", "DS"];
    const sleepHours = Math.floor(Math.random() * 6) + 5; // Random integer between 5 and 10
    const yesOrNo = ["Yes", "No"];
    const electronicDeviceScale = Math.floor(Math.random() * 5) + 1; // Random integer between 1 and 5

    // Create a response
    const response = form.createResponse();

    // Part 1: Select gender
    const genderItem = form.getItems().filter(item => item.getTitle() === "Gender")[0];
    if (genderItem) {
        response.withItemResponse(genderItem.asMultipleChoiceItem().createResponse(genderOptions[Math.floor(Math.random() * genderOptions.length)]));
    }

    // Part 2: Select course
    const courseItem = form.getItems().filter(item => item.getTitle() === "Course")[0];
    if (courseItem) {
        response.withItemResponse(courseItem.asMultipleChoiceItem().createResponse(courseOptions[Math.floor(Math.random() * courseOptions.length)]));
    }

    // Part 3: Hours of sleep
    const sleepHoursItem = form.getItems().filter(item => item.getTitle() === "how many hours your sleep on average")[0];
    if (sleepHoursItem) {
        response.withItemResponse(sleepHoursItem.asTextItem().createResponse(String(sleepHours)));
    }

    // Part 4: Regular bedtime
    const regularBedTimeItem = form.getItems().filter(item => item.getTitle() === "do you have a regular bedtime")[0];
    if (regularBedTimeItem) {
        response.withItemResponse(regularBedTimeItem.asMultipleChoiceItem().createResponse(yesOrNo[Math.floor(Math.random() * yesOrNo.length)]));
    }

    // Part 5: Consume caffeine
    const consumeCaffeineItem = form.getItems().filter(item => item.getTitle() === "do you consume caffeine after 6pm?")[0];
    if (consumeCaffeineItem) {
        response.withItemResponse(consumeCaffeineItem.asMultipleChoiceItem().createResponse(yesOrNo[Math.floor(Math.random() * yesOrNo.length)]));
    }

    // Part 6: Electronic device usage scale
    const deviceScaleItem = form.getItems().filter(item => item.getTitle() === "do you use electronic device right before sleep")[0];
    if (deviceScaleItem) {
        response.withItemResponse(deviceScaleItem.asScaleItem().createResponse(electronicDeviceScale));
    }

    // Submit the response
    response.submit();
}

