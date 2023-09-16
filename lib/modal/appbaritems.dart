import 'package:flutter/material.dart';
import 'package:portfolio_website/main.dart';

class AppBarItem {
  final String text;
  final GlobalKey key; // Use GlobalKey for each section
  AppBarItem({required this.text, required this.key});
}

List<AppBarItem> appBarItems = [
  AppBarItem(text: 'Home', key: homeKey),
  AppBarItem(text: 'About', key: aboutKey),
  AppBarItem(text: 'Projects', key: projectsKey),
  AppBarItem(text: 'Blogs', key: blogsKey),
  AppBarItem(text: 'Contact', key: contactKey),
];
