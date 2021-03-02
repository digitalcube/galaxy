#!/usr/bin/env bash

# @see https://github.com/nrwl/nx/issues/869#issuecomment-517930043

SHOULD_LINT=$1
shift
SOURCES=$@
DESTINATIONS=""
DELIMITER=""
FIRST=1

set -e

for src in $SOURCES; do
  if [ "${FIRST}" -eq "1" ]; then
    DELIMITER=""
    FIRST=0
  else
    DELIMITER=","
  fi
  DESTINATIONS="$DESTINATIONS$DELIMITER${src}"
done

echo "$DESTINATIONS"
yarn run format:write --files="$DESTINATIONS"

if [ "${SHOULD_LINT}" -eq "1" ]; then
  yarn run affected:lint --fix --maxParallel=1 --parallel=false --files="$DESTINATIONS";
fi

exit;