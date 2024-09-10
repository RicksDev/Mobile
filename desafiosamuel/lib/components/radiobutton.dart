import 'package:flutter/material.dart';

/// Flutter code sample for [Radio].

class RadioExampleApp extends StatelessWidget {
  const RadioExampleApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(title: const Text('Radio Sample')),
        body: const Center(
          child: RadioExample(),
        ),
      ),
    );
  }
}

enum SingingCharacter { masculino, feminino }

class RadioExample extends StatefulWidget {
  const RadioExample({super.key});

  @override
  State<RadioExample> createState() => _RadioExampleState();
}

class _RadioExampleState extends State<RadioExample> {
  SingingCharacter? _character = SingingCharacter.masculino;

  @override
  Widget build(BuildContext context) {
    return Column(
      children: <Widget>[
        SizedBox(
          width: 200,
          child: ListTile(
            title: const Text('Masculino'),
            leading: Radio<SingingCharacter>(
              value: SingingCharacter.masculino,
              groupValue: _character,
              onChanged: (SingingCharacter? value) {
                setState(() {
                  _character = value;
                });
              },
            ),
          ),
        ),
        SizedBox(
          width: 200,
          child: ListTile(
            title: const Text('Feminino'),
            leading: Radio<SingingCharacter>(
              value: SingingCharacter.feminino,
              groupValue: _character,
              onChanged: (SingingCharacter? value) {
                setState(() {
                  _character = value;
                });
              },
            ),
          ),
        ),
      ],
    );
  }
}
