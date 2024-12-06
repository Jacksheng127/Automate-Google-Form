// Description: This script is used to submit responses to a Google Form programmatically.
// Way 1: Select the questions by index

const form = FormApp.openById("1AhyRKiB6xbCejww45ufKWkdie47gtdLpGjyHKcLTU1M");
  
// Define the responses for each question
const genderOptions = ["Male", "Female"];
const AgeOfRespondentOptions = ['19','20','21','22']
const facultyOfRespondentOptions = ['Built Environment', 'Languages & Linguistics', 'Pharmacy', 'Engineering', 'Education', 'Dentistry',' Business & Economics', 'Medicine', 'Science', 'Computer Science & Information Technology','Arts & Social Sciences', 'Creative Arts', 'Law', 'Sport & Exercise Sciences']
const YearOfStudyOfRespondent = ['Year 1','Year 2','Year 3', 'Year 4','Other']
const yesOrNo = ["Yes", "No"];
let randomNumberFor0to5Scale = () => Math.floor(Math.random() * 6);
  // Random integer between 1 and 5
  /*
  Math.random() -> [0,1)
  [0,5) 

  */
const mostFrequentPlatformOptions = ['Instagram','YouTube','TikTok','Facebook','X/Twitter']
const mostFrequentTimeOfDayOptions = ['Morning','Afternoon','Evening','Late Night']
const socialMediaMotivationOptions = ['Socialising','Entertainment','Source of Information','Boredom','Shopping']
const socialMediaDistributionOptions = ['0 - 25 % Active Engagement, 75 - 100 % Passive Browsing','25 - 50 % Active Engagement, 50 - 75 % Passive Browsing','50 - 75 % Active Engagement,  25 - 50 % Passive Browsing', '75 - 100 % Active Engagement, 0 - 25 % Passive Browsing']
const hoursSpentOnSocialMediaOptions = ['0 - 2 hours', '2 - 4 hours', '4 - 8 hours', '8 - 12 + hours']
const attemptToReduceSocialMediaUsageOptions = ['Yes, successfully','Yes, but unsuccessfully','No']
const mostEngagedTypeOfContentOptions = ['Educational','Entertainment','News','Personal Updates','Inspirational','Shopping / Product Recommendations']
const preferredMediaFormatConsumptionOptions = ['Text (Articles, Blogs)','Images (Photos, Infographics)','Short Videos (Reels, TikToks)','Long Videos (YouTube, Webinars)','Podcasts / Audio']
const emotionalToneOptions = ['Humourous','Inspirational / Motivational','Informative / Neutral','Dramatic / Emotional','Critical / Analytical']
const contentConsumptionPreferenceOptions = ['Consuming','Creating','Both Equally']
const deviceForSocialMediaUsageOptions = ['Smartphone','Tablet','Laptop / Desktop']
const socialMediaLimitOptions = ['Lack of Time','Awareness of Negative Effects','Internet / Data Constraints','Disinterest in Available Content','External Restrictions (Workplace Rules, Parental Controls)']
const screenTimeLimitOptions = ['Yes, strictly enforced','Yes, but I ignore them','No, but I think about setting limits','No, and I have no intention to set limits']
const socialMediaDetoxBreakOptions = ['No, never','Yes, less than a week','Yes, 1 - 2 weeks','Yes, 2 weeks to a month','Yes, more than a month']

