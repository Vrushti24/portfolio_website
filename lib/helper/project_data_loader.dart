import '../modal/projects.dart';

class ProjectDataLoader {
  List<Project> parseJson() {
    final jsonData = [
      {
        "id": "1",
        "name": "Chat-app",
        "logo": "images/git.png",
        "description":
            "A messaging application built with flutter and firebase .",
        "github": "https://github.com/Vrushti24/chatapp"
      },
      {
        "id": "2",
        "name": "Netflix_clone",
        "logo": "images/git.png",
        "description":
            "Netflix-Clone application has login functionality(animation using rive) and when we click on movie it shows details of the movie using IMDB movie API.",
        "github": "https://github.com/Vrushti24/Clone-Netflix"
      },
      {
        "id": "3",
        "name": "flutter-Countdown-Timer",
        "logo": "images/git.png",
        "description":
            " Created a count-down timer list which can contain multiple timers in it with their own states.",
        "github": "https://github.com/Vrushti24/flutter_countdown_timer"
      },
      {
        "id": "4",
        "name": "Scancer",
        "logo": "images/git.png",
        "description":
            "An ML based application which scans the certificates and converts data into excel sheet based on entity present.",
        "github": "https://github.com/Vrushti24/Scancer"
      },
      {
        "id": "5",
        "name": "CoviFind",
        "logo": "images/git.png",
        "description":
            "This Flutter application that detects covid by scanning X-ray / CT scan image. It also shows stats of covid cases in different countries and different states using APIs.",
        "github": "https://github.com/Vrushti24/covifind"
      },
      {
        "id": "6",
        "name": "Pneumonia-Diagnosis",
        "logo": "images/git.png",
        "description":
            "It a flutter applicaton in which we have used tensorflow lite for integration and used teachable machine and data sets from kaggle to make ML model.",
        "github":
            "https://github.com/Vrushti24/Pneumonia_Diagonasis-Aprotech-SheHacksDTU"
      },
      {
        "id": "7",
        "name": "Tic-Tac-Toe game",
        "logo": "images/git.png",
        "description": "A Flutter based two player game Tic-tac-toe.",
        "github": "https://github.com/Vrushti24/Tic-Tac-Toe-game"
      },
      {
        "id": "8",
        "name": "Dictionary-Application",
        "logo": "images/git.png",
        "description":
            "A simple flutter application which allows you to search meaning of specific word. ",
        "github": "https://github.com/Vrushti24/MyDictionary-App"
      }
    ];

    return jsonData
        .map((json) => Project(
              id: int.parse(json['id'] ?? '0'),
              name: json['name'] ?? '',
              logoUrl: json['logo'] ?? '',
              description: json['description'] ?? '',
              githubUrl: json['github'] ?? '',
            ))
        .toList();
  }
}
