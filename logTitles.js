// This function used to log all titles of the Google Form questions.

function logAllTitles() {
  const form = FormApp.openById("YOUR FORM ID");
  const items = form.getItems();
  
  items.forEach((item, index) => {
    console.log(index + ": " + item.getTitle() + " (" + item.getType() + ")");
  });
}