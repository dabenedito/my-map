#import <Foundation/Foundation.h>
#import <React/RCTBridgeDelegate.h>
#import <UIKit/UIKit.h>

#import <Expo/Expo.h>

+ #import <GoogleMaps/GoogleMaps.h>

@implementation AppDelegate

(BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
+  [GMSServices provideAPIKey:@"AIzaSyCDWrxqSp6goT5s2YWrCY1Dux8jCVa-8ps"]; // add this line using the api key obtained from Google Console

@interface AppDelegate : EXAppDelegateWrapper <RCTBridgeDelegate>

@end
