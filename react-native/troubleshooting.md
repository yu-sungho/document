#### reat-native android 실행방법
  1. android-emulator 실행
  2. react-native run-android
    - ANDROID_HOME PATH가 안잡혀 있을경우 fail 발생
    - 기본적으로 Default port : 8081인데 port를 수정한다고 하면
      packager.json 파일의 start를 수정해준다
        : node_modules/react-native/packager/packager.sh --port=8999
    - 실질적으로 android-studio에서 소스를 수정한것을 build 돌리는것은 아닌거 같음.
      react-native run-android 를 실행함으로써 build가 진행되는거 같음.
      
