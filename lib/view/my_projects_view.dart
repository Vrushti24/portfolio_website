import 'package:flutter/material.dart';
import 'package:portfolio_website/modal/projects.dart';
import 'package:portfolio_website/widgets/project_card.dart';

import '../main.dart';

class MyProjectsView extends StatelessWidget {
  final List<Project> projects;

  MyProjectsView({required this.projects});

  @override
  Widget build(BuildContext context) {
    final double screenWidth = MediaQuery.of(context).size.width;
    final bool useRow = screenWidth >= 100;

    int crossAxisCount = useRow ? 5 : 2;

    if (screenWidth >= 1400) {
      crossAxisCount = 5;
    } else if (screenWidth >= 1100) {
      crossAxisCount = 4;
    } else if (screenWidth >= 800) {
      crossAxisCount = 3;
    } else if (screenWidth >= 500) {
      crossAxisCount = 2;
    } else if (screenWidth >= 300) {
      crossAxisCount = 2;
    }

    return Column(
      key: projectsKey,
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        const Text(
          'Projects',
          style: TextStyle(
            color: Colors.white,
            fontSize: 30,
            fontWeight: FontWeight.w500,
          ),
        ),
        SizedBox(
          height: mq.height * 1.2,
          child: Padding(
            padding: const EdgeInsets.all(8.0),
            child: GridView.builder(
              gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                crossAxisCount: crossAxisCount,
              ),
              scrollDirection: Axis.vertical,
              itemCount: projects.length,
              itemBuilder: (context, index) {
                return SizedBox(
                  height: mq.height * 0.4,
                  child: Padding(
                    padding: EdgeInsets.only(
                      top: mq.height * .06,
                      left: mq.width * .02,
                    ),
                    child: ProjectCard(project: projects[index]),
                  ),
                );
              },
            ),
          ),
        ),
      ],
    );
  }
}
