#!/usr/bin/env bash

readonly VER="v0.2.0"

function version() {
    echo $VER
}

function Help() {
   # Displays Help
   echo "Builds the web version & prepares it for deployment."
   echo
   echo "Syntax: ./build-web.sh [-h|v|b|s|p]"
   echo
   echo "Options:"
   echo "   -h,            Print command line options."
   echo "   -v             Print software version and exit."
   echo "   -b             Create build for web target."
   echo "   -s             Serve the build (for testing)."
   echo "   -p             Build->Add->Commit to PROD."
   echo
}

function build() {
    # builds the prod ready PWA
    expo export:web # npx expo export:web
}

function adjust_subfolder() {
    # creates proper subfolder for serving
    mkdir -p web
    mv web-build/* ./web
    mv web web-build
}

function start_server() {
    # serves the build right away
    cd web-build && python3 -m http.server
}

function move_to_prod() {
    cd ../Promin-App-Website
    git rm -r ./web
    cd -
    mv web-build/web ../Promin-App-Website
    rm -rf web-build
}

function create_build() {
    build && adjust_subfolder
}

function prod() {
    build && adjust_subfolder && move_to_prod
    cd ../Promin-App-Website
    git add .
    git commit -m "Updated static for the WEB target"
}

while getopts ":hvbsp" flag
do
    case $flag in
        h) Help && exit;;
        v) version && exit;;
        b) create_build && exit;;
        s) start_server && exit;;
        p) prod && exit;;
        ?) # Invalid option
         echo "[Error]: Invalid option"
         exit 1;;
    esac
done

Help && exit;
