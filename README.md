## M3-MOVIE-APP – Instructions


## Step 1 - Clone Repo & Install node_modules Locally
(If you're reading this, you have successfully cloned the repo.)

    a. Do NOT create a feature branch yet.
    b. Open the movie-app folder in Terminal
    c. Run npm install

## Step 2 - Create a Feature Branch
(Please NEVER code directly on the Main or Staging branches.)

How to Create a Feature Branch:

    a. Switch to Staging Branch:         git checkout staging
    b. Pull Updates:                     git pull origin staging
    c. Feature Branch Name Example:      mike/feature/add-api-logic
    d. Create Feature Branch:            git checkout -b yourFirstName/feature/name-of-feature

Pushing Your Branch with Upstream:

    a. Add your files:                   git add .                               (all files)
                                         git add index.html css/style.css        (individual files) 

    b. Descriptive Commit Message:       git commit -m "a brief explanation of the changes/updates."
    Note: 
        - When making a PR on GitHub, please add a more in depth description of what was changed/updated

    c. Set Upstream / First Push:        git push -u origin yourFirstName/feature/name-of-feature.
    Note:                           
        - Required ONCE on the FIRST Push of each NEW branch. 
        - It Links your local branch with a new branch on Github           
                                  
    d. Future Pushes:                    git push                                                   
    Note: 
        - After setting the upstream, you can just type the 'git push' command since it's already linked to GitHub

## Step 3 - PULL REQUESTS (PR) on Github

Once you push your feature to GitHub you need to make a PR.

    a. Open GitHub Repo:                 https://github.com/mtq01/m3-movie-app/tree/main
    
    b. Select the Base:                  Change 'main' to 'staging'
    
    c. Assign Reviewer:                  On the right side, click the Gear Icon & Select a Team Member
    
    d. Honor System:                     - No one is allowed to merge their own PR!
                                         - Mention your Pull Request in the Discord Group Chat
                                         - Wait for another member of M3 to review & hit 'Approve & Merge'
    
    e. Post Merge:                       - Whoever approves/denies the merge needs to let everyone know ASAP.
                                         - Send a msg using @name on Discord
                                         - Everyone needs to pull the latest changes to ASAP.
                                         - All members need to confirm they pulled the lastest changes.

[IMPORTANT]: IF you are currently working on your own feature branch when a merge happens, you MUST pull 
those updates into your local feature branch so you don't fall behind. (See Step F)
    
    f. Pulling Latest Changes:           - git checkout staging             (switches to 'staging' branch)
                                         - git pull origin staging          (pulls latest updates to 'staging')
                                         - git checkout your-feature-branch 
                                         - git merge staging                (brings the PR updates into your branch)

[IMPORTANT]: The last 2 git commands in Step F. are required when a PR is merged while you're working on a local feature branch of your own. Otherwise, you will have Git issues when trying to push your feature.

    g. Delete Merged Branches            (OPTIONAL, not reccomended while we're learning, we wont do this)
            Locally                      - git branch -d yourName/feature/feature-name       
            Delete on GitHub             - https://github.com/mtq01/m3-movie-app/branches (click trashcan bside branch)
            Prune 'Ghost' References     - git fetch --prune

            Note: IF we did delete the Branches on GitHub and Locally, we would also need to run the'--prune' command to clean up any 'ghost' references. Our computer still thinks the branch exists until we prune it.
                                         
                                         
Tips on Deleting a Local Branch:

a. What if you need to make changes to that feature later on?
    
    If the Pull Request has NOT been merged:
        - You wouldn't delete the branch in the first place because it has not been saved to GitHub.
        - Stay on your branch, make changes as needed, push the new changes are complete and make a new PR.

    If the Pull Request HAS been merged:
        - Don't try to revive the old branch.
        - Switch to the 'staging' branch locally and pull the latest updates.
        - Create a NEW feature branch for the changes:
                git checkout -b yourName/feature/name-of-feature-v2
        - Make your changes, push to GitHub, and open a new pull request to staging.

    The 'Golden Rule' of Branches:
        - You write your idea on a 'sticky-note'.
        - Stick the note on the board (GitHub PR)
        - Once its merged to 'staging' or 'main', you throw the sticky-note away.

## Step 4 - Merging STAGING to MAIN

We only merge from 'staging' to 'main' when we reach a stable milestone. Don't do this without confirming with the team.

    Stable Milestones: (Examples)
        
        1. Minimum Viable Product:
            - Main Page
            - Search Bar Logic          (user can type a movie and see a result)
            - Nav Component             (no routing)
            - Movie Card Components     (favorites/links do not need to work)
            - Carousel Component
            - Footer Component
            - Social Links              (outbound linking does not need to work)
            - Layout is responsive      (mobile/desktop)
            - Trailer                   (clicking watch now opens the trailer)
            - API Key securely handled via .env
        
        2. Milestone 2:
            - Clicking a movie card passes the ID to the details page.
            - Details Page              (shows details)
            - Back Button               (works without crashing the app)

        3. Milestone 3:
            - Favorites Page            
            - Favorites Logic           (clicking the fav button adds/removes the movie from the favorites page)
            - Memory                    (movies stay on fav page after the page is resfreshed)
            - Navigation                (add routing between all pages & ensure no errors)



