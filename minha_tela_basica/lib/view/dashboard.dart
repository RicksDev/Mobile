import 'package:flutter/material.dart';
import 'package:minha_tela_basica/widgets/bannerCard.dart';
import 'package:minha_tela_basica/widgets/botaoBaixo.dart';

class Dashboard extends StatelessWidget {
  const Dashboard({super.key, required String title});

  get decoration => null;

  get inputBorder => null;

  @override
  Widget build(BuildContext context) {

    Size size = MediaQuery.of(context).size;

    return Scaffold(
      appBar: AppBar(
        title: Text('Tela do Ricks'),
        centerTitle: true,
      ),
      body: Center(
        child: Column(
          children: [
            Container(
                height: size.height,
                width: size.width,
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
            GestureDetector(
              onTap: () {
                print('Cliquei!!');
              },
              child: bannerCard()),
            SizedBox(
              height: size.height,
            ),
            bannerCard(),
            SizedBox(
              height: size.height,
            ),
            bannerCard(),
            SizedBox(
              height: size.height,
            ),
            bannerCard(),
            SizedBox(
              height: size.height,
            ),
            BotaoBaixo(),
          ],
        ),
      ),
    );
  }
}


