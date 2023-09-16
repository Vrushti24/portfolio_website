import 'package:flutter/material.dart';
import 'package:portfolio_website/constants/constants.dart';
import 'package:portfolio_website/modal/blogs.dart';
import 'package:portfolio_website/modal/projects.dart';
import 'package:portfolio_website/modal/skill.dart';
import 'package:portfolio_website/view/about_me.dart';
import 'package:portfolio_website/view/contact_me.dart';
import 'package:portfolio_website/view/into.dart';
import 'package:portfolio_website/view/my_projects_view.dart';
import 'package:portfolio_website/widgets/appbar.dart';
import 'package:portfolio_website/widgets/footer.dart';

import '../main.dart';
import 'blog_page.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  final ScrollController scrollController = ScrollController();
  late List<Project> projects;
  late List<Blog> blog;
  late List<Skill> skill;

  @override
  void initState() {
    super.initState();
    projects = projectDataLoader.parseJson();
    blog = blogDataLoader.parseBlogJson();
    skill = skillDataLoader.parseSkillJson();
    // Parse the JSON data
  }

  @override
  void dispose() {
    scrollController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    mq = MediaQuery.of(context).size;

    return Scaffold(
      backgroundColor: const Color.fromARGB(255, 4, 30, 51),
      appBar: MyAppBar(
        scrollController: scrollController,
      ),
      body: Container(
        decoration: const BoxDecoration(
          gradient: BgGradient,
        ),
        child: SingleChildScrollView(
          controller: scrollController,
          scrollDirection: Axis.vertical,
          child: Column(children: [
            intro(context),
            AboutMe(skills: skill),
            MyProjectsView(
              projects: projects,
            ),
            MyBlog(
              blogs: blog,
            ),
            const ContactME(),
            footer(),
          ]),
        ),
      ),
    );
  }
}
