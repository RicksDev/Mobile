

import 'package:flutter/material.dart';

class BotaoBaixo extends StatelessWidget {
  const BotaoBaixo({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
        height: 60,
        width: 600,
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(20),
          color: Colors.green,
        ),
        child: Padding(
          padding: const EdgeInsets.all(20.0),
          child: Row(
            children: [
              Text(
                'Go to Checkout',
                style: TextStyle(fontSize: 19),
              ),
              Spacer(),
              Container(
                  width: 120,
                  decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(20),
                      color: const Color.fromARGB(255, 3, 41, 5)),
                  child: Text(
                    'TOTAL = \$***',
                    style: TextStyle(color: Colors.white),
                  ))
            ],
          ),
        ));
  }
}