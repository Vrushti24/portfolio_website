import 'package:portfolio_website/modal/skill.dart';

class SkillDataLoader {
  List<Skill> parseSkillJson() {
    final jsonData = [
      {
        "id": "1",
        "name": "Flutter",
        "logoUrl": "images/skill/flutter-logo.png",
      },
      {
        "id": "2",
        "name": "Dart",
        "logoUrl": "images/skill/dart.png",
      },
      {
        "id": "3",
        "name": "Java",
        "logoUrl": "images/skill/java.png",
      },
      {
        "id": "4",
        "name": "C",
        "logoUrl": "images/skill/c.png",
      },
      {
        "id": "5",
        "name": "C++",
        "logoUrl": "images/skill/c++.png",
      },
      {
        "id": "6",
        "name": "HTML",
        "logoUrl": "images/skill/html.png",
      },
      {
        "id": "7",
        "name": "CSS",
        "logoUrl": "images/skill/css.png",
      },
      {
        "id": "8",
        "name": "PostgreSql",
        "logoUrl": "images/skill/postgresql.png",
      },
      {
        "id": "9",
        "name": "Spring",
        "logoUrl": "images/skill/spring.png",
      },
      {
        "id": "10",
        "name": "SpringBoot",
        "logoUrl": "images/skill/springboot.png",
      },
      {
        "id": "11",
        "name": "Git",
        "logoUrl": "images/social/git.png",
      },
      {
        "id": "12",
        "name": "ReactJS",
        "logoUrl": "images/skill/reactjs.png",
      },
      {
        "id": "13",
        "name": "Illustrator",
        "logoUrl": "images/skill/illustrator.png",
      },
    ];

    return jsonData
        .map((json) => Skill(
              id: int.parse(json['id'] ?? '0'),
              name: json['name'] ?? '',
              logoUrl: json['logoUrl'] ?? '',
            ))
        .toList();
  }
}
