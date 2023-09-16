import 'dart:developer';

import 'package:url_launcher/url_launcher.dart';

class UrlLauncher {
  static launchURL(Uri url) async {
    if (await canLaunchUrl(url)) {
      launchUrl(url);
    } else {
      log('error $url');
      throw 'Could not launch $url';
    }
  }
}
