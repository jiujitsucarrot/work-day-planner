# 05 Work Day Planner

## Your Task

Create a simple calendar application that allows a user to save events for each hour of a typical working day (9am–5pm) by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

You'll need to use the Day.js library to work with date and time. Be sure to read the documentation carefully and concentrate on using Day.js in the browser.

## User Story

```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours of 9am&ndash;5pm
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

## Series of Events

With this challenge the goal was to make a work day planner that stated the current date, hours of operation for work (9am-5pm), and implement and operational save button where the content typed in the box will be saved to local storage. Immediately upon opening the starter code I realized that I was only given the first three hours. I then created the remaining work day hours for the planner. Then the past, present, and future classes needed to be implemented to each time slot. The application as the day progresses needed to reflect through the hours in the day. That is where the currentHour in script.js came into play. This made it so not only will it trigger the css coloring for the given class but it will remove the two unwanted classes and place the chosen class for that given hour. I then put the current date on the planner right underneath the header. To get the time, as well as the date I utilized API's from jQuery and dayjs. The final task was to add a listener for click events (activate the stubborn save button) and proceed to set and get the content placed on the page from local storage. 


## Sources 

In this challenge I utilized a number of different sources to complete the acceptance criteria. I went back and revisited the course lectures from the week before, looked through my notes, Google, YouTube, tutoring session, office hours, reaching out to classmates, colleagues, and TA's. I used dayjs, and jQuery with the starter code that was provided. Pulled API's from https://jqueryui.com/ and https://day.js.org/.

## Screenshots

* ![Alt text](<Screenshot 2023-07-20 at 10.35.38 PM.png>)
* ![Alt text](<Screenshot 2023-07-20 at 10.35.53 PM.png>)

## Final Submission

* https://jiujitsucarrot.github.io/work-day-planner/
* https://github.com/jiujitsucarrot/work-day-planner

## Grading Requirements

> **Note**: If a Challenge assignment submission is marked as “0”, it is considered incomplete and will not count towards your graduation requirements. Examples of incomplete submissions include the following:
>
> * A repository that has no code
>
> * A repository that includes a unique name but nothing else
>
> * A repository that includes only a README file but nothing else
>
> * A repository that only includes starter code

This Challenge is graded based on the following criteria:

## Technical Acceptance Criteria: 40%

* Satisfies all of the preceding acceptance criteria.

## Deployment: 32%

* Application deployed at live URL.

* Application loads with no errors.

* Application GitHub URL submitted.

* GitHub repository that contains application code.

## Application Quality: 15%

* Application user experience is intuitive and easy to navigate.

* Application user interface style is clean and polished.

* Application resembles the mock-up functionality provided in the challenge instructions.

## Repository Quality: 13%

* Repository has a unique name.

* Repository follows best practices for file structure and naming conventions.

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages.

* Repository contains quality readme file with description, scrrenshot, and link to deployed application.

## Review

You are required to submit the following for review:

* The URL of the deployed application.

* The URL of the GitHub repository, with a unique name and a readme describing the project.

---
© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
