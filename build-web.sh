#!/usr/bin/env bash

readonly VER="v0.1.0"

function version() {
    echo $VER
}

function Help() {
   # Displays Help
   echo "Builds the web version & prepares it for deployment."
   echo
   echo "Syntax: ./build-web.sh [-h|v|s|m]"
   echo
   echo "Options:"
   echo "   -h, --help     Print command line options."
   echo "   -v             Print software version and exit."
   echo "   -s             Create simple server and serve the build (good for testing)."
   echo "   -m             Move the build to the web repo."
   echo
}

function build() {
    # builds the prod ready PWA
    # echo -e "build"
    expo build:web # npx expo export:web
}

function adjust_subfolder() {
    # creates proper subfolder for serving
    # echo -e "adjust_subfolder"
    mkdir -p web
    mv web-build/* ./web
    mv web web-build
}

function create_server() {
    # creates simplest server for testing purpose
    echo -e "#!/usr/bin/env bash\npython3 -m http.server" > ./web-build/server.sh
    chmod u+x ./web-build/server.sh
}

function start_server() {
    # serves the build right away
    # echo -e "start_server"
    cd web-build && python3 -m http.server
}

# function serve() {
# create_server && start_server;;
# }

function move_to_prod() {
    # mkdir -p ../web/web
    # echo -e "move_to_prod"
    rm -rf ../web/web
    mv web-build/web ../web
}

function create_build() {
    build && adjust_subfolder
}

while getopts ":-help:hvbsm" flag
do
    case $flag in
        h) Help && exit;;
        v) version && exit;;
        b) create_build && exit;;
        s) start_server && exit;;
        m) move_to_prod && exit;;
        \?) # Invalid option
         echo "[Error]: Invalid option"
         exit;;
    esac
done

Help && exit;
