/********* OpenUrl.h Cordova Plugin Header *******/

#import <Cordova/CDV.h>

@interface OpenUrl : CDVPlugin

- (void)openUrl:(CDVInvokedUrlCommand*)command;

@end