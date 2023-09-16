import 'package:flutter/material.dart';
import '../modal/skill.dart';

class SkillCard extends StatefulWidget {
  final Skill skill;

  SkillCard({Key? key, required this.skill}) : super(key: key);

  @override
  State<SkillCard> createState() => _SkillCardState();
}

class _SkillCardState extends State<SkillCard> with TickerProviderStateMixin {
  bool isHovered = false;
  late AnimationController _controller;
  late Animation<double> _cardSizeAnimation;
  double imageSize = 80.0;
  double fontSize = 18.0;

  @override
  void initState() {
    super.initState();

    // Initialize the animation controller
    _controller = AnimationController(
      vsync: this,
      duration: const Duration(milliseconds: 1000),
    )..repeat(reverse: true);

    // Create animations for card size
    _cardSizeAnimation = Tween<double>(
      begin: 100.0,
      end: 150.0,
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
    return Card(
      elevation: 8,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(10),
      ),
      child: MouseRegion(
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
        child: AnimatedBuilder(
          animation: _controller,
          builder: (context, child) {
            final double cardSize = _cardSizeAnimation.value;

            return LayoutBuilder(
              builder: (context, constraints) {
                final double availableWidth = constraints.maxWidth;

                // Calculate the font size based on the available width
                fontSize = availableWidth < 150
                    ? 10.0
                    : availableWidth < 300
                        ? 12.0
                        : availableWidth < 600
                            ? 14.0
                            : 18.0;

                // Calculate the image size based on the available width
                imageSize = (availableWidth / 3).clamp(50.0, 100.0);

                return Container(
                  width: cardSize,
                  height: cardSize,
                  padding: const EdgeInsets.all(14),
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(10),
                    gradient: LinearGradient(
                      begin: Alignment.topLeft,
                      end: Alignment.bottomRight,
                      colors: isHovered
                          ? [
                              const Color.fromARGB(255, 233, 214, 165),
                              const Color.fromARGB(255, 180, 205, 226),
                            ]
                          : [Colors.white, Colors.blue[50]!],
                    ),
                  ),
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Image.asset(
                        widget.skill.logoUrl,
                        width: imageSize,
                        height: imageSize,
                        fit: BoxFit.contain,
                      ),
                      const SizedBox(height: 10),
                      Text(
                        widget.skill.name,
                        textAlign: TextAlign.center,
                        style: TextStyle(
                          color: Colors.black,
                          fontSize: fontSize,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                    ],
                  ),
                );
              },
            );
          },
        ),
      ),
    );
  }
}
