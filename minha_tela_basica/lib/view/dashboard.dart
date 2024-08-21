import 'package:flutter/material.dart';
import 'package:minha_tela_basica/widgets/bannerCard.dart';

class Dashboard extends StatelessWidget {
  const Dashboard({super.key, required String title});

  get decoration => null;

  get inputBorder => null;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Tela do Ricks'),
        centerTitle: true,
      ),
      body: Center(
        child: Column(
          children: [
            Container(
                height: 100,
                width: 500,
                child: TextField(
                  decoration: InputDecoration(
                    enabledBorder: inputBorder,
                    border: inputBorder,
                    focusedBorder: inputBorder,
                    hintText: 'Pesquisar na loja',
                    prefixIcon: const Icon(Icons.search),
                    fillColor: const Color.fromARGB(
                        255, 237, 234, 234), // Para preencher precisa ativar!
                    filled: true,
                  ),
                )),
            bannerCard(),
            SizedBox(
              height: 20,
            ),
            bannerCard(),
            SizedBox(
              height: 20,
            ),
            bannerCard(),
            SizedBox(
              height: 20,
            ),
            bannerCard(),
            SizedBox(
              height: 100,
            ),
            Container(
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
                      Text('TOTAL = \$***')
                    ],
                  ),
                )),
          ],
        ),
      ),
    );
  }
}
