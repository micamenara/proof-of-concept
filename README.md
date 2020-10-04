# Sinapsis Technical PoC

## Intro:

Inside each folder you'll find a README file containing the instructions for the missions.
Each mission is structured as follows:
  - There is a goal (AKA: *what* you're building)
  - There are a set of requirements (AKA: constraints on *how* you build it)
  - There are a set grading guidelines. This is how we'll evaluate the PoC

## Instructions:

1. Fork this repo!
2. Pick one mission from the root folder and solve it
3. Complete as many missions as you want!
4. Send us your repo url to `jobs at sinapsis.co`

## What's next?

We'll contact you after reviewing your submission. Be ready for a show and tell describing your solution.

# **Have Fun! :-)**

# PoC: Thumbnail Generator UI

## Goal
Build a simple UI for a thumbnail generator.

## Requirements
- The UI let's you upload files through AJAX
- You should mock the required endpoints (or solve and integrate with: `thumbnail-generator-api`)
- It should preview the image that is going to be processed
- It should give the users the urls of the new thumbnails and preview them

## Grading Guidelines

### MVP (40 points)
- Every requirement is met
- The solution runs on our enviroment
- Tech Stack: **Angular v6** or **React v16**
- Any ENV specific value should be configurable and documented
- Everything should work after following a simple README (ideally: npm install; npm start)
- The code should be clear and easy to read / debug
- It's responsive and works well with phones and tablets

### Nice moves (5 points each)
- It leverages some design framework (Material UI / Ant / Blueprint)
- It includes transitions, loaders, progress status
- It includes drag-and-drop functionality + visual cues to help the user
- It's Dockerized for local development / testing
- It includes some kind of testing (unit tests, integration tests, etc) with at least 70% coverage
- Includes a simple login (recommended: Auth0)

### Wait, WHAT?! (10 points each)
- It works also with the device camera
- It include a croping area / resize helper
- It uses Redux extensively


