import 'package:flutter/material.dart';
import 'package:portfolio_website/modal/skill.dart';
import 'package:portfolio_website/widgets/skill_card.dart';

import '../main.dart';

class AboutMe extends StatelessWidget {
  final List<Skill> skills;
  const AboutMe({Key? key, required this.skills}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final double screenWidth = MediaQuery.of(context).size.width;
    final bool useRow = screenWidth >= 100;

    int crossAxisCount = useRow ? 7 : 2;

    if (screenWidth >= 1200) {
      crossAxisCount = 8;
    } else if (screenWidth >= 800) {
      crossAxisCount = 5;
    } else if (screenWidth >= 700) {
      crossAxisCount = 4;
    } else if (screenWidth >= 600) {
      crossAxisCount = 3;
    } else if (screenWidth >= 400) {
      crossAxisCount = 3;
    }

    return Padding(
      padding: EdgeInsets.only(
          top: mq.height * 0.3,
          left: mq.width * 0.05,
          right: mq.width * 0.05,
          bottom: mq.height * 0.2),
      child: Container(
        key: aboutKey,
        width: useRow ? mq.width * 3.8 : double.infinity,
        height: useRow ? mq.height * 1.5 : double.infinity,
        decoration: BoxDecoration(
          color: Colors.lightBlue.shade200,
          borderRadius: BorderRadius.circular(10),
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Padding(
              padding: EdgeInsets.only(
                top: useRow ? mq.height * 0.1 : 16,
                left: useRow ? mq.width * 0.1 : 16,
                right: useRow ? mq.width * 0.1 : 16,
              ),
              child: const Center(
                child: Text(
                  'About Me',
                  style: TextStyle(
                    color: Colors.black87,
                    fontSize: 25,
                    fontWeight: FontWeight.w600,
                  ),
                ),
              ),
            ),
            Padding(
              padding: EdgeInsets.only(
                top: useRow ? mq.height * 0.05 : 8,
                left: useRow ? mq.width * 0.03 : 8,
                right: useRow ? mq.width * 0.03 : 8,
              ),
              child: const Center(
                child: Text(
                  'Greetings! I\'m Vrushti Shah, a passionate and driven Information Technology enthusiast with a penchant for tackling complex challenges. My journey in the world of technology has been a dynamic and exhilarating one, fueled by an unwavering love for software engineering. Aspiring to make a meaningful impact in the tech industry, I have honed my skills through hands-on experience, academic excellence, and a relentless pursuit of knowledge. Throughout my academic and professional journey, I\'ve had the privilege of working on exciting projects, collaborating with talented teams, and pushing the boundaries of my skills.\nI thrive on innovation and continuously seek opportunities to learn and grow. My experience spans mobile application development, software design, and hands-on work with various technologies. I have had the privilege of contributing to real-world projects that have enhanced my skills and broadened my perspective on the limitless possibilities of technology.',
                  style: TextStyle(
                    color: Colors.black87,
                    fontSize: 18,
                    fontWeight: FontWeight.w500,
                  ),
                ),
              ),
            ),
            Padding(
              padding: EdgeInsets.only(
                top: useRow ? mq.height * 0.09 : 16,
                left: useRow ? mq.width * 0.1 : 16,
                right: useRow ? mq.width * 0.1 : 16,
              ),
              child: const Center(
                child: Text(
                  'Skills',
                  style: TextStyle(
                    color: Colors.black87,
                    fontSize: 25,
                    fontWeight: FontWeight.w600,
                  ),
                ),
              ),
            ),
            if (useRow)
              Expanded(
                child: GridView.builder(
                  gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                    crossAxisCount: crossAxisCount,
                    mainAxisSpacing: 2,
                  ),
                  scrollDirection: Axis.vertical,
                  itemCount: skills.length,
                  itemBuilder: (context, index) {
                    return Padding(
                      padding: const EdgeInsets.all(8),
                      child: SkillCard(skill: skills[index]),
                    );
                  },
                ),
              ),
          ],
        ),
      ),
    );
  }
}
