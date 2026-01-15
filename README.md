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

[IMPORTANT]: When a new PR is merged on GitHub, you need to update your active feature branches. If you're actively working on more than 1 feature you will need to run the 'git merge origin/staging' on each one in order to update it. The 'git fetch --all --prune' only needs to be run once per new PR because it stores a photocopy of the changes in you 'git' folder.
    
    f. Pulling Latest Changes:           - git checkout your/feature/branch (ensure you are on your branch) 
                                         - git fetch --all --prune          (updates your map and cleans out old branches)
                                         - git merge origin/staging         (brings official server code into your local)
    
    Details: 
                                         - [fetch] reaches out to the server and makes a photocopy of all the updates made by the team, without touching your files.

                                         - [--all] tells git to map every branch on the server (even brand new ones)

                                         - [--prune] when a PR is merged the branch is deleted on GitHub, but your computer will still show that 'ghost' branch in your list until we prune it (delete it). If its gone from the server, it gets removed from your local disk & keeps your git branches clean and organized.

                                         - [merge] takes the photocopy and adds it to your feature branch.

                                         - [origin/staging] 'origin' is the name of the server. 'staging' is the specific branch on the server. This merges the official server version & skips your local staging branch (which is safer because your local branch could be out of date or have accidental test code in it)

    Extras (Optional):                             
                                        - Peek a specific file in terminal. Handy if you know which file you want to look at. It will print the content of the file directly in terminal withour changing your current workspace:
                                    
                                        git show origin/name/feature/name-of-feature:path/to/file.css

                                        - Peek what changed. See what was added/removed compared to what you have right now. 'head' is the shortcut for 'where you are right now', '..' means compare against, and 'origin/staging' is the photocopy of the server you downloaded:

                                        git diff HEAD..origin/name/feature/name-of-feature      (shows all code changes)

                                        - Alternative ways to "peek" and the differences.

                                        git diff HEAD..origin/staging --name-only               (shows the file name changes)
                                        git log HEAD..origin/staging                            (shows the list of commits)

                                        - If the changes are too complex to read in terminal, you can open the files in your editor to see how they work (You can view/edity our collaboraters features, but please dont make changes to your team members code without permission):

                                        git checkout origin/name/feature/name-of-feature

   
   




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



