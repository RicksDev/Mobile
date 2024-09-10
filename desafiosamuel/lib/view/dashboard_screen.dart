import 'package:flutter/material.dart';
import 'package:flutter/services.dart'; // Import necessário para usar o inputFormatter
import 'package:desafiosamuel/components/radiobutton.dart';

// ignore: must_be_immutable
class DashboardScreen extends StatefulWidget {
  DashboardScreen({super.key});

  @override
  _DashboardScreenState createState() => _DashboardScreenState();
}

class _DashboardScreenState extends State<DashboardScreen> {
  TextEditingController nameController = TextEditingController();
  TextEditingController emailController = TextEditingController();
  TextEditingController numberController = TextEditingController();
  TextEditingController adressController = TextEditingController();

  // Lista para armazenar os usuários cadastrados
  List<Map<String, String>> users = [];
  
  // Variável para armazenar o gênero selecionado
  String selectedGender = 'Masculino'; // Default para 'Masculino'

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          const Text('Cadastro'),
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: TextField(
              controller: nameController,
              decoration: const InputDecoration(
                border: OutlineInputBorder(),
                labelText: 'Digite seu nome:',
              ),
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: TextField(
              controller: emailController,
              decoration: const InputDecoration(
                border: OutlineInputBorder(),
                labelText: 'Digite seu e-mail',
              ),
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: TextField(
              keyboardType: TextInputType.number,
              controller: numberController,
              decoration: const InputDecoration(
                border: OutlineInputBorder(),
                labelText: 'Digite seu telefone',
              ),
              // Adicionar inputFormatter para aceitar somente números
              inputFormatters: [
                FilteringTextInputFormatter.digitsOnly, // Permite somente dígitos
              ],
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: TextField(
              controller: adressController,
              decoration: const InputDecoration(
                border: OutlineInputBorder(),
                labelText: 'Digite seu endereço',
              ),
            ),
          ),
          Row(
            children: [
              // Radio buttons para selecionar o gênero
              Radio<String>(
                value: 'Masculino',
                groupValue: selectedGender,
                onChanged: (value) {
                  setState(() {
                    selectedGender = value!;
                  });
                },
              ),
              const Text('Masculino'),
              Radio<String>(
                value: 'Feminino',
                groupValue: selectedGender,
                onChanged: (value) {
                  setState(() {
                    selectedGender = value!;
                  });
                },
              ),
              const Text('Feminino'),
            ],
          ),
          SizedBox(height: 20,),
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              ElevatedButton(
                onPressed: () {
                  String name = nameController.text;
                  String email = emailController.text;
                  String phone = numberController.text;
                  String address = adressController.text;

                  // Adicionar novo usuário à lista
                  users.add({
                    'name': name,
                    'email': email,
                    'phone': phone,
                    'address': address,
                    'gender': selectedGender, // Armazenar o gênero
                  });

                  // Limpar os campos de texto
                  nameController.clear();
                  emailController.clear();
                  numberController.clear();
                  adressController.clear();

                  setState(() {
                    selectedGender = 'Masculino'; // Resetar o gênero para masculino após salvar
                  });
                },
                child: const Text("Salvar"),
              ),
              const SizedBox(width: 16), // Espaçamento entre os botões
              ElevatedButton(
                onPressed: () {
                  // Verificar se há usuários cadastrados
                  if (users.isNotEmpty) {
                    Navigator.push(
                      context,
                      MaterialPageRoute(
                        builder: (context) => SuccessScreen(users: users),
                      ),
                    );
                  } else {
                    // Exibir mensagem se não houver usuários
                    ScaffoldMessenger.of(context).showSnackBar(
                      const SnackBar(
                        content: Text('Não possui nenhum usuário cadastrado'),
                      ),
                    );
                  }
                },
                child: const Text('Usuários'),
              ),
            ],
          ),
        ],
      ),
    );
  }
}

class SuccessScreen extends StatelessWidget {
  final List<Map<String, String>> users;

  SuccessScreen({required this.users});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Usuários Cadastrados"),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Text(
              'Usuários cadastrados:',
              style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
            ),
            const SizedBox(height: 10),
            Expanded(
              child: ListView.builder(
                itemCount: users.length,
                itemBuilder: (context, index) {
                  final user = users[index];
                  // Verificar o gênero para escolher a cor do ícone
                  Color iconColor = user['gender'] == 'Masculino'
                      ? Colors.blueAccent
                      : Colors.pinkAccent;

                  return Padding(
                    padding: const EdgeInsets.only(bottom: 10.0),
                    child: Card(
                      elevation: 4,
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(10),
                      ),
                      child: Padding(
                        padding: const EdgeInsets.all(16.0),
                        child: Row(
                          children: [
                            Icon(
                              Icons.person,
                              size: 50,
                              color: iconColor,
                            ),
                            const SizedBox(width: 16),
                            Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Text(
                                  'Nome: ${user['name']}',
                                  style: TextStyle(
                                    fontSize: 16,
                                    fontWeight: FontWeight.bold,
                                  ),
                                ),
                                Text('E-mail: ${user['email']}'),
                                Text('Telefone: ${user['phone']}'),
                                Text('Endereço: ${user['address']}'),
                              ],
                            ),
                          ],
                        ),
                      ),
                    ),
                  );
                },
              ),
            ),
            ElevatedButton(
              onPressed: () {
                // Voltar para a tela de cadastro
                Navigator.pop(context);
              },
              child: const Text('Voltar'),
            ),
          ],
        ),
      ),
    );
  }
}
