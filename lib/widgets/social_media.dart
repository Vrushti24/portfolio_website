import 'package:flutter/material.dart';

SocialMediaLinks({required String asset}) {
  return Padding(
    padding: const EdgeInsets.all(8.0),
    child: Row(
      children: [
        CircleAvatar(
          maxRadius: 22,
          backgroundColor: const Color.fromARGB(255, 109, 104, 196),
          child: CircleAvatar(
            maxRadius: 19,
            backgroundColor: Colors.white,
            child: Image.asset(
              asset,
              width: 28,
              height: 25,
            ),
          ),
        )
      ],
    ),
  );
}
