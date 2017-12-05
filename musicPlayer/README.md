In order to run this project, you'll need to download the `react-native-audio-streaming` module to your node_modules folder.

To clone the project: 

`$ git clone git@github.com:melissajwen/kxscapp.git`

To download the module on iOS, execute the following command in terminal:

`$ cd musicPlayer`

`$ npm install react-native-audio-streaming --save`

`$ pod install`

Then open up `ios/musicPlayer.xcodeproj` in Xcode:

1. In the project navigator (left side of the screen), right click `Libraries` -> `add files to musicPlayer`

   Select `node_modules/react-native-audio-streaming/ios/ReactNativeAudioStreaming.xcodeproj`

   Select `node_modules/react-native-audio-streaming/ios/Pods/Pods.xcodeproj`

2. In the project navigator, select the project and navigate to the `Build Phases` tab

   Under the header `Link Binary With Libraries`, add `libReactNativeAudioStreaming.a` and `libStreamingKit.a`

3. Navigate to the `Build Settings` tab 

   Under the header `Header Search Paths`, add `musicPlayer/node_modules/react-native-audio-streaming/ios`

4. Open up the project's `Info.plist` file 

   Add a new `key`, and from the drop down menu select `Required background modes`

   `Type` should be left as `Array`

   Expand the row. Change `Item 0` to `String` and select `App plays audio or streams audio/video using AirPlay` as its value

5. Run the project using command-R.
