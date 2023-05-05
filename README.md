# Setup

1. Create a fork and clone the repo
2. Run `npm install` [npm](https://docs.npmjs.com/cli/install)
3. Run `npm run json-server` [json-server](https://www.npmjs.com/package/json-server)
4. In a separate terminal, Run `npm run dev` (Should have two terminals running, 1 for the json server & 1 for the UI)

## Test Instructions

1. Add functionality and improve code
   - The minimum goal is that the user should be able to view, add, update, and delete contacts when you are done (the async methods to accomplish this are provided already)
   - After completing base functionality, focus on improving the code and/or the UI/UX. It might be nice to make it look better.
   - Use any libraries you think will help you accomplish what you want
   - Clean up any TypeScript errors
2. Update this README file
   - List changes you make and brief explanations of why you made them under "Changes Made"
   - If you don't have time to complete everything you'd like to, list further changes under "Changes Needed"
3. Finally, in a last commit, share your thoughts about the test under "Final Thoughts." What went well? What were the challenges?

## Evaluation Criteria

1. Your thought process
   - Listing your changes and why you made them is just as important as your code. We want to understand how you think about code.
2. Your code
   - Best practices
   - Readability
   - Reliability
3. UI/UX

## Changes Made

```
   -- my notes are not md friendly haha

   -- decided to use tailwind instead of material. the reason for this
      is just because i think although material has a lot of support.. i think
      tailwind does too.

      -- i forgot how much tailwind is not out of the box
         and how you have to make everything into your own component
      
      -- i think it looks really professional though which is 
         one of the reasons i like to use it

      -- it has a ton of support

   -- decided to use supabase as the backend.

      -- i've never used it before today. when i looked at hasura i realized
         it had become abandonded. 

      -- learned a ton and was probably one of the best decisions i made for this project 

      -- i chose this because it was super simple and startup production
         ready very easily. 
      
      -- today my database is super insecure anyone
         who comes to the site can edit it. figured it was ok because this
         is just a demo, but obvoiusly we wouldn't do this in real life

   -- i used vercel to deploy the frontend. It was so simple, i had heard
      about it so i tried it for the first time today and thought it was amazing

   -- there are like 1000 other changes i made today. here are some big ones

      -- i made everything async await because i think it is easier to read 

      -- added .nvmrc for those running local 

      -- put in custom types generated from supabase

      -- i'm pretty proud of my types file it may not be 100 percent 
         there but most of it is good 
      
      -- i got the env variablees working with vite... they are accessed 
         differently locally and in production. i'm excited i was able to 
         figure that because i've done it before 

      -- i killed the menu bar because i didn't have time to figure it 
         out.. i felt other things were more important 

   -- regrets

      -- biggest regret is i didn't get to making the react code look neat
         that really kills me.. i know i can do way better
            
            -- App.tsx needs to be put in like 10 different components

      -- second biggest is that i didn't take a little more time
         and make it so it automatically updates when you refresh it 
         that really bugs me 

      -- small regret ... wish i could have made it secure
         by adding a basic password to supabase and given it to you 
         both 

      -- left in TODOs so you could see different things
         i was thinking about at different times... didn't note everything
      
   -- things i didn't get to / much later things 
 
        [ ] -- folder -- put supabase types and generic types
                in one folder and refactor code
 
        [ ] -- bug -- FE  -- async -- process error in console
 
        [ ] -- supabase -- tighter contraints on keys
 
        [ ] -- fill in rest of database
 
        [ ] -- remove material ui stuff
 
        [ ] -- set up an auth? 
 
        [ ] -- some sort of state management

```
   
## Final Thoughts


```

   -- realizations/reflection 

      -- i like how simple you made it.

      -- i tried to be ok with how open it was.. i know i went a little
         crazy on it. haha 

      -- at the risk of losing a job offer (by showing too much code)... i     figured why not try to show off a bit
         try to do this in prod. If anything i'm glad i used some new tools.
      
      -- i realized how much i didn't know about react and typescript. that was good it helped set me straight in how i view my ability with react.
      makes my rate more negotiable.

      -- there are like a million changes i did but i chose to only 
         write about a few. 

      -- thanks so much for this opportunity to interview!

```
