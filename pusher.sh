#!/bin/bash
PROJECT_NAME=$(basename "$PWD")
MESSAGE="Signed Off By Shovit Dutta"
echo -e "\n\e[35m==============| Processing: $PROJECT_NAME |==============\e[0m"
if [ -f ".gitmodules" ]; then
    echo -e "\e[35m==============| Processing Submodules |==============\e[0m"
    grep -E "^\s*path\s*=" .gitmodules | sed 's/.*path = //' | while read -r sub; do
        if [ -n "$sub" ] && [ -d "$sub" ]; then
            echo -e "\e[36mEntering submodule: $sub\e[0m"
            pushd "$sub" > /dev/null
            if [ -f "gforce.sh" ]; then
                if command -v bash >/dev/null 2>&1; then
                    bash ./gforce.sh
                else
                    echo -e "\e[33mbash not found, skipping gforce.sh\e[0m"
                fi
            else
                git add -A
                if ! git diff --cached --quiet; then
                    git commit -m "$MESSAGE"
                fi
                git push origin main
            fi
            popd > /dev/null
        fi
    done
fi
echo -e "\e[35mProcessing repository...\e[0m"
find . -type f -name "nul" -exec rm -f {} + 2>/dev/null | while read -r file; do
    echo -e "\e[33mRemoving reserved file: $file\e[0m"
done
git add -A
if ! git diff --cached --quiet; then
    git commit -m "$MESSAGE"
fi
echo -e "\e[35mPushing to GitHub...\e[0m"
git push origin main
echo -e "\e[32mDone with $PROJECT_NAME.\n\e[0m"