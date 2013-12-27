/********* OpenUrl.m Cordova Plugin Implementation *******/

#import "OpenUrl.h"
#import <Cordova/CDV.h>

@implementation OpenUrl

- (void)openUrl:(CDVInvokedUrlCommand*)command
{
    CDVPluginResult* pluginResult = nil;
    NSString *url = [command.arguments objectAtIndex:0];

    if (url != nil && [url length] > 0) {
        [[UIApplication sharedApplication] openURL:[NSURL URLWithString:url]];            
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:url];
    } else {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR];
    }

    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

@end