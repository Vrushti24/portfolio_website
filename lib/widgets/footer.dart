import 'package:flutter/material.dart';

import '../main.dart';

footer() {
  return Padding(
    padding: EdgeInsets.only(top: mq.height * .05, bottom: mq.height * .05),
    child: const Center(
      child: Text(
        'Copyright \u00a9 2023 Vrushti Shah',
        style: TextStyle(color: Colors.white54),
      ),
    ),
  );
}
