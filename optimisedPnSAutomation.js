const form = FormApp.openById("1AhyRKiB6xbCejww45ufKWkdie47gtdLpGjyHKcLTU1M");

// Define response options for each question
const genderOptions = ["Male", "Female"];
const AgeOfRespondentOptions = ['19', '20', '21', '22','Others'];
const facultyOfRespondentOptions = [
  'Built Environment', 'Languages & Linguistics', 'Pharmacy', 'Engineering',
  'Education', 'Dentistry', 'Business & Economics', 'Medicine', 'Science',
  'Computer Science & Information Technology', 'Arts & Social Sciences',
  'Creative Arts', 'Law', 'Sport & Exercise Sciences'
];
const YearOfStudyOfRespondent = ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Others'];
const yesOrNoOptions = ["Yes", "No"];
const randomNumberFor0to5Scale = () => Math.floor(Math.random() * 6);
const mostFrequentPlatformOptions = ['Instagram', 'YouTube', 'TikTok', 'Facebook', 'X/Twitter'];
const mostFrequentTimeOfDayOptions = ['Morning', 'Afternoon', 'Evening', 'Late Night'];
const socialMediaMotivationOptions = ['Socialising', 'Entertainment', 'Source of Information', 'Boredom', 'Shopping'];
const socialMediaDistributionOptions = [
  '0 - 25 % Active Engagement, 75 - 100 % Passive Browsing',
  '25 - 50 % Active Engagement, 50 - 75 % Passive Browsing',
  '50 - 75 % Active Engagement,  25 - 50 % Passive Browsing',
  '75 - 100 % Active Engagement, 0 - 25 % Passive Browsing'
];
const hoursSpentOnSocialMediaOptions = ['0 - 2 hours', '2 - 4 hours', '4 - 8 hours', '8 - 12 + hours'];
const attemptToReduceSocialMediaUsageOptions = ['Yes, successfully', 'Yes, but unsuccessfully', 'No'];
const mostEngagedTypeOfContentOptions = ['Educational', 'Entertainment', 'News', 'Personal Updates', 'Inspirational', 'Shopping / Product Recommendations'];
const preferredMediaFormatConsumptionOptions = ['Text (Articles, Blogs)', 'Images (Photos, Infographics)', 'Short Videos (Reels, TikToks)', 'Long Videos (YouTube, Webinars)', 'Podcasts / Audio'];
const emotionalToneOptions = ['Humourous', 'Inspirational / Motivational', 'Informative / Neutral', 'Dramatic / Emotional', 'Critical / Analytical'];
const contentConsumptionPreferenceOptions = ['Consuming', 'Creating', 'Both Equally'];
const deviceForSocialMediaUsageOptions = ['Smartphone', 'Tablet', 'Laptop / Desktop'];
const socialMediaLimitOptions = ['Lack of Time', 'Awareness of Negative Effects', 'Internet / Data Constraints', 'Disinterest in Available Content', 'External Restrictions (Workplace Rules, Parental Controls)'];
const screenTimeLimitOptions = ['Yes, strictly enforced', 'Yes, but I ignore them', 'No, but I think about setting limits', 'No, and I have no intention to set limits'];
const socialMediaDetoxBreakOptions = ['No, never', 'Yes, less than a week', 'Yes, 1 - 2 weeks', 'Yes, 2 weeks to a month', 'Yes, more than a month'];

// Preprocess items into a map for O(1) lookups
const formItems = form.getItems();
const itemsMap = {};
formItems.forEach(item => {
  itemsMap[item.getTitle()] = item;
});

function getRandomResponse(options) {
  return options[Math.floor(Math.random() * options.length)];
}

