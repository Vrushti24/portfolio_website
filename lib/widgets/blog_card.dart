import 'package:flutter/material.dart';
import 'package:portfolio_website/helper/url_launcher.dart';
import '../modal/blogs.dart';

class BlogCard extends StatefulWidget {
  final Blog blog;

  BlogCard({required this.blog});

  @override
  _BlogCardState createState() => _BlogCardState();
}

class _BlogCardState extends State<BlogCard> with TickerProviderStateMixin {
  bool isHovered = false;
  late AnimationController _controller;
  late Animation<double> _imageSizeAnimation;
  double initialImageSize = 100.0;

  @override
  void initState() {
    super.initState();

    // Initialize the animation controller
    _controller = AnimationController(
      vsync: this,
      duration: const Duration(milliseconds: 1000),
    )..repeat(reverse: true);

    // Create animations for card size and image size

    _imageSizeAnimation = Tween<double>(
      begin: 60.0,
      end: 80.0,
    ).animate(_controller);

    _controller.forward();
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return MouseRegion(
      onEnter: (_) {
        setState(() {
          isHovered = true;
        });
      },
      onExit: (_) {
        setState(() {
          isHovered = false;
        });
      },
      child: GestureDetector(
        onTap: () {
          UrlLauncher.launchURL(Uri.parse(widget.blog.mediumUrl));
        },
        child: Card(
          color: Colors.transparent,
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(10),
          ),
          child: LayoutBuilder(
            builder: (context, constraints) {
              final double cardWidth = constraints.maxWidth;
              double cardHeight = 140.0;

              if (cardWidth <= 200) {
                cardHeight = 180.0;
              }

              final double imageSize = _imageSizeAnimation.value;

              double fontSize = 20.0;
              if (cardWidth <= 200) {
                fontSize = 15.0;
              }

              return Container(
                width: cardWidth,
                height: cardHeight,
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(10),
                  boxShadow: [
                    BoxShadow(
                      color:
                          const Color.fromARGB(255, 76, 112, 243).withOpacity(
                        0.7,
                      ),
                      blurRadius: 5,
                      spreadRadius: 5,
                    ),
                  ],
                ),
                child: Container(
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(10),
                    gradient: LinearGradient(
                      begin: Alignment.topLeft,
                      end: Alignment.bottomRight,
                      colors: isHovered
                          ? [
                              const Color.fromARGB(255, 151, 9, 71),
                              const Color.fromARGB(255, 3, 62, 83),
                            ]
                          : [
                              const Color(0xFF333333),
                              const Color(0xFF11101D),
                            ],
                    ),
                  ),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.stretch,
                    children: [
                      Center(
                        child: Padding(
                          padding: const EdgeInsets.all(8.0),
                          child: Center(
                            child: Text(
                              widget.blog.name,
                              style: TextStyle(
                                fontSize: fontSize,
                                fontWeight: FontWeight.bold,
                                color: Colors.white,
                              ),
                            ),
                          ),
                        ),
                      ),
                      const SizedBox(height: 5),
                      Expanded(
                        child: SingleChildScrollView(
                          child: Padding(
                            padding: const EdgeInsets.all(8.0),
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Text(
                                  'Description :\n${widget.blog.description}',
                                  style: TextStyle(
                                    fontSize: fontSize - 5,
                                    color: Colors.white,
                                    fontWeight: FontWeight.w500,
                                  ),
                                ),
                              ],
                            ),
                          ),
                        ),
                      ),
                      Align(
                        alignment: Alignment.bottomLeft,
                        child: Padding(
                          padding: const EdgeInsets.all(8.0),
                          child: Row(
                            mainAxisSize: MainAxisSize.min,
                            children: [
                              Expanded(
                                child: Container(
                                  constraints:
                                      const BoxConstraints(maxWidth: 150),
                                  child: const Text(
                                    'Check out article on Medium: ',
                                    style: TextStyle(
                                      color: Colors.white,
                                      fontWeight: FontWeight.w600,
                                    ),
                                    overflow: TextOverflow.ellipsis,
                                  ),
                                ),
                              ),
                              CircleAvatar(
                                maxRadius: 15,
                                backgroundColor:
                                    const Color.fromARGB(255, 32, 11, 94),
                                child: CircleAvatar(
                                  maxRadius: 13,
                                  backgroundColor: Colors.white,
                                  child: Image.asset(
                                    'images/social/medium.png',
                                    width: imageSize,
                                    height: imageSize,
                                  ),
                                ),
                              ),
                            ],
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
              );
            },
          ),
        ),
      ),
    );
  }
}
