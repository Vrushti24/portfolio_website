import 'package:flutter/material.dart';
import 'package:portfolio_website/constants/constants.dart';
import 'package:portfolio_website/helper/url_launcher.dart';
import 'package:portfolio_website/widgets/social_media.dart';

import '../main.dart';

Widget intro(BuildContext context) {
  return LayoutBuilder(
    key: homeKey,
    builder: (BuildContext context, BoxConstraints constraints) {
      final bool isDesktop = constraints.maxWidth >= 715;

      return isDesktop ? _buildRowLayout(context) : _buildColumnLayout(context);
    },
  );
}

Widget _buildRowLayout(BuildContext context) {
  final double screenWidth = mq.width;
  // Calculate font size and icon size based on screen width
  double fontSize = screenWidth >= 1200 ? 15 : 9;
  double iconSize = screenWidth >= 1200 ? 15 : 9;
  return Padding(
    padding: EdgeInsets.only(
      top: mq.height * 0.18,
      bottom: mq.height * .3,
    ),
    child: Row(
      crossAxisAlignment: CrossAxisAlignment.start,
      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
      children: [
        Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Padding(
              padding: EdgeInsets.only(top: mq.height * .04),
              child: const Text(
                'Welcome to my Portfolio,',
                style: TextStyle(color: Colors.white, fontSize: 20),
              ),
            ),
            const SizedBox(
              height: 10,
            ),
            const Text(
              'Vrushti Shah',
              style: TextStyle(
                  color: Colors.white,
                  fontSize: 26,
                  fontWeight: FontWeight.w600),
            ),
            const SizedBox(
              height: 10,
            ),
            const Text(
              'An Aspiring Software Developer',
              style: TextStyle(color: Colors.white, fontSize: 18),
            ),
            const SizedBox(
              height: 20,
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                InkWell(
                  onTap: () {
                    UrlLauncher.launchURL(Uri.parse(linkedln));
                  },
                  splashColor: BgColor,
                  child: SocialMediaLinks(asset: 'images/social/in.png'),
                ),
                InkWell(
                  onTap: () {
                    UrlLauncher.launchURL(Uri.parse(github));
                  },
                  splashColor: BgColor,
                  child: SocialMediaLinks(asset: 'images/social/git.png'),
                ),
                InkWell(
                  onTap: () {
                    UrlLauncher.launchURL(Uri.parse(mail));
                  },
                  splashColor: BgColor,
                  child: SocialMediaLinks(asset: 'images/social/mail.png'),
                )
              ],
            ),
            Padding(
              padding: EdgeInsets.only(
                top: mq.height * 0.03,
                right: mq.width * 0.02,
              ),
              child: ClipRRect(
                borderRadius: BorderRadius.circular(20),
                child: SizedBox(
                  width: mq.width * .12,
                  height: mq.height * .05,
                  child: MaterialButton(
                    color: Colors.deepPurple,
                    onPressed: () {
                      UrlLauncher.launchURL(Uri.parse(
                          'https://drive.google.com/file/d/1zEf540nw8b4os8ybfNNaFfeopPifdnZG/view?usp=sharing'));
                    },
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                      children: [
                        Text(
                          'Download CV',
                          style: TextStyle(
                              color: Colors.white, fontSize: fontSize),
                        ),
                        Icon(
                          Icons.download,
                          color: Colors.white,
                          size: iconSize,
                        )
                      ],
                    ),
                  ),
                ),
              ),
            ),
          ],
        ),
        const SizedBox(width: 20),
        Stack(
          children: [
            Container(
              width: 300,
              height: 300,
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(
                  160,
                ),
                boxShadow: [
                  BoxShadow(
                    color: const Color.fromARGB(255, 72, 108, 236)
                        .withOpacity(0.7),
                    blurRadius: 30,
                    spreadRadius: 15,
                  ),
                ],
              ),
            ),
            ClipRRect(
              borderRadius: BorderRadius.circular(160),
              child: Image.asset(
                'images/logo/p1.png',
                width: 300,
                colorBlendMode: BlendMode.overlay,
              ),
            ),
          ],
        ),
      ],
    ),
  );
}

Widget _buildColumnLayout(BuildContext context) {
  return Column(
    crossAxisAlignment: CrossAxisAlignment.center,
    children: [
      Padding(
        padding: EdgeInsets.only(top: mq.height * .03),
        child: const Text(
          'Welcome to my Portfolio,',
          style: TextStyle(color: Colors.white, fontSize: 18),
        ),
      ),
      const SizedBox(
        height: 10,
      ),
      const Text(
        'Vrushti Shah',
        style: TextStyle(
            color: Colors.white, fontSize: 24, fontWeight: FontWeight.w600),
      ),
      const SizedBox(
        height: 10,
      ),
      const Text(
        'An Aspiring Software Developer',
        style: TextStyle(color: Colors.white, fontSize: 14),
      ),
      const SizedBox(
        height: 40,
      ),
      Stack(
        children: [
          Container(
            width: 200,
            height: 200,
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(
                160,
              ),
              boxShadow: [
                BoxShadow(
                  color:
                      const Color.fromARGB(255, 72, 108, 236).withOpacity(0.7),
                  blurRadius: 20,
                  spreadRadius: 10,
                ),
              ],
            ),
          ),
          ClipRRect(
            borderRadius: BorderRadius.circular(160),
            child: Image.asset(
              'images/logo/p1.png',
              width: 200,
              colorBlendMode: BlendMode.overlay,
            ),
          ),
        ],
      ),
      const SizedBox(
        height: 30,
      ),
      Row(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          InkWell(
            onTap: () {
              UrlLauncher.launchURL(Uri.parse(
                  'https://www.linkedin.com/in/vrushti-shah-3203141b2/'));
            },
            splashColor: BgColor,
            child: SocialMediaLinks(asset: 'images/social/in.png'),
          ),
          InkWell(
            onTap: () {
              UrlLauncher.launchURL(Uri.parse('https://github.com/Vrushti24'));
            },
            splashColor: BgColor,
            child: SocialMediaLinks(asset: 'images/social/git.png'),
          ),
          InkWell(
            onTap: () {
              UrlLauncher.launchURL(
                  Uri.parse('mailto:vrushtishah24@gmail.com'));
            },
            splashColor: BgColor,
            child: SocialMediaLinks(asset: 'images/social/mail.png'),
          )
        ],
      ),
      Padding(
        padding: EdgeInsets.only(
          top: mq.height * 0.03,
          right: mq.width * 0.02,
        ),
        child: ClipRRect(
          borderRadius: BorderRadius.circular(20),
          child: SizedBox(
            width: mq.width * .25,
            height: mq.height * .05,
            child: MaterialButton(
              color: Colors.deepPurple,
              onPressed: () {
                UrlLauncher.launchURL(Uri.parse(
                    'https://drive.google.com/file/d/1zEf540nw8b4os8ybfNNaFfeopPifdnZG/view?usp=sharing'));
              },
              child: const Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text(
                    'Download CV',
                    style: TextStyle(color: Colors.white, fontSize: 10),
                  ),
                  Icon(
                    Icons.download,
                    color: Colors.white,
                    size: 10,
                  )
                ],
              ),
            ),
          ),
        ),
      )
    ],
  );
}