function submitFormResponses() {
  const response = form.createResponse();

  // Multiple Choice Questions
  const multipleChoiceMap = {
    "Gender of Respondent": genderOptions,
    "Age of Respondent": AgeOfRespondentOptions,
    "Faculty of Respondent": facultyOfRespondentOptions,
    "Year of Study of Respondent": YearOfStudyOfRespondent,
    "Which platform do you use the most?": mostFrequentPlatformOptions,
    "What time of the day do you most frequently use social media?": mostFrequentTimeOfDayOptions,
    "What motivates your social media usage?": socialMediaMotivationOptions,
    "Which of these distributions best describes your social media usage?": socialMediaDistributionOptions,
    "How many hours do you spend on social media daily?": hoursSpentOnSocialMediaOptions,
    "Have you attempted to reduce your social media usage?": attemptToReduceSocialMediaUsageOptions,
    "What type of content do you engage with most?": mostEngagedTypeOfContentOptions,
    "What type of media format do you prefer consuming?": preferredMediaFormatConsumptionOptions,
    "What kind of emotional tone in content do you engage with the most often?": emotionalToneOptions,
    "Do you prefer consuming or creating content?": contentConsumptionPreferenceOptions,
    "What device do you primarily use to access social media?": deviceForSocialMediaUsageOptions,
    "What limits your social media usage the most?": socialMediaLimitOptions,
    "Do you have screen time limits set on your devices for social media apps?": screenTimeLimitOptions,
    "Have you ever taken a break (detox) from social media? If so, how long?": socialMediaDetoxBreakOptions
  };

  for (const [questionTitle, options] of Object.entries(multipleChoiceMap)) {
    const item = itemsMap[questionTitle];
    if (item && item.getType() === FormApp.ItemType.MULTIPLE_CHOICE) {
      response.withItemResponse(item.asMultipleChoiceItem().createResponse(getRandomResponse(options)));
    }
  }

  const yesNoMap = {
    "Do you wish to reduce your social media screen time?" : yesOrNoOptions
  }

  for (const [questionTitle,options] of Object.entries(yesNoMap)){
    const item = itemsMap[questionTitle];
    if (item && item.getType() === FormApp.ItemType.MULTIPLE_CHOICE) {
        response.withItemResponse(item.asMultipleChoiceItem().createResponse(getRandomResponse(options)))
    }
  }

  // Scale Questions
  const scaleQuestions = [
    "How often do you engage in binge-scrolling sessions?(More than 1 hour without breaks)",
    "How often do you feel the need to scroll through social media without a specific purpose?",
    "Do you feel a compulsion to open social media apps during idle moments (e.g., waiting in line, commuting)?",
    "How often do you check social media notifications as soon as they appear?",
    "How often do you check your social media accounts daily?",
    "Do you use social media as a reward after completing tasks?",
    "How do you feel after prolonged use of social media?",
    "How often do you feel anxious or stressed about missing out on updates?",
    "How often do you feel regretful about the time spent on social media?",
    "Do you feel more socially connected or isolated due to your use of social media?",
    "Do you feel emotionally drained after spending significant time on social media?",
    "How often does your self-esteem fluctuate based on interactions (Likes / Comments) on social media?",
    "Have you ever felt anxious or inadequate after comparing yourself to others on social media?",
    "How often do you feel a sense of accomplishment from using social media?",
    "How frequently do you turn to social media as a way to escape from stress or negative emotions?",
    "Do you find it difficult to focus on tasks after using social media for an extended period?",
    "How often do you feel pressure to maintain your online persona?",
    "Do you agree that social media creates unrealistic expectations for you?",
    "Do you ever feel overwhelmed by the amount of content on your social media newsfeed page?",
    "How likely are you to seek help or advice through social media platforms?",
    "How often do you feel that social media negatively impacts your mental health?",
    "How often do you feel the urge to check social media while performing other tasks?",
    "How difficult is it for you to go a day without using social media?",
    "How often do you feel anxious or restless when you cannot access social media?",
    "How frequently do you use social media during meals or social gatherings?",
    "How often do you lose track of time while using social media?",
    "Do you agree that your social media use is interfering with your daily productivity?",
    "Do you use social media to avoid personal responsibilities or procrastinate?",
    "How frequently do you check social media within the first 10 minutes of waking up?",
    "How often have you neglected responsibilities due to social media?",
    "Do you prioritize social media over face-to-face interactions?",
    "How often do you explore new content topics outside your usual interests?",
    "How important is visual appeal (e.g. Design, Graphics) in the content you consume?",
    "How does the length of the content influence your consumption?",
    "How often do you interact with influencers or celebrities? (Reposting / Liking / Commenting / Sharing with Others)",
    "How likely are you to recommend others limit their social media usage?",
    "How satisfied are you with the time you spend on social media daily?",
  ];

  scaleQuestions.forEach(questionTitle => {
    const item = itemsMap[questionTitle];
     if (!item) {
    console.log(`Item not found for question: ${questionTitle}`);
    }
    if (item && item.getType() === FormApp.ItemType.SCALE) {
      response.withItemResponse(item.asScaleItem().createResponse(randomNumberFor0to5Scale()));
    }
  });

  

  response.submit();
}

for(let i = 0 ; i <= 30 ; i ++){
submitFormResponses()
}
