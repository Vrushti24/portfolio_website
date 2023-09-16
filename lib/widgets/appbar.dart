import 'package:flutter/material.dart';
import 'package:portfolio_website/main.dart';
import '../constants/constants.dart';
import '../modal/appbaritems.dart';

class MyAppBar extends StatefulWidget implements PreferredSizeWidget {
  final ScrollController scrollController;

  MyAppBar({required this.scrollController});

  @override
  Size get preferredSize => const Size.fromHeight(kToolbarHeight);

  @override
  _MyAppBarState createState() => _MyAppBarState();
}

class _MyAppBarState extends State<MyAppBar> {
  int selectedIndex = -1; // Initialize to -1 for no selection

  void navigateToSection(GlobalKey key, int index) {
    // Example: Scroll to a specific section based on the index
    final RenderBox? renderBox =
        key.currentContext?.findRenderObject() as RenderBox?;

    if (renderBox != null) {
      final position = renderBox.localToGlobal(Offset.zero).dy;

      final currentScrollOffset = widget.scrollController.offset;
      final targetPosition = position + currentScrollOffset;

      widget.scrollController.animateTo(
        targetPosition,
        duration: const Duration(milliseconds: 500),
        curve: Curves.easeInOut,
      );
    }

    setState(() {
      selectedIndex = index;
    });
  }

  void clearSelection() {
    setState(() {
      selectedIndex = -1;
    });
  }

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(
      builder: (context, constraints) {
        final screenWidth = constraints.maxWidth;

        bool useFont = screenWidth < 700;
        double fontSize = useFont ? 12.0 : 15.0;
        double horizontalPadding = useFont ? 10.0 : 20.0;

        return AppBar(
          titleSpacing: 2,
          elevation: 2,
          flexibleSpace: Container(
            height: kToolbarHeight,
            decoration: const BoxDecoration(
              gradient: BgGradient,
            ),
            child: Padding(
              padding: EdgeInsets.symmetric(horizontal: horizontalPadding),
              child: Align(
                alignment: Alignment.center,
                child: Row(
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    Align(
                      alignment: Alignment.centerLeft,
                      child: Padding(
                        padding: EdgeInsets.only(
                          left: mq.width * .001,
                        ),
                        child: const Text(
                          'My Portfolio',
                          style: TextStyle(
                            color: Colors.white,
                            fontWeight: FontWeight.w600,
                          ),
                        ),
                      ),
                    ),
                    const Spacer(),
                    for (var i = 0; i < appBarItems.length; i++)
                      MouseRegion(
                        onEnter: (_) {
                          setState(() {
                            selectedIndex = i;
                          });
                        },
                        onExit: (_) {
                          setState(() {
                            selectedIndex = -1;
                          });
                        },
                        child: GestureDetector(
                          onTap: () {
                            navigateToSection(appBarItems[i].key, i);
                            clearSelection(); // Clear selection after tapping
                          },
                          child: Container(
                            padding: EdgeInsets.symmetric(
                              horizontal: horizontalPadding,
                              vertical: 7.0,
                            ),
                            decoration: BoxDecoration(
                              color: selectedIndex == i
                                  ? Colors.lightBlue.shade200
                                  : const Color.fromARGB(0, 137, 176, 248),
                              borderRadius: BorderRadius.circular(20),
                            ),
                            child: Text(
                              appBarItems[i].text,
                              style: TextStyle(
                                color: selectedIndex == i
                                    ? Colors.black87
                                    : Colors.white,
                                fontSize: fontSize,
                              ),
                            ),
                          ),
                        ),
                      ),
                  ],
                ),
              ),
            ),
          ),
        );
      },
    );
  }
}