function submitFormResponses() {
// Replace with your actual Form ID
// Part 1: Select gender
const response = form.createResponse();

// Part 1: Select gender
const genderItem = form.getItems().filter(item => item.getTitle() === "Gender of Respondent")[0];
if (genderItem) {
    response.withItemResponse(genderItem.asMultipleChoiceItem().createResponse(genderOptions[Math.floor(Math.random() * genderOptions.length)]));
}

// Part 2: Select Age of Respondent
const ageItem = form.getItems().filter(item => item.getTitle() === "Age of Respondent")[0];
if (ageItem) {
    response.withItemResponse(ageItem.asMultipleChoiceItem().createResponse(AgeOfRespondentOptions[Math.floor(Math.random() * AgeOfRespondentOptions.length)]));
}

// Part 3: Faculty Of Respondent
const facultyItem = form.getItems().filter(item => item.getTitle() === "Faculty of Respondent")[0];
if (facultyItem) {
  response.withItemResponse(facultyItem.asMultipleChoiceItem().createResponse(facultyOfRespondentOptions[Math.floor(Math.random() * facultyOfRespondentOptions.length)]));
}

// Part 4: Year of Study of Respondent
const yearOfStudyItem = form.getItems().filter(item => item.getTitle() === "Year of Study of Respondent")[0];
if (yearOfStudyItem) {
    response.withItemResponse(yearOfStudyItem.asMultipleChoiceItem().createResponse(YearOfStudyOfRespondent[Math.floor(Math.random() * YearOfStudyOfRespondent.length)]));
}

// Part 5: Number of Hours Spent Item
const numberOfHoursSpentItem = form.getItems().filter(item => item.getTitle() === "How many hours per day do you spend on social media?")[0];
if (numberOfHoursSpentItem) {
    response.withItemResponse(numberOfHoursSpentItem.asMultipleChoiceItem().createResponse(hoursSpentOnSocialMediaOptions[Math.floor(Math.random() * hoursSpentOnSocialMediaOptions.length)]));
}

// Part 6: Most used platform
const platformItem = form.getItems().filter(item => item.getTitle() === "Which platform do you use the most?")[0];
if (platformItem) {
  response.withItemResponse(platformItem.asMultipleChoiceItem().createResponse(mostFrequentPlatformOptions[Math.floor(Math.random() * mostFrequentPlatformOptions.length)]));
}

// Part 7 : Most frequent time of day of social media usage
const timeOfDayItem = form.getItems().filter(item => item.getTitle() === "What time of the day do you most frequently use social media?")[0];
if (timeOfDayItem) {
  response.withItemResponse(timeOfDayItem.asMultipleChoiceItem().createResponse(mostFrequentTimeOfDayOptions[Math.floor(Math.random() * mostFrequentTimeOfDayOptions.length)]));
}

// Part 8 : Social Media Motivation
const motivationItem = form.getItems().filter(item => item.getTitle() === "What motivates your social media usage?")[0];
if (motivationItem) {
  response.withItemResponse(motivationItem.asMultipleChoiceItem().createResponse(socialMediaMotivationOptions[Math.floor(Math.random() * socialMediaMotivationOptions.length)]));
}

  // Part 9 : Social Media Usage Distribution
  const socialMediaUsageDistributionItem = form.getItems().filter(item => item.getTitle() === "Which of these distributions best describes your social media usage?")[0];
  if (socialMediaUsageDistributionItem) {
    response.withItemResponse(socialMediaUsageDistributionItem.asMultipleChoiceItem().createResponse(socialMediaDistributionOptions[Math.floor(Math.random() * socialMediaDistributionOptions.length)]));
  }

  // Part 10 : Attempt to reduce social media usage
  const attemptToReduceSocialMediaUsageItem = form.getItems().filter(item => item.getTitle() === "Have you attempted to reduce your social media usage?")[0];
  if (attemptToReduceSocialMediaUsageItem) {
    response.withItemResponse(attemptToReduceSocialMediaUsageItem.asMultipleChoiceItem().createResponse(attemptToReduceSocialMediaUsageOptions[Math.floor(Math.random() * attemptToReduceSocialMediaUsageOptions.length)]));
  }

  //Part 11 : Engage Type Of Content Item
  const engageTypeOfContentItem = form.getItems().filter(item => item.getTitle() === "What type of content do you engage with most?")[0];
  if (engageTypeOfContentItem) {
    response.withItemResponse(engageTypeOfContentItem.asMultipleChoiceItem().createResponse(mostEngagedTypeOfContentOptions[Math.floor(Math.random() * mostEngagedTypeOfContentOptions.length)]));
  }

  //Part 12 : Engage Type Of Content Item
  const mediaFormatConsumptionPreferenceItem = form.getItems().filter(item => item.getTitle() === "What type of media format do you prefer consuming?")[0];
  if (mediaFormatConsumptionPreferenceItem) {
    response.withItemResponse(mediaFormatConsumptionPreferenceItem.asMultipleChoiceItem().createResponse(preferredMediaFormatConsumptionOptions[Math.floor(Math.random() * preferredMediaFormatConsumptionOptions.length)]));
  }

   //Part 13 : Emotional Tone of Content Engaged The Most
   const emotionalToneOfContentItem = form.getItems().filter(item => item.getTitle() === "What kind of emotional tone in content do you engage with the most often?")[0];
   if (emotionalToneOfContentItem) {
     response.withItemResponse(emotionalToneOfContentItem.asMultipleChoiceItem().createResponse(emotionalToneOptions[Math.floor(Math.random() * emotionalToneOptions.length)]));
   }

    //Part 14 : Content Consumption Preference
    const contentConsumptionPreferencetItem = form.getItems().filter(item => item.getTitle() === "Do you prefer consuming or creating content?")[0];
    if (contentConsumptionPreferencetItem) {
      response.withItemResponse(contentConsumptionPreferencetItem.asMultipleChoiceItem().createResponse(contentConsumptionPreferenceOptions[Math.floor(Math.random() * contentConsumptionPreferenceOptions.length)]));
    }

    //Part 15 : Primary Device for Social Media
    const primaryDeviceForSocialMediaItem = form.getItems().filter(item => item.getTitle() === "What device do you primarily use to access social media?")[0];
    if (primaryDeviceForSocialMediaItem) {
      response.withItemResponse(primaryDeviceForSocialMediaItem.asMultipleChoiceItem().createResponse(deviceForSocialMediaUsageOptions[Math.floor(Math.random() * deviceForSocialMediaUsageOptions.length)]));
    }

     //Part 16 : Limiting Factors of Social Media Usage
     const limitingFactorOfSocialMediaUsageItem = form.getItems().filter(item => item.getTitle() === "What limits your social media usage the most?")[0];
     if (limitingFactorOfSocialMediaUsageItem) {
       response.withItemResponse(limitingFactorOfSocialMediaUsageItem.asMultipleChoiceItem().createResponse(socialMediaLimitOptions[Math.floor(Math.random() * socialMediaLimitOptions.length)]));
     }

      //Part 17 : Screen Time Limits Options
      const screenTimeLimitItem = form.getItems().filter(item => item.getTitle() === "Do you have screen time limits set on your devices for social media apps?")[0];
      if (screenTimeLimitItem) {
        response.withItemResponse(screenTimeLimitItem.asMultipleChoiceItem().createResponse(screenTimeLimitOptions[Math.floor(Math.random() * screenTimeLimitOptions.length)]));
      }
    
       //Part 17 : Social Media Detox Options
      const socialMediaDetoxItem = form.getItems().filter(item => item.getTitle() === "Have you ever taken a break (detox) from social media? If so, how long?")[0];
      if (socialMediaDetoxItem) {
        response.withItemResponse(socialMediaDetoxItem.asMultipleChoiceItem().createResponse(socialMediaDetoxBreakOptions[Math.floor(Math.random() * socialMediaDetoxBreakOptions.length)]));
      }

       //Scales 
       const Item1 = form.getItems().filter(item => item.getTitle() === "How often do you engage in binge-scrolling sessions?(More than 1 hour without breaks)")[0];
       if (Item1) {
           response.withItemResponse(Item1.asScaleItem().createResponse(randomNumberFor0to5Scale()));
       }

       const Item2 = form.getItems().filter(item => item.getTitle() === "How often do you feel the need to scroll through social media without a specific purpose?")[0];
       if (Item2) {
           response.withItemResponse(Item2.asScaleItem().createResponse(randomNumberFor0to5Scale()));
       }

       const Item3 = form.getItems().filter(item => item.getTitle() === "Do you feel a compulsion to open social media apps during idle moments (e.g., waiting in line, commuting)?")[0];
       if (Item3) {
           response.withItemResponse(Item3.asScaleItem().createResponse(randomNumberFor0to5Scale()));
       }

       const Item4 = form.getItems().filter(item => item.getTitle() === "How often do you check social media notifications as soon as they appear?")[0];
       if (Item4) {
           response.withItemResponse(Item4.asScaleItem().createResponse(randomNumberFor0to5Scale()));
       }

       const Item5 = form.getItems().filter(item => item.getTitle() === "How often do you check your social media accounts daily?")[0];
       if (Item5) {
           response.withItemResponse(Item5.asScaleItem().createResponse(randomNumberFor0to5Scale()));
       }

       const Item6 = form.getItems().filter(item => item.getTitle() === "Do you use social media as a reward after completing tasks?")[0];
       if (Item6) {
           response.withItemResponse(Item6.asScaleItem().createResponse(randomNumberFor0to5Scale()));
       }

       const Item7 = form.getItems().filter(item => item.getTitle() === "Do you use social media while multitasking?")[0];
       if (Item7) {
           response.withItemResponse(Item7.asScaleItem().createResponse(randomNumberFor0to5Scale()));
       }

       const Item8 = form.getItems().filter(item => item.getTitle() === "How do you feel after prolonged use of social media?")[0];
       if (Item8) {
           response.withItemResponse(Item8.asScaleItem().createResponse(randomNumberFor0to5Scale()));
       }

       const Item9 = form.getItems().filter(item => item.getTitle() === "How often do you feel anxious or stressed about missing out on updates?")[0];
       if (Item9) {
           response.withItemResponse(Item9.asScaleItem().createResponse(randomNumberFor0to5Scale()));
       }

       const Item10 = form.getItems().filter(item => item.getTitle() === "How often do you feel regretful about the time spent on social media?")[0];
       if (Item10) {
           response.withItemResponse(Item10.asScaleItem().createResponse(randomNumberFor0to5Scale()));
       }

       const Item11 = form.getItems().filter(item => item.getTitle() === "Do you feel more socially connected or isolated due to your use of social media?")[0];
       if (Item11) {
           response.withItemResponse(Item11.asScaleItem().createResponse(randomNumberFor0to5Scale()));
       }

       const Item12 = form.getItems().filter(item => item.getTitle() === "Do you feel emotionally drained after spending significant time on social media?")[0];
       if (Item12) {
           response.withItemResponse(Item12.asScaleItem().createResponse(randomNumberFor0to5Scale()));
       }

       const Item13 = form.getItems().filter(item => item.getTitle() === "How often does your self-esteem fluctuate based on interactions (Likes / Comments) on social media?")[0];
       if (Item13) {
           response.withItemResponse(Item13.asScaleItem().createResponse(randomNumberFor0to5Scale()));
       }

       const Item14 = form.getItems().filter(item => item.getTitle() === "Have you ever felt anxious or inadequate after comparing yourself to others on social media?")[0];
       if (Item14) {
           response.withItemResponse(Item14.asScaleItem().createResponse(randomNumberFor0to5Scale()));
       }

       const Item15 = form.getItems().filter(item => item.getTitle() === "How often do you feel a sense of accomplishment from using social media?")[0];
       if (Item15) {
           response.withItemResponse(Item15.asScaleItem().createResponse(randomNumberFor0to5Scale()));
       }

       const Item16 = form.getItems().filter(item => item.getTitle() === "How frequently do you turn to social media as a way to escape from stress or negative emotions?")[0];
       if (Item16) {
           response.withItemResponse(Item16.asScaleItem().createResponse(randomNumberFor0to5Scale()));
       }

       const Item17 = form.getItems().filter(item => item.getTitle() === "Do you find it difficult to focus on tasks after using social media for an extended period?")[0];
       if (Item17) {
           response.withItemResponse(Item17.asScaleItem().createResponse(randomNumberFor0to5Scale()));
       }

       const Item18 = form.getItems().filter(item => item.getTitle() === "How often do you feel pressure to maintain your online persona?")[0];
       if (Item18) {
           response.withItemResponse(Item18.asScaleItem().createResponse(randomNumberFor0to5Scale()));
       }

       const Item19 = form.getItems().filter(item => item.getTitle() === "Do you feel that social media creates unrealistic expectations for your personal or professional life?")[0];
       if (Item19) {
           response.withItemResponse(Item19.asScaleItem().createResponse(randomNumberFor0to5Scale()));
       }

       const Item20 = form.getItems().filter(item => item.getTitle() === "Do you ever feel overwhelmed by the amount of content on your social media newsfeed page?")[0];
       if (Item20) {
           response.withItemResponse(Item20.asScaleItem().createResponse(randomNumberFor0to5Scale()));
       }

       const Item21 = form.getItems().filter(item => item.getTitle() === "How likely are you to seek help or advice through social media platforms?")[0];
       if (Item21) {
           response.withItemResponse(Item21.asScaleItem().createResponse(randomNumberFor0to5Scale()));
       }

       const Item22 = form.getItems().filter(item => item.getTitle() === "How often do you feel that social media negatively impacts your mental health?")[0];
       if (Item22) {
           response.withItemResponse(Item22.asScaleItem().createResponse(randomNumberFor0to5Scale()));
       }

       const Item23 = form.getItems().filter(item => item.getTitle() === "How often do you feel the urge to check social media while performing other tasks?")[0];
       if (Item23) {
           response.withItemResponse(Item23.asScaleItem().createResponse(randomNumberFor0to5Scale()));
       }

       let Item24 = form.getItems().filter(item => item.getTitle() === "How difficult is it for you to go a day without using social media?")[0];
       if (Item24) {
           response.withItemResponse(Item24.asScaleItem().createResponse(randomNumberFor0to5Scale()));
       }

       Item24 = form.getItems().filter(item => item.getTitle() === "How often do you feel anxious or restless when you cannot access social media?")[0];
       if (Item24) {
           response.withItemResponse(Item24.asScaleItem().createResponse(randomNumberFor0to5Scale()));
       }

       Item24 = form.getItems().filter(item => item.getTitle() === "How frequently do you use social media during meals or social gatherings?")[0];
       if (Item24) {
           response.withItemResponse(Item24.asScaleItem().createResponse(randomNumberFor0to5Scale()));
       }

       Item24 = form.getItems().filter(item => item.getTitle() === "How often do you lose track of time while using social media?")[0];
       if (Item24) {
           response.withItemResponse(Item24.asScaleItem().createResponse(randomNumberFor0to5Scale()));
       }

       Item24 = form.getItems().filter(item => item.getTitle() === "Do you agree that your social media use is interfering with your daily productivity?")[0];
       if (Item24) {
           response.withItemResponse(Item24.asScaleItem().createResponse(randomNumberFor0to5Scale()));
       }

       Item24 = form.getItems().filter(item => item.getTitle() === "Do you use social media to avoid personal responsibilities or procrastinate?")[0];
       if (Item24) {
           response.withItemResponse(Item24.asScaleItem().createResponse(randomNumberFor0to5Scale()));
       }

       Item24 = form.getItems().filter(item => item.getTitle() === "How frequently do you check social media within the first 10 minutes of waking up?")[0];
       if (Item24) {
           response.withItemResponse(Item24.asScaleItem().createResponse(randomNumberFor0to5Scale()));
       }

       Item24 = form.getItems().filter(item => item.getTitle() === "How often do you spend more time on social media than you initially intended?")[0];
       if (Item24) {
           response.withItemResponse(Item24.asScaleItem().createResponse(randomNumberFor0to5Scale()));
       }

       Item24 = form.getItems().filter(item => item.getTitle() === "How often have you neglected responsibilities due to social media?")[0];
       if (Item24) {
           response.withItemResponse(Item24.asScaleItem().createResponse(randomNumberFor0to5Scale()));
       }

       Item24 = form.getItems().filter(item => item.getTitle() === "Do you prioritize social media over face-to-face interactions?")[0];
       if (Item24) {
           response.withItemResponse(Item24.asScaleItem().createResponse(randomNumberFor0to5Scale()));
       }

       Item24 = form.getItems().filter(item => item.getTitle() === "How often do you explore new content topics outside your usual interests?")[0];
       if (Item24) {
           response.withItemResponse(Item24.asScaleItem().createResponse(randomNumberFor0to5Scale()));
       }

       Item24 = form.getItems().filter(item => item.getTitle() === "How important is visual appeal (e.g. Design, Graphics) in the content you consume?")[0];
       if (Item24) {
           response.withItemResponse(Item24.asScaleItem().createResponse(randomNumberFor0to5Scale()));
       }

       Item24 = form.getItems().filter(item => item.getTitle() === "How does the length of the content influence your consumption?")[0];
       if (Item24) {
           response.withItemResponse(Item24.asScaleItem().createResponse(randomNumberFor0to5Scale()));
       }

       Item24 = form.getItems().filter(item => item.getTitle() === "How often do you interact with influencers or celebrities? (Reposting / Liking / Commenting / Sharing with Others)")[0];
       if (Item24) {
           response.withItemResponse(Item24.asScaleItem().createResponse(randomNumberFor0to5Scale()));
       }

       
      Item24 = form.getItems().filter(item => item.getTitle() === "Do you wish to reduce your social media screen time?")[0];
       if (Item24) {
        response.withItemResponse(Item24.asMultipleChoiceItem().createResponse(yesOrNo[Math.floor(Math.random() * yesOrNo.length)]));
       }

       Item24 = form.getItems().filter(item => item.getTitle() === "How likely are you to recommend others limit their social media usage?")[0];
       if (Item24) {
           response.withItemResponse(Item24.asScaleItem().createResponse(randomNumberFor0to5Scale()));
       }

       Item24 = form.getItems().filter(item => item.getTitle() === "How satisfied are you with the time you spend on social media daily?")[0];
       if (Item24) {
           response.withItemResponse(Item24.asScaleItem().createResponse(randomNumberFor0to5Scale()));
       }
// Submit the response
}

for(let i = 0 ; i <= 20 ; i ++){
  submitFormResponses();
}