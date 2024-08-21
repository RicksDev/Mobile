import 'package:flutter/material.dart';

class bannerCard extends StatelessWidget {
  const bannerCard({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 130,
      width: 700,
      decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(30),
          color: const Color.fromARGB(255, 210, 201, 200),
          border: Border.all(
            color: Colors.black,
          )),
      child: Row(
        children: [
          Image.asset("assets/images/Abacaxi.png"),
          SizedBox(
            width: 160,
          ),
          Column(
            children: [
              SizedBox(
                height: 20,
              ),
              Text(
                'Abacaxi',
                style: TextStyle(
                  fontSize: 20,
                ),
              ),
              SizedBox(
                height: 12,
              ),
              Text(
                '1 unidade de Abacaxi',
                style: TextStyle(fontSize: 12),
              ),
              SizedBox(
                height: 15,
              ),
              Row(
                children: [
                  Icon(Icons.remove_circle_outline),
                  SizedBox(
                    width: 12,
                  ),
                  Text('1'),
                  SizedBox(
                    width: 12,
                  ),
                  Icon(Icons.add_circle_outline),
                ],
              )
            ],
          ),
          Spacer(),
          Container(
              height: 120,
              width: 100,
              child: Stack(
                children: [
                  Positioned(
                      top: 2,
                      right: 23,
                      child: IconButton(
                        icon: Icon(Icons.clear),
                        onPressed: () {},
                      )),
                  Positioned(
                      bottom: 8,
                      right: 19,
                      child: Text(
                        '\$4.99',
                        style: TextStyle(fontSize: 18),
                      ))
                ],
              ))
        ],
      ),
    );
  }
}