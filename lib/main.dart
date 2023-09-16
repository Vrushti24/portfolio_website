import 'package:flutter/material.dart';
import 'package:portfolio_website/helper/blog_data_loader.dart';
import 'package:portfolio_website/helper/skill_data_loader.dart';
import 'helper/project_data_loader.dart';
import 'view/home_page.dart';

late Size mq;
ProjectDataLoader projectDataLoader = ProjectDataLoader();
BlogDataLoader blogDataLoader = BlogDataLoader();
SkillDataLoader skillDataLoader = SkillDataLoader();
final GlobalKey homeKey = GlobalKey();
final GlobalKey aboutKey = GlobalKey();
final GlobalKey projectsKey = GlobalKey();
final GlobalKey blogsKey = GlobalKey();
final GlobalKey contactKey = GlobalKey();
void main() async {
  WidgetsFlutterBinding.ensureInitialized();

  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Personal Portfolio',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
        useMaterial3: true,
      ),
      home: const HomePage(),
    );
  }
}
