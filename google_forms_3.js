// Description: This script is used to submit responses to a Google Form programmatically.
// Way 2.5: Select the questions by title through a mapping object

function submitFormResponses() {
    const form = FormApp.openById("YOUR FORM ID");
  
    // Define possible responses
    const genderOptions = ["Male", "Female"];
    const courseOptions = ["SE", "CSN", "MM", "AI", "IS", "DS"];
    const yesOrNo = ["Yes", "No"];
  
    // Define mappings of questions to their types and response functions
    const questionMappings = {
      "Gender": () => genderOptions[Math.floor(Math.random() * genderOptions.length)],
      "Course": () => courseOptions[Math.floor(Math.random() * courseOptions.length)],
      "how many hours your sleep on average": () => String(Math.floor(Math.random() * 6) + 5), // Random integer 5-10 as string
      "do you have a regular bedtime": () => yesOrNo[Math.floor(Math.random() * yesOrNo.length)],
      "do you consume caffeine after 6pm?": () => yesOrNo[Math.floor(Math.random() * yesOrNo.length)],
      "do you use electronic device right before sleep": () => Math.floor(Math.random() * 5) + 1 // Random integer 1-5
    };
  
    // Create the response
    const response = form.createResponse();
  
    // Loop through each question, find the form item, and apply the corresponding response
    for (const [title, generateResponse] of Object.entries(questionMappings)) {
      const item = form.getItems().find(i => i.getTitle() === title);
      if (item) {
        let itemResponse;
        switch (item.getType()) {
          case FormApp.ItemType.MULTIPLE_CHOICE:
            itemResponse = item.asMultipleChoiceItem().createResponse(generateResponse());
            break;
          case FormApp.ItemType.TEXT:
            itemResponse = item.asTextItem().createResponse(generateResponse());
            break;
          case FormApp.ItemType.SCALE:
            itemResponse = item.asScaleItem().createResponse(generateResponse());
            break;
        }
        response.withItemResponse(itemResponse);
      }
    }
  
    // Submit the response
    response.submit();
  }