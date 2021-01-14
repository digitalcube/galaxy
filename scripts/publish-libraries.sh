#!/usr/bin/env bash
set -o errexit -o noclobber -o nounset -o pipefail

PARENT_DIR="$PWD"
ROOT_DIR="."
echo "Removing Dist"
rm -rf "${ROOT_DIR:?}/dist"
COMMIT_MESSAGE="$(git log -1 --pretty=format:"%s")"
DRY_RUN=${DRY_RUN:-"False"}

AFFECTED=$(node node_modules/.bin/nx affected:libs --plain --base=origin/demo/publish-github~1)
if [ "$AFFECTED" != "" ]; then
  cd "$PARENT_DIR"
  echo "Copy Environment Files"

  while IFS= read -r -d $' ' lib; do
    echo "Setting version for $lib"
    npm run nx release "$lib"
  done <<<"$AFFECTED " # leave space on end to generate correct output

  # git push origin demo/publish-github
  echo "Push the new tags"
  git push origin demo/publish-github --tags

  while IFS= read -r -d $' ' lib; do
    echo "Building $lib"
    npm run build "$lib" -- --with-deps
    wait
    if [ "$DRY_RUN" == "False" ]; then
      echo "Publishing $lib"
      npm publish "$ROOT_DIR/dist/libs/${lib/-//}" # --access=public
    else
      echo "Dry Run, not publishing $lib"
    fi
    wait
  done <<<"$AFFECTED " # leave space on end to generate correct output
else
  echo "No Libraries to publish"
fi
