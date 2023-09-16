import 'package:flutter/material.dart';
import 'package:portfolio_website/modal/blogs.dart';
import 'package:portfolio_website/widgets/blog_card.dart';

import '../main.dart';

class MyBlog extends StatelessWidget {
  final List<Blog> blogs;

  MyBlog({required this.blogs});

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
      key: blogsKey,
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        const Text(
          'Blogs',
          style: TextStyle(
            color: Colors.white,
            fontSize: 30,
            fontWeight: FontWeight.w500,
          ),
        ),
        SizedBox(
          height: mq.height * 1,
          child: Padding(
            padding: const EdgeInsets.all(8.0),
            child: GridView.builder(
              gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                crossAxisCount: crossAxisCount,
              ),
              scrollDirection: Axis.vertical,
              itemCount: blogs.length,
              itemBuilder: (context, index) {
                return SizedBox(
                  height: mq.height * 0.8,
                  child: Padding(
                    padding: EdgeInsets.only(
                      top: mq.height * .06,
                      left: mq.width * .02,
                    ),
                    child: BlogCard(blog: blogs[index]),
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
