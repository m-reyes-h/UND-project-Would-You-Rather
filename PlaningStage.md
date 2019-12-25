# Planing Stage

## Step 1 - Identify Each View

Determine look and functionality of each view in the app.

## View for the Login page

![](./resources/Login-View.png "Login")

- Is located at (/).
- The user could select a character from the list of existing users.

## View for the Home Page

![](./resources/Home-View.png "Home")

- Is located at (/home)
- Shows answered and unanswered polls sorted from most recently added at the top, to oldest at the bottom.
- The user can alternate between viewing answered and unanswered polls.
- The user can navigate to **Leaderboard**, can make a **New Question**
- Each question will show:
  - The author
  - The text of the question
  - A link to the details of the poll (**Poll Question**)

## View for the Poll Question

![](<./resources/Poll-Question-View.png> "Poll Question")

- Is located at (questions/:question_id)
- Shows a individual question
- Each poll question will show
  - The author
  - The two options

## View for the Poll Result

![](<./resources/Poll-Result-View.png> "Poll result")

- Is locatee at (questions/:question_id)
- Shows the answered poll result
- Each poll result will show
  - The text of the option
  - The number of people who voted for that option
  - The percent of people who voted ofr that option
  - The option selected by the loged in user should by clearly marked

## View for the New Poll

![](<./resources/New-Poll-View.png> "New Poll")

- Is located at (/add)
- Has a form for creating a poll with two options question

## View for the Leaderboard

![](./resources/Leaderboard-View.png "Leaderboard")

- Is located at (/leaderboard)
- Shows the score of the leading competitors
- Each entry on the leaderboard will show
  - The user name and picture
  - The number of questions the user asked
  - The number of questions the user answered

## View Recap

So these are the 6 views we need in our app:

1. Login
2. Home
3. Poll Question
4. Poll Result
5. New Poll
6. Leaderboard


## Step 2 - Break Each View Into a Hierechay of Components

- Draw boxes around every component
- Arrange components into hierarchy

> Components should be a main part of the app following the single responsibility principle and be reusable.

## Components for the Login View

![](./resources/Login-Component.png "Login")

This view is broken down into the following React Components

* **APP** - the overall container for the project
  * **Login** - display the list of characters accounts

## Components for the Home View

![](./resources/Home-Component.png "Home")

This view is broken down into the following React Components

* **APP** - the overall container for the project
  * **Nav** - display the navigation
  * **Poll List** - display a list of unanswered and answered polls
    * **Poll** - display the content for a single poll

## Components for the Poll Question View

![](./resources/Poll-Question-Component.png "Poll Question")

This view is broken down into the following React Components

* **APP** - the overall container for the project
  * **Nav** - display the navigation
  * **Poll Question** - display the poll two questions

## Components for the Poll Result View

![](./resources/Poll-Result-Component.png "Poll Result")

This view is broken down into the following React Components

* **APP** - the overall container for the project
  * **Nav** - display the navigation
  * **Poll Result** - display both poll question with # of votes and percentage

## Components for the New Poll View

![](./resources/New-Poll-Component.png "New Poll")

This view is broken down into the following React Components

* **APP** - the overall container for the project
  * **Nav** - display the navigation
  * **New Poll** - display form for submit new poll

## Components for the Leaderboard View

![](./resources/Leaderboard-Component.png "Leaderboard")

This view is broken down into the following React Components

* **APP** - the overall container for the project
  * **Nav** - display the navigation
  * **Leaderboard List** - display a list of top three users
    * **Leaderboard Card** - display a single leaderboard stats