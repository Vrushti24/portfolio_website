import 'package:portfolio_website/modal/blogs.dart';

class BlogDataLoader {
  List<Blog> parseBlogJson() {
    final jsonData = [
      {
        "id": "1",
        "name": "Article on medium",
        "logo": "images/git.png",
        "description":
            "A article based on how to create animated Login page using Rive animation in flutter.",
        "mediumUrl":
            "https://medium.com/@vrushtishah24/flutter-animated-login-screen-using-rive-animation-54f5431e0c0b"
      },
      {
        "id": "2",
        "name": "Article on medium",
        "logo": "images/git.png",
        "description":
            "A article based on how to create ML modal and integrate it in flutter using Tensorflow lite.",
        "mediumUrl":
            "https://medium.com/@vrushtishah24/flutter-with-tensorflow-lite-model-5ff193068293"
      }
    ];

    return jsonData
        .map((json) => Blog(
              id: int.parse(json['id'] ?? '0'),
              name: json['name'] ?? '',
              imageURL: json['imageURL'] ?? '',
              description: json['description'] ?? '',
              mediumUrl: json['mediumUrl'] ?? '',
            ))
        .toList();
  }
}
