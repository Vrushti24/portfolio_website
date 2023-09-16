import 'dart:convert';
import 'dart:developer';

import 'package:flutter/material.dart';
import 'package:fluttertoast/fluttertoast.dart';
import 'package:portfolio_website/helper/url_launcher.dart';

import '../constants/constants.dart';
import '../main.dart';
import '../widgets/social_media.dart';
import 'package:http/http.dart' as http;

class ContactME extends StatefulWidget {
  const ContactME({super.key});

  @override
  State<ContactME> createState() => _ContactMEState();
}

class _ContactMEState extends State<ContactME> {
  final GlobalKey<FormState> _formKey = GlobalKey<FormState>();
  TextEditingController nameController = TextEditingController();
  TextEditingController emailController = TextEditingController();
  TextEditingController subjectController = TextEditingController();
  TextEditingController messageController = TextEditingController();

  Future SendMail(
      {required String name,
      required String email,
      required String subject,
      required String message}) async {
    log('inside button');
    const service_id = serviceId;
    const template_id = templateId;
    const user_id = userId;
    var emailUrl = Uri.parse(emailUrlSend);

    try {
      var response = await http.post(emailUrl,
          headers: {'Content-Type': 'application/json'},
          body: json.encode({
            'service_id': service_id,
            'template_id': template_id,
            'user_id': user_id,
            'template_params': {
              'name': name,
              'email': email,
              'subject': subject,
              'message': message,
            }
          }));

      if (response.statusCode == 200) {
        // Email sent successfully
        log('Email sent successfully');
        Fluttertoast.showToast(
          msg: 'Message sent successfully',
          toastLength: Toast.LENGTH_SHORT,
          gravity: ToastGravity.BOTTOM,
          backgroundColor: const Color.fromARGB(255, 89, 237, 94),
          textColor: const Color.fromARGB(255, 28, 26, 26),
        );

        nameController.clear();
        emailController.clear();
        subjectController.clear();
        messageController.clear();
      } else {
        // Email sending failed
        log('Failed to send email. Status code: ${response.statusCode}');
        Fluttertoast.showToast(
          msg: 'Failed to send message. Please try again later.',
          toastLength: Toast.LENGTH_SHORT,
          gravity: ToastGravity.BOTTOM,
          backgroundColor: Colors.red,
          textColor: Colors.white,
        );
      }
    } catch (e) {
      log('Error: $e');
      Fluttertoast.showToast(
        msg: 'An error occurred: $e',
        toastLength: Toast.LENGTH_SHORT,
        gravity: ToastGravity.BOTTOM,
        backgroundColor: const Color.fromARGB(255, 157, 16, 6),
        textColor: Colors.white,
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    final mq = MediaQuery.of(context).size;

    final double screenWidth = MediaQuery.of(context).size.width;
    final bool useRow = screenWidth >= 1000;

    return SingleChildScrollView(
      child: Container(
        key: contactKey,
        width: mq.width * 0.9,
        height: mq.height * 1.2,
        decoration: BoxDecoration(
          color: Colors.lightBlue.shade200,
          borderRadius: BorderRadius.circular(10),
        ),
        child: Padding(
          padding: EdgeInsets.symmetric(
            horizontal: useRow ? mq.width * 0.25 : 20.0,
          ),
          child: Form(
            key: _formKey,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                SizedBox(height: mq.height * 0.05),
                const Text(
                  'Contact Me',
                  style: TextStyle(
                    color: Colors.black87,
                    fontSize: 30,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                SizedBox(height: mq.height * 0.05),
                const Text(
                  'Interested to work with me ?',
                  style: TextStyle(
                    color: Colors.black87,
                    fontSize: 20,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                SizedBox(height: mq.height * 0.05),
                TextFormField(
                  controller: nameController,
                  decoration: const InputDecoration(
                    labelText: 'Name',
                    enabledBorder: OutlineInputBorder(
                      borderSide: BorderSide(color: Colors.black),
                    ),
                    focusedBorder: OutlineInputBorder(
                      borderSide: BorderSide(color: Colors.black),
                    ),
                  ),
                  validator: (value) {
                    if (value!.isEmpty) {
                      return 'Please enter your Name';
                    }
                    return null;
                  },
                ),
                SizedBox(height: mq.height * 0.03),
                TextFormField(
                  controller: emailController,
                  decoration: const InputDecoration(
                    labelText: 'Email',
                    enabledBorder: OutlineInputBorder(
                      borderSide: BorderSide(color: Colors.black),
                    ),
                    focusedBorder: OutlineInputBorder(
                      borderSide: BorderSide(color: Colors.black),
                    ),
                  ),
                  keyboardType: TextInputType.emailAddress,
                  validator: (value) {
                    if (value!.isEmpty) {
                      return 'Please enter your email';
                    }
                    // Regular expression for email validation
                    final emailRegExp =
                        RegExp(r'^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$');
                    if (!emailRegExp.hasMatch(value)) {
                      return 'Please enter a valid email address';
                    }
                    return null;
                  },
                ),
                SizedBox(height: mq.height * 0.03),
                TextFormField(
                  controller: subjectController,
                  decoration: const InputDecoration(
                    labelText: 'Subject',
                    enabledBorder: OutlineInputBorder(
                      borderSide: BorderSide(color: Colors.black),
                    ),
                    focusedBorder: OutlineInputBorder(
                      borderSide: BorderSide(color: Colors.black),
                    ),
                  ),
                  validator: (value) {
                    if (value!.isEmpty) {
                      return 'Please enter your Subject';
                    }
                    return null;
                  },
                ),
                SizedBox(height: mq.height * 0.03),
                TextFormField(
                  controller: messageController,
                  maxLines: 4,
                  decoration: const InputDecoration(
                    labelText: 'Message',
                    enabledBorder: OutlineInputBorder(
                      borderSide: BorderSide(color: Colors.black),
                    ),
                    focusedBorder: OutlineInputBorder(
                      borderSide: BorderSide(color: Colors.black),
                    ),
                  ),
                  validator: (value) {
                    if (value!.isEmpty) {
                      return 'Please enter your message';
                    }
                    return null;
                  },
                ),
                SizedBox(height: mq.height * 0.05),
                ClipRRect(
                  borderRadius: BorderRadius.circular(20),
                  child: SizedBox(
                    width: mq.width * 0.2,
                    height: mq.height * 0.05,
                    child: MaterialButton(
                      color: Colors.deepPurple,
                      onPressed: () {
                        log('clicked');
                        if (_formKey.currentState!.validate()) {
                          SendMail(
                            name: nameController.text,
                            email: emailController.text,
                            subject: subjectController.text,
                            message: messageController.text,
                          );
                        }
                      },
                      child: const FittedBox(
                        fit: BoxFit.scaleDown,
                        child: Text(
                          'Send Message',
                          style: TextStyle(color: Colors.white),
                        ),
                      ),
                    ),
                  ),
                ),
                Padding(
                  padding: EdgeInsets.only(
                    top: mq.height * 0.02,
                  ),
                  child: const Text(
                    '-- OR --',
                    style: TextStyle(
                        color: Colors.black,
                        fontSize: 18,
                        fontWeight: FontWeight.w500),
                  ),
                ),
                SingleChildScrollView(
                  scrollDirection: Axis.horizontal,
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      InkWell(
                        onTap: () {
                          UrlLauncher.launchURL(Uri.parse(linkedln));
                        },
                        splashColor: BgColor,
                        child: SocialMediaLinks(asset: 'images/social/in.png'),
                      ),
                      InkWell(
                        onTap: () {
                          UrlLauncher.launchURL(Uri.parse(github));
                        },
                        splashColor: BgColor,
                        child: SocialMediaLinks(asset: 'images/social/git.png'),
                      ),
                      InkWell(
                        onTap: () {
                          UrlLauncher.launchURL(Uri.parse(mail));
                        },
                        splashColor: BgColor,
                        child:
                            SocialMediaLinks(asset: 'images/social/mail.png'),
                      )
                    ],
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
